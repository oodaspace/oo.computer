const { app, BrowserView, BrowserWindow,ipcMain } = require('electron');
const log = require("electron-log");
const { autoUpdater } = require("electron-updater");
const path = require('path'); // used to reference preload.js in electron setup

const DHT = require('@hyperswarm/dht')
const node = new DHT()
const keyPair = DHT.keyPair()
let Hypercore = require('hypercore')
let Hyperbee = require('hyperbee')

const bigInt = require("big-integer");

// init global vars for hyperBees
let IdeaValueTreeBee 
let signalChainBee
let MediaBee
let ContentTypeBee

const userDataPath = app.getPath('userData');

let signalChainStore = userDataPath + '/signalChains'
let ideaTreeStore = userDataPath + '/ideaTree'
let mediaStore = userDataPath + '/media'
let contentTypeStore = userDataPath + '/contentTypes'
let keyStore = userDataPath + '/keyStore'
let hashIndexedSignals = userDataPath + '/hashIndexedSignals'

const pause =  sec => new Promise(r => setTimeout(r, 1000 * sec))

console.log('userDataPath',userDataPath)

//*************************************************************
// Initialise hypercores and hyperbees:
let SignalChainCore = new Hypercore(signalChainStore)
SignalChainCore.ready(()=>{
  signalChainBee = new Hyperbee(SignalChainCore,{
    keyEncoding: 'utf-8',
    valueEncoding: 'binary'
  })
  
})
let hashIndexedSignalCore = new Hypercore(hashIndexedSignals)
SignalChainCore.ready(()=>{
  hashIndexedSignalBee = new Hyperbee(hashIndexedSignalCore,{
    keyEncoding: 'utf-8',
    valueEncoding: 'binary'
  })
})
let IdeaTreeCore = new Hypercore(ideaTreeStore)
IdeaTreeCore.ready(()=>{
  IdeaValueTreeBee = new Hyperbee(IdeaTreeCore,{
    keyEncoding: 'utf-8',
    valueEncoding: 'binary'
  })
})
let MediaCore = new Hypercore(mediaStore)
MediaCore.ready(()=>{
  MediaBee = new Hyperbee(MediaCore,{
    keyEncoding: 'utf-8',
    valueEncoding: 'binary'
  })
})
let ContentTypeCore = new Hypercore(contentTypeStore)
ContentTypeCore.ready(()=>{
  ContentTypeBee = new Hyperbee(ContentTypeCore,{
    keyEncoding: 'utf-8',
    valueEncoding: 'binary'
  })
})
//*************************************************************



// track which keys have been announced on the DHT in announcedKeys Array
let announcedKeys = []
//Announce, on hyperswarm-dht, a key (this will be used to transfer oo.computer signals between nodes)
async function announceSignalChain(key){
  if (!(announcedKeys.includes(key))){
        console.log('announcing key',key)
        let bufkey = Buffer.from(key,'hex')
        let announcestream = node.announce(bufkey,keyPair)
        for await (const res of announcestream) {
            // this is needed to flush/initialise:
            res.peers.forEach(peer => {
                // console.log(' ********** got peer from announce',peer.publicKey)
            })
        }
        announcedKeys.push(key)
  }
}


// define a hyperswarm-DHT based server. 
let server = node.createServer(keyPair)
server.on('connection', async function (noiseSocket) {
    console.log('server got connection :-)')
    console.log('Remote, local, init public keys', noiseSocket.remotePublicKey, noiseSocket.publicKey)
    let key
    let SignalChain
    let seq
    let i
    let valueSignals
    let discardSignals
    let claimSignals
    noiseSocket.on('data',async (d)=>{
                console.log('node got msg',d.toString())
                let msg = JSON.parse(d.toString())
                console.log('node got msg',msg.id,SignalChainCore.key.toString('hex'),msg.key)
                // This is a simple messaging protocol for passing oo.computer signals between nodes:
                //    RequestSignalChain: This is a request for a signal chain with a give public Key. The node responds by sending the node all associated signals.
                //    RequestMedia: this is a request for  media (e.g. video, audio etc) associated with an idea (256 word). The node responds with the data if it has it. 
                switch (msg.id) {
                    case 'RequestSignalChain':
                        key = msg.key
                        SignalChain = signalChainBee.sub(key)
                        seq = await SignalChain.get('seq')
                        seq = seq ? Number(seq) : seq = 1
                        i = 1
                        valueSignals = SignalChain.sub('VALUE')
                        discardSignals = SignalChain.sub('DISCARD')
                        claimSignals = SignalChain.sub('CLAIM')

                        for await (let signal of valueSignals.createReadStream()){
                          console.log('sending signal',JSON.parse(signal.value.toString()).IDEA)
                          if (!noiseSocket.write(`{"id" : "Signal", "seq" : ${i}, "signal" : ${JSON.stringify(signal.value.toString())}}`)){
                            await new Promise(r => noiseSocket.once('drain'),r)
                          }
                        }
                    break;
                    case 'RequestSignalsInContexts':
                        key = msg.key
                        SignalChain = signalChainBee.sub(key)
                        seq = await SignalChain.get('seq')
                        seq = seq ? Number(seq) : seq = 1
                        i = 1
                        valueSignals = SignalChain.sub('VALUE')
                        discardSignals = SignalChain.sub('DISCARD')
                        for await (let signal of valueSignals.createReadStream()){
                          if (signal.CONTEXT == msg.context){
                              console.log('sending signal',JSON.parse(signal.value.toString()).IDEA)
                              if (!noiseSocket.write(`{"id" : "Signal", "seq" : ${i}, "signal" : ${JSON.stringify(signal.value.toString())}}`)){
                                await new Promise(r => noiseSocket.once('drain'),r)
                              }
                          }
                        }
                    break;
                    case 'RequestMedia':
                    console.log('got media request')
                      media = await MediaBee.get(msg.idea)
                      contenttype = await ContentTypeBee.get(msg.idea)
                      if (media && contenttype){
                              if (!noiseSocket.write(`{"id" : "Media", "idea":"${msg.idea}", "media" : "${media.value.toString()}", "contenttype" : "${contenttype.value.toString()}"}`)){
                                await new Promise(r => noiseSocket.once('drain'),r)
                              }
                      }
                      else {
                            if (!noiseSocket.write(`{"id" : "Media", "idea":"${msg.idea}", "media" : "none", "contenttype" : "none"}`)){
                                await new Promise(r => noiseSocket.once('drain'),r)
                            }
                      }
                      break;
                    default:
                }
    })
    noiseSocket.on('error',(e)=>{
                    console.log('Server socket error',e)
    })
})
//announce the users signal chain on the hyperswarm DHT when DHT server is running.
server.on('listening', async function () {
    await pause(1) // allow time for signalChainBee to be set...
    await signalChainBee.ready()
    let key = SignalChainCore.key
    announceSignalChain(key)
})
server.listen(keyPair)

// track nodes
let nodesarray = []
// attempt to look up a signal chain for give key on the hyperswarm DHT.
async function lookupSignalChain(key){
    let lookupstream = node.lookup(Buffer.from(key,'hex'))
    let SignalChain = signalChainBee.sub(String('0x' + SignalChainCore.key.toString('hex')))
    console.log('looking up',key.toString('hex'))
    for await (const res of lookupstream) {
      // iterate the list of peers that have announced the key
      res.peers.forEach(peer => {
           //console.log(' ********** got peer from lookup',peer.publicKey)
          if (!(nodesarray.includes(peer.publicKey.toString('hex')))) {
              console.log(' got new peer',peer,peer.publicKey == keyPair.publicKey)
              nodesarray.push(peer.publicKey.toString('hex'));
                  let skt = node.connect(peer.publicKey)
                  //process.stdin.pipe(skt).pipe(process.stdout)
                  console.log('writing request',`${'0x' + key.toString('hex')}`)
                  // request the signal chain.
                  skt.write(`{"id" : "RequestSignalChain","startSeq" : 0,"key" : "${'0x' + key.toString('hex')}"}`)//, "endSeq" : ${1}
                  skt.on('data',async (d)=>{
                    console.log('node2 got msg',d.toString())
                    let msg = JSON.parse(d.toString())
                    let signal
                    let seq
                    
                    let signalTypeIndex
                    let wordIndex
                    let result
                    let signaller
                    let check
                    let got
                    // 'GotSignalChain': received when the remote peer confirms it has the signal chain
                    // Signal : received when the remote peer is sending a signal. This node reacts by storing it in the local signal chain and idea-value-tree if the idea represents a media file, the node sends a request to the remote peer to send it.
                    // Media : received when the remote peer sends a media file...
                    switch (msg.id) {
                        case 'GotSignalChain':
                            if (msg.seq > latestSeq[key.toString('hex')]){
                                skt.write(`{"id" : "RequestSignalChain","startSeq" : 0, "key" : "${'0x' + key.toString('hex')}"}`)
                            }
                        break;
                        case 'Signal':
                            signal = JSON.parse(msg.signal)
                            len = await SignalChain.get('seq')
                            len = len ? Number(len) : len = 0
                            signaller = signal.SIGNALLER
                            console.log('got value signal from peer',signal.SIGNALTYPE) 
                            signalTypeIndex = SignalChain.sub(String(signal.SIGNALTYPE))
                            got = await gotSignal(signal.SIGNALHASH)
                            console.log('got??', got,signal.IDEA)
                            if (!(got)) {
                              await putSignal(signal)
                              switch (signal.SIGNALTYPE) {
                                                case 'VALUE':
                                                    //wordIndex = await signalTypeIndex.sub(signal.CONTEXT)
                                                    signalTypeIndex = SignalChain.sub('0x' + key.toString('hex'))
                                                    await signalTypeIndex.put(String(signal.CONTEXT), JSON.stringify(signal))
                                                    BuildIdeaValueTree(String('0x' + SignalChainCore.key.toString('hex')),signal)
                                                    // check if media
                                                    console.log('isMedia',signal.IDEA.slice(2,8) == '4d4544')
                                                    if (signal.IDEA.slice(2,8) == '4d4544'){
                                                          // send get media message if so.
                                                          console.log('sending media request',signal.IDEA)
                                                          skt.write(`{"id" : "RequestMedia", "idea" : "${signal.IDEA}"}`)
                                                          console.log('sending media request')
                                                    }
                                                break;
                                                case 'DISCARD':
                                                    wordIndex = await signalTypeIndex.sub(signal.CONTEXT)
                                                    check = await wordIndex.get(String(seq))
                                                    if (!check){
                                                      result = await wordIndex.put(String(seq),d)
                                                      seq++
                                                      if (seq > len) {
                                                        await SignalChain.put('seq',String(seq))
                                                      }  
                                                      BuildIdeaValueTree(String('0x' + SignalChainCore.key.toString('hex')),signal)
                                                    }
                                                break;
                                                default:
                                                    check = await signalTypeIndex.get(String(seq))
                                                    if (!check){
                                                      result = await signalTypeIndex.put(String(seq),d)
                                                      seq++
                                                      if (seq > len) {
                                                        await SignalChain.put('seq',String(seq))
                                                      }  
                                                    }
                                            }
                                          
                            }//end of if got signal

                            
                        break;
                        case 'Media':
                              //console.log('got media!',msg)
                              if (!(msg.media == 'none')){
                                 //
                                 console.log('got media2!',msg)
                                 await MediaBee.put(msg.idea,msg.media)
                                 await ContentTypeBee.put(msg.idea,msg.contenttype)
                              }
                        break;
                        default:
                    }
                  
                  })
                  skt.on('error',(e)=>{
                    console.log('socket error',e)
                    console.log('re trying')
                    lookupSignalChain(key)
                  })
                //use node.create server to match above
          }
      })
  }
}

async function gotSignal(signalhash) {
   console.log('got signal? ', signalhash,true)
  let check = await hashIndexedSignalBee.get(signalhash)
  if (check) return true //check hash
    console.log('got signal? ', signalhash,false)
  return false
}

async function putSignal(signal) {
  console.log('putting signal ', String(signal.SIGNALHASH),signal)
  await hashIndexedSignalBee.put(String(signal.SIGNALHASH),JSON.stringify(signal))
  return true
}


/*********************************************************************************************************/
// This section is concerned with setup of the electron app
let win // for browser window

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";

log.info("App starting...");

function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send('console_message', text);
}

// func to create window and load index html into it.
function createWindow () {
  win = new BrowserWindow({
    fullscreen: false,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')

    }
  })
  win.loadFile('index.html');
}

//check for update
autoUpdater.on("checking-for-update", () => {
  sendStatusToWindow({
    event: "checking-for-update"
  });
});

// hand update available (note the user notification is done automatically in autoUpdater)
autoUpdater.on("update-available", info => {
  sendStatusToWindow({
    event: "update-available"
  });
});

autoUpdater.on("update-not-available", info => {
  sendStatusToWindow({
    event: "update-not-available"
  });
});

autoUpdater.on("error", err => {
  sendStatusToWindow({
    event: "error",
    error: err
  });
});

autoUpdater.on("download-progress", progressObj => {
  sendStatusToWindow({
    event: "download-progress",
    progress: progressObj
  });
});

autoUpdater.on("update-downloaded", info => {
  sendStatusToWindow({
    event: "update-downloaded"
  });
});

// when electron ready, create window load html, check for update every minute
app.whenReady().then(async () => {
  createWindow()
  setInterval(function() {
    let a = autoUpdater.checkForUpdatesAndNotify();
    sendStatusToWindow(JSON.stringify(a))
  }, 60000);

  app.on('activate', () => {
    // if no window created above for some reason (shouldn't happen), then create window
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }  
  })
})

// call quit app func when window closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

/*********************************************************************************************************/


/*********************************************************************************************************/
// This section handles messages from the renderer/browser process front-end

// instruct node to lookup a key on the DHT and get signals
let lookedUpFilterers = []
ipcMain.on('lookup',async (e,d)=>{
  if (!(lookedUpFilterers.includes(d[1]))){
    console.log('looking up',lookedUpFilterers,d[1])
    let key = Buffer.from(d[1].slice(2),'hex') 
    lookupSignalChain(key)
    lookedUpFilterers.push(d[1])
    win.webContents.send('lookup_response.'+String(d[0]),d[1]);
  }
})

// instruct the storage of a media file under a given key
ipcMain.on('media:add',async (e,d)=>{
    console.log('putting media',d[1][1],d[1][0],d[1][2])
    //let media = Buffer.from(d[1][1],'base64')
    //console.log('putting media2',media)
  await MediaBee.put(d[1][0],d[1][1]) //await new Promise(r => drive.writeFile(String(d[1][1]), String(d[1][2]),(e)=>{if (e) {r(false)} else {r(true)}}))
  await ContentTypeBee.put(d[1][0],d[1][2])
  //to do verify hash/word construction

  win.webContents.send('media:add_response.'+String(d[0]),true);
  console.log('content added to media bee',true)
})

// get a media file for a given key
ipcMain.on('media:get',async (e,d)=>{
  let media = await mediaGet(d[1][0])
  win.webContents.send('media:get_response.'+String(d[0]),media)//uint8ArrayToString(data));
})

async function mediaGet(idea){
  let data  = await MediaBee.get(idea) 
  let contenttype = await ContentTypeBee.get(idea)
  if (data) data = data.value.toString()
  if(contenttype) contenttype = contenttype.value.toString()
  return [data,contenttype]
}


//********************************************************

// get the main public key id associated with the user
ipcMain.on('getMainKey',async (e,d)=>{
  console.log('ipcMain getMainKey')
  let result = SignalChainCore.key.toString('hex')
  console.log('ipcMain getMainKey',result,IdeaTreeCore.key.toString('hex'))
  win.webContents.send('getMainKey_response.'+String(d[0]),result);
})

// get an oo's information associated with a given context and signaller, from the idea-value-tree
ipcMain.on('IdeaValueTree:get',async (e,d)=>{
  let signaller 
  if (d[1][0] == 'default') {signaller = '0x' + SignalChainCore.key.toString('hex')}
  else { signaller = d[1][0]}
  let word = d[1][1]
  let result = await IdeaValueTreeBee.get(word) 
  if (result) result = result.value.toString()
 // console.log('IdeaValueTree:get',signaller,word)
  win.webContents.send('IdeaValueTree:get_response.'+String(d[0]),result);
})

// check if the user has sent an INIT signal yet, returns true if so
ipcMain.on('SignalChain:isInit',async (e,d)=>{
  await signalChainBee.ready()
  let SignalChain = signalChainBee.sub('0x' + String(SignalChainCore.key.toString('hex')))
  let INIT = await SignalChain.get('INIT')
  let result = true
  console.log('init signal?',d[0],INIT)
  if (INIT) {
    win.webContents.send('SignalChain:isInit_response.'+String(d[0]),true);
  }
  else {
    win.webContents.send('SignalChain:isInit_response.'+String(d[0]),false);
  }
})

// put a signal in the signal chain
ipcMain.on('SignalChain:put',async (e,d)=>{
  await signalChainBee.ready()
  let SignalChain = signalChainBee.sub(String('0x' + SignalChainCore.key.toString('hex')))
      //d[1][1] SIGNAL TYPE
      //d[1][2] signal (utf text)
      //d[1][3] additional word (signal dependent, e.g. context if VALUE/DISCARD, word if CLAIM or TRANSFER)
      console.log(d)
      let signal = JSON.parse(d[1])
      console.log('signal.SIGNALTYPE',signal.SIGNALTYPE,'0x' + SignalChainCore.key.toString('hex'))
      
      let finalIndex
      let seqIndex
      let result
      let wordIndex
      await SignalChain.ready()
      //console.log('SignalChain',SignalChain.get)
      let seq = await SignalChain.get('seq') 
      if (!seq) 
        {seq = 1}
      else {
       seq = Number(seq.value)       
      }
      console.log('seq',SignalChainCore.length,seq,signal.SIGNALTYPE)
      signal.SIGNALNO = seq
      //seq++
      //await SignalChain.put('seq',String(seq))
      let signalTypeIndex = SignalChain.sub(String(signal.SIGNALTYPE))
      switch (signal.SIGNALTYPE) {
                        case 'INIT':
                            seq++
                            await SignalChain.put('INIT',JSON.stringify(signal))
                            await SignalChain.put('seq',String(seq))
                        break;
                        case 'VALUE':
                            result = await signalTypeIndex.put(String(signal.CONTEXT), JSON.stringify(signal))
                            seq++
                            await SignalChain.put('seq',String(seq))
                            BuildIdeaValueTree('0x' + SignalChainCore.key.toString('hex'),signal)
                        break;
                        case 'DISCARD':
                            result = await signalTypeIndex.put(String(signal.CONTEXT), JSON.stringify(signal))
                            seq++
                            await SignalChain.put('seq',String(seq))
                             console.log('DISCARD signal added to signal chain')
                            BuildIdeaValueTree('0x' + SignalChainCore.key.toString('hex'),signal)
                        break;
                        default:
                            result = await signalTypeIndex.put(String(seq),JSON.stringify(signal))
                            seq++
                            await SignalChain.put('seq',String(seq))
                    }
      win.webContents.send('SignalChain:put_response.'+String(d[0]),result);
})

// checks if a siganller has give him/herself a name. (Value signalled a string in the 'name' context)
ipcMain.on('Name:get',async (e,d)=>{
      let result
      let nameObj = await IdeaValueTreeBee.get('0x7c7c7c000000000000000000000000000000000000000000000000006e616d65')    //hexifyString('name')  
     //console.log('in name get', d)  
      if (nameObj){
        nameObj = JSON.parse(nameObj.value.toString())
        if (Object.keys(nameObj.signallers).includes(d[1][0])){
          result = nameObj.signallers[d[1][0]].rankedList[0]
        }
        else {
          result = d[1][0]
        }
      }
       else {
          result = d[1][0]
        }     
      win.webContents.send('Name:get_response.'+String(d[0]),result);
})


// Build IdeaValueTree for a key and a signal,:
async function BuildIdeaValueTree(key,signal) {
    console.log('key?',key,String(SignalChainCore.key.toString('hex')))
    let SignalChain = signalChainBee.sub(key)
    let contexts = SignalChain.sub('VALUE')
    if (signal.SIGNALTYPE == "VALUE"){
                    let seq = signal.SIGNALNO
                    let valueSignal = signal //JSON.parse(valueSignalObj.value)//JSON.parse(dict)
                    let contextEntry = await IdeaValueTreeBee.get(valueSignal.CONTEXT);
                    console.log('adding signal to value tree', valueSignal.IDEA,valueSignal.SIGNALTYPE)
                    if (!contextEntry){
                      //add new context entry
                       //word is not already in value tree, so insert it
                            let wordObj = {}
                            wordObj.parent = valueSignal.PARENT
                            wordObj.distance = valueSignal.DISTANCE
                            wordObj.children = [valueSignal.PROSPECTIVECONTEXT]
                            wordObj.initiator = valueSignal.CONTEXTINITIATOR
                            wordObj.isDiscarded = false
                            wordObj.isSignaller = false
                            wordObj.isFilter = false
                            wordObj.signallers = {}
                            wordObj.signallers[key] = {}
                            wordObj.signallers[key].rankedList = [valueSignal.PROSPECTIVECONTEXT]
                            wordObj.signallers[key].totalsObj = {}
                            wordObj.signallers[key].totalsObj[valueSignal.PROSPECTIVECONTEXT] = Number(valueSignal.AMOUNT)
                            wordObj.signallers[key].propsObj = {}
                            wordObj.signallers[key].propsObj[valueSignal.PROSPECTIVECONTEXT] = 1
                            wordObj.signallers[key].total = valueSignal.AMOUNT
                            wordObj.signallers[key].seqs = [seq]
                            wordObj = JSON.stringify(wordObj)

                            await IdeaValueTreeBee.put(valueSignal.CONTEXT, wordObj)
                    }
                    else {
                      // amend existing record:
                      let wordObj = JSON.parse(contextEntry.value)
                      console.log('adding signal', key)
                      if (!(wordObj.children.includes(valueSignal.PROSPECTIVECONTEXT))){ wordObj.children.push(valueSignal.PROSPECTIVECONTEXT) }
                            if (!(Object.keys(wordObj.signallers).includes(key))){
                              console.log('adding signal wordObj2', wordObj.signallers,key)
                                wordObj.signallers[key] = {}
                                wordObj.signallers[key].rankedList = [valueSignal.PROSPECTIVECONTEXT]
                                wordObj.signallers[key].totalsObj = {}
                                wordObj.signallers[key].total = valueSignal.AMOUNT
                                wordObj.signallers[key].seqs = [seq]
                                wordObj.signallers[key].totalsObj[valueSignal.PROSPECTIVECONTEXT] = Number(valueSignal.AMOUNT)
                                wordObj.signallers[key].propsObj[valueSignal.PROSPECTIVECONTEXT] = 1
                                
                            }
                            else {
                              if (!(Object.keys(wordObj.signallers[key].totalsObj).includes(valueSignal.PROSPECTIVECONTEXT))){
                                  wordObj.signallers[key].totalsObj[valueSignal.PROSPECTIVECONTEXT] = Number(valueSignal.AMOUNT)
                              }
                              else {
                                wordObj.signallers[key].totalsObj[valueSignal.PROSPECTIVECONTEXT] += Number(valueSignal.AMOUNT)
                              }
                              wordObj.signallers[key].total += Number(valueSignal.AMOUNT)
                            }
                            for (let w in wordObj.signallers[key].totalsObj){
                              wordObj.signallers[key].propsObj[w] = wordObj.signallers[key].totalsObj[w]/wordObj.signallers[key].total
                            }
                            if (!(wordObj.signallers[key].seqs.includes(seq))){
                              wordObj.signallers[key].seqs.push(seq)
                            }
                            wordObj = JSON.stringify(wordObj)

                           // console.log('Putting CONTEXT2',valueSignal, wordObj)
                            await IdeaValueTreeBee.put(valueSignal.CONTEXT, wordObj)
                    }
                    let ideaEntry = await IdeaValueTreeBee.get(valueSignal.IDEA);
                    if (!ideaEntry){
                      //add new idea entry:
                            let wordObj = {}
                            wordObj.parent = "0x0000000000000000000000000000000000000000000000000000000000000000"
                            wordObj.distance = 0
                            wordObj.children = []
                            wordObj.initiator = valueSignal.IDEAINITIATOR
                            wordObj.isDiscarded = false
                            wordObj.isSignaller = false
                            wordObj.isFilter = false
                            wordObj.signallers = {}
                            wordObj.signallers[key] = {}
                            wordObj.signallers[key].rankedList = []
                            wordObj.signallers[key].totalsObj = {}
                            wordObj.signallers[key].propsObj = {}
                            wordObj.signallers[key].total = 0
                            wordObj.signallers[key].seqs = []
                            wordObj.media = {}
                            wordObj = JSON.stringify(wordObj)
                            await IdeaValueTreeBee.put(valueSignal.IDEA, wordObj)
                    } 
                    else {
                      //no need to update record if already exists
                    }
                    let prospectiveEntry = await IdeaValueTreeBee.get(valueSignal.CONTEXT);
                    if (!prospectiveEntry){
                      //add new prospective entry
                            let wordObj = {}
                            wordObj.parent = valueSignal.CONTEXT
                            wordObj.distance = valueSignal.DISTANCE 
                            wordObj.children = []
                            wordObj.initiator = valueSignal.PROSPECTIVECONTEXTINITIATOR
                            wordObj.isDiscarded = false
                            wordObj.isSignaller = false
                            wordObj.isFilter = false
                            wordObj.signallers = {}
                            wordObj.signallers[key] = {}
                            wordObj.signallers[key].rankedList = []
                            wordObj.signallers[key].totalsObj = {}
                            wordObj.signallers[key].propsObj = {}
                            wordObj.signallers[key].total = 0
                            wordObj.media = {}
                            wordObj = JSON.stringify(wordObj)
                            await IdeaValueTreeBee.put(valueSignal.PROSPECTIVECONTEXT, wordObj)
                    } 
           // }
    //}
  }
  else if (signal.SIGNALTYPE =="DISCARD"){
    /*let discardSignals = signalChainBee.sub(key).sub('DISCARD')
    for await (let signalJSON of discardSignals.createReadStream()){
          let dict = signalJSON
          let seq = dict.seq*/
          let seq = signal.SIGNALNO
                    let prospectiveEntry = await IdeaValueTreeBee.get(signal.PROSPECTIVECONTEXT);
                    if (!prospectiveEntry){
                      //add new idea entry:
                            let wordObj = {}
                            wordObj.parent = "0x0000000000000000000000000000000000000000000000000000000000000000"
                            wordObj.distance = 0
                            wordObj.children = []
                            wordObj.isDiscarded = true
                            wordObj.isSignaller = false
                            wordObj.isFilter = false
                            wordObj.signallers = {}
                            wordObj.signallers[key] = {}
                            wordObj.signallers[key].rankedList = []
                            wordObj.signallers[key].totalsObj = {}
                            wordObj.signallers[key].propsObj = {}
                            wordObj.signallers[key].total = 0
                            wordObj.signallers[key].seqs = []
                            wordObj.media = {}
                            wordObj = JSON.stringify(wordObj)
                            await IdeaValueTreeBee.put(signal.PROSPECTIVECONTEXT, wordObj)
                    } 
                    else {
                      //amend existing record:
                      let wordObj = JSON.parse(prospectiveEntry.value)
                      wordObj.isDiscarded = true
                      wordObj = JSON.stringify(wordObj)
                      await IdeaValueTreeBee.put(signal.PROSPECTIVECONTEXT, wordObj)
                    }
                    let contextEntry = await IdeaValueTreeBee.get(signal.CONTEXT);
                    if (contextEntry){
                      // adjust weighting of prospective to 0
                      let wordObj = JSON.parse(contextEntry.value)
                      let tot = wordObj.signallers[key].totalsObj[signal.PROSPECTIVECONTEXT]
                      let prop = wordObj.signallers[key].propsObj[signal.PROSPECTIVECONTEXT]
                      wordObj.signallers[key].total -= tot
                      delete wordObj.signallers[key].totalsObj[signal.PROSPECTIVECONTEXT]
                      delete wordObj.signallers[key].propsObj[signal.PROSPECTIVECONTEXT]
                      wordObj.signallers[key].rankedList = wordObj.signallers[key].rankedList.filter(item => item !== signal.PROSPECTIVECONTEXT);
                      if (key == '0x' + SignalChainCore.key.toString('hex')){
                        wordObj.children = wordObj.children.filter(item => item !== signal.PROSPECTIVECONTEXT);
                      }
                      
                      console.log('updating wordObj',key,SignalChainCore.key.toString('hex'),wordObj)
                      wordObj = JSON.stringify(wordObj)
                      await IdeaValueTreeBee.put(signal.CONTEXT, wordObj)
                    }
    }// end if //for await discard
    announceSignalChain(key.slice(2))
}


ipcMain.on('DomainIndexhtml:get',async (e,d)=>{
  console.log('getting domain index1',d[1][0],d[1][1])
  let indexhtml = await getDomainIndexhtml(d[1][0],d[1][1])
  win.webContents.send('DomainIndexhtml:get_response.'+String(d[0]),[indexhtml])//uint8ArrayToString(data));
})

async function getDomainIndexhtml(domain,filter){
  // filter =- filter object with weightings of keys JSON
  // domain = 0x... context which should contain index.html file
  console.log('getting domain index',domain,filter)
  let filterObj = JSON.parse(filter)
  let wordObj = await IdeaValueTreeBee.get(domain)
  
  let IndexhtmlObj = {}
  let indexhtml
  
  //get combined totalsObj for domain for each key in filter
  if (wordObj){
    wordObj = JSON.parse(wordObj.value.toString())
    console.log('filterObj',domain,wordObj,filterObj)
      for (let filterer in filterObj){ 
        if (Object.keys(wordObj.signallers).includes(filterer)){
            let totalsObj = wordObj.signallers[filterer].totalsObj
            for (let word in totalsObj){
              if (!(Object.keys(IndexhtmlObj).includes(word))){
                IndexhtmlObj[word] = totalsObj[word] * filterObj[filterer].prop
              }
            }
        }
      }

    //workout topranked

    let indexhtmls = Object.keys(IndexhtmlObj)
    let topindexhtml = indexhtmls.sort(function(a, b) {return IndexhtmlObj[b].prop - IndexhtmlObj[a].prop}).reverse()[0]
    let indexhtmlidea = XORcontextprospective(domain,topindexhtml,3)
    //get the media
    indexhtml = await mediaGet(indexhtmlidea)
    console.log('indexhtml',IndexhtmlObj,indexhtmls,topindexhtml,indexhtml,indexhtmlidea)
  }
  else {indexhtml = ''}

  return indexhtml
  // send back the html



}

ipcMain.on('DomainIndexhtmlFromFilters:get',async (e,d)=>{
  console.log('getting domain index1',d[1][0],d[1][1],d[1][2])
  let indexhtml = await getDomainIndexhtmlFromFilters(d[1][0],d[1][1],d[1][2])
  win.webContents.send('DomainIndexhtmlFromFilters:get_response.'+String(d[0]),[indexhtml])//uint8ArrayToString(data));
})
async function getDomainIndexhtmlFromFilters(domain,filters,distance){
  // filter =- filter container object with each filter giving weightings of keys JSON
  // domain = 0x... context which should contain index.html file
  console.log('getting domain index',domain,filters,distance)
  let filterContainerObj = JSON.parse(filters)
  let wordObj = await IdeaValueTreeBee.get(domain)
  
  let IndexhtmlObj = {}
  let indexhtml
  
  //get combined totalsObj for domain for each key in filter
  if (wordObj){
    wordObj = JSON.parse(wordObj.value.toString())
    for (let filter in filterContainerObj){
          let filterObj = filterContainerObj[filter]
          for (let filterer in filterObj){ 
              console.log('filterObj',domain,wordObj,filterObj) 
              if (Object.keys(wordObj.signallers).includes(filterer)){
                  let totalsObj = wordObj.signallers[filterer].totalsObj
                  for (let word in totalsObj){
                    if (!(Object.keys(IndexhtmlObj).includes(word))){
                      IndexhtmlObj[word] = totalsObj[word] * filterObj[filterer].prop
                    }
                  }
              }
          }
    }

    //workout topranked

    let indexhtmls = Object.keys(IndexhtmlObj)
    let topindexhtml = indexhtmls.sort(function(a, b) {return IndexhtmlObj[b] - IndexhtmlObj[a]}).reverse()[0]
    //let topindexhtml = indexhtmls.sort(function(a, b) {return IndexhtmlObj[b].prop - IndexhtmlObj[a].prop}).reverse()[0]
    let indexhtmlidea = XORcontextprospective(domain,topindexhtml,distance)
    //get the media
    indexhtml = await mediaGet(indexhtmlidea)
    console.log('indexhtml',IndexhtmlObj,indexhtmls,topindexhtml,indexhtml,indexhtmlidea)
  }
  else {indexhtml = ''}

  return indexhtml
  // send back the html



}



/************************************************************************************/
// Utils:

function pad(arr,fmt='utf8') {
  switch (fmt) {
    case 'utf8':
      return toUtf8listFromString('|||').concat(UTF8zeros(29-arr.length).concat(arr));
    break;
    case 'ETHaddr' :
      return toUtf8listFromString('|||ETHaddr||').concat(arr);
    break;
    case 'xor' :
      return UTF8zeros(64-arr.length).concat(arr);
    break;
    default:
  }
}

function UTF8zeros(leng) {
  let outlist = [];
    for (let chrno=0; chrno < leng; chrno++) {
    outlist.push(0x00);
  }
  return outlist;
}

function toBytesFromHexstlist(hexstrlist){
  let out = [];
  for (let i =0; i < hexstrlist.length; i++){
        let hexstr = hexstrlist[i]

        for (let j = 2; j < hexstr.length; j += 2){
          out.push(parseInt(hexstr.substr(j, 2), 16));
        }
  }
  return new Uint8Array(out);
}



function toUtf8listFromString(str){
  var outlist = [];
  for (let charno=0; charno < str.length; charno++) {
      let charCode = str.codePointAt(charno);
      if (charCode <= 0x7f){
        // char encoded as single byte
        outlist.push(charCode)
      }
      else if (charCode >= 0x80 && charCode <= 0x7ff){
        // char encoded as two bytes, byte 1 is 110xxxxx, byte 2 is 10xxxxxx
        outlist.push(((charCode >> 6) & 0b00011111) | 0b11000000)
        outlist.push(((charCode & 0b00111111) | 0b10000000))
      }
      else if (charCode >= 0x800 && charCode <= 0xffff){
        // char encoded as three bytes, byte 1 is 1110xxxx, byte 2 and 3 is 10xxxxxx
        outlist.push(((charCode >> 12) & 0b00001111) | 0b11100000)
        outlist.push(((charCode >> 6) & 0b00111111) | 0b10000000)
        outlist.push((charCode & 0b00111111) | 0b10000000)
      }
      else if (charCode >= 0x10000 && charCode <= 0x1fffff){
        // char encoded as four bytes, byte 1 is 1110xxxx, byte 2 and 3 is 10xxxxxx
        outlist.push(((charCode >> 18) & 0b00001111) | 0b11110000)
        outlist.push(((charCode >> 12) & 0b00111111) | 0b10000000)
        outlist.push(((charCode >> 6) & 0b00111111) | 0b10000000)
        outlist.push((charCode & 0b00111111) | 0b10000000)
        charno++
      }
      else if (charCode >= 0x200000 && charCode <= 0x3ffffff){
        // char encoded as five bytes,  byte 1 is 11110xxx, bytes 2, 3 and 4 are 10xxxxxx
        outlist.push(((charCode >> 24) & 0b00000011) | 0b11111000)
        outlist.push(((charCode >> 18) & 0b00111111) | 0b10000000)
        outlist.push(((charCode >> 12) & 0b00111111) | 0b10000000)
        outlist.push(((charCode >> 6) & 0b00111111) | 0b10000000)
        outlist.push((charCode & 0b00111111) | 0b10000000)
        charno++
      }
      else if (charCode >= 0x4000000 && charCode <= 0x7fffffff){
        // char encoded as six bytes,  byte 1 is 11110xxx, bytes 2, 3 and 4 are 10xxxxxx
        outlist.push(((charCode >> 24) & 0b00000001) | 0b11111100)
        outlist.push(((charCode >> 24) & 0b00111111) | 0b10000000)
        outlist.push(((charCode >> 18) & 0b00111111) | 0b10000000)
        outlist.push(((charCode >> 12) & 0b00111111) | 0b10000000)
        outlist.push(((charCode >> 6) & 0b00111111) | 0b10000000)
        outlist.push((charCode & 0b00111111) | 0b10000000)
        charno++
      }
  }
  return outlist
}



function XORcontextprospective(context,prospective,n=0) {
  if (typeof context != 'string' || typeof prospective != 'string' || prospective.slice(0,2) != "0x" || context.slice(0,2) != "0x"){
    console.warn('Problem with input to XORcontextprospective',context,typeof context,arguments,n)
  }
  if (typeof context != 'string'){
    throw Error('my TypeError')
  }
  if (isNaN(n)){
   console.warn('XORcontextprospective, my distance is not a number, setting to 0',n,XORcontextprospective.caller )
   n=0;
  }
  try {
      let shiftn = (Number(n) * 3) % 256;
      let contextint = bigInt(context.slice(2),16)
      let prospectiveint = bigInt(prospective.slice(2),16)
      let innerprospectiveint = bigInt(rotl(prospectiveint,shiftn),16);
      let innercontextint = bigInt(rotr(contextint,shiftn),16); //possible to improve this turncate int in BInt format?
      let outcontext = innercontextint.xor(innerprospectiveint);
      return '0x' + pad((outcontext).toString(16).split(''),fmt='xor').join('')
  }
  catch {
      return '0x0000000000000000000000000000000000000000000000000000000000000000'
  }

}

function XORcontextidea(context,idea,n=0) {
  if (typeof context != 'string' || typeof idea != 'string' || idea.slice(0,2) != "0x" || context.slice(0,2) != "0x"){
    console.warn('Problem with input to XORcontextidea',context,idea,typeof context,typeof idea,arguments,n)
  }
  if (typeof context != 'string'){
    throw Error('my TypeError')
  }
  if (isNaN(n)){
   console.warn('XORcontextidea, my distance is not a number, setting to 0',n,XORcontextidea.caller )
   n=0;
  }
  try {
      let shiftn = (Number(n) * 3) % 256;
      let contextint = bigInt(context.slice(2),16)
      let ideaint = bigInt(idea.slice(2),16)
      let innercontextint = bigInt(rotr(contextint,shiftn),16);
      let innerprospectiveint = innercontextint.xor(ideaint) //bigInt(rotr(prospective,n),16); //possible to improve this turncate int in BInt format?
      let outcontext = rotr(innerprospectiveint,shiftn)
      return '0x' + outcontext
  }
  catch {
      return '0x0000000000000000000000000000000000000000000000000000000000000000'
  }

}

function XORideaprospective(idea,prospective,n=0) {
  if (typeof idea != 'string' || typeof prospective != 'string' || prospective.slice(0,2) != "0x" || idea.slice(0,2) != "0x"){
    console.warn('XORideaprospective',idea,prospective,typeof idea,typeof prospective,arguments,XORideaprospective.caller)
  }
  if (typeof idea != 'string'){
    throw Error('my TypeError')
  }
  if (isNaN(n)){
   console.warn('XORideaprospective, my distance is not a number, setting to 0',n,XORideaprospective.caller )
   n=0;
  }
  try {
    let shiftn = (Number(n) * 3) % 256;
    let prospectiveint = bigInt(prospective.slice(2),16)
    let ideaint = bigInt(idea.slice(2),16)
    let innerprospectiveint = bigInt(rotl(prospectiveint,shiftn),16);
    let innercontextint = innerprospectiveint.xor(ideaint) //bigInt(rotr(prospective,n),16); //possible to improve this turncate int in BInt format?
    let outcontext = rotl(innercontextint,shiftn)
    return '0x' + pad((outcontext).toString(16).split(''),fmt='xor').join('')
  }
  catch {
    return '0x0000000000000000000000000000000000000000000000000000000000000000'
  }

}

function rotr(a,n){
  let str = a.shiftRight(n).or(a.shiftLeft(256-n)).toString(16)
  if (str.length >64){
    str=str.substring(str.length-64)
  }
  return pad(str.split(''),fmt='xor').join('') //'0x' +
}

function rotl(a,n){
  let str = a.shiftLeft(n).or(a.shiftRight(256-n)).toString(16)
  if (str.length >64){
    str=str.substring(str.length-64)
  }
  return pad(str.split(''),fmt='xor').join('')
}

function hexifyString(str,fmt='utf8'){
  if (isHex(str) && str.length ==66) {
    var out = str
  }
  else if (isHex(str) && str.length <66) {
    var out = '0x' + pad(str.slice(2).split(''),'xor').join('')
  }
  else if (str === '') {
    var out = '0x' + UTF8zeros(64).join('')
  }
  else {
    var out = '0x'+toHexStrFromByteArray(pad(toUtf8listFromString(str),fmt));
  }
  if (out.length !=66) {
    return 'invalid';
  }
  else {
    return out;
  }
}

function isHex(input) {
    if (input.slice(0,2)=='0x'){
        return Boolean(input.slice(2).match(/[a-fA-F0-9]+$/));
    }
    else {
        return false;
    }
}

function stringifyHex(hex,pad=false){
  let str = ''
    for (let i=0;i<hex.length;i+=2){
      code = parseInt(hex.substr(i,2), 16);
          str += String.fromCharCode(code).replace(/00/g,'');
            }
 
      return str.replace('|||','').replace('\u0000','');//(/(!#0*)/g,'');

}

 