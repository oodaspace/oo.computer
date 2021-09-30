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
let context_proc = function(context,prospective,distance,name="contextManger",_class='meta'){

name = String(name)
let description = `Mangages a oos in a given context (the managed context is the idea of this oo)`
let context_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>contextManger\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    <!--\<div> \<b>idea (UTF8): \</b>${(XORcontextprospective(context,prospective,distance))}\</div>-->

            \</div>
                      `,
  objectDefs : `


  /********************************************************************************/ // thissection handles events for this oo's representation in the meta layer

  let hasChildren = false
  let fullScreenMode = false

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
      if (!(isHidden)){
        send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[parentcontextManId],"from":"${name}"}})
        //send({"jsonrpc":"2.0","method":"UPDATEPOSITIONS","params":{"to":[parentcontextManId],"from":"${name}"}});
        //send({"jsonrpc":"2.0","method":"SHOWALL","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}})
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

  function ${name}_left_click(){
    let tel = document.getElementById('${name}_content');
    if(tel.style.display=='none' || tel.style.display==' none'){

        send({"jsonrpc":"2.0","method":"CLICK-Xpand","params":{"to":[parentcontextManId],"from":"${name}"}})
      }
    else{
        send({"jsonrpc":"2.0","method":"CLICK-Collapse","params":{"to":[parentcontextManId],"from":"${name}"}})
    }
  }
  document.getElementById("${name}_left").addEventListener("click",${name}_left_click);


  function ${name}_onresize(){

    let y = window.innerHeight-420;

      send({"jsonrpc":"2.0","method":"SetTopOffset","params":{"to":["${name}"],"from":"${name}"}})

  }
  window.addEventListener("resize",${name}_onresize);

  /********************************************************************************/




                // Initialisation of contextObj, this contains information on the status of each of the prospectives under the context managed by this process. It also contains some base information (e.g. name of context, totals). A copy of the object is sent to the web worker process when a signal is reveived.
                let contextObj = {}
                contextObj['prospectiveObj'] = {'0x0000000000000000000000000000000000000000000000000000000000000000':{'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null}}
                contextObj['sortedKeys'] = ['0x0000000000000000000000000000000000000000000000000000000000000000']
                contextObj['filterObj'] = {}
                contextObj['contextTotalsPerFilter'] = {};
                contextObj['contextTotal'] = 0;
                contextObj['rankedObj'] = {}
                contextObj['contextObj'] = {} //lists all available contexts
                contextObj['currentprospective'] = "${context}"
                contextObj['filterColours'] = {}
                contextObj['x'] = 0
                contextObj['distance'] = 0;
                contextObj['isMetaMan'] = false;
                contextObj['context'] = "${XORcontextprospective(context,prospective,metaoodistance)}"
                contextObj['isXpanded'] = true;
                contextObj['isOneVisible'] = true;
                contextObj['isAllVisible'] = false;
                contextObj['isFixed'] = false;
                contextObj['XdimChanged'] = true;
                contextObj['isAllHidden'] = false;
                contextObj['topindex'] = 0;
                let colWidth = 368;
                contextObj['leftOffset'] =-14 - colWidth +29
                contextObj['thisPath'] = ''
                contextObj.prospectiveObj[contextObj['currentprospective']] = {'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null}
                


                let topOffset = window.innerHeight - 420;//130;
                let yinc = topOffset*250000/(1000000-(topOffset*topOffset));  // sets y-bounds for layout.
                if (yinc<20){yinc=20}
                if (yinc >125){yinc=125}
                let contextPendTotal = 0;
                distance = 0  // n.b initiated in base template so 'let not required'
                let maxProp = 0;
                let y_,z_;
                isInit = true;
                let ancestorObj = {'0x0000000000000000000000000000000000000000000000000000000000000000':true}  // this object tracks the ancestors, used to prevent circular references, updated by setAncestors case.
                let timeout
                let scrolltimeout
                let layoutState = 'atFront' // or atRear or atFore
                let prevtopprospective = "0x0000000000000000000000000000000000000000000000000000000000000000"
                let atTop_layoutSubState = 'oneXpanded';//'allXpanded' //oneXpanded // oneCollapsed
                let isScrolling = false;
                let updatetimeout
                let isUpdating = false;
                let parent
                msgIndex++
                window.api.send('IdeaValueTree:get'+'.'+String(msgIndex),['default',hexifyString('Filters')])
                let filtersjson = await new Promise(r => {window.api.receive('IdeaValueTree:get_response'+'.'+String(msgIndex),(result)=>{r(result)})})
                let filters = JSON.parse(filtersjson)//await IdeaValueTree.readdir('0x0000000000000000000000000000000000000000000000000000000000000000/'+hexifyString('Filters'))
                if (!filters){
                  filters = []
                }
                else {
                  console.log('filters',filters)
                  if (!(filters.rankedList)) filters.rankedList = []
                  filters = filters.rankedList
                }

                let filterer = mainKey
                filterer = '0x' + filterer

                filters.push(filterer)

                function reCalcPositions(proc_chain = []){
                      //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> here
                      //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> this:case(func/setUserInteracting#timeout 1000#) -> here
                      //ooIdea:scroll(func/{}_scroll>>msg/HOVERING) -> here
                      //ooIdea:scroll(func/{}_scroll>>msg/HOVERING) -> this:case(func/setUserInteracting#timeout 1000#) -> here
                      //ooIdea:scroll(func/{}_scroll>>msg/ShiftUp) -> here
                      //ooIdea:scroll(func/{}_scroll>>msg/ShiftDown) -> here
                      //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> here
                      //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> here
                      //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> here
                      //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> here
                      // This function goes through the list of prospectives and sets the y and z positions, based on the sorted list contextObj.sortedKeys, it starts at the top index, which indicated the index in the sorted list which is top in the current layout.
                      let internal_proc_chain_length = proc_chain
                      let kj = contextObj.topindex; // set index for for loop:

                      contextObj.rankedObj = {}     // clear array to remove state from last layout recalc:

                      // Loop through each of the prospectives
                      for (let i = 0; i < contextObj.sortedKeys.length; i++) {

                                    let h = contextObj.sortedKeys[i];
                                    contextObj.rankedObj[kj] = h
                                    z_ = -1*200*Math.abs(kj); // calculate z position (apperent distance on screen)
                                    y_ = (topOffset - yinc*kj*(Math.pow(0.9,Math.abs(kj))));  // calculate y position (apperent height on screen)
                                    if(kj==0){
                                          let p = proc_chain.concat("ooContextManager:func(reCalcPositions-top_of_layout)")
                                          // this means that h is the prospective at the top of the layout, for this context (contextObj.context), messages to update its status are sent
                                          send({"jsonrpc": "2.0", "method": "SHOW","proc_chain":p, "params": {"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}_1"}})
                                          send({"jsonrpc":"2.0","method":"setRank","proc_chain":p,"params":{"rank":i,"ranktotal":contextObj.sortedKeys.length-1,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                                          send({"jsonrpc":"2.0","method":"shiftBackAsIdea","proc_chain":p,"params":{"x":contextObj.leftOffset,"y":String(y_),"z":String(z_),"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}shiftbackasidea1"}});
                                          if (contextObj.prospectiveObj[h].haschild){
                                            // inform descendents that they are at the top of the layout
                                            send({"jsonrpc":"2.0","method":"atFront","proc_chain":p,"params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}reCalcPositions1"}})
                                            send({"jsonrpc":"2.0","method":"SHIFTYZ","proc_chain":p,"params":{"y":y_,"z":z_,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                          }
                                          // set the currentprospective to h, for reference elsewhere in this context manager processs
                                          contextObj.currentprospective = h;
                                          contextObj['topIdea'] = h
                                    }
                                    else if (kj > 0) {
                                                  // this means that h is at the rear of the layout, so may still be visible depending on user.
                                                  let p = proc_chain.concat("ooContextManager:func(reCalcPositions-rear_of_layout)")
                                                  if (!isUserInteracting){
                                                        send({"jsonrpc": "2.0", "method": "HIDE", "proc_chain":p, "params": {"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}})
                                                  }
                                                  if (contextObj.prospectiveObj[h].haschild){
                                                    send({"jsonrpc":"2.0","method":"atRear", "proc_chain":p,"params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                                    send({"jsonrpc":"2.0","method":"SHIFTYZ", "proc_chain":p,"params":{"y":y_,"z":z_,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                                  }
                                                send({"jsonrpc":"2.0","method":"shiftBackAsIdea", "proc_chain":proc_chain,"params":{"x":contextObj.leftOffset,"y":String(y_),"z":String(z_),"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}shiftbackasidea2"}});
                                    }
                                    else if (kj < 0) {
                                        // this means that h is "in front" of the layout, so is never visible to the user
                                        let p = proc_chain.concat("ooContextManager:func(reCalcPositions-fore_of_layout)")
                                        send({"jsonrpc": "2.0", "method": "HIDE", "proc_chain":p, "params": {"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}})
                                        if (contextObj.prospectiveObj[h].haschild){
                                          z_ = z_*-1;
                                          send({"jsonrpc":"2.0","method":"atFore","proc_chain":p,"params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                        }

                                      }
                                    // move on to the next item in the sortedKeys list
                                    kj++;
                                    contextObj.prospectiveObj[h].y = y_;
                                    contextObj.prospectiveObj[h].z = z_;
                      }
                      if (contextObj.currentprospective != "0x0000000000000000000000000000000000000000000000000000000000000000"){
                          prevtopprospective = contextObj.currentprospective;
                      }
                }

    function CombineObjects(A, B) {
        // This combines two objects, it's used when the updated version of the contextObj (describing state of all the ideas managed by this context) is received. Maybe some scope for optimisation as some ideas never change and so don't need to be iterated through
          for (let item in B) {
                try {
                    if (typeof B[item] === 'object' && !!B[item] || typeof B[item] === 'function') {
                        A[item] = CombineObjects(A[item], B[item]);
                    } else {
                        A[item] = B[item];
                    }
                } catch(err) {
                    A[item] = B[item];
                }
            }
        return A;
    }



    // Add the receiver will drop duplicate messages (oldest first) for methods in dropObj:
    dropObj['UPDATEPOSITIONS']= true;


    // hides all the oos aside from the one currenly at the front, and the input (has prospective 0x000...)
    function hideAllButTop(proc_chain=[]){
      //ooIdea:scroll(func/{}_content_mouseout(e))>>msg/MOUSEOUT) -> this:case(func/hideAllButTop) -> here
      let p = proc_chain.concat("ooContextManager:func(hideAllButTop)")
      for (let h in contextObj.prospectiveObj){
          if (h!=contextObj.currentprospective ) {//&& h!="0x0000000000000000000000000000000000000000000000000000000000000000"
                send({"jsonrpc":"2.0","method":"HIDE","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}HIDEALLBUTTOP"}});
                if (contextObj.prospectiveObj[h].haschild){
                      // informs descendents that parent is hidden (so they can hide too)
                      send({"jsonrpc":"2.0","method":"parentHidden","proc_chain":p,"params":{"val":true,"width":64,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}HIDEALLBUTTOP1"}});
                }
          }
          else {
              // tells top oo too show
              send({"jsonrpc":"2.0","method":"SHOW","proc_chain":p,"params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}HIDEALLBUTTOP"}});
          }
      }
    }

    // Expands all the oos aside from the one currenly at the front, and the input (has prospective 0x000...)
    function XpandTop(proc_chain=[]){
        let p = proc_chain.concat("ooContextManager:func(XpandTop)")
        send({"jsonrpc":"2.0","method":"XPAND","proc_chain":p,"params":{"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}XpandTop"}})
        colWidth = 368
        if (contextObj.currentprospective in contextObj.prospectiveObj) {
              if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
                // informs descendents that x position of parent may have changed (so they can move too)
                    send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":contextObj['leftOffset'] + colWidth-29,"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}HIDEALLBUTTOP1"}});
              }
          }
    }

    // Collapses the oo aside currently at the front, and the input (has prospective 0x000..., and stays visible)
    function collapseTop(proc_chain=[]){
        let p = proc_chain.concat("ooContextManager:func(collapseTop)")
        send({"jsonrpc":"2.0","method":"COLLAPSE","params":{"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}collapseTop"}})
        send({"jsonrpc":"2.0","method":"COLLAPSE","params":{"to":["_"+String(contextObj.context)+"_"+"0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}collapseTop"}})
        colWidth = 64
        if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
              // informs descendents that x dims of parent may have changed (so they can move too)
              send({"jsonrpc":"2.0","method":"ShiftLeft","proc_chain":p,"params":{"left":contextObj['leftOffset'] + colWidth-29,"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}collapseTop"}});
            }
    }


    // Hides all the oos
    function hideAll(proc_chain=[]){
      //ooIdea:scroll(func/{}_content_mouseout(e))>>msg/MOUSEOUT) -> ooContextManager#parent#:case(func/hideAllButTop>>msg/parentHidden) -> this:case(func/hideAll) -> here
      //ooIdea:scroll(func/{}_content_mouseout(e))>>msg/MOUSEOUT) -> ooContextManager#parent#:case(func/hideAllButTop>>msg/parentHidden) -> this:case(func/hideAll>>msg/parentHidden)*n -> here
      for (let h in contextObj.prospectiveObj){
          send({"jsonrpc":"2.0","method":"HIDE","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
          if (contextObj.prospectiveObj[h].haschild){
                // informs descendents that parent is hidden (so they can hide themselves too)
                let p = proc_chain.concat("ooContextManager:func(hideAll)")
                send({"jsonrpc":"2.0","method":"parentHidden","proc_chain":p,"params":{"val":true,"width":colWidth,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
          }
      }
    }

// Hides all the oos
function XpandAll(proc_chain=[]){
  //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> here
  //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> here
  //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> here
  let p = proc_chain.concat("ooContextManager:func(XpandAll)")
  for (let h in contextObj.prospectiveObj){
      colWidth = 368
      send({"jsonrpc":"2.0","method":"XPAND","proc_chain":p,"params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
      if (contextObj.prospectiveObj[h].haschild){
            // informs descendents that x dims of parent may have changed (so they can move)
            send({"jsonrpc":"2.0","method":"ShiftLeft","proc_chain":p,"params":{"left":contextObj['leftOffset'] + colWidth-29,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}XpandAll"}});
          }
    }
}

// Show all the oos, cycles through rankedObj (contains oos indxed by ranking) to avoid showing oos that are currently "in front" of the layout.
function showAll(proc_chain=[]){
      //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> here
      //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> here
      //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> here
      let p = proc_chain.concat("ooContextManager:func(showAll)")
      for (let r in contextObj.rankedObj){
        let h = contextObj.rankedObj[r]
          if (r>=0){

                send({"jsonrpc":"2.0","method":"SHOW","proc_chain":p,"params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}2"}});
                if(r!=0){
                    if (contextObj.prospectiveObj[h].haschild){
                      send({"jsonrpc":"2.0","method":"atRear","proc_chain":p,"params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                    }
                }
                else {
                    if (contextObj.prospectiveObj[h].haschild){
                      send({"jsonrpc":"2.0","method":"atFront","proc_chain":p,"params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                    }
                }
          }
          else {
            send({"jsonrpc":"2.0","method":"HIDE","proc_chain":p,"params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}showall"}});
          }
      }
}

// Sets the y and z positions of top, called as a result of a screen resize for example, or layout recalculation
function setYZPositionofTop(y,z){
  contextObj.y=y
  contextObj.z=z
    if(z==0){
        send({"jsonrpc": "2.0", "method": "SHOWADDRESSES", "params": {"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}"}})
    }
    if(z==-200){
        // this means oo has transitioned to "rear" of layout, where its addresses are not shown.
        send({"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}"}})
    }
    send({"jsonrpc":"2.0","method":"MOVEYZ","params":{"y":y,"z":z,"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}"}});
    if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
        send({"jsonrpc":"2.0","method":"SHIFTYZ","params":{"y":y,"z":z,"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}"}});
    }
}


// This is a fallback function to make sure layout correctly renders if a msg gets dropped somewhere. It recalculates the layout after a timeout - called following a user event (hover or click). A candidate for removal!
let isUserInteracting = false;
let usertimeout
let updateReady = false
function setUserInteracting(){
      //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> here
      //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> here
      //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> here
      isUserInteracting = true;
      clearTimeout(usertimeout);
      usertimeout = setTimeout(function () {
          isUserInteracting = false;
          if (updateReady){

            if(contextObj.isFixed){

              contextObj.topindex = -1*contextObj.sortedKeys.indexOf(contextObj.currentprospective)
            }
            else {
              contextObj.topindex = 0
            }
            reCalcPositions()
          }
      }, 1000);
}


// This tells the input utility oo to go into a loading state, called when receiving messages updating the order of the ideas (from webworker oo), intended to be called during intialisation and loading of the oos for this context.
let loadingtimeout
function setLoadingIcon(){
send({"jsonrpc": "2.0", "method": "LOADINGSTATE", "params": {"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}"}})
    send({"jsonrpc": "2.0", "method": "MOVEX", "params": {"x":contextObj.leftOffset,"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}"}})
    send({"jsonrpc": "2.0", "method": "SHOW", "params": {"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}3"}})
    send({"jsonrpc": "2.0", "method": "MOVEYZ", "params": {"y":topOffset,"z":0,"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}"}})
    loadingtimeout = setTimeout(function () {
        // recalc layout in case of droppped msg
        reCalcPositions()
    }, 20000);
}


// This tells the input utility oo to go back to normal state, called after ideas have finished loading. Cancels peding layout recalcs and does ~immediately.
function loadingComplete(){
    clearTimeout(loadingtimeout)
    send({"jsonrpc": "2.0", "method": "CLEARLOADINGSTATE", "params": {"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}"}})
    if(contextObj.isFixed){
        contextObj.topindex = -1*contextObj.sortedKeys.indexOf(contextObj.currentprospective)
    }
    else {
        contextObj.topindex = 0
    }
    reCalcPositions() //could do alternative - animate position update func
}

// moves the layout to and oo with prospective specified. Updates the topindex.
function gotoprospective(hk){
  contextObj.topindex = -1*contextObj.sortedKeys.indexOf(hk)
  reCalcPositions()
}

let awaitingWork = false;
let pendingMsgs = []


let initinterval = setInterval(function () {
  prevtopprospective = contextObj.currentprospective;
  gotoprospective(contextObj.sortedKeys[0]);
  contextObj.currentprospective = contextObj.sortedKeys[0];
  let keys = Object.keys(contextObj.prospectiveObj);
  contextObj.sortedKeys = keys.sort(function(a, b) {return contextObj.prospectiveObj[b].prop - contextObj.prospectiveObj[a].prop});
  reCalcPositions()
}, 500);
setTimeout(function () {
  clearInterval(initinterval)
}, 2000);

send({"jsonrpc":"2.0","method":"newContext","params":{"context":contextObj.context,"isForMeta":false,"to":[txtToOOId("filterCurator")],"from":"${name}"}})


                  `,
  RESULTcases : `

                /* DOWORK: receives responses from the webworker. The sorting operations are sent to a webWorker and received back sorted here. The updated contextObj array (contains info on status of each oo) is combined with the old version. If no new messages received for ~ 1s then loading is assumed to be complete and the loading status is cleared.
                */

                case 'DOWORK':

                break;

                `
                    ,
  METHODcases : `
                /*
                    setMetaManStatus: sets this oo manager as a manager of oos in meta_mode. Notifies child oos and sends spawn request for input oo under this context.
                    setDistance:   sets distance of all children oos. Note the distance of this, in meta mode, is 2. The distance is the "distance" of and oo from the root (root is 0x0000000000000000000000000000000000000000000000000000000000000000 in base and 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff in meta). The distance is used in the XOR calcs to get a idea from a context and a prospective.
                    CONTEXTS:       updates the context object, informs input oo of ancesters (to avoid name conflicts)
                    SHIFTYZ:    calls a function that sets the xY position of the top child, and informs the child context manager.
                    newIdea:   creates a new idea (sends to spawner), places in next to last rank (input idea is last). used the input oo to create a idea when enter is pressed.
                    gotoprospective:   goes to the oo with the prospective in the msg param.
                    gotoprevprospective:  puts the last front prospective back at the front.
                    addideatoMetaManContext: adds a prospective to the contextObj, every context manaager calls this (sending to the meta context manager) on start up. So the contextmanagers can be presented in the meta layout.
                    Signal:     This message contains a signal originating from a public blockchain transaction. It is sent from a filter, indicating what proportion of that filter has signalled value in this idea. From here a function is sent to a webworker, along witht he contextObj and the signal details so that a new sort operation takes place in parallel.
                    ShiftUp:    shifts the ideas up, towards front, in the layout
                    ShiftDown:  shifts the ideas down, towards rear, in the layout
                    ShiftLeft:  shifts the ideas left to a specified pixel setting, tells idea to the right in layout to also ShiftLeft
                    toggleExpandCollapseAll: collapses the top oo and instructs its child context manager - to allow user to collapse all on single click.
                    shiftBack:   moves the ideas back, unused?
                    atFront:    sets the layout state to at fron't. updates the child ideas based on the atTop_layoutSubState (set elsewhere)
                    atRear     sets the layout state to at rear. informs the top child
                    atFore      sets the layout state to at fore.this is invisible, so hideAll func called.
                    parentHidden     an instruction to say that the parent of this context manageer is hidden. hideAll called.
                    MOUSEOUT   called when the mouse goes out from the top idea under this context. hideAllButTop called.
                    HOVERING    called when the mouse goes out hovers over the top idea under this context. showAll called.
                    CLICK-Xpand  called when the mouse clicks the left side of the top idea under this context, if it was collapsed. XpandTop called.
                    CLICK-collapse  called when the mouse clicks the left side of the top idea under this context, if it was xpanded. collapseTop called.
                    newContext      notification of new context, this is tracked to be able to send ShiftLeft msgs if required.
                    SetTopPos   sets Y position of all the ideas
                    SetTopOffset  re-calibrates y distance between ideas (usually after screen resize), recalcs layou
                    addtoContextPendingTotal  If transaction has been sent- it's amount is notified here
                    setColours  instruction to tell ideas of the filter colour scheme
                    SetLeftPos sets left offset position
                    setDistanceAsIdea: Used to set the distance of this oo. Used to workout the code for interpretting.
                    setAncestors: sends the ancestors object of to child idea and the input oo (to avoid name clashes)
                    refreshTopLeftPositions  called to refresh the left position of the top oo and children
                    shiftBackAsIdea Used to set the position of this oo in the meta layout.
                */

                case 'refreshPath':
                    //ooPendingTxManager:click(send_signal-discard) -> ooHyperManager(case-DiscardSignal) -> here

                    // sets path in hyperdrive:
                    msg.params["path"] = contextObj.thisPath
                    msg.method = "newPath"
                    msg.params.to = [txtToOOId("filterCurator")]

                    send(msg)
                break;

                case 'setPath':
                    // sets path in hyperdrive:
                    contextObj.thisPath = msg.params.path
                break;

                case 'setParent':
                    parent = msg.params.parent;
                break;

                case 'ValueSignal':
                    //ooIdea:click(func/{}up1000_click(e)>>msg/ValueSignal) -> here
                    //ooIdea:click(func/{}up10000_click(e)>>msg/ValueSignal) -> here
                    //ooIdea:click(func/{}up1000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> here
                    //ooIdea:click(func/{}up10000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> here
                    msg.params.chain.push(contextObj.context)
                    if (contextObj.context !== "0x0000000000000000000000000000000000000000000000000000000000000000" && contextObj.context !== "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"){
                      msg.params.to = [parent]
                      send(msg)
                    }
                    else {
                      msg.params.to = [txtToOOId("pendingTx")]
                      send(msg)
                    }

                break;

                case 'DiscardSignal':
                    //ooIdea:click(func/{}discard_click(e)>>msg/DiscardSignal) -> here

                    msg.params.chain.push(contextObj.context)
                    if (contextObj.context !== "0x0000000000000000000000000000000000000000000000000000000000000000" && contextObj.context !== "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"){
                      msg.params.to = [parent]
                      send(msg)
                    }
                    else {
                      msg.params.to = [txtToOOId("pendingTx")]
                      send(msg)
                    }

                break;

                case 'setMetaManStatus':
                  //sets this as a manager of ideas in meta_mode
                  if(msg.params.left) contextObj['leftOffset'] = msg.params.left;
                  if (msg.params.isForMeta){
                      contextObj.isMetaMan = true;
                      for (let h in contextObj.prospectiveObj) {
                            send({"jsonrpc":"2.0","method":"setMetaStatus","params":{"isForMeta":true,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                      }
                    }
                    else {
                      contextObj.isMetaMan = false;
                      for (let h in contextObj.prospectiveObj) {
                            send({"jsonrpc":"2.0","method":"setMetaStatus","params":{"isForMeta":false,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});

                      }
                    }
                    if (!contextObj.isMetaMan){
                      send({"jsonrpc":"2.0","method":"spawnInput","params":{"context":contextObj.context,"distance":distance,"x":contextObj['leftOffset'],"to":[txtToOOId('Spawner')],"from":"${name}___1"}})
                    }
                    else {
                      send({"jsonrpc":"2.0","method":"spawnInput","params":{"context":contextObj.context,"distance":distance,"x":contextObj['leftOffset'],"_class":'meta',"to":[txtToOOId('Spawner')],"from":"${name}___2"}})
                      XpandAll(["ooContextManager:case(setMetaManStatus)"])
                    }
                break;

                case 'setDistance':
                    //sets distance of all children oos. Note the distance of this, in meta mode, is 2. The distance is the "distance" of and oo from the root (root is 0x0000000000000000000000000000000000000000000000000000000000000000 in base and 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff in meta). The distance is used in the XOR calcs to get a idea from a context and a prospective.
                    contextObj.distance = msg.params.distance;

                    for (let h in contextObj.prospectiveObj) {

                         send({"jsonrpc":"2.0","method":"setDistanceAsIdea","params":{"distance":msg.params.distance,"fromParent":true,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                             if(contextObj.prospectiveObj[h].haschild){
                                 send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(msg.params.distance)+1,"fromParent":true,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});

                             }

                         }
                         send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-14,"fromParent":true,"to":["_0x30326d6d6d111111111111111111111111111111111111111111111111657076_0xd8c0c9b5b5b444444444444444444444444444444444444444444444444595c1"],"from":"${name}setDistance"}})
                break;
                case 'fullScreenModeOn':
                      //ooIdea:click(func/{}fullscreen_click())
                      //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftUp) -> this:case(msg/fullScreenModeOn) -> here
                      //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftDown) -> this:case(msg/fullScreenModeOn) -> here
                      fullScreenMode = true
                      for (let h in contextObj.prospectiveObj) {
                        if (contextObj.currentprospective == h){
                          send({"jsonrpc":"2.0","method":"fullScreenModeOn","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                        }
                        else {
                          send({"jsonrpc":"2.0","method":"fullScreenModeOff","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                        }

                      }


                break;
                case 'fullScreenModeOff':
                    //ooIdea:click(func/{}minimise_click()) -> here
                    fullScreenMode = false
                    for (let h in contextObj.prospectiveObj) {
                      send({"jsonrpc":"2.0","method":"fullScreenModeOff","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                    }
                break;

                case 'CONTEXTS':
                    //updates the context object, informs input oo of ancesters (to avoid name conflicts)
                    contextObj.contextObj = msg.params.contexts
                    send({"jsonrpc":"2.0","method":"setAncestors","params":{"ancestorObj":contextObj.contextObj,"to":["_"+String(contextObj.context)+"_"+String("0x0000000000000000000000000000000000000000000000000000000000000000")],"from":"${name}"}});

                break;

                case 'SHIFTYZ':
                      // calls a function that sets the xY position of the top child, and informs the child context manager.
                      //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                      //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/setUserInteracting#timeout 1000#>>func/reCalcPositions) -> here
                      //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                      //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                      //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> ooContextManager#parent#:case(func/setUserInteracting#timeout 1000#>>func/reCalcPositions) -> here
                      //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> ooContextManager#parent#:case(func/setUserInteracting#timeout 1000#>>func/reCalcPositions) -> here
                      //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftUp) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                      //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftDown) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                      //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                      //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                      //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                      //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                      setYZPositionofTop(msg.params.y,msg.params.z)

                break;


                case 'newIdea':
                  // creates a new idea (sends to spawner), places in last rank. used the input oo to create a idea when enter is pressed.
                  //check, valid params:
                  if (msg.params.prospective.slice(0,2) == '0x'){
                          if (!(String(msg.params.prospective) in contextObj.prospectiveObj)){
                            let ideaname = '_'+String(contextObj.context)+'_'+String(msg.params.prospective)

                                      if (contextObj.isMetaMan || msg.params.isForMeta){
                                          send({"jsonrpc":"2.0","method":"spawn","params":{"context":String(contextObj.context),"prospective":String(msg.params.prospective),"x":contextObj['leftOffset'],"distance":msg.params.distance,"_class":'meta',"name":ideaname,"to":[txtToOOId('Spawner')],"from":"${name}___3"}})
                                      }
                                      else {
                                          send({"jsonrpc":"2.0","method":"spawn","params":{"context":String(contextObj.context),"prospective":String(msg.params.prospective),"x":contextObj['leftOffset'],"distance":msg.params.distance,"name":ideaname,"to":[txtToOOId('Spawner')],"from":"${name}___4"}})
                                      }

                            contextObj.prospectiveObj[msg.params.prospective] = {'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null};

                            contextObj.sortedKeys[contextObj.sortedKeys.length] = msg.params.prospective
                            //contextObj.sortedKeys.unshift('0x0000000000000000000000000000000000000000000000000000000000000000')

                            gotoprospective(msg.params.prospective)
                            contextObj.currentprospective = msg.params.prospective
                          }

                }
                break;

                case 'newIdeaInsertAtTop':
                  // creates a new idea (sends to spawner), places in last rank. used the input oo to create a idea when enter is pressed.
                  //check, valid params:
                  if (msg.params.prospective.slice(0,2) == '0x'){
                          if (!(String(msg.params.prospective) in contextObj.prospectiveObj)){
                            let ideaname = '_'+String(contextObj.context)+'_'+String(msg.params.prospective)

                                      if (contextObj.isMetaMan || msg.params.isForMeta){
                                          send({"jsonrpc":"2.0","method":"spawn","params":{"context":String(contextObj.context),"prospective":String(msg.params.prospective),"x":contextObj['leftOffset'],"distance":msg.params.distance,"_class":'meta',"name":ideaname,"to":[txtToOOId('Spawner')],"from":"${name}___3"}})
                                      }
                                      else {
                                          send({"jsonrpc":"2.0","method":"spawn","params":{"context":String(contextObj.context),"prospective":String(msg.params.prospective),"x":contextObj['leftOffset'],"distance":msg.params.distance,"name":ideaname,"to":[txtToOOId('Spawner')],"from":"${name}___4"}})
                                      }

                            contextObj.prospectiveObj[msg.params.prospective] = {'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null};
                            contextObj.sortedKeys.splice(1,0, msg.params.prospective)
                            contextObj.currentprospective = msg.params.prospective

                            gotoprospective(msg.params.prospective);

                          }
                  }


                break;

                case 'gotoprospective':
                    //finds where the sent prospective is, puts it at top.
                    if (prevtopprospective != msg.params.prospective){
                          prevtopprospective = contextObj.currentprospective;
                          gotoprospective(msg.params.prospective);
                          contextObj.currentprospective = msg.params.prospective
                          send({"jsonrpc":"2.0","method":"atRear","params":{"to":[contextObj.prospectiveObj[prevtopprospective].childContextMan],"from":"${name}___4"}})
                        }
                break;


                case 'gotoinput':
                    //finds where the sent prospective is, puts it at top.
                    let inputindex = contextObj.sortedKeys.indexOf('0x0000000000000000000000000000000000000000000000000000000000000000')

                    if (inputindex != 0){
                        if (inputindex > -1) {
                          contextObj.sortedKeys.splice(inputindex, 1);
                        }
                        contextObj.sortedKeys.unshift("0x0000000000000000000000000000000000000000000000000000000000000000")
                    }
                    prevtopprospective = contextObj.currentprospective;
                    gotoprospective("0x0000000000000000000000000000000000000000000000000000000000000000");
                    contextObj.currentprospective = "0x0000000000000000000000000000000000000000000000000000000000000000";
                break;

                case 'gototopranked':
                    //finds where the sent prospective is, puts it at top.

                    prevtopprospective = contextObj.currentprospective;
                    gotoprospective(contextObj.sortedKeys[0]);
                    contextObj.currentprospective = contextObj.sortedKeys[0];
                    reCalcPositions()
                break;

                case 'gotoprevprospective':
                    //puts the last front prospective back at the front.
                    if(layoutState == 'atFront'){
                        gotoprospective(prevtopprospective);
                        contextObj.currentprospective = prevtopprospective
                    }
                    if (msg.params.dontshowrear){
                      for (let h in contextObj.prospectiveObj) {
                          if (h!=prevtopprospective)
                                 if(contextObj.prospectiveObj[h].haschild){
                                     send({"jsonrpc":"2.0","method":"parentHidden","params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                 }
                           }
                    }
                break;

                case 'addideatoMetaManContext':
                  //check, valid params:
                  if (msg.params.prospective.slice(0,2) == '0x'){
                          //adds a prospective to the contextObj, every context manaager calls this (sending to the meta context manager) on start up. So the contextmanagers can be presented in the meta layout.
                          contextObj.prospectiveObj[msg.params.prospective] = {'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null};

                          contextObj.sortedKeys[contextObj.sortedKeys.length] = msg.params.prospective
                          //contextObj.sortedKeys.unshift('0x0000000000000000000000000000000000000000000000000000000000000000')
                          prevtopprospective = msg.params.prospective
                          contextObj.currentprospective = prevtopprospective
                          contextObj.sortedKeys=contextObj.sortedKeys.sort().reverse()
                          let ind = contextObj.topindex
                          contextObj.rankedObj = {}
                          for (let i = 0; i < contextObj.sortedKeys.length; i++) {
                            let h = contextObj.sortedKeys[i];
                            contextObj.rankedObj[ind] = h
                            ind++
                          }
                          reCalcPositions();
                  }

                break;


                case 'Signal':
                    //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> here
                    //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> here
                    //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> here
                    //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> here

                    //ooPendingTxManager:click(send_signal-discard) -> ooHyperManager:case(DiscardSignal) -> ooContextManager:case(refreshPath) -> ooFilterCurator:case(newPath) ->  ooFilter:case(newPath)... -> ooContextCurator:case(SignalForContextCurator) -> here
                    //ooFilter:spawn(getWeightingsForContext) -> ooContextCurator:case(SignalForContextCurator) -> here
                    // This message contains a signal originating from a blockchain transaction. It is sent from a filter, indicating what proportion of that filter has signalled value in this idea. From here a function is sent to a webworker, along witht he contextObj and the signal details so that a new sort operation takes place in parallel.
                    if ((!contextObj.isMetaMan && !msg.params.isFromMetaFilter) || (contextObj.isMetaMan && msg.params.isFromMetaFilter)){

                              // One of the filters has sent a signal to a idea under this context

                                for (let h in msg.params.prospectiveObj){
                                      if (String(h).length > 15){
                                              if (!(String(h) in contextObj.prospectiveObj) && msg.params.prospectiveObj[h].prop > 0){
                                                      let ideaname = '_'+String(contextObj.context)+'_'+String(h)
                                                      if (contextObj.isMetaMan){
                                                          send({"jsonrpc":"2.0","method":"spawn","params":{'context':String(contextObj.context),'prospective':String(h),"distance":contextObj.distance,"_class":'meta',"x":contextObj['leftOffset'],'name':ideaname,"to":["_0x838383ffffffffffffffffffffffffffffffffffffffffffffffffff8b97968c_0x7d81818ffffffffffffffffffffffffffffffffffffffffffff591f3d0c392f4"],"from":"${name}___5"}})
                                                          // NOte "_0x30326d6d6d111111111111111111111111111111111111111111111165797862_0xcce4a63a3a34444444444444444444444444444444444444444e2a486b78294f" is "Spawner"
                                                        }
                                                        else {
                                                          send({"jsonrpc":"2.0","method":"spawn","params":{'context':String(contextObj.context),'prospective':String(h),"distance":contextObj.distance,"x":contextObj['leftOffset'],'name':ideaname,"to":["_0x838383ffffffffffffffffffffffffffffffffffffffffffffffffff8b97968c_0x7d81818ffffffffffffffffffffffffffffffffffffffffffff591f3d0c392f4"],"from":"${name}___6"}})
                                                        }
                                                      //send({"jsonrpc":"2.0","method":"setPath","params":{"path":contextObj.thisPath ,"to":['_'+String(contextObj.context)+'_'+String(h)],"from":"${name}"}})
                                                      contextObj.prospectiveObj[h] = {'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null};
                                                      //send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":contextObj.filterColours,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}CONTEXTMANSIGNAL"}});
                                                      send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":contextObj['leftOffset'],"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                                                      contextObj.prospectiveObj[h][msg.params.filter] = msg.params.prospectiveObj[h].prop;
                                              }
                                              if ((String(h) in contextObj.prospectiveObj)) {// && msg.params.prospectiveObj[h].prop == 0
                                                      contextObj.prospectiveObj[h][msg.params.filter] = msg.params.prospectiveObj[h].prop;
                                              }
                                              /*else if (){

                                              }*/
                                    }
                              }

                              // prepare to normalise the proportions
                              for (let h in contextObj.prospectiveObj){
                              contextObj.prospectiveObj[h]['prop']=0;
                                      for (let f in contextObj.prospectiveObj[h]){
                                        if (f.length > 15){
                                          contextObj.prospectiveObj[h]['prop'] += contextObj.prospectiveObj[h][f]
                                        }
                                      }
                                }
                                maxProp = 0
                              for (let h in contextObj.prospectiveObj){
                                    if (contextObj.prospectiveObj[h]['prop'] > maxProp){
                                      maxProp = contextObj.prospectiveObj[h]['prop']; //+=
                                    }
                                }

                              if  (maxProp >0){

                                        for (let h in contextObj.prospectiveObj){
                                              contextObj.prospectiveObj[h].prop = contextObj.prospectiveObj[h].prop/maxProp
                                              send({"jsonrpc":"2.0","method":"Signal","params":{"group":"originBlkchnEvent","filterObj":contextObj.prospectiveObj[h],"maxProp":maxProp,"to":['_'+String(contextObj.context)+'_'+String(h)],"from":"${name}"}})
                                              // do sort here:


                                          }

                                    let keys = Object.keys(contextObj.prospectiveObj);
                                    contextObj.sortedKeys = keys.sort(function(a, b) {return contextObj.prospectiveObj[b].prop - contextObj.prospectiveObj[a].prop});

                                        // swap 0x0000000000000000000000000000000000000000000000000000000000000000 to last - makes sure the input oo ranks last as layout system relies on that. In the metat-man case there are oos with no value signals - the one's representing the oos spawned in this web-session, a unique case handled here.
                                        let inputindex = contextObj.sortedKeys.indexOf('0x0000000000000000000000000000000000000000000000000000000000000000')

                                        if (inputindex != 0){
                                            if (inputindex > -1) {
                                              contextObj.sortedKeys.splice(inputindex, 1);
                                            }
                                            contextObj.sortedKeys.unshift("0x0000000000000000000000000000000000000000000000000000000000000000")
                                        }


                                }
                                if  (maxProp == 0){
                                    //put input at top
                                    gotoprospective("0x0000000000000000000000000000000000000000000000000000000000000000");
                                }



                    }
                    reCalcPositions()
                    break;

                    case 'DiscardSignal':
                    // check if proportion is zero after a discard signal, remove if it is
                    for (let h in contextObj.prospectiveObj){
                          if (contextObj.prospectiveObj[h]['prop'] == 0){
                            delete contextObj.prospectiveObj[h]
                          }
                      }
                      reCalcPositions();
                      //destroy oo in DOM
                    break;
                    case 'ShiftUp':
                                  //shifts the ideas up, towards front, in the layout
                                  //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftUp) -> here
                                  //if (Object.keys(contextObj.prospectiveObj).length > 2){ //only do this if more than 1 idea in this context
                                          isScrolling = true;
                                          clearTimeout(scrolltimeout);
                                          scrolltimeout = setTimeout(function () {
                                              isScrolling = false;
                                          }, 1000);
                                          contextObj['isFixed'] = true;
                                          if (Math.abs(contextObj.topindex) < Object.keys(contextObj.prospectiveObj).length-2 ){
                                                if (Math.abs(contextObj.topindex) == Object.keys(contextObj.prospectiveObj).length-2 ){ // makes sure no input in fullscreen mode
                                                    if (!fullScreenMode){
                                                      contextObj.topindex--
                                                      reCalcPositions(["ooContextManager:case(ShiftUp)"])
                                                    }
                                                }
                                                else {
                                                  contextObj.topindex--
                                                  reCalcPositions(["ooContextManager:case(ShiftUp)"])
                                                }
                                            }
                                            if (fullScreenMode) send({"jsonrpc":"2.0","method":"fullScreenModeOn","params":{"to":["${name}"],"from":"${name}"}});
                                  //}
                      break;

                      case 'ShiftDown':
                                  //shifts the ideas down, towards rear, in the layout
                                  //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftDown) -> here
                                  //if (Object.keys(contextObj.prospectiveObj).length > 1){ //only do this if more than 1 idea in this context
                                        isScrolling = true;
                                        clearTimeout(scrolltimeout);
                                        scrolltimeout = setTimeout(function () {
                                            isScrolling = false;
                                        }, 1000);
                                        contextObj['isFixed'] = true;
                                              if (Math.abs(contextObj.topindex) > 0){
                                                contextObj.topindex++;
                                                reCalcPositions()
                                              }
                                              if (fullScreenMode) send({"jsonrpc":"2.0","method":"fullScreenModeOn","params":{"to":["${name}"],"from":"${name}"}});
                                  //}
                      break;
                      case 'ShiftLeft':
                              // shifts the oos left, and tells child oos so they move can too.
                              //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> this:case(func/XpandAll) -> here
                              //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> this:case(func/XpandAll) -> here
                              //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> this:case(func/XpandAll) -> here
                              contextObj['leftOffset'] = msg.params.left;
                                 for (let h in contextObj.prospectiveObj) {
                                            send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":contextObj['leftOffset'],"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}ShiftLeft"}});
                                            if(contextObj.prospectiveObj[h].haschild){
                                                send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":contextObj['leftOffset'] + colWidth-29,"fromParent":true,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}ShiftLeft2"}});
                                            }
                                      }
                      break;

                      case 'toggleExpandCollapseAll':
                          // this is used to collapse or expand an entire chain of ideas
                          if (msg.params.collapse){
                            send({"jsonrpc":"2.0","method":"CLICK-Collapse","params":{"to":["${name}"],"from":"${name}"}});

                          }
                          else {
                            send({"jsonrpc":"2.0","method":"CLICK-Xpand","params":{"to":["${name}"],"from":"${name}"}});
                          }
                          if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
                            send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":contextObj['leftOffset'] + colWidth-29,"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}toggleExpandCollapseAll"}});
                            setTimeout(function () {
                              send({"jsonrpc":"2.0","method":"toggleExpandCollapseAll","params":{"collapse":msg.params.collapse,"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}"}});
                            }, 10);
                          }


                      break;

                      case 'shiftBack':
                            //shifts the oos back, unused?
                              contextObj['y'] = msg.params.y;
                              contextObj['z'] = msg.params.z;
                              contextObj['x'] = msg.params.x;
                               for (let h in contextObj.prospectiveObj) {
                                        if (h==contextObj.currentprospective){
                                                send({"jsonrpc":"2.0","method":"shiftBackAsIdea","params":{"x":contextObj.leftOffset,"y":String(msg.params.y),"z":String(msg.params.z),"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}shiftbackasidea3"}});
                                          }
                                      }
                      break;

                      case 'atFront':
                        //sets the layout state to at front. updates the child ideas based on the atTop_layoutSubState (set elsewhere)
                        //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/showAll) -> here
                        //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> ooContextManager#parent#:case(func/showAll) -> here
                        //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> ooContextManager#parent#:case(func/showAll) -> here
                        //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                        //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/setUserInteracting#timeout 1000#>>func/reCalcPositions) -> here
                        //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                        //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                        //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftUp) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                        //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftDown) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                        //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                        //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                        //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                        //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                        layoutState = 'atFront'
                            switch (atTop_layoutSubState) {
                              case 'allXpanded':
                                    // don't need to do anyidea as all already visible only set from scroll after hover.
                                    XpandAll(["ooContextManager:case(case-allXpanded)"]);
                                    showAll(["ooContextManager:case(case-allXpanded)"]);
                                break;
                                case 'oneXpanded':
                                      hideAllButTop();
                                      XpandTop();
                                  break;
                                case 'oneCollapsed':
                                      hideAllButTop();
                                      collapseTop()
                                      break;
                              default:
                                      hideAllButTop();
                                      XpandTop();
                            }
                            if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
                              send({"jsonrpc":"2.0","method":"atFront","params":{"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}"}})
                            }
                      break;

                      case 'atRear':
                            //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/showAll) -> here
                            //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> ooContextManager#parent#:case(func/showAll) -> here
                            //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> ooContextManager#parent#:case(func/showAll) -> here
                            //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                            //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                            //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                            //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                            //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                            //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                            //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                            //sets the layout state to at rear. informs the top child
                            layoutState = 'atRear'
                            hideAllButTop();
                            collapseTop();
                            if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
                              send({"jsonrpc":"2.0","method":"atRear","params":{"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}"}})
                            }
                            send({"jsonrpc": "2.0", "method": "HIDE", "params": {"to":["_"+String(contextObj.context)+"_"+ "0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}"}}); // hide input if at rear
                        break;

                        case 'atFore':
                              //sets the layout state for the group of oos under this context to at fore.this is invisible, so all oos must be hidden
                              //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                              //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> ooContextManager#parent#:case(func/setUserInteracting#timeout 1000#>>func/reCalcPositions) -> here
                              //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftUp) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                              //ooIdea:scroll(func/{}_scroll(e))>>msg/ShiftDown) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                              //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                              //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> ooContextManager#parent#:case(func/reCalcPositions) -> here
                              //ooIdea:scroll(y>0) -> this:case(ShiftUp -> reCalcPositions?) -> here
                              layoutState = 'atFore'
                              hideAll();
                              for (let h in contextObj.prospectiveObj) {
                                       if(contextObj.prospectiveObj[h].haschild){
                                           send({"jsonrpc":"2.0","method":"atFore","params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                   }
                               }
                        break;

                   case 'parentHidden':
                              //an instruction to say that the parent of this context (contextObj.context) is hidden.
                              //ooIdea:scroll(func/{}_content_mouseout(e))>>msg/MOUSEOUT) -> ooContextManager#parent#:case(func/hideAllButTop>>msg/parentHidden) -> here
                              //ooIdea:scroll(func/{}_content_mouseout(e))>>msg/MOUSEOUT) -> ooContextManager#parent-n#:case(func/hideAllButTop>>msg/parentHidden) -> ooContextManager#parent#:case(func/hideAll>>msg/parentHidden)*n -> here
                              hideAll();
                              if (msg.params.width){
                                colWidth = msg.params.width
                              }
                    break;

                  case 'MOUSEOUT':
                          //called when the mouse goes out from the top idea under this context. hideAllButTop called.
                          //ooIdea:scroll(func/{}_content_mouseout(e))>>msg/MOUSEOUT) -> here

                          hideAllButTop();
                          atTop_layoutSubState  = 'oneXpanded'
                  break;

                  case 'HOVERING':
                        // called when the mouse goes out hovers over the top idea under this context. showAll called.
                        //ooIdea:hover(func/{}_content_hover(e)>>msg/HOVERING) -> here
                        //ooIdea:hover(func/{}_scroll>>msg/HOVERING) -> here
                        //ooIdea:hover(func/{}_scroll#timeout 100#>>msg/HOVERING) -> here
                        setUserInteracting()
                        clearTimeout(timeout)
                        XpandAll(["ooContextManager:case(HOVERING)"]);
                        showAll(["ooContextManager:case(HOVERING)"]);
                        atTop_layoutSubState  = 'allXpanded'
                        contextObj['isFixed'] = true;
                        reCalcPositions()
                  break;

                  case 'CLICK-Xpand':
                      //called when the mouse clicks the left side of the top idea under this context, if it was collapsed.

                      atTop_layoutSubState  = 'oneXpanded'
                      setUserInteracting()
                      XpandTop();

                      contextObj['isFixed'] = true;
                  break;

                  case 'CLICK-Collapse':
                        // called when the mouse clicks the left side of the top idea under this context, if it was xpanded.
                        setUserInteracting()
                        collapseTop();
                        atTop_layoutSubState  = 'oneCollapsed'
                        contextObj['isFixed'] = true;
                  break;

                  case 'SetLeftPos':
                    contextObj['leftOffset'] = msg.params.left;
                  break;

                  case 'newContext':
                        //notification of new context, this is tracked to be able to send child oos msgs if required.
                        for (let h in contextObj.prospectiveObj){
                          if (h == msg.params.context){
                            contextObj.prospectiveObj[h].haschild = true;
                            contextObj.prospectiveObj[h].childContextMan = '_' + metaooManagerProspective + '_' + XORcontextidea(metaooManagerProspective,h,metaoodistance);
                            send({"jsonrpc":"2.0","method":"setasContext","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}})

                          }
                        }
                  break

                  case 'SetTopOffset':
                        //re-calibrates y distance between ideas (usually after screen resize), recalcs layou
                        topOffset = window.innerHeight - 420;
                        yinc = topOffset*250000/(1000000-(topOffset*topOffset));
                        if (yinc<20){yinc=20}
                        if (yinc >125){yinc=125}
                        reCalcPositions()
                  break;

                  case 'addtoContextPendingTotal':
                      //If transaction has been sent- it's amount is notified here
                      contextPendTotal -= Math.abs(contextObj.prospectiveObj[msg.params.prospective].pend)
                      contextPendTotal += Math.abs(msg.params.amt)
                      contextPendTotal = Math.round(contextPendTotal)
                      contextObj.prospectiveObj[msg.params.prospective].pend = Math.round(msg.params.amt);
                      for (let h in contextObj.prospectiveObj){
                            send({"jsonrpc":"2.0","method":"setContextPendingTotal","params":{"amt":contextPendTotal,"to":["_"+String(msg.params.context)+"_"+String(h)],"from":"${name}"}})
                      }
                  break;

                  case 'setColours':
                        // instruction to tell oos of the filter colour scheme
                        //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/setColours) -> ooContextCurator(msg/setColours) -> here
                        contextObj.filterColours = msg.params.filterColours
                        for (let h in contextObj.prospectiveObj){
                          send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":contextObj.filterColours,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}CONTEXTMAN"}});
                        }
                  break;

                  case 'setAncestors':
                        //sends the ancestors object of to child idea and the input oo (to avoid name clashes)
                        ancestorObj = msg.params.ancestorObj;
                        ancestorObj[contextObj.context] = true;
                        send({"jsonrpc":"2.0","method":"ancestorObj","params":{"ancestorObj":ancestorObj,"to":["_"+String(contextObj.context)+"_"+String("0x0000000000000000000000000000000000000000000000000000000000000000")],"from":"${name}"}});
                        for (let h in contextObj.prospectiveObj){
                            if(contextObj.prospectiveObj[h].haschild){
                                send({"jsonrpc":"2.0","method":"ancestorObj","params":{"ancestorObj":ancestorObj,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}})
                            }
                        }
                  break;

              /********************************************************************************/

               case "shiftBackAsIdea":
                      // Used to set the position of this oo in the meta layout.
                      // relay MOVEYZ to self
                      send({"jsonrpc":"2.0","method":"MOVEXYZ","params":{"x":msg.params.x,"y":msg.params.y,"z":msg.params.z,"to":["${name}"],"from":"${name}contextman"}});
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
                      // Used to set the distance of this oo. Used to workout the code for interpretting.
                      if (distance != msg.params.distance){
                            distance = msg.params.distance;
                            send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":XORcontextprospective("${context}","${prospective}","${distance}"),"context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});
                      }
                  break;
                  /********************************************************************************/

                      `,
  STARTUPmessages : `[{"jsonrpc":"2.0","method":"SetTopOffset","params":{"to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}

return base_template(context_outerTemplateObj);
}
