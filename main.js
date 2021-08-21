const { app, BrowserView, BrowserWindow,ipcMain } = require('electron');
const log = require("electron-log");
const { autoUpdater } = require("electron-updater");
const  fs  = require( 'fs');

const Swarm = require('hyperswarm')
let Hyperdrive = require('hyperdrive')
const Corestore = require('corestore')
let Hypercore = require('hypercore')
let crypto = require('crypto')
//const tee = require('teex')
const IPFS = require('ipfs')
const uint8ArrayFromString = require('uint8arrays/from-string')
const uint8ArrayToString = require('uint8arrays/to-string')
const uint8ArrayConcat = require('uint8arrays/concat')
const all = require('it-all')


let IdeaValueTree // = new Hyperdrive('./my-first-hyperdrive')
let signalChain
let driveready = false
let coreready = false
let ipfsready = false
let drivesObj = {} //tracks already initiated drives
let coresObj = {} //tracks already initiated cores
let getDriveTimer
let signallerObj = {} // index by signaller signal chain key. 
let connection = {}
const userDataPath = app.getPath('userData');

signalChainStore = new Corestore(userDataPath + '/signalChains')
ideaTreeStore = new Corestore(userDataPath + '/ideaTrees')




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

async function createSwarmOnReady(key){
        if (!(topicsjoined.includes(key))) {
          topicsjoined.push(key)
          let seed = crypto.randomBytes(32)
          let swarm = new Swarm({ seed: seed})
          let discovery = swarm.join(Buffer.from(key,'hex'),{server:true,client:true,announce:true,lookup:true},()=>{console.log('joined')})
          swarm.on('peer',(peer) => {console.log('connected to peer',peer)} )
          swarm.on('peer-rejected',(peer) => {console.log('rejected peer',peer)} )
          swarm.on('updated', (key) => {console.log('swarm updated',key)})
          swarm.on('disconnection', (skt,info) => {console.log('A connection has been dropped',info)})

          console.log('swarm joined', key)
          await discovery.flushed()
          console.log('discovery flushed', key)

          swarm.on('connection', async function (connection, info) {
                connection.pipe(drivesObj[key].replicate(connection.isInitiator)).pipe(connection)
               // console.log('connection',Object.keys(connection))
                //connection.write('testing connection')
                connection.on('error', err => console.log('2 CONN ERR:', err))
                connection.on('data',(data) => { console.log('topic:',info.topics,'got data: ',data.toString())})

          })


          setInterval(async function() {
                //console.log('swarm connections',swarm.connections.size,'topic: ', key)//,topicsjoined)
                let a = await drivesObj[key].promises.readdir('');
                //console.log('drive',key,a)
              
          }, 50000)
          setInterval(async function() {
                //console.log('refreshing')
                discovery.refresh()
              
          }, 10000+Math.random())
        }
}





const pause =  sec => new Promise(r => setTimeout(r, 1000 * sec))
const ready = () => new Promise(async (r) => {
  while (!driveready){
    await pause(0.5);
  }
  r();
})


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
    fullscreen: true,
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

try {
    ipfs = await IPFS.create()
    ipfsready = true
    const id = await ipfs.id()
    
    console.log('IPFS READY',id,ipfsready)
  } catch (err) {
    console.error(err)
  }



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

ipcMain.on('readdir',async (e,d)=>{
  ////console.log('readdir rcd',d);
  await ready()
  let result = await new Promise(r => IdeaValueTree.readdir(d[1][1],(e,l)=>{r(l)}))
  ////console.log('result',result)
  win.webContents.send('readdir_response.'+String(d[0]),result);
})


ipcMain.on('IPFS:add',async (e,d)=>{

  console.log('IPFS ADD',d);
  //await IPFSready()
  console.log('IPFS ADD ready');
  let result = await ipfs.add(d[1])
  console.log('IPFS ADD result',result)
  win.webContents.send('IPFS:add_response.'+String(d[0]),result.path);
  console.log('content added to IPFS',result.path)
})

ipcMain.on('IPFS:cat',async (e,d)=>{

  console.log('IPFS CAT',d);
  //await IPFSready()
  console.log('IPFS CAT ready');
  let data  = uint8ArrayConcat(await all(ipfs.cat(d[1])))
  
  console.log('IPFS CAT result',data,uint8ArrayToString(data))
  win.webContents.send('IPFS:cat_response.'+String(d[0]),uint8ArrayToString(data));
  console.log('content catted from IPFS',uint8ArrayToString(data))
})

ipcMain.on('IdeaValueTree:readFile',async (e,d)=>{
  ////console.log('readFile rcd',d);
  await ready()
  let result = await new Promise(r => IdeaValueTree.readFile(String(d[1][0]), 'utf-8',(e,file)=>{r(file)}))
  ////console.log('result',result)
  win.webContents.send('IdeaValueTree:readFile_response.'+String(d[0]),result);
})

ipcMain.on('writeFile',async (e,d)=>{
  //console.log('writeFile rcd',d);
  await ready()
  let result = await new Promise(r => IdeaValueTree.writeFile(d[1][0], d[1][1],(e)=>{if (e) {r(false)} else {r(true)}}))
  //console.log('result',result)
  win.webContents.send('writeFile_response.'+String(d[0]),result);
})

ipcMain.on('initIdeaValueTree', (e,d)=>{
  console.log('init initIdeaValueTree rcd');
  //frontend calls this to make sure IdeaValueTree is initialised. Check if it exists and returm the drivekey.
  let exists = false;
  fs.stat(userDataPath + '/ideaValueTreeKey',(err, stats) => {
    if (err == null){
      exists = true
    }

    if (!exists){
      IdeaValueTree = new Hyperdrive(ideaTreeStore);
      IdeaValueTree.on('ready', async () => {
          IdeaValueTree.writeFile('ready', 'true')
          let key = IdeaValueTree.key.toString('hex');
          fs.writeFile(userDataPath + '/ideaValueTreeKey',key,(err) => {
          if (err) throw err;
              console.log('Idea Value Tree key has been saved!');
          })
          driveready = true;
          
          drivesObj[key] = IdeaValueTree
          //console.log('init drive ready',key);
          win.webContents.send('initIdeaValueTree_response.'+String(d[0]),key);
          createSwarmOnReady(key)
      })

    }
    else {
        fs.readFile(userDataPath + '/ideaValueTreeKey','utf8',(err,key)=>{
              if (err) throw err;
              console.log('making IdeaValueTree from existing key',key)
              IdeaValueTree = new Hyperdrive(ideaTreeStore,Buffer.from(key,'hex'));
              IdeaValueTree.on('ready', async () => {
                            IdeaValueTree.writeFile('ready', 'true')
                                let key = IdeaValueTree.key.toString('hex');
                                fs.writeFile(userDataPath + '/ideaValueTreeKey',key,(err) => {
                                if (err) throw err;
                                    console.log('Idea Value Tree key has been saved!');
                                })
                              driveready = true;
                              
                              drivesObj[key] = IdeaValueTree
                              //console.log('init drive ready',key);
                              win.webContents.send('initIdeaValueTree_response.'+String(d[0]),key);
                              createSwarmOnReady(key)
              })
        })
    }
  })
})

ipcMain.on('IdeaValueTree:exists',async (e,d)=>{
  console.log('exists rcd',IdeaValueTree,d);
  // called for front end to check if an IdeaValueTree has previously been created. If it has a file called ideaValueTreeKey will exist. Sends a response to say whether it does (so front end can arrange for INIT signal).
  let exists = false;
  fs.stat(userDataPath + '/ideaValueTreeKey',(err, stats) => {
      if (err == null){
        exists = true
      }
      if (!exists){
          console.log(`IdeaValueTree does not exist`)
          IdeaValueTree = new Hyperdrive(ideaTreeStore);
          //ready function is repeated could be collected.
          IdeaValueTree.on('ready', async () => {
              IdeaValueTree.writeFile('ready', 'true')
              let key = IdeaValueTree.key.toString('hex');
              fs.writeFile(userDataPath + '/ideaValueTreeKey',key,(err) => {
              if (err) throw err;
                  console.log('Idea Value Tree key has been saved!');
              })
              driveready = true;
              drivesObj[key] = IdeaValueTree
              //console.log('init drive ready',key);
              win.webContents.send('IdeaValueTree:exists_response.'+String(d[0]),false);
        })

    }
    else {
        console.log(`IdeaValueTree exists`)
        fs.readFile(userDataPath + '/ideaValueTreeKey','utf8',(err,key)=>{
              if (err) throw err;
              console.log('making IdeaValueTree from existing key',key)
              IdeaValueTree = new Hyperdrive(ideaTreeStore,Buffer.from(key,'hex'));
                  IdeaValueTree.on('ready', async () => {
                                IdeaValueTree.writeFile('ready', 'true')
                                let key = IdeaValueTree.key.toString('hex');
                                fs.writeFile(userDataPath + '/ideaValueTreeKey',key,(err) => {
                                if (err) throw err;
                                    console.log('Idea Value Tree key has been saved!');
                                })
                                driveready = true;
                                drivesObj[key] = IdeaValueTree
                                //console.log('init drive ready',key);
                                win.webContents.send('IdeaValueTree:exists_response.'+String(d[0]),true);
                                  
                  })
        })
    }
  })
})

ipcMain.on('initSignalChain',async (e,d)=>{
  //console.log('init signalChain rcd');
    await signalChainStore.ready()
    signalChain = signalChainStore.default()
    signalChain.on('ready',async () => {
        coreready = true;
        let key = signalChain.key.toString('hex');
        //console.log('init signal chain ready',key);
        win.webContents.send('initSignalChain_response.'+String(d[0]),key);
       /* if (!(topicsjoined.includes(key))){
          let discovery = swarm.join(Buffer.from(key,'hex'),{announce:true,lookup:true},()=>{console.log('joined')})
          topicsjoined.push(key)
          console.log('swarm joined initSignalChain', key)
          await discovery.flushed()
          console.log('discovery flushed initSignalChain', key)
        }*/

  })
})

ipcMain.on('signalChain:exists',async (e,d)=>{
  //console.log('exists rcd',IdeaValueTree);
  if (signalChain) {
    win.webContents.send('signalChain:exists_response.'+String(d[0]),true);
  }
  else {
    win.webContents.send('signalChain:exists_response.'+String(d[0]),false);
  }


})

ipcMain.on('signalChain:append',async (e,d)=>{
  //console.log('writeFile rcd',d);
  await CoreReady()
  let result = await new Promise(r => signalChain.append(d[1][0], (e)=>{if (e) {r(false)} else {r(true)}}))
  //console.log('result',result)
  win.webContents.send('signalChain:append_response.'+String(d[0]),result);
})

ipcMain.on('signalChain:get',async (e,d)=>{
  //console.log('get rcd',d);
  await CoreReady()
  let result = await new Promise(r => signalChain.get(d[1][0],{wait:false},(e,d)=>{if (e){r(false)} else {r(d)}}))
  win.webContents.send('signalChain:get_response.'+String(d[0]),result.toString('utf8'));
})

//********************************************************
ipcMain.on('Hyperdrive:readdir',async (e,d)=>{
  
  //console.log('Hyperdrive:readdir rcd',Object.keys(drivesObj),'...',d,d[1][0],status);
  let key = d[1][0]
  let drive
  if (!(Object.keys(drivesObj).includes(key))){
    drive = new Hyperdrive(ideaTreeStore,Buffer.from(key,'hex'));
    await new Promise(r => {drive.on('ready',()=>{r();})})
    drivesObj[key] = drive
  }
  else {
    drive = drivesObj[key]
  }
  
  let result = await new Promise(r => drive.readdir(d[1][1],(e,l)=>{r(l)}))
  ////console.log('result',result)
  win.webContents.send('Hyperdrive:readdir_response.'+String(d[0]),result);
})


ipcMain.on('Hyperdrive:readFile',async (e,d)=>{
  ////console.log('readFile rcd',d);
  let key = d[1][0]
  let drive
  if (!(Object.keys(drivesObj).includes(key))){
    drive = new Hyperdrive(ideaTreeStore,Buffer.from(key,'hex'));
    await new Promise(r => {drive.on('ready',()=>{r();})})
    drivesObj[key] = drive
  }
  else {
    drive = drivesObj[key]
  }
  
  let result = await new Promise(r => drive.readFile(String(d[1][1]), 'utf-8',(e,file)=>{r(file)}))
 // //console.log('result',result)
  win.webContents.send('Hyperdrive:readFile_response.'+String(d[0]),result);
})

ipcMain.on('Hyperdrive:writeFile',async (e,d)=>{
  //console.log('writeFile rcd',d);
  let key = d[1][0]
  let drive
  if (!(Object.keys(drivesObj).includes(key))){
    drive = new Hyperdrive(ideaTreeStore,Buffer.from(key,'hex'));
    await new Promise(r => {drive.on('ready',()=>{r();})})
    drivesObj[key] = drive
  }
  else {
    drive = drivesObj[key]
  }
  

  let result = await new Promise(r => drive.writeFile(String(d[1][1]), String(d[1][2]),(e)=>{if (e) {r(false)} else {r(true)}}))
  let rr = await new Promise(r => drive.readdir('',(e,l)=>{r(l)}))
  //console.log('result',result,rr)
  win.webContents.send('Hyperdrive:writeFile_response.'+String(d[0]),result);
})

let driveNo = 0
ipcMain.on('Hyperdrive:init',async (e,d)=>{
  sendStatusToWindow('init rcd corestrore'+(JSON.stringify(d)));
  let thisDrive
  if (!(Object.keys(drivesObj).includes(d[1][0]))){
    if (d[1][0]) thisDrive = new Hyperdrive(ideaTreeStore,Buffer.from(d[1][0], 'hex'));
    else thisDrive = new Hyperdrive(ideaTreeStore,null);
    await thisDrive.promises.ready()
    
    //console.log('drive.metadata',thisDrive.metadata)
    driveready = true;
    drivesObj[thisDrive.key.toString('hex')] = thisDrive
    let key = thisDrive.key.toString('hex');

    sendStatusToWindow('init drive ready '+String(key));
    win.webContents.send('Hyperdrive:init_response.'+String(d[0]),key);
    createSwarmOnReady(key)

  }
  else {
    thisDrive = drivesObj[d[1]]
    win.webContents.send('Hyperdrive:init_response.'+String(d[0]),thisDrive.key.toString('hex'));
    createSwarmOnReady(thisDrive.key.toString('hex'))
  }
  
    driveNo++;

})