/*
© (c) Copyright 2021 ooda space ltd
The oo.computer profit share oriented open source licence:
This is a edited and extended version of the BSD-2-Clause licence. The intent is to ensure that software modifications are: made publicly available on a decentralised network, communicated back to the oo.computer system, correctly indexed, and that modifiers stand to share in profits that arise from oo.computer value signals and the associated profit share mechanism.
###############################################################################
A. Redistribution and use:
    1. Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
            i.    Redistributions of source code must retain the above copyright notice and this text (Sections A., B., C., D., and E.).
            ii.   Redistributions in binary form must reproduce the above copyright notice and this text (Sections A., B., C., D., and E.) in the documentation and/or other materials provided with the distribution.
    2. Redistribution and use in source and binary forms, with modification, are permitted provided that the following conditions are met:
            i.    Redistributions of source code must retain the above copyright notice and this text (Sections A., B., C., D., and E.). with Section C. modified as per A.2.iii).
            ii.   Redistributions in binary form must reproduce the above copyright notice and this text (Sections A., B., C., D., and E. with Section C. modified as per A.2.iii) in the documentation and/or other materials provided with the distribution.
            iii.  The modifier has updated Section C. below as described in Section D.
            iv.   The modifier has signalled value in the modified file as described in section E.
            v.    The modified file is kept available using the oo.computer idea-value-tree schema via the Hypercore Protocol network.
    3. If any part of this text (Sections A., B., C., D., and E.) is held to be invalid it shall not invalidate the text as a whole or any other part of this text (Sections A., B., C., D., and E.).
###############################################################################
B. Disclaimer:
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
###############################################################################
C. The file
    1. Media-type:                                              text/plain
    2. ed25519 public key of modifier:                          0x08b54e9a935060bb55474d3b113f71b39b0a4b72c8083d19af9a000a91ac0826
    3. Distance [integer dec]:                                  1
    4. Context [256bit word hex]:                               0x0000000000000000000000000000000000000000000000000000000000000000
    5. SHA3 256-bit hash of the file [only for redistributions in binary form, else "Not Applicable"]:  Not Applicable
###############################################################################
D. Instructions for updating Section C:
    The file modifier must:
        1. Replace the pubblic key (C.2) value with a ed25519 public key (related to a hypercore acting as a oo.computer signal chain), in hex notation, under the control of the modifier.
        2. Increment the Distance (C.3) value by 1.
        3. Replace the Context (C.4) value as follows:
                i. Calculate the "idea" id, a 256-bit word, of the unmodified version of the file:
                        unmodifiedIdea = 0x4d4544<MEDIA-TYPE-SHA1>[0..72]<unmodified-file-SHA1>
                            where:  <MEDIA-TYPE-SHA1>[0..72] is the first 72 bits of the SHA1 hash of the modified file's media type (section D.) e.g. SHA1("text/javascript")
                                    <unmodified-file-SHA1> is the SHA1 hash of the original file.
                ii. Calculate the new context value, newContext:
                        newContext = BitwiseRotateLeft(3*d,BitwiseXOR(BitwiseRotateRight(3*d,unModifiedContext),unmodifiedIdea))
                            where:  d is the Distance value from Section C.3 of the unmodified file.
                                    unModifiedContext is the Context value from Section C.4 of the unmodified file.
                                    unmodifiedIdea is as calculated in D.3.i.
                iii. Replace the Context (C.4) value in the modified file with newContext from D.3.ii.
        3. For redistributions in binary form, update the file's SHA3 256 hash (C.5) value with the SHA3-256 hash of the modified file.
###############################################################################
E. Instructions for signalling value
    1.  i. Calculate the "idea" id, a 256 bit word, of the modified file:
              modifiedIdea = 0x4d4544<MEDIA-TYPE-SHA1>[0..72]<Modified-file-SHA1>
                  where:  <MEDIA-TYPE-SHA1>[0..72] is the first 72 bits of the SHA1 hash of the modified file's media type (section D.) e.g. SHA1("text/javascript")
                          <Modified-file-SHA1> is SHA1 hash of the modified file.
        ii. Calculate the "prospectiveContext" id, a 256 bit word, for the value signal:
              prospectiveContext = BitwiseRotateLeft(3*d,BitwiseXOR(BitwiseRotateRight(3*d,modifiedContext),modifiedIdea))
                  where:  d is the Distance value from Section C. of the modified file.
                          modifiedContext is the Context value from Section C. of the modified file.
                          modifiedIdea is as calculated in E.2.i.
        iii. Make sure the file is kept available via the ipfs network, and that the ipfs content identifier is written into the associated oo.computer value signal (see section E.2).
    2. Create, and make available via the hypercore protocol network, an oo.computer value signal stored in a hypercore with the modifier's key (Section C.2 of the modified file)
              where:  the d parameter is the Distance value from Section C. of the modified file.
                      the context parameter is the Context value from Section C. of the modified file.
                      the idea paramenter is the modifiedIdea calculated in E.1.i.
                      the prospectiveContext parameter is as calculated in E.1.ii.
                      the ipfs parameter is the ipfs content identifier of the modified file.
    3. In the case of binary distribution, repeat E.1, and E.2 with the modified licence file [the above copyright notice and this text (Sections A., B., C., D., and E. with Section C. modified as per A.2.iii)] in place of Modified-file
###############################################################################
*/
let idea_proc = function(context,prospective,distance,x=0,name="idea",cla='base'){
  name = String(name)
let description = `Mangages idea: ${name}`
let idea_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${cla}`,
  content: `<style>
                #${name} {display:none;left:${x}px;}
                #${name}_content {overflow: visible;font-size:10px;}
                #${name}title {position: relative;display:grid;grid-template: 25% 25% 25% 25% 25px/ 100px auto;width:100%;align-self:center;height: 100%;}
                #${name}idea { font-size:30px;text-align: center;grid-area: 1 / 1 / 5 / 3;padding-left:0px;padding-right:0px;position: absolute;clip: rect(0px,300px,150px,0px);height: 100%;width: 100%; display: grid;align-items:center;justify-items:center;align-content: center;grid-template: 100% / 100%;}
                #${name}desc {display:none;}
                #${name}_rank {display:none;}
                #${name}_ranktotal {display:none;}
                /* container for the +1, +10.. options*/
                #${name}updowninputter {grid-area: 1 / 1 / 2 / 3;overflow: scroll;scrollbar-width: none;border: solid 0px; background-color: rgb(7, 87, 191); display:none;grid-template:auto / repeat(8, auto);grid-gap:0px;background-color: transparent;justify-content:space-around;z-index:1;position: relative;top:153.5px;background-color: transparent;height: 30px; max-width:300px;/*box-shadow: black 0px 0px 1px 1px;border-bottom:0px;*/}


                #${name}updowninputter::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}down100000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}
                #${name}down10000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}
                #${name}down1000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}
                #${name}down100{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}
                #${name}down10{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}
                #${name}down1{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}
                #${name}mid{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}
                #${name}bin{border:0px;background-color:transparent;}/*will be discard selector in future*/
                #${name}up01{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;display:none;}
                #${name}up1{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;display:none;}

                #${name}fullscreen{width:100%;justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;border: 0px;    border-top: 0.2px black;}
                #${name}discard{width:100%;justify-self:center;align-self:center;text-align:center;background-color:orange;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;border: 0px;    border-top: 0.2px black;}
                #${name}up1000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:lightgreen;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;border: 0px;    border-top: 0.2px black;}
                #${name}up10000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:green;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;border: 0px;    border-top: 0.2px black;}
                #${name}up100000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;display:none;}
                #${name}up1000000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;display:none;}

                #${name}up01:hover{width:100%;background-color:#71a65d;}
                #${name}up1:hover{width:100%;background-color:#71a65d;}
                #${name}fullscreen:hover{width:100%;background-color:lightgray;border: 0px;width:44px;    border-top: 0.2px black;}
                #${name}discard:hover{width:100%;background-color:red;border: 0px;width:44px;    border-top: 0.2px black;}
                #${name}up1000:hover{width:100%;background-color:#71a65d;border: 0px;width:44px;    border-top: 0.2px black;}
                #${name}up10000:hover{width:100%;background-color:#71a65d;border: 0px;width:44px;    border-top: 0.2px black;}
                #${name}up100000:hover{width:100%;background-color:#71a65d;}
                #${name}up1000000:hover{width:100%;background-color:#71a65d;}
                #${name}minimise{grid-area: 1 / 1 / 2 / 2 ;justify-self:start;display:none;padding: 5px;
                  cursor: pointer;
                  padding-right: 5px;
                  height: 20px;}

                #${name}toRight{grid-area: 2 / 1 / 4 / 2;justify-self:start;align-self:center;display:none;padding: 5px;background-color:white;}
                #${name}SignalOverview{grid-area: 4 / 1 / 5 / 3;width:100%;justify-self:center;align-self:end;text-align:center;background-color:white;}

                /* down functionality to be added in future*/
              /*  #${name}down100000:hover{width:100%;background-color:lightgreen;}
                #${name}down10000:hover{width:100%;background-color:lightgreen;}
                #${name}down1000:hover{width:100%;background-color:lightgreen;}
                #${name}down100:hover{width:100%;background-color:lightgreen;}
                #${name}down10:hover{width:100%;background-color:lightgreen;}
                #${name}down1:hover{width:100%;background-color:lightgreen;}
                #${name}up1:hover{width:100%;background-color:lightgreen;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}
                #${name}fullscreen:hover{width:100%;background-color:lightgray;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}
                #${name}discard:hover{width:100%;background-color:red;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;border: 0px;}
                #${name}up1000:hover{width:100%;background-color:lightgreen;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;border: 0px;}
                #${name}up10000:hover{width:100%;background-color:lightgreen;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;border: 0px;}
                #${name}up100000:hover{width:100%;background-color:lightgreen;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;}*/




                #${name}toRight:hover{transform: scale(1.2)}

                @keyframes rotation {
                  from {
                    transform: rotate(359deg);
                    transform-origin: 12.5px 12.5px;
                  }
                  to {
                    transform: rotate(0deg);
                    transform-origin: 12.5px 12.5px;
                  }
                }

            </style>
            \<div id="${name}title">
                    \<div id="${name}desc"> \<b>${name}: \</b>${description}\</div>
                  <!--  \<div >

                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <polyline points="9 21 3 21 3 15"></polyline>
                                <line x1="21" y1="3" x2="14" y2="10"></line>
                                <line x1="3" y1="21" x2="10" y2="14"></line>
                                  </svg>
                    \</div>-->
                    \<div id="${name}idea">\</div>

                    \<div id="${name}updowninputter">

                    \<button id="${name}fullscreen">&#128470;\</button>
                    \<button id="${name}discard">&#128465;\</button>
                    \<button id="${name}up1000">+1\</button>
                    \<button id="${name}up10000">+10\</button>
                    \<button id="${name}up100000">100\</button>
                    \<button id="${name}up1000000">1K\</button>
                    \</div>



                    \<div id="${name}toRight">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 909.061 909.061" xml:space="preserve">
                        <g>
                        	<path d="M0,454.53c0,28.996,23.505,52.5,52.5,52.5h538.473l-42.252,41.748c-20.625,20.379-20.824,53.619-0.445,74.244   c10.27,10.395,23.805,15.602,37.348,15.6c13.328,0,26.666-5.045,36.896-15.154L754,493.556c9.904-9.785,15.518-23.105,15.6-37.029   c0.084-13.923-5.367-27.311-15.154-37.214L622.762,286.04c-20.379-20.624-53.617-20.826-74.244-0.445   c-20.625,20.379-20.824,53.619-0.445,74.244l41.689,42.192H52.5C23.505,402.031,0,425.536,0,454.53z"/>
                        	<path d="M856.561,215.72c-28.996,0-52.5,23.505-52.5,52.5v372.621c0,28.994,23.504,52.5,52.5,52.5c28.994,0,52.5-23.506,52.5-52.5   V268.22C909.061,239.225,885.555,215.72,856.561,215.72z"/>
                        </g>

                        </svg>
                    \</div>

\<div id="${name}minimise">
                                <button>&#128469;</button>
                      \</div>
\<div id="${name}SignalOverview">\</div>
            \</div>
                      `,
  objectDefs : `


                let contextTotal
                let hasFilter
                let isHidden
                let isTop
                let pendamt
                let filterColours = {}
                let fullScreen
                let FullScreenMode = false
                let colours
                let nofilters
                let maxProp
                let uel
                let del

                let i
                let runtot
                let filters

                let videoAdded = false

                async function stringFromBlob(blob){
                  var url = URL.createObjectURL(blob)
                  let str = await fetch(url).then(r => r.text())
                  return str
                }

                //mediaObj is a global object that stores media indexed by idea
                if (Object.keys(mediaObj).includes(idea)){
                  if(Object.keys(MIMEObj).includes(idea.slice(8,26))){
                    let el = document.getElementsByClassName("${name}idea")
                    while (el.lastElementChild) {el.removeChild(el.lastElementChild); }
                    if (mediaObj[idea]){
                        if (mediaObj[idea].type == "text/html"){
                          let d = document.createElement("div");
                          d.style.cssText += " /*font-size: 10px; */     height: 100%; width: 100%;    grid-area: 1 / 1 / 2 / 2;    display: grid;    grid-template: repeat(5,calc(20% - 1px)) / repeat(10,calc(10% - 1px));    grid-gap: 1px;    background-color: white;"
                          d.innerHTML = await stringFromBlob(mediaObj[idea])
                          document.getElementById("${name}idea").appendChild(d)
                          document.getElementById("${name}idea").style["font-size"] = "10px"
                        }
                        else if (!(videoAdded)){
                            let video = document.createElement("VIDEO");
                            video.setAttribute("width", "250");
                            video.setAttribute("controls", "controls");
                            video.style.cssText += "object-fit: cover;width: 300px;"
                            video.src = URL.createObjectURL(mediaObj[idea]);
                            document.getElementById("${name}idea").appendChild(video)
                            videoAdded = true
                        }
                    }
                    
                  }
                }
                else if (idea.slice(0,8)=="0x7c7c7c"){
                            document.getElementById("${name}idea").innerHTML = stringifyHex(idea)
                }


                msgIndex++
                 window.api.send('media:get'+'.'+String(msgIndex),['default',idea])
               
                let a = await new Promise(r => {window.api.receive('media:get_response'+'.'+String(msgIndex),(result)=>{r(result)})})
                //a = await IdeaValueTree.readdir('')
                console.log('got media', a)
                if (a[0]){
                    let wordObj = a//await IdeaValueTree.readFile(idea)
                   //wordObj = JSON.parse(wordObj)
                   // if (Object.keys(wordObj).includes('blob')){
                        let blob = b64toBlob(a[0],a[1])
                        let video = document.createElement("VIDEO");
                        video.setAttribute("width", "250");
                        video.setAttribute("controls", "controls");
                        video.style.cssText += "object-fit: cover;width: 300px;"
                        video.src = URL.createObjectURL(blob);
                        document.getElementById("${name}idea").appendChild(video)
                   // }
                }




                let rootcontextMan
                // the root of the tree of words,
                if (!isMeta){
                  rootcontextMan = "_"+metaooManagerProspective+"_"+XORcontextidea(metaooManagerProspective,"0x0000000000000000000000000000000000000000000000000000000000000000",metaoodistance) //"_"+String(hexifyString('context'))+"_0x0000000000000000000000000000000000000000000000000000000000000000";
                }
                else {
                  rootcontextMan = "_"+metaooManagerProspective+"_"+XORcontextidea(metaooManagerProspective,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",metaoodistance) //"_"+String(hexifyString('context'))+"_0x0000000000000000000000000000000000000000000000000000000000000000";
                }


                // The following functions respond to clicks on the value signalling boxes. Send notifications to the pending Transaction manager and self (to inform user)

                function ${name}up1000000_click(e){
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["${XORcontextprospective(context,prospective,distance)}"],"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 1000000000000000000000,"to":[thisContextMan],"from":"${name}"}});
                      //send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 1000000000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}});
                      pendamt += 1000000000000000000000


                }
                document.getElementById("${name}up1000000").addEventListener("click",${name}up1000000_click);
                function ${name}up100000_click(e){
                      //send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 10,"to":[txtToOOId("pendingTx")],"from":"${name}"}});
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["${XORcontextprospective(context,prospective,distance)}"],"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 10,"to":[thisContextMan],"from":"${name}"}});
                      pendamt += 10


                }
                document.getElementById("${name}up100000").addEventListener("click",${name}up100000_click);

                function ${name}up10000_click(e){
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["${XORcontextprospective(context,prospective,distance)}"],"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 10,"to":[thisContextMan],"from":"${name}"}});
                      pendamt += 10
                }
                document.getElementById("${name}up10000").addEventListener("click",${name}up10000_click);

                function ${name}up1000_click(e){
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["${XORcontextprospective(context,prospective,distance)}"],"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 1,"to":[thisContextMan],"from":"${name}"}});
                      pendamt += 1

                }
                document.getElementById("${name}up1000").addEventListener("click",${name}up1000_click);

                function ${name}discard_click(e){
                      send({"jsonrpc":"2.0","method":"DiscardSignal","params":{"chain":["${XORcontextprospective(context,prospective,distance)}"],"context":"${context}","prospective":"${prospective}","distance":distance,"to":[thisContextMan],"from":"${name}"}});
                      pendamt = 0

                }
                document.getElementById("${name}discard").addEventListener("click",${name}discard_click);

                // This handles what happens to transfor an oo to fullscreen on user click on the fullScreen icon.
                function ${name}fullscreen_click(){
                  document.getElementById("${name}minimise").style.cssText += ' display:grid;'

                  fullScreen = true;
                  // inform context manager in fullscreen mode
                  send({"jsonrpc":"2.0","method":"fullScreenModeOn","params":{"to":[thisContextMan],"from":"${name}"}});
                  document.getElementById("${name}idea").style.cssText += "position:unset;clip:none;width:unset;height:unset;"
                  let tel = document.getElementById("${name}_content")
                  tel.style.cssText += \` position: absolute;max-width:none;max-height:none;width:100vw;height:100vh;top:-1px;left:-1px;z-index:1;overflow:auto;font-size:\${10 * window.innerWidth / 300}px;\`
                  let main = document.getElementById('main')
                  main.appendChild(tel)
                  //document.getElementById("${name}idea").style['font-size'] = String(window.innerWidth/10) + 'px'

                }
                document.getElementById("${name}fullscreen").addEventListener("click",${name}fullscreen_click);





                // When fullscreen, the minimise icon is shown. This handles the click  -minimising the oo.
                function ${name}minimise_click(e){
                      fullScreen = false;
                      // inform context manager not in fullscreen mode
                      send({"jsonrpc":"2.0","method":"fullScreenModeOff","params":{"to":[thisContextMan],"from":"${name}"}});
                      document.getElementById("${name}idea").style.cssText += "position:absolute;clip:rect(0px,300px,150px,0px);width:100%;height:100%;"
                      let tel = document.getElementById("${name}_content")
                      tel.style.cssText += " font-size: 10px;position:unset;max-width:300px;max-height:150px;width:300px;height:150px;top:none;left:none;z-index:none;overflow:unset;"
                      document.getElementById("${name}minimise").style.cssText += ' display:none;'

                      let main = document.getElementById("${name}")
                      main.appendChild(tel)
                      //document.getElementById("${name}idea").style['font-size'] = String(30) + 'px'
                }
                document.getElementById("${name}minimise").addEventListener("click",${name}minimise_click);

                /* Now commented but kept as future possibility, an action to show oo as "half screen"
                function ${name}toRightIcon_click(e){
                      document.getElementById("${name}minimise").style.cssText += ' display:none;'

                      //document.getElementById('${name}toRight').style.cssText += " display: none;"
                      sideScreen = true;
                      let tel = document.getElementById("${name}_content")
                      tel.style.cssText += " position: absolute;max-width:none;max-height:none;width:50vw;height:50vh;top:-1px;left:-1px;z-index:1;"
                      let main = document.getElementById('side')
                      main.style.cssText += ' display:grid;'
                      main.appendChild(tel)
                }
                document.getElementById("${name}toRight").addEventListener("click",${name}toRightIcon_click);*/

                // on scroll, msgs context manager which updates layout if necessary
                let justScrolled = false  // flag to stop erroneous mouseout event message being setn to context manager.
                function ${name}_scroll(e){
                  justScrolled = true
                  if (e.deltaY >0){
                    send({"jsonrpc":"2.0","method":"ShiftUp","params":{context:"${context}","to":[thisContextMan],"from":"${name}"}});
                  }
                  else {
                    send({"jsonrpc":"2.0","method":"ShiftDown","params":{context:"${context}","to":[thisContextMan],"from":"${name}"}});
                  }
                  send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                  setTimeout(function () {
                    justScrolled = false;
                    send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                  }, 100);

                }
                document.getElementById("${name}_content").addEventListener("wheel",${name}_scroll);

                // on hover, msgs context manager which updates layout if necessary, display value signaling options
                function ${name}_content_hover(e){
                    if (!(isHidden)){
                      send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                    }
                    if (isTop && !fullScreen){
                      document.getElementById('${name}updowninputter').style.cssText += " display: flex;"
                      document.getElementById('${name}_rank').style.cssText += " display: grid;"
                      document.getElementById('${name}_ranktotal').style.cssText += " display: grid;"
                      //document.getElementById('${name}toRight').style.cssText += " display: grid;"
                    }
                    else {
                      document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                      document.getElementById('${name}_rank').style.cssText += " display: none;"
                      document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                    }
                    send({"jsonrpc":"2.0","method":"slideDownInput","params":{"to":["_"+"${context}"+"_"+"0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}"}});

                }
                document.getElementById("${name}_content").addEventListener("mouseover",${name}_content_hover);


                // on mouseout from the content box, hides icons and msgs context manager which updates layout if necessary
                function ${name}_content_mouseout(e){
                    document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                    document.getElementById('${name}_rank').style.cssText += " display: none;"
                    document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                    //document.getElementById('${name}toRight').style.cssText += " display: none;"
                    if (!(isHidden)){
                      let mousedownwards = (e.clientY > window.innerHeight - 420 + 160) ? true : false;
                      if (!mousedownwards) send({"jsonrpc":"2.0","method":"slideUpInput","params":{"to":["_"+"${context}" + "_"+"0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}"}});
                      if (!justScrolled) {
                            send({"jsonrpc":"2.0","method":"MOUSEOUT","params":{"to":[thisContextMan],"from":"${name}"}})
                      }
                    }
                }
                document.getElementById("${name}_content").addEventListener("mouseout",${name}_content_mouseout);

                // on mouseout from entire element, hides icons
                function ${name}_mouseout(e){
                    document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                    document.getElementById('${name}_rank').style.cssText += " display: none;"
                    document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                    //document.getElementById('${name}toRight').style.cssText += " display: none;"

                }
                document.getElementById("${name}").addEventListener("mouseout",${name}_mouseout);


                // on mouseout from right element, hides icons - picks up occasion miss from browser for content box mouseout()??)
                function ${name}_right_mouseout(e){
                      document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                      document.getElementById('${name}_rank').style.cssText += " display: none;"
                      document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                      //document.getElementById('${name}toRight').style.cssText += " display: none;"
                }
                document.getElementById("${name}_right").addEventListener("mouseout",${name}_right_mouseout);


                // on mouseout from left element, hides icons - picks up occasion miss from browser for content box mouseout()??)
                function ${name}_left_mouseout(e){
                      document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                      document.getElementById('${name}_rank').style.cssText += " display: none;"
                      document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                      //document.getElementById('${name}toRight').style.cssText += " display: none;"
                }
                document.getElementById("${name}_left").addEventListener("mouseout",${name}_left_mouseout);

                // on click of left side of icon. toggle expand or collapse msg to context manager
                function ${name}_left_click(e){
                    let tel = document.getElementById('${name}_content');
                    let ymsg
                    let relX = e.clientX - el.getBoundingClientRect().left
                    let relY = e.clientY - el.getBoundingClientRect().top

                    if(tel.style.display=='none' || tel.style.display==' none'){
                        isHidden = false;
                        send({"jsonrpc":"2.0","method":"CLICK-Xpand","params":{"to":[thisContextMan],"from":"${name}"}})
                      }
                    else{
                      isHidden = true;
                        send({"jsonrpc":"2.0","method":"CLICK-Collapse","params":{"to":[thisContextMan],"from":"${name}"}})
                    }
                }
                document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

                // Handles a click on the right side of the icon. This messages contextCurator and filterCurator to add a new context to the blockchain filters, tells context manager to update layout.
                function ${name}_right_click(e){
                  let sl = window.scrollX
                  let el = document.getElementById("${name}_right");
                  let l = Number(document.getElementById("${name}").style.left.split('px')[0]) + 10;
                      if(!(hasFilter)){
                        let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,selfProspective,metaoodistance);
                        send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance)+1,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                        send({"jsonrpc":"2.0","method":"newContext","params":{"context":selfProspective,"parentContext":"${context}","distance":"${distance}","isForMeta":isMeta,"to":[txtToOOId("contextCurator"),txtToOOId("filterCurator")],"from":"${name}"}});
                        send({"jsonrpc": "2.0", "method": 'newPath',params:{"path":thisPath + "/${prospective}","context": "${prospective}", "to":[txtToOOId("filterCurator")], "from": "${name}"}})
                        send({"jsonrpc":"2.0","method":"setPath","params":{"path":thisPath + "/${prospective}","to":['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,"${prospective}",metaoodistance)],"from":"${name}"}})


                        setTimeout(function () {
                          send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-14,"to":[rootcontextMan],"from":"${name}"}})
                        }, 10);
                        hasFilter = true;
                        //window.scrollTo(document.getElementById("${name}").getBoundingClientRect().right,0)

                        let left = window.pageXOffset
                        let right = left + window.innerWidth

                        // scroll viewport if necessary
                        setTimeout(function () {
                                if  (l + (2 * 374) > sl + window.innerWidth + 100){
                                      window.scrollBy(330,0)
                                      //window.scrollTo(document.getElementById("${name}").getBoundingClientRect().left+45,0)
                                }
                        }, 2000);

                    }


                  // This last part of the function makes the right prospective icon spin for 10 seconds.
                  let ccel = el.getElementsByClassName('prospectiveiconparent')[0];
                  let ccelchild = ccel.childNodes[2];
                  ccelchild.style.cssText = "animation: rotation 2s infinite linear;";
                  setTimeout(function () {
                    ccelchild.style.cssText = "animation: none;";
                }, 10000);

                }
                document.getElementById("${name}_right").addEventListener("click",${name}_right_click);

                //this takes the same action as if the user had clicked the righ side of this oo's icon (creates a new live context)
                function simulate_right_click(){
                  let el = document.getElementById("${name}_right");
                      if(!(hasFilter)){
                        let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,selfProspective,metaoodistance);
                        send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance)+1,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                        send({"jsonrpc":"2.0","method":"newContext","params":{"context":selfProspective,"parentContext":"${context}","distance":"${distance}","isForMeta":isMeta,"to":[txtToOOId("contextCurator"),txtToOOId("filterCurator")],"from":"${name}"}});
                        setTimeout(function () {
                          send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-14,"to":[rootcontextMan],"from":"${name}"}})
                        }, 10);
                        hasFilter = true;
                    }

                  // This last part of the function makes the right prospective icon spin for 2 seconds.
                  try{
                            let ccel = el.getElementsByClassName('prospectiveiconparent')[0];
                            let ccelchild = ccel.childNodes[2];
                            ccelchild.style.cssText = "animation: rotation 2s infinite linear;";
                            setTimeout(function () {
                            ccelchild.style.cssText = "animation: none;";

                        }, 2000);
                  }
                  catch{}

                }


                // this function sets a flag to indicate if this oo is presently at the front of the layout.
                function setTop(val){
                  if (val){
                    isTop = true;
                    /*if(FullScreenMode){ ${name}fullscreen_click()}
                    else { ${name}minimise_click()}*/
                  }
                  else {
                    isTop = false;
                    //make sure not fullscreen
                    //${name}minimise_click()
                  }
                }

                let hasChildren = false;

                // Add the receiver will drop duplicate messages (oldest first) for methods in dropObj:
                //dropObj['Signal'] = true;  // note the context manager always sends the full array encapsulating all past signals to this oo.
                dropObj['SETTOP'] = true;
                dropObj['shiftBack'] = true;


              // initialise as expanded content.
              document.getElementById("${name}_content").style.cssText += ' display: grid;'



                // asks the content getter oo to interpret this oo's idea.
                send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":"${XORcontextprospective(context,prospective,distance)}","context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});

                let yprev = 0
                // rudimentary touchscreen support. Not yet tested out.
                function ${name}touchmove(e){
                  if(e.touches[0].screenY > yprev+10){
                    // as scrolldown
                    justScrolled = true

                      send({"jsonrpc":"2.0","method":"ShiftUp","params":{context:"${context}","to":[thisContextMan],"from":"${name}"}});
                      yprev = e.touches[0].screenY
                  }
                  else if(e.touches[0].screenY < yprev-10){
                      //as scrollup
                      justScrolled = true
                      send({"jsonrpc":"2.0","method":"ShiftDown","params":{context:"${context}","to":[thisContextMan],"from":"${name}"}});
                      yprev = e.touches[0].screenY
                }

                send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                setTimeout(function () {
                  justScrolled = false;
                  send({"jsonrpc":"2.0","method":"MOUSEOUT","params":{"to":[thisContextMan],"from":"${name}"}})
                }, 2000);

                }
                document.getElementById("${name}").addEventListener("touchmove",${name}touchmove);

                setTimeout(function () {
                       document.getElementById("${name}_leftSignalMask").style.cssText += "display:grid;"
                       document.getElementById("${name}_rightSignalMask").style.cssText += "display:grid;"
                }, 500);

                let thisPath = '0x0000000000000000000000000000000000000000000000000000000000000000'
                let ideatxt = stringifyHex(XORcontextprospective("${context}","${prospective}","${distance}"))

                let isUpdated = false
                let counter = 0
                let looptime = 5000


                setInterval(async function () {
                  let contextaddr
                  let ideaaddr
                  let prospectiveaddr
                  msgIndex++
                 window.api.send('IdeaValueTree:get'+'.'+String(msgIndex),['default',"${context}"])
                let a = await new Promise(r => {window.api.receive('IdeaValueTree:get_response'+'.'+String(msgIndex),(result)=>{r(result)})})
                  //let a = await IdeaValueTree.readdir('')
                  if (a){
                    let wordObj = a//await IdeaValueTree.readFile("${context}")
                    wordObj = JSON.parse(wordObj)
                    if((Object.keys(wordObj).includes("Owner"))){
                      contextaddr = wordObj.Owner
                    }
                    else {
                      contextaddr = '0x0000000000000000000000000000000000000000000000000000000000000000'
                      counter++
                    }
                  }
                    window.api.send('IdeaValueTree:get'+'.'+String(msgIndex),['default',"${prospective}"])
                    a = await new Promise(r => {window.api.receive('IdeaValueTree:get_response'+'.'+String(msgIndex),(result)=>{r(result)})})
                  if (a){
                      wordObj = a//await IdeaValueTree.readFile("${prospective}")
                      wordObj = JSON.parse(wordObj)
                      if((Object.keys(wordObj).includes("Owner"))){
                        prospectiveaddr = wordObj.Owner
                      }
                      else {
                        prospectiveaddr = '0x0000000000000000000000000000000000000000000000000000000000000000'
                        counter++
                      }
                  }
                    window.api.send('IdeaValueTree:get'+'.'+String(msgIndex),['default',idea])
                    a = await new Promise(r => {window.api.receive('IdeaValueTree:get_response'+'.'+String(msgIndex),(result)=>{r(result)})})
                  if (a){
                      wordObj = a//await IdeaValueTree.readFile(idea)
                      wordObj = JSON.parse(wordObj)
                      if((Object.keys(wordObj).includes("Owner")))
                      {
                        ideaaddr = wordObj.Owner

                      }
                      else {
                        ideaaddr = '0x0000000000000000000000000000000000000000000000000000000000000000'
                        counter++
                      }
                }





                  if(counter<3) send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": "${context}","idea": idea,"prospective": "${prospective}","prospectiveaddr": prospectiveaddr,"contextaddr": contextaddr,"ideaaddr": ideaaddr,"hideIdea":false,"isProspectiveAnAddress":false,"isContextAnAddress":false,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" });

                  counter=0
                  looptime = 5000

                  setTimeout(function () {
                    document.getElementById("${name}_right").addEventListener("click",${name}_right_click)
                  }, 500);
                }, looptime);

                let tel
                let main

                setTimeout(async function() {
                    //mediaObj is a global object that stores media indexed by idea
                        if (Object.keys(mediaObj).includes(idea)){
                                if(Object.keys(MIMEObj).includes(idea.slice(8,26))){
                                        let el = document.getElementsByClassName("${name}idea")
                                        while (el.lastElementChild) {el.removeChild(el.lastElementChild); }
                                        if (mediaObj[idea]){
                                            if (mediaObj[idea].type == "text/html"){
                                              let d = document.createElement("div");
                                              d.style.cssText += "   /*font-size: 10px; */    height: 100%;width: 100%;    grid-area: 1 / 1 / 2 / 2;    display: grid;    grid-template: repeat(5,calc(20% - 1px)) / repeat(10,calc(10% - 1px));    grid-gap: 1px;    background-color: white;"
                                              d.innerHTML = await stringFromBlob(mediaObj[idea])
                                              document.getElementById("${name}idea").style["font-size"] = "10px";
                                              document.getElementById("${name}idea").appendChild(d)
                                            }
                                            else if (!(videoAdded)){
                                                let video = document.createElement("VIDEO");
                                                video.setAttribute("width", "250");
                                                video.setAttribute("controls", "controls");
                                                video.style.cssText += "object-fit: cover;width: 300px;"
                                                video.src = URL.createObjectURL(mediaObj[idea]);
                                                document.getElementById("${name}idea").appendChild(video)
                                                videoAdded = true
                                            }
                                        }
                                }
                        }
                        else if (idea.slice(0,8)=="0x7c7c7c"){
                            document.getElementById("${name}idea").innerHTML = stringifyHex(idea)
                        }
                }, 1000);
  `,
  RESULTcases : `

                /* INTERPRET:   results from content getter, should be html for display in content div. Sets content html.
                */

                  case 'INTERPRET':
                      if (msg.result.fmt == 'CHR'){
                        document.getElementById("${name}idea").style.cssText += ' align-self: center;justify-self: center;'
                      }
                      if (msg.result.fmt == 'VID'){

                      }
                      document.getElementById("${name}idea").innerHTML = msg.result.html;
                      break;
                  case 'getAddressAmountsForContext':
                      break;

  `
                    ,
  METHODcases : `
  /*
      setDistanceAsIdea:  Used to set the distance of this oo. Used to workout the code for interpretting, re-asks content getter oo for idea, in case distance was incorrectly initialised (e.g. due to msg dropping, or error else where)
      setRank:  Used to set the rank of this oo, in its context, based on the live filters. Updates the rank indicators.
      Signal:     a new signal from a filter for this idea, contains the latest information on the weighted contribution from each live filter. This is used to colour in the outer part of the oo's icon
      setColour   sets the filter colour for a specified filter
      setColours  sets the filter colour scheme
      setMetaStatus: tells this oo whether or not it's in the meta layout or the base.
      SETTOP: notifies this oo that it's at the front of the layout
      shiftBackAsIdea: Used to set the position of this oo in the layout.
      setasContext: notifies this oo that it has descendents in the layout.
      simulteClickOnRight: calls the simulate_right_click func which take the same action as if the user had clicked the righ side of this oo's icon (creates a new live context)

  */

  case 'setPath':
      // sets path in hyperdrive:

      thisPath = msg.params.path


  break;

      case 'setDistanceAsIdea':
        // Used to set the distance of this oo. Used to workout the code for interpretting, re-asks content getter oo for idea, in case distance was incorrectly initialised (e.g. due to msg dropping, or error else where)

          if (distance != msg.params.distance){
              distance = msg.params.distance;
              send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":XORcontextprospective(context,prospective,distance),"context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});
              send({"jsonrpc": "2.0", "method": "requestInitiators", "params": {"context": hexifyString("${context}"),"prospective": hexifyString("${prospective}"),"idea":XORcontextprospective(context,prospective,distance),"to":[txtToOOId("web3wsManager")],"from":"${name}"},"id": "requestInitiators" })
          }

      break;

      case 'fullScreenModeOn':
          //ooIdea:click(func/{}fullscreen_click()>>msg/fullScreenModeOn) -> ooContextManager:case(msg/fullScreenModeOn)
          //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftUp) -> ooContextManager:case(msg/fullScreenModeOn) -> ooContextManager:case(msg/fullScreenModeOn) -> here
          //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftDown) -> ooContextManager:case(msg/fullScreenModeOn) -> ooContextManager:case(msg/fullScreenModeOn) -> here
          fullScreen = true;
          document.getElementById("${name}minimise").style.cssText += ' display:grid;'
          document.getElementById("${name}idea").style.cssText += "position:unset;clip:none;width:unset;height:unset;"
          tel = document.getElementById("${name}_content")
          tel.style.cssText += " position: absolute;max-width:none;max-height:none;width:100vw;height:100vh;top:-1px;left:-1px;z-index:1;overflow:auto;"
          main = document.getElementById('main')
          main.appendChild(tel)


      break;
      case 'fullScreenModeOff':
          //ooIdea:click(func/{}minimise_click()>>msg/fullScreenModeOff) -> ooContextManager:case(msg/fullScreenModeOff)
          //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftUp) -> ooContextManager:case(msg/fullScreenModeOn) -> ooContextManager:case(msg/fullScreenModeOff) -> here
          //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftDown) -> ooContextManager:case(msg/fullScreenModeOn) -> ooContextManager:case(msg/fullScreenModeOff) -> here
          fullScreen = false;
          document.getElementById("${name}idea").style.cssText += "position:absolute;clip:rect(0px,300px,150px,0px);width:100%;height:100%;"
          tel = document.getElementById("${name}_content")
          tel.style.cssText += " position:unset;max-width:300px;max-height:150px;width:300px;height:150px;top:none;left:none;z-index:none;overflow:unset;"
          document.getElementById("${name}minimise").style.cssText += ' display:none;'
          main = document.getElementById("${name}")
          main.appendChild(tel)

      break;
      case 'setRank':
          //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager:case(func/setUserInteracting#timeout 1000#>>func/reCalcPositions) -> here
          //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftUp) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftDown) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(func/reCalcPositions) -> here
          document.getElementById("${name}_rank").innerHTML = String(msg.params.rank)
          document.getElementById("${name}_ranktotal").innerHTML = msg.params.ranktotal
      break;

      case 'setMetaStatus':
        //sets this as a manager of ideas in meta_mode
        if (msg.params.isForMeta){
            isMeta = true
            el.classList.add('meta');
            el.classList.remove('base');
          }
          else {
            isMeta = false;
            el.classList.add('base');
            el.classList.remove('meta');
          }
      break;

      case 'Signal':
            //ooPendingTxManager:click(send_signal-discard) -> ooHyperManager:case(DiscardSignal) -> ooContextManager:case(refreshPath) -> ooFilterCurator:case(newPath) ->  ooFilter:case(newPath)... -> ooContextCurator:case(SignalForContextCurator) -> ooContextManager:case(Signal) -> here
            //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext>>func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(/msg/Signal) -> ooContextManager:case(msg/Signal) -> here
            //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(msg/Signal) -> here
            //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(msg/Signal) -> here
            //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(msg/Signal) -> here
            // a new signal from a filter for this idea, contains the latest information on the weighted contribution from each live filter. This is used to colour in the outer part of the oo's icon
            nofilters = Object.keys(msg.params.filterObj).length -1
            maxProp = msg.params.maxProp//1/
            //update filter colour indicators:
            uel = document.getElementById(\`\${name}_upFlagsL\`);
            del = document.getElementById(\`\${name}_upFlagsR\`);
            uel.innerHTML = \`<rect x="0%" y ="0" width="100%" height="116" fill="white" clip-path="url(#${name}flagtrim)" />\`
            del.innerHTML = \`<rect x="0%" y ="0" width="100%" height="116" fill="white" clip-path="url(#${name}flagtrim)" />\`
            i = 0;
            runtot = 0
            filters = Object.keys(msg.params.filterObj).sort()
            filters.forEach((f)=>{

                  if (f.length > 30){
                          if (runtot < 0.5){ //colour in the left of the icon...
                                  if ((runtot + (msg.params.filterObj[f]/maxProp)) > 0.5) {
                                          let leftwidth =  0.5 - runtot
                                          let rightwidth = (msg.params.filterObj[f]/maxProp) - leftwidth
                                          uel.innerHTML += \`<rect x="\${runtot*2*100}%" y ="0" width="\${leftwidth*100*2}%" height="116" fill="\${(f in filterColours) ? filterColours[f] : "black"}" class="\${'filterColour:'+f}" clip-path="url(#${name}flagtrim)" />\`
                                          del.innerHTML += \`<rect x="\${50}%" y ="0" width="\${rightwidth*100}%" height="116" fill="\${(f in filterColours) ? filterColours[f] : "black"}" class="\${'filterColour:'+f}" clip-path="url(#${name}flagtrim)" />\`

                                  }
                                  else {
                                          //colour in the left of the icon...
                                          uel.innerHTML += \`<rect x="\${(runtot)*2*100}%" y ="0" width="\${(msg.params.filterObj[f]*2*100/maxProp)}%" height="116" fill="\${(f in filterColours) ? filterColours[f] : "black"}" class="\${'filterColour:'+f}" clip-path="url(#${name}flagtrim)" />\`
                                  }
                          }
                          else {
                            //colour in the remaining portion of right of the icon...
                                  del.innerHTML += \`<rect x="\${(runtot)*100}%" y ="0" width="\${msg.params.filterObj[f]*2*100/maxProp}%" height="116" fill="\${(f in filterColours) ? filterColours[f] : "black"}" class="\${'filterColour:'+f}" clip-path="url(#${name}flagtrim)" />\`

                          }
                          i++
                          runtot += msg.params.filterObj[f]/maxProp
                  }
            })
            // this updates the curvyness of the icon at the top and bottom.
            //send({"jsonrpc": "2.0", "method": "UPDATECURVES", "params": {"val":runtot,"to":["${name}"],"from":"${name}"}})

        break;

        case 'SETTOP':
            //notifies this oo that it's at the front of the layout
            setTop(msg.params.isTop)
        break;

        case "shiftBackAsIdea":
            //Used to set the position of this oo in the layout.
            //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
            //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/setUserInteracting#timeout 1000#>>func/reCalcPositions) -> here
            //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftUp) -> ooContextManager:case(func/reCalcPositions) -> here
            //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftDown) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(func/reCalcPositions) -> here
          //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(func/reCalcPositions) -> here
            // relay MOVEYZ to self

            //if z <0 then check if has children
            if (msg.params.z < 0){
              send({"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}})
                if (hasChildren){
                  let rightpos = el.getBoundingClientRect().right;
                  send({"jsonrpc":"2.0","method":"shiftBack","params":{"x":String(rightpos),"y":msg.params.y,"z":msg.params.z,"to":["_"+String(hexifyString('context'))+"_"+String(XORcontextidea(hexifyString('context'),"${prospective}"),1)],"from":"${name}"}});
                }
                //setTimeout(function () {

                //}, 75);

                setTop(false)
              }
              else if (msg.params.z == 0){
                setTop(true)
                //setTimeout(function () {

                //}, 25);
                if (hasChildren){
                  send({"jsonrpc":"2.0","method":"atFront","params":{"to":["_"+String(hexifyString('context'))+"_"+String(XORcontextidea(hexifyString('context'),"${prospective}"),1)],"from":"${name}"}});
                }
                send({"jsonrpc": "2.0", "method": "SHOWADDRESSES", "params": {"to":["${name}"],"from":"${name}"}})
              }
              send({"jsonrpc":"2.0","method":"MOVEXYZ","params":{"x":msg.params.x,"y":msg.params.y,"z":msg.params.z,"to":["${name}"],"from":"${name}"}});
            //if has children, get right dim of self and inform context manager to shift back. uneeded now.
        break;

        case "setasContext":
            // notifies this oo that it has descendents in the layout.
             hasChildren = true;
        break;

        case 'setColour':
            //sets the filter colour for a specified filter
            filterColours[msg.params.filter] = msg.params.colour;
        break;

        case 'setColours':
              // sets colours for each of the filters
              //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext>>func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(/msg/Signal) -> ooContextManager:case(msg/spawn) -> ooSpawner:case(msg/setColours) -> here
              //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/setColours) -> ooContextCurator(msg/setColours) -> ooContextManager(msg/setColours) -> here
              //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(msg/spawn) -> ooSpawner:case(msg/setColours) -> here
              //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(msg/spawn) -> ooSpawner:case(msg/setColours) -> here
              //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(msg/spawn) -> ooSpawner:case(msg/setColours) -> here
              if (Object.keys(filterColours).length < Object.keys(msg.params.filterColours).length){
              filterColours = msg.params.filterColours;
              for (let f in filterColours){
                  let ellist = document.getElementById(\`\${name}_upFlagsL\`).getElementsByClassName("filterColour:" + f);
                  if(ellist.length ==1){ellist[0].fill = filterColours[f]}//\` background-color: \${filterColours[f]}\`;}
              }
              for (let f in filterColours){
                let ellist = document.getElementById(\`\${name}_upFlagsR\`).getElementsByClassName("filterColour:" + f);
                if(ellist.length ==1){
                    ellist[0].fill = filterColours[f]  //.style.cssText += \` background-color: \${filterColours[f]}\`;
                }
              }
            }
          break;

          case 'simulteClickOnRight':
                simulate_right_click()
          break;
                      `,
  STARTUPmessages : `[{"jsonrpc": "2.0", "method": "createSVG", "params": {"context": "${context}","idea": "${XORcontextprospective(context,prospective,distance)}","prospective": "${prospective}","to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" }]`,
  context: context,
  prospective: prospective

}
return base_template(idea_outerTemplateObj);
}
