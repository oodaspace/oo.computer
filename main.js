const { app, BrowserView, BrowserWindow,ipcMain } = require('electron');
const log = require("electron-log");
const { autoUpdater } = require("electron-updater");
const  fs  = require( 'fs');
var pump = require('pump');

const DHT = require('@hyperswarm/dht')
const node = new DHT()
const keyPair = DHT.keyPair()
let Hyperdrive = require('hyperdrive')
const Corestore = require('corestore')
let Hypercore = require('hypercore')
let Hyperbee = require('hyperbee')
let crypto = require('crypto')
//const tee = require('teex')
//const IPFS = require('ipfs')
const uint8ArrayFromString = require('uint8arrays/from-string')
const uint8ArrayToString = require('uint8arrays/to-string')
const uint8ArrayConcat = require('uint8arrays/concat')
const all = require('it-all')
//const ed = require('noble-ed25519')


let IdeaValueTreeBee // = new Hyperdrive('./my-first-hyperdrive')
let signalChainBee
let MediaBee
let ContentTypeBee
let beeready = false
let coreready = false
let ipfsready = false
let drivesObj = {} //tracks already initiated drives
let coresObj = {} //tracks already initiated cores
let getDriveTimer
let signallerObj = {} // index by signaller signal chain key. 
let connection = {}
const userDataPath = app.getPath('userData');


let signalChainStore = userDataPath + '/signalChains'
let ideaTreeStore = userDataPath + '/ideaTree'
let mediaStore = userDataPath + '/media'
let contentTypeStore = userDataPath + '/contentTypes'
let keyStore = userDataPath + '/keyStore'
let privateKey
let publicKey

console.log('userDataPath',userDataPath)
/*try {
  privateKey = fs.readFileSync(keyStore) + 'privateKey';
  console.log('loading privateKey', privateKey)
}
catch {
  privateKey = ed.utils.randomPrivateKey();
  fs.writeFileSync(keyStore, privateKey);
  console.log('generating privateKey', privateKey)
}

(async () => {
   publicKey = await ed.getPublicKey(privateKey);
})();*/



let SignalChainCore = new Hypercore(signalChainStore)
SignalChainCore.ready(()=>{
  signalChainBee = new Hyperbee(SignalChainCore,{
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

console.log('privateKey is: ', privateKey)

let signalChains = {}

let topicsjoined =[]
let swarmInit = false
function isJSON(str) {
    try { JSON.parse(str) } catch (e) { return false; }
    return true;
}
let seed = crypto.randomBytes(32)

const path = require('path');

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";

log.info("App starting...");

function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send('console_message', text);
}

function createDefaultWindow() {
  win = new BrowserWindow();
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
  win.loadURL(`file://${__dirname}/version.html#v${app.getVersion()}`);
  return win;
}
let announcedKeys = []
async function announceSignalChain(key){
  if (!(announcedKeys.includes(key))){
        console.log('announcing key',key)
        let bufkey = Buffer.from(key,'hex')
          let announcestream = node.announce(bufkey,keyPair)
          for await (const res of announcestream) {
         // console.log('got res announceQuery1')//res
          res.peers.forEach(peer => {
              // console.log(' ********** got peer from announce',peer.publicKey)
          })
        }
        announcedKeys.push(key)
  }
}

let server = node.createServer(keyPair)
server.on('connection', async function (noiseSocket) {
    console.log('server got connection :-)')
    console.log('Remote, local, init public keys', noiseSocket.remotePublicKey, noiseSocket.publicKey,keyPair2.publicKey)
    noiseSocket.on('data',async (d)=>{
                console.log('node got msg',d)
                let msg = JSON.parse(d)
                switch (msg.id) {
                    case 'RequestSignalChain':
                        let key = msg.key
                        let SignalChain = signalChainBee.sub(key)
                        let seq = await SignalChain.get('seq')
                        seq = seq ? Number(seq) : seq = 1
                        let i = 1
                        let valueSignals = SignalChain.sub('VALUE')
                        let discardSignals = SignalChain.sub('DISCARD')
                        let claimSignals = SignalChain.sub('CLAIM')
                        while (i <= seq){
                            let signal = await valueSignals.get(i)
                            if (signal) {
                              noiseSocket.write(`{"id" : "Signal", "seq" : ${i}, "signal" : ${signal}}`)
                            }
                            else {
                                let signal = await discardSignals.get(i)
                                if (signal) {
                                  noiseSocket.write(`{"id" : "Signal", "seq" : ${i}, "signal" : ${signal}}`)
                                }
                                else {
                                        let signal = await claimSignals.get(i)
                                        if (signal) {
                                          noiseSocket.write(`{"id" : "Signal", "seq" : ${i}, "signal" : ${signal}}`)
                                        }
                                }
                            }
                            i++
                        }
                    break;
                    default:
                }
    })
})
server.on('listening', async function () {
    await signalChainBee.ready()
    let key = SignalChainCore.key
    announceSignalChain(key)
})
server.listen(keyPair)

let nodesarray = []
async function lookupSignalChain(key){
    let lookupstream = node.lookup(Buffer.from(key,'hex'))
    let SignalChain = signalChainBee.sub(key)
   /* if (!(Object.keys(latestSeq).includes(key.toString('hex')))){
        latestSeq[key.toString('hex')] = -1
        signalChains[key.toString('hex')] = {}

    }*/
    console.log('looking up',key)
    for await (const res of lookupstream) {
    console.log('got res of lookupstream',res)
      res.peers.forEach(peer => {
           console.log(' ********** got peer from lookup',peer.publicKey)
          if (!(nodesarray.includes(peer.publicKey.toString('hex')))) {
              console.log(' got new peer',peer,peer.publicKey == keyPair.publicKey)
              nodesarray.push(peer.publicKey.toString('hex'));
              let skt = node.connect(peer.publicKey)
              //process.stdin.pipe(skt).pipe(process.stdout)
              skt.write(`{"id" : "RequestSignalChain","startSeq" : 0,"key" : ${'0x' + key}}`)//, "endSeq" : ${1}
              skt.on('data',async (d)=>{
                console.log('node2 got msg',d)
                let msg = JSON.parse(d)
                let signal
                let seq
                
                let signalTypeIndex
                let wordIndex
                let result
                let signaller
                let check
                switch (msg.id) {
                    case 'GotSignalChain':
                        if (msg.seq > latestSeq[key.toString('hex')]){
                            skt.write(`{"id" : "RequestSignalChain","startSeq" : 0, "key" : ${key}}`)
                        }
                    break;
                    case 'Signal':
                        signal = JSON.parse(msg.signal)
                        len = await SignalChain.get('seq')
                        len = len ? Number(len) : len = 0
                        signaller = signal.SIGNALLER
                        console.log('got value signal from peer',signal) 
                          switch (signal.SIGNALTYPE) {
                                            case 'VALUE':
                                                //wordIndex = await signalTypeIndex.sub(signal.CONTEXT)
                                                await signalTypeIndex.put(String(signal.CONTEXT), JSON.stringify(signal))
           
                                                  BuildIdeaValueTree(signaller,signal)
                                                
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
                                                  BuildIdeaValueTree(signaller)
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

                        
                    break;
                    default:
                }
                //use node.create server to match above
              })
          }
      })
  }
}



const pause =  sec => new Promise(r => setTimeout(r, 1000 * sec))



const IPFSready = () => new Promise(async (r) => {
  while (!ipfsready){
    await pause(0.5);
  }
  r();
})

const CoreReady = () => new Promise(async (r) => {
  while (!coreready){
    await pause(0.5);
  }
  r();
})

const ServerReady = () => new Promise(async (r) => {
  while (!serverready){
    await pause(0.5);
  }
  r();
})

let win


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

autoUpdater.on("checking-for-update", () => {
  sendStatusToWindow({
    event: "checking-for-update"
  });
});

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

app.on("window-all-closed", () => {
  app.quit();
});

let ipfs


app.whenReady().then(async () => {

/*try {
    ipfs = await IPFS.create()
    ipfsready = true
    const id = await ipfs.id()
    
    console.log('IPFS READY',id,ipfsready)
  } catch (err) {
    console.error(err)
  }*/

  createWindow()
  sendStatusToWindow('testing')
  setInterval(function() {
    let a = autoUpdater.checkForUpdatesAndNotify();
    sendStatusToWindow(JSON.stringify(a))
  }, 60000);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }  
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

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

ipcMain.on('readdir',async (e,d)=>{
  ////console.log('readdir rcd',d);
  await ready()
  let result = await new Promise(r => IdeaValueTree.readdir(d[1][1],(e,l)=>{r(l)}))
  ////console.log('result',result)
  win.webContents.send('readdir_response.'+String(d[0]),result);
})


ipcMain.on('media:add',async (e,d)=>{
  await MediaBee.put(d[1][0],d[1][1]) //await new Promise(r => drive.writeFile(String(d[1][1]), String(d[1][2]),(e)=>{if (e) {r(false)} else {r(true)}}))
  await ContentTypeBee.put(d[1][0],d[1][2])
  //to do verify hash/word construction
  console.log('putting media',d[1][1],d[1][0],d[1][2])
  win.webContents.send('media:add_response.'+String(d[0]),true);
  console.log('content added to media bee',true)
})

ipcMain.on('media:get',async (e,d)=>{
  //console.log('media CAT',d);
  let data  = await MediaBee.get(d[1][1]) //uint8ArrayConcat(await all(ipfs.cat(d[1])))
  //console.log('IPFS CAT result',data,uint8ArrayToString(data))
  let contenttype = await ContentTypeBee.get(d[1][1])
 // console.log('media CAT',[data,contenttype]);
  if (data) data = data.value.toString()
    if(contenttype) contenttype = contenttype.value.toString()
  win.webContents.send('media:get_response.'+String(d[0]),[data,contenttype])//uint8ArrayToString(data));
  //console.log('content catted from media bee',uint8ArrayToString(data))
})


//********************************************************

ipcMain.on('getMainKey',async (e,d)=>{
  console.log('ipcMain getMainKey')
  let result = SignalChainCore.key.toString('hex')
  console.log('ipcMain getMainKey',result,IdeaTreeCore.key.toString('hex'))
  win.webContents.send('getMainKey_response.'+String(d[0]),result);
})

ipcMain.on('IdeaValueTree:get',async (e,d)=>{
  //await new Promise(r => drive.readFile(String(d[1][1]), 'utf-8',(e,file)=>{r(file)}))
  // //console.log('result',result)
  let signaller 
  //console.log('SignalChainCore',SignalChainCore)
  if (d[1][0] == 'default') {signaller = '0x' + SignalChainCore.key.toString('hex')}
  else { signaller = d[1][0]}
  let word = d[1][1]
  //let sub = IdeaValueTreeBee.sub(signaller)
  let result = await IdeaValueTreeBee.get(word) 
  
  if (result) result = result.value.toString() 
  //if (!result) result = "falseafsdfadf"
   // console.log('IdeaValueTree:get',signaller,word,result)
  win.webContents.send('IdeaValueTree:get_response.'+String(d[0]),result);
})


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
  /*for await (let signalObj of INIT.createReadStream()){
    
    let signal = signalObj.value.toString('utf-8')
    console.log('init signal?in loop',signal)
      if (signal.SIGNALTYPE == 'INIT'){
        result = false
      }
  }
  console.log('init signal?2',result,d[0])
  win.webContents.send('SignalChain:isInit_response.'+String(d[0]),result);*/
})

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
                            wordIndex = await signalTypeIndex.sub(signal.CONTEXT)
                            result = await signalTypeIndex.put(String(signal.CONTEXT), JSON.stringify(signal))
                            seq++
                            await SignalChain.put('seq',String(seq))
                            BuildIdeaValueTree('0x' + SignalChainCore.key.toString('hex'),signal)
                        break;
                        case 'DISCARD':
                            wordIndex = await signalTypeIndex.sub(signal.CONTEXT)
                            result = await wordIndex.put(String(seq),JSON.stringify(d[1]))
                            seq++
                            await SignalChain.put('seq',String(seq))
                            BuildIdeaValueTree('0x' + SignalChainCore.key.toString('hex'),signal)
                        break;
                        default:
                            result = await signalTypeIndex.put(String(seq),JSON.stringify(signal))
                            seq++
                            await SignalChain.put('seq',String(seq))
                    }
      win.webContents.send('SignalChain:put_response.'+String(d[0]),result);
})


// Build IdeaValueTree From Filters:
async function BuildIdeaValueTree(key,signal) {
  //get filters:
    // cylce thru get VALUE signals, build init tree. 
    console.log('key?',key,String(SignalChainCore.key.toString('hex')))
    let SignalChain = signalChainBee.sub(key)
    let contexts = SignalChain.sub('VALUE')
    if (signal.SIGNALTYPE == "VALUE"){
   // for await (let context of contexts.createReadStream()){
/*              let valueSignals = contexts.sub(context.key)
              for await (let valueSignalObj of contexts.createReadStream()){*/
                    let seq = signal.SIGNALNO
                    let valueSignal = signal //JSON.parse(valueSignalObj.value)//JSON.parse(dict)
                    //console.log('valueSignals--->>>>>>>',valueSignalObj,valueSignal)

                    let contextEntry = await IdeaValueTreeBee.get(valueSignal.CONTEXT);

                    if (!contextEntry){
                      //add new context entry
                       //word is not already in value tree, so insert it
                            let wordObj = {}
                            wordObj.parent = valueSignal.PARENT
                            wordObj.distance = valueSignal.DISTANCE
                            wordObj.children = [valueSignal.PROSPECTIVECONTEXT]
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
                      if (!(wordObj.children.includes(valueSignal.PROSPECTIVECONTEXT))){ wordObj.children.push(valueSignal.PROSPECTIVECONTEXT) }
                            if (!(Object.keys(wordObj.signallers).includes(key))){
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
          let discardSignal = JSON.parse(dict.value)
          let contextEntry = await IdeaValueTreeBee.get(discardSignal.context);
          if (!contextEntry){

          }
          else {
            // amend existing record:
            let wordObj = JSON.parse(contextEntry.value)
            if (seq > wordObj.signallers[key].seqs[wordObj.signallers[key].seqs.length-1]){
                      if (!(wordObj.children.includes(discardSignal.PROSPECTIVECONTEXT))){ wordObj.children.push(discardSignal.PROSPECTIVECONTEXT) }
                      if (!(Object.keys(wordObj.signallers).includes(key))){
                          wordObj.signallers[key] = {}
                          wordObj.signallers[key].rankedList = [discardSignal.PROSPECTIVECONTEXT]
                          wordObj.signallers[key].totalsObj = {}
                          wordObj.signallers[key].total = 0
                          wordObj.signallers[key].seqs = [seq]
                        wordObj.signallers[key].totalsObj[discardSignal.PROSPECTIVECONTEXT] = 0
                        wordObj.signallers[key].propsObj[discardSignal.PROSPECTIVECONTEXT] = 0
                      }
                      else {
                        if (!(Object.keys(wordObj.signallers[key].totalsObj).includes(discardSignal.PROSPECTIVECONTEXT))){
                            wordObj.signallers[key].totalsObj[discardSignal.PROSPECTIVECONTEXT] = 0
                        }
                        else {
                          wordObj.signallers[key].totalsObj[discardSignal.PROSPECTIVECONTEXT] = 0
                        }

                        wordObj.signallers[key].total = 0
                      }
                      if (wordObj.signallers[key].total !== 0){
                        for (let w in wordObj.signallers[key].totalsObj){
                          wordObj.signallers[key].propsObj[w] = wordObj.signallers[key].totalsObj[w]/wordObj.signallers[key].total
                        }
                      }
                      if (!(wordObj.signallers[key].seqs.includes(seq))){
                        wordObj.signallers[key].seqs.push(seq)
                      }
                      wordObj = JSON.stringify(wordObj)
                      await IdeaValueTreeBee.put(discardSignal.CONTEXT, wordObj)
                }
            }      
    }// end if //for await discard
    announceSignalChain(key.slice(2))
}
