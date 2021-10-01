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
let filterCurator_proc = function(context,prospective,distance,name="filterCurator",_class='meta'){
let description = `Filter Curator: keeps track of all the filters, routes new filter, colour scheme and layout messages.`
let filterCurator_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>filterCurator\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div>
                      `,
  objectDefs : `let toscreen = document.getElementById("${name}toscreen");


  function ${name}_left_click(){
    let tel = document.getElementById('${name}_content');
    let ymsg
    if(tel.style.display=='none'){
        tel.style.cssText += ' display:grid;'
        let xpmsg = {"jsonrpc":"2.0","method":"XPANDALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+String(XORcontextprospective(hexifyString('context'),"${context}"))],"from":"${name}"}};
        send(xpmsg);
      }
    else{
        tel.style.cssText += ' display:none;'
        let collmsg = {"jsonrpc":"2.0","method":"COLLAPSEALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+String(XORcontextprospective(hexifyString('context'),"${context}"))],"from":"${name}"}};
        send(collmsg);
    }
  }
  document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

let leftOffset = -14;
let metaLeftOffset = -14;

/********************************************************************************/

let hasChildren = false


let isTop = false;
function setTop(val){
  if (val){
    isTop = true;
  }
  else {
    isTop = false;
  }
}




function ${name}_content_hover(e){
    send({"jsonrpc":"2.0","method":"setLayoutState","params":{"setting":"isFixed","flag":true,"to":[parentcontextManId],"from":"${name}"}})
    if (!(isHidden)){
      send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[parentcontextManId],"from":"${name}"}})
    }
}
document.getElementById("${name}_content").addEventListener("mouseover",${name}_content_hover);
send({"jsonrpc":"2.0","method":"addideatoMetaManContext","params":{"prospective":"${prospective}","fromParent":true,"to":["_"+ metaooManagerProspective + "_" + XORcontextidea(metaooManagerProspective,metaooManagerProspective,metaoodistance)],"from":"${name}"}});




let parentcontextManId = thisContextMan
function ${name}_scroll(e){
  if (e.deltaY >0){
    send({"jsonrpc":"2.0","method":"ShiftUp","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}});
  }
  else {
    send({"jsonrpc":"2.0","method":"ShiftDown","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}});
  }
}
document.getElementById("${name}").addEventListener("wheel",${name}_scroll);

function ${name}_content_mouseout(e){
    if (!(isHidden)){
      send({"jsonrpc":"2.0","method":"MOUSEOUT","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}})
    }
}
document.getElementById("${name}_content").addEventListener("mouseout",${name}_content_mouseout);

/********************************************************************************/


                let filterObj = {};
                let filterchain = ['0x0000000000000000000000000000000000000000000000000000000000000000']
                let metafilterchain = ['0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff']
                let addressObj = {"0x000000000000000000000000f962a476089faa4c4d447e4e34ba2b52df86ca71":{}}
                let contextObj = {}
                filterColours = {}
                let colours = ["grey","tomato","khaki","lightgreen","dodgerblue","plum","black"].reverse(); //["lightblue","grey","lightblue"]//
                let endprospective = '0x0000000000000000000000000000000000000000000000000000000000000000'
                let metaendprospective = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
                let text
                let currentchain
                let createProc = (txt) => {
                  let jel = document.createElement('script');
                   jel.innerHTML = txt;
                  document.body.append(jel);
                }
                //const pause =  sec => new Promise(r => setTimeout(r, 1000 * sec))

                // The filters that define what to look up first are defined here:

                let id = mainKey //await IdeaValueTree.key
                id = '0x' +  id

               
               let filterObj2 = {}

               let thisooid = '0x' + mainKey

                //Initialise filters, To Do, read this in from URL
                let filterscontext = XORcontextidea(hexifyString('Filters'),hexifyString('FirstFilter'),1)
                let filterContext_me = XORcontextidea(XORcontextidea(hexifyString('Filters'),hexifyString('FirstFilter'),1),'0x' + mainKey,2)     //hexifyString('Filters')//'0x' + IdeaValueTree.key 
           
                let a = await IdeaValueTreeGet(filterContext_me) 

                if (!a){ 
                    let thisooprospective = XORcontextidea(filterContext_me,thisooid,3)
                    let wordObj = {}
                    wordObj.parent = filterscontext
                    wordObj.distance = 3
                    wordObj.children = [thisooid]
                    wordObj.isDiscarded = false
                    wordObj.isSignaller = false
                    wordObj.isFilter = false
                    wordObj.signallers = {}
                    wordObj.signallers[thisooid] = {}
                    wordObj.signallers[thisooid].rankedList = [thisooprospective]
                    wordObj.signallers[thisooid].totalsObj = {}
                    wordObj.signallers[thisooid].totalsObj[thisooprospective] = 1
                    wordObj.signallers[thisooid].propsObj = {}
                    wordObj.signallers[thisooid].propsObj[thisooprospective] = 1
                    wordObj.signallers[thisooid].total = 1  
                    //add initial filter:
                                    
                    filterlist = wordObj.children //signallers[thisooid]
                    wordObj = JSON.stringify(wordObj)
                    /*msgIndex++
                    window.api.send('getMainKey'+'.'+String(msgIndex),[])
                    let mainKey = await new Promise(r => {window.api.receive('getMainKey_response'+'.'+String(msgIndex),(result)=>{r(result)})}) */
                   /* filterlist.filter((v, i, a) => a.indexOf(v) === i).forEach((item, i) => {
                          let filtercontext = XORcontextidea(item,'0x' + mainKey,2)
                          console.log('LeeKey0x',filterlist,'0x' + mainKey,item)
                          send({"jsonrpc":"2.0","method":"newFilter","params":{"filterObj":{},"isMeta":false,"filter":"_"+ item + "_" + filtercontext ,"to":[txtToOOId("filterCurator")],"from":"${name}"}})
                    });*/
                    filterscontext = XORcontextidea(hexifyString('Filters'),hexifyString('lee'),1)
                    filterContext_lee = XORcontextidea(XORcontextidea(hexifyString('Filters'),hexifyString('lee'),1),'0x' + IdeaValueTree.key,2)   
                    let LeeKey0x = '0x' + LeeKey  //hexifyString('Filters')//
                    let mainKey0x = '0x' + mainKey
                    wordObj = {}
                    thisooprospective = XORcontextidea(filterContext_lee,LeeKey0x,3)
                    wordObj.parent = filterscontext
                    wordObj.distance = 3
                    wordObj.children = [LeeKey0x]
                    wordObj.isDiscarded = false
                    wordObj.isSignaller = false
                    wordObj.isFilter = false
                    wordObj.signallers = {}
                    wordObj.signallers[thisooid] = {}
                    wordObj.signallers[thisooid].rankedList = [thisooprospective]
                    wordObj.signallers[thisooid].totalsObj = {}
                    wordObj.signallers[thisooid].totalsObj[thisooprospective] = 1
                    wordObj.signallers[thisooid].propsObj = {}
                    wordObj.signallers[thisooid].propsObj[thisooprospective] = 1
                    wordObj.signallers[thisooid].total = 1
                    
                    filterlist = wordObj.children //signallers[thisooid]
                    wordObj = JSON.stringify(wordObj)
                    //filterlist.filter((v, i, a) => a.indexOf(v) === i).forEach((item, i) => {
                      let filterparent =  XORcontextidea(hexifyString('Filters'),hexifyString('FirstFilter'),1)
                      let filtercontext = XORcontextidea(filterparent,mainKey0x, 2)
                      send({"jsonrpc":"2.0","method":"newFilter","params":{"filterObj":{},"isMeta":false,"filter":"_"+ filterparent + "_" + filtercontext ,"to":[txtToOOId("filterCurator")],"from":"${name}"}})

                       send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["0x0000000000000000000000000000000000000000000000000000000000000000",hexifyString('Filters'),filterparent,filtercontext,XORcontextidea(filtercontext,LeeKey0x,3)].reverse(),"context":filtercontext,"prospective":XORcontextidea(filtercontext,LeeKey0x,3),"distance":3,"amt": 1,"to":[txtToOOId("pendingTx")],"from":"${name}"}})

                       send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["0x0000000000000000000000000000000000000000000000000000000000000000",hexifyString('Filters'),filterparent,filtercontext,XORcontextidea(filtercontext,mainKey0x,3)].reverse(),"context":filtercontext,"prospective":XORcontextidea(filtercontext,mainKey0x,3),"distance":3,"amt": 1,"to":[txtToOOId("pendingTx")],"from":"${name}"}})

                       send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["0x0000000000000000000000000000000000000000000000000000000000000000",hexifyString('Filters'),filterparent,filtercontext].reverse(),"context":hexifyString('Filters'),"prospective":filterparent,"distance":1,"amt": 1,"to":[txtToOOId("pendingTx")],"from":"${name}"}})

                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["0x0000000000000000000000000000000000000000000000000000000000000000",hexifyString('Filters'),filterparent,filtercontext].reverse(),"context":filterparent,"prospective":filtercontext,"distance":2,"amt": 1,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
                    //});

                }
                else {
                    let mainKey0x = '0x' + mainKey
let filterparent =  XORcontextidea(hexifyString('Filters'),hexifyString('FirstFilter'),1)
                      let filtercontext = XORcontextidea(filterparent,mainKey0x, 2)
                     send({"jsonrpc":"2.0","method":"newFilter","params":{"filterObj":{},"isMeta":false,"filter":"_"+ filterparent + "_" + filtercontext ,"to":[txtToOOId("filterCurator")],"from":"${name}"}})

                }


                //the filter that gets the "meta" ideas. The code that defines the site:



                // These are presently sent in the startup messages section of this oo.

                let tempmsg
                `,
  RESULTcases : ``
                    ,
  METHODcases : ` /*


                  newFilter: //creates a new filter and sets it in the layout.
                                params:
                                  filter: the id of the new filter
                                  isMeta: is the filter for the base layer [true], or meta.
                  newAddress: notification that a new address is to be put into a one or more of the filters. A new blockchain filter is prepared to retrieve any value signals from this new address, for all the contexts on record (in contextObj).
                                params:
                                    address: the address to add.
                  newContext:  Informs the filter curator of a new context. This is needed because, when a new address is added in any filter, a blockchain filter must be added for all the existing contexts in the layout.  This requests a new blockchain filter for all the known addressses, for the new context.
                                params:
                                    context: the context to add
                  */


                  case 'refreshContext':
                    //ooPendingTxManager:click(send_signal-discard) -> ooHyperManager(case-DiscardSignal) -> ooContextManager(case-refreshPath) -> here
                    //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> here
                    //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> here
                    // inform all of the filters of the context to refresh.
                    msg.params.to = Object.keys(filterObj)// new Array(f);
                    msg.params.from = "${name}";
                    send(msg)

                  break;


                  case 'refreshoos':
                      msg.params.to = Object.keys(filterObj)
                      msg.params.from = "${name}";
                      send(msg)

                  break;

                  case 'newFilter':
                  //creates a new filter and sets it in the layout.
                    if (!(msg.params.filter in filterObj)){
                            filterObj[msg.params.filter] = {};
                            filterColours[msg.params.filter] = colours.pop()
                            send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[txtToOOId("contextCurator")],"from":"${name}"}});
                            //if filter doesn't already exist, spawn filter...
                            if (msg.params.isMeta){
                              // if new filter is for the meta layer, put in filler oometa layer
                              send({"jsonrpc":"2.0","method":"spawnFiller","params":{"context":String(metaendprospective),"prospective":msg.params.filter.split('_')[1],"distance":1,"isMeta":true,"to":[txtToOOId('Spawner')],"from":"${name}"}})
                              metafilterchain.push(msg.params.filter.split('_')[1]);
                              metafilterchain.push(msg.params.filter.split('_')[2]);
                              currentchain = metafilterchain
                              send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":String(metaLeftOffset),"to":['_'+String(metaendprospective)+'_'+String(msg.params.filter.split('_')[1])],"from":"${name}"}});
                            }
                            else {
                              // if new filter is for the base layer, put filler oo in base layer layer
                              send({"jsonrpc":"2.0","method":"spawnFiller","params":{"context":String(endprospective),"prospective":msg.params.filter.split('_')[1],"distance":1,"isMeta":false,"to":[txtToOOId('Spawner')],"from":"${name}"}})
                              filterchain.push(msg.params.filter.split('_')[1]);
                              filterchain.push(msg.params.filter.split('_')[2]);
                              currentchain = filterchain
                              send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":String(leftOffset),"to":['_'+String(endprospective)+'_'+String(msg.params.filter.split('_')[1])],"from":"${name}"}});
                            }

                            // tracks the current x position of the end of the filter chain in the layout.
                            if (msg.params.isMeta){
                              metaLeftOffset += 35.5;
                            }
                            else {
                              leftOffset += 35.5;
                            }

                            let name = String(msg.params.filter);

                            
                            // put filter oo in meta/base layer as per isMeta flag
                           if (msg.params.isMeta){
                                send({"jsonrpc":"2.0","method":"spawnFilter","params":{"context":msg.params.filter.split('_')[1],"prospective":msg.params.filter.split('_')[2],"distance":1,"isMeta":true,"to":[txtToOOId('Spawner')],"from":"${name}"}});
                                send({"jsonrpc":"2.0","method":"setColour","params":{"colour":filterColours[msg.params.filter],"to":['_'+String(metaendprospective)+'_'+String(msg.params.filter.split('_')[1])],"from":"${name}"}});
                                metaendprospective = msg.params.filter.split('_')[2];

                            }
                            else {
                              send({"jsonrpc":"2.0","method":"spawnFilter","params":{"context":msg.params.filter.split('_')[1],"prospective":msg.params.filter.split('_')[2],"distance":0,"isMeta":false,"to":[txtToOOId('Spawner')],"from":"${name}"}})
                                send({"jsonrpc":"2.0","method":"setColour","params":{"colour":filterColours[msg.params.filter],"to":['_'+String(endprospective)+'_'+String(msg.params.filter.split('_')[1])],"from":"${name}"}});
                                endprospective = msg.params.filter.split('_')[2];
                            }

                            //inform filter and curators of colour scheme. move the filter
                            send({"jsonrpc":"2.0","method":"setColour","params":{"colour":filterColours[msg.params.filter],"to":[String(msg.params.filter)],"from":"${name}"}});
                            if(!(msg.params.isFilter)){
                                  send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[txtToOOId("contextCurator")],"from":"${name}"}});
                            }


                            if (msg.params.isMeta){
                              send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":String(metaLeftOffset),"to":[String(msg.params.filter)],"from":"${name}"}});
                              metaLeftOffset += 35.5;
                            }
                            else {
                              send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":String(leftOffset),"to":[String(msg.params.filter)],"from":"${name}"}});
                              leftOffset += 35.5;
                            }
                            // the currentchain keeps a list of the filter and filter oos in the current base layout. Here, a refresh of the currentchain in all of the current fillers/filter oo is initiated. As will as a x-axis positioning refresh.
                            for (let i=0;i<currentchain.length-2;i++){
                                send({"jsonrpc":"2.0","method":"setChild","params":{"child":String('_'+String(currentchain[i+1])+'_'+String(currentchain[i+2])),"to":['_'+String(currentchain[i])+'_'+String(currentchain[i+1])],"from":"${name}"}})
                            }



                            // inform new filter of which contexts must be tracked, so it can request a new filter from the contract manager.
                            for (t in contextObj){
                                  send({"jsonrpc":"2.0","method":"newContext","params":{"context":String(t),"to":[String(msg.params.filter)],"from":"${name}"}})
                            }
                            if (msg.params.isMeta){
                                send({"jsonrpc":"2.0","method":"setChild","params":{"child":txtToOOId("metaFilterInput"),"to":['_'+String(currentchain[currentchain.length-2])+'_'+String(currentchain[currentchain.length-1])],"from":"${name}"}})
                                setTimeout(function () {
                                  // forces refresh of oo positions - bug fix for meta layer.
                                  send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-49.5,"to":['_'+String(currentchain[0])+'_'+String(currentchain[1])],"from":"${name}"}})
                                }, 100);
                            }
                            else {
                                send({"jsonrpc":"2.0","method":"setChild","params":{"child":txtToOOId("filterInput"),"to":['_'+String(currentchain[currentchain.length-2])+'_'+String(currentchain[currentchain.length-1])],"from":"${name}"}})
                            }
                            send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-49.5,"to":['_'+String(currentchain[0])+'_'+String(currentchain[1])],"from":"${name}"}})

                    } //end of if new filter !exists
                    break;
                    case 'newAddress':
                          //notification that a new address is to be put into a one or more of the filters. A new filter is prepared to retrieve any value signals from this new address, for all the contexts on record (in contextObj).
                          //ooFilterMain:click(func/{}enterfilterer>>func/addfiltererToFilter>>msg/filtererFromMain) -> ooFilter(msg/newAddress) -> here
                          if (!(msg.params.address in addressObj)){
                                // if not filter for address not already installed
                                addressObj[msg.params.address] = {}
                            }
                    break;
                 case 'newContext':
                          //Informs the filter curator of a new context. This is needed because, when a new address is added in any filter, a blockchain filter must be added for all the existing contexts in the layout.
                          //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> here
                          if (!(msg.params.context in contextObj)){
                              contextObj[msg.params.context] = {};
                              for (f in filterObj){
                                // inform all of the filters of the new context.
                                msg.params.to = [f];
                                msg.params.from = "${name}";
                                send(JSON.parse(JSON.stringify(msg)))
                              }
                          }

                          break;


                      /********************************************************************************/

                   case "shiftBackAsIdea":

                          // relay MOVEYZ to self
                          send({"jsonrpc":"2.0","method":"MOVEXYZ","params":{"x":msg.params.x,"y":msg.params.y,"z":msg.params.z,"to":["${name}"],"from":"${name}"}});
                          //if z <0 then check if has children
                          if (msg.params.z < 0){
                              if (hasChildren){
                                let rightpos = el.getBoundingClientRect().right;

                                send({"jsonrpc":"2.0","method":"shiftBack","params":{"x":String(rightpos),"y":msg.params.y,"z":msg.params.z,"to":["_"+String(hexifyString('context'))+"_"+String(XORcontextidea(hexifyString('context'),"${prospective}"),1)],"from":"${name}"}});
                              }
                              send({"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}})
                              setTop(false)
                            }
                            else if (msg.params.z == 0){
                              setTop(true)
                              send({"jsonrpc": "2.0", "method": "SHOWADDRESSES", "params": {"to":["${name}"],"from":"${name}"}})
                              if (hasChildren){
                                send({"jsonrpc":"2.0","method":"atFront","params":{"to":["_"+String(hexifyString('context'))+"_"+String(XORcontextidea(hexifyString('context'),"${prospective}"),1)],"from":"${name}"}});
                              }
                            }
                          //if has children, get right dim of self and inform context manager to shift back.

                      break;

                      case 'setDistanceAsIdea':
                          if (distance != msg.params.distance){
                                distance = msg.params.distance;
                                send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":XORcontextprospective(context,prospective,distance),"context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});
                              }

                          break;


                          /********************************************************************************/
                      `,
  STARTUPmessages : `[]`,
  context: context,
  prospective: prospective

}

return base_template(filterCurator_outerTemplateObj);
}
