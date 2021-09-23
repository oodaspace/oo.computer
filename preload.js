const {
    contextBridge,
    ipcRenderer
} = require("electron");
let Hyperdrive = require('hyperdrive')
let Hypercore = require('hypercore')
const { Server: HyperspaceServer } = require('hyperspace')
const server = new HyperspaceServer()
let client
const { Client: HyperspaceClient } = require('hyperspace')
setTimeout(function() {

 client = new HyperspaceClient()

}, 500);

let drivesObj = {}

let index = 0
//https://stackoverflow.com/a/59888788/1461850
contextBridge.exposeInMainWorld(

    "api", {
        send: (channel, data) => {
            console.log('preload sending',channel,channel.split('.')[0],data)
            let validChannels = ["media:add","media:get","IdeaValueTree:get","SignalChain:put","getMainKey","SignalChain:isInit"];
            if (validChannels.includes(channel.split('.')[0])) {
                ipcRenderer.send(channel.split('.')[0], [channel.split('.')[1],data]);
            }
        },
        receive: (channel,func) => {

            let validChannels = ["media:add_response","media:get_response","IdeaValueTree:get_response","SignalChain:put_response","getMainKey_response","SignalChain:isInit_response"];
            console.log('preload rcing',channel,channel.split('.')[0],validChannels.includes(channel.split('.')[0]))
            if (validChannels.includes(channel.split('.')[0])) {
                // Deliberately strip event as it includes `sender` 
                //console.log('preload send response',channel,func)
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }

);

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})