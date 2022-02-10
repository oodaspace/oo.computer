const { contextBridge, ipcRenderer} = require("electron");

let validIds = [   "media:add",
                        "media:get",
                        "IdeaValueTree:get",
                        "SignalChain:put",
                        "getMainKey",
                        "SignalChain:isInit",
                        "lookup",
                        "Name:get",
                        "DomainIndexhtml:get",
                        "DomainIndexhtmlFromFilters:get"
                    ];

let validReturnIds = [
                        "media:add_response",
                        "media:get_response",
                        "IdeaValueTree:get_response",
                        "SignalChain:put_response",
                        "getMainKey_response",
                        "SignalChain:isInit_response",
                        "lookup_response",
                        "Name:get_response",
                        "DomainIndexhtml:get_response",
                        "DomainIndexhtmlFromFilters:get_response"
                    ];
//***************************************
//inspired by https://stackoverflow.com/a/59888788
contextBridge.exposeInMainWorld(
    "electron_main_process_channel",{
        tomainjs: (id, data)=>{
            if (validIds.includes(id.split('.')[0])) {
                ipcRenderer.send(id.split('.')[0], [id.split('.')[1],data]);
            }
        },
        frommainjs: (id, func)=>{
            if (validReturnIds.includes(id.split('.')[0])) {
                ipcRenderer.on(id, (event, ...args) => func(...args));
            }
        }
    }
);
//***************************************

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})