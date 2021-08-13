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
let contextCurator_proc = function(context,prospective,distance,name="contextCurator",_class='meta'){
let description = `Context curator: manages all the contexts in the document`
let contextCurator_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>contextCurator\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div>
                      `,
  objectDefs : `

                let contextObj = {}; // keeps a record of the contexts that exist in the document
                let filterColours = {}

                /********************************************************************************/ //handles positioning/events in the metalayout

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

                function ${name}_left_click(){
                  let tel = document.getElementById('${name}_content');
                  let ymsg
                  if(tel.style.display=='none'){
                      tel.style.cssText += ' display:grid;'
                    }
                  else{
                      tel.style.cssText += ' display:none;'
                  }
                }
                document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

                /********************************************************************************/


    let contextlabel
    let contextname
    let parent
    let child

    // Note the startup messages for this, the context curator oo, instruct new base and meta contexts 0x0000000000000000000000000000000000000000000000000000000000000000 and 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

    send({"jsonrpc":"2.0","method":"newContext","params":{"context":"0x0000000000000000000000000000000000000000000000000000000000000000","parentContext":"0x0000000000000000000000000000000000000000000000000000000000000000","distance":"${0}","isForMeta":false,"to":[txtToOOId("contextCurator"),txtToOOId("filterCurator")],"from":"${name}"}})
    send({"jsonrpc":"2.0","method":"newContext","params":{"context":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","parentContext":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","distance":"${0}","isForMeta":true,"to":[txtToOOId("contextCurator"),txtToOOId("filterCurator")],"from":"${name}"}})

    send({"jsonrpc":"2.0","method":"setPath","params":{"path":"0x0000000000000000000000000000000000000000000000000000000000000000","to":['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,"0x0000000000000000000000000000000000000000000000000000000000000000",metaoodistance)],"from":"${name}"}})






    let rootcontextMan = "_"+metaooManagerProspective+"_"+XORcontextidea(metaooManagerProspective,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",metaoodistance)
    let thiscontext = XORcontextidea("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",hexifyString('this'))


  //  send({"jsonrpc":"2.0","method":"newFilterForContext","params":{"context":"0x0000000000000000000000000000000000000000000000000000000000000000","to":[txtToOOId("web3wsManager")],"from":"${name}"}})
  //  send({"jsonrpc":"2.0","method":"newFilterForContext","params":{"context":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","to":[txtToOOId("web3wsManager")],"from":"${name}"}})
  //  send({"jsonrpc":"2.0","method":"newFilterForContext","params":{"context":thiscontext,"to":[txtToOOId("web3wsManager")],"from":"${name}"}})
let tmpmsg




                `,
  RESULTcases : ``
                    ,
  METHODcases : ` /*

                  newContext:  Informs the context curator of a new context. Each of the known context managers is informed. A new context manager oo is then spawned for the new context. and its meta/base status in updated
                                params:
                                    context: the context to add
                                    isMeta does the context manage ideas in the base layer [false] or meta [true]
                  Signal: a new signal containing revised information for the weighting of value signals from a given filter. This is forwarded to the relevant context manager.
                                params:
                                  context: the context to which the revised signal weighting is sent
                                  isMeta: is the filter for the base layer [true], or meta.
                  setColours: update the filter colour scheme (informs spawner oo, for new oos) and the existing context managers.
                                params:
                                    filterColours: a list of the colours.
                  moveIdeasZ *depreciated* tells the context mangers to move all ideas by z

                  */


                  case 'newContext':
                    // Informs the context curator (this oo) of a new context. Each of the known context managers is informed. A new context manager oo is then spawned for the new context. and its meta/base status in updated
                    for (let t in contextObj){
                        send({"jsonrpc":"2.0","method":"newContext","params":{"context":String(msg.params.context),"to":[contextObj[t].contextMan,txtToOOId("filterCurator")],"from":"${name}"}});

                    }
                    if (!(msg.params.context in contextObj)){
                            contextObj[msg.params.context] = {"context":String(msg.params.context),"parentContext":String(msg.params.parentContext),"distance":String(msg.params.distance)};
                            //spawn context manager...
                            contextlabel = XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance)
                            contextname = '_'+metaooManagerProspective+'_'+contextlabel;
                            send({"jsonrpc":"2.0","method":"spawnContextManager","params":{"context":metaooManagerProspective,"prospective":contextlabel,"left":msg.params.left,"distance":metaoodistance,"name":contextname,"to":[txtToOOId('Spawner')],"from":"${name}___1"}})
                            if (msg.params.isForMeta){
                                    send({"jsonrpc":"2.0","method":"setMetaManStatus","params":{"isForMeta":true,"left":msg.params.left,"to":[contextname],"from":"${name}"}})
                            }
                            else {
                                    send({"jsonrpc":"2.0","method":"setMetaManStatus","params":{"isForMeta":false,"left":msg.params.left,"to":[contextname],"from":"${name}"}})
                            }
                            // add the new context to the contextcurators record of existing contexts.
                            contextObj[msg.params.context]['contextMan'] = contextname
                            // inform the new context manager of the filter colour scheme.
                            send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[contextname],"from":"${name}"}});
                            send({"jsonrpc":"2.0","method":"setParent","params":{"parent":'_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,String(msg.params.parentContext),metaoodistance),"to":[contextname],"from":"${name}"}});

                    }

                    // inform context managers of all existing contexts.
                    for (let t in contextObj){
                        send({"jsonrpc":"2.0","method":"CONTEXTS","params":{"contexts":contextObj,"to":[contextObj[t].contextMan],"from":"${name}"}});
                    }
                    send({"jsonrpc":"2.0","method":"CONTEXTS","params":{"contextObj":contextObj[msg.params.context],"to":[txtToOOId("pendingTx")],"from":"${name}"}});
                    break;

                    case 'SignalForContextCurator':
                          //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) ->ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> here
                          //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> here
                          //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> here
                          //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> here

                          //a new signal containing revised information for the weighting of value signals from a given filter. This is forwarded to the relevant context manager.
                          if (!(msg.params.context in contextObj)){
                              contextlabel = XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance)
                              contextname = '_'+metaooManagerProspective+'_'+contextlabel;
                              contextObj[msg.params.context] = {}
                              contextObj[msg.params.context]['contextMan'] = contextname
                              console.log('newcontext?',msg.params.context)
                              send({"jsonrpc":"2.0","method":"newContext","params":{"group":"originBlkchnEvent","context":String(msg.params.context),"to":['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance),txtToOOId("filterCurator")],"from":"${name}"}});
                          }
                          //send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance)],"from":"${name}"}});
                          msg.params.to = ['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance)] //ooContextManager instance
                          msg.params.from = name
                          msg.method = "Signal"
                          tmpmsg = JSON.parse(JSON.stringify(msg))
                          console.log('SignalForContextCurator44',JSON.stringify(tmpmsg))
                          send(tmpmsg)

                    break;
                    case 'DiscardSignalForContextCurator':
                          //ooPendingTxManager:click(send_signal-discard) -> ooFilterMain(case-pendingDiscardSignalConfirmed) -> ooFilter(case-discardSignal)... -> here
                          console.log('in context curator disgcard sig')
                          //a new signal containing revised information for the weighting of value signals from a given filter. This is forwarded to the relevant context manager.
                          if (!(msg.params.context in contextObj)){
                              send({"jsonrpc":"2.0","method":"newContext","params":{"group":"originBlkchnEvent","context":String(msg.params.context),"to":['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance),txtToOOId("filterCurator")],"from":"${name}"}});
                          }
                          msg.params.to = ['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,String(msg.params.context),metaoodistance)]
                          msg.params.from = name
                          msg.method = "DiscardSignal"
                          //tmpmsg = JSON.parse(JSON.stringify(msg))
                        //send(msg)

                    break;

                    case 'setColours':
                          // update the filter colour scheme (informs spawner oo, for new oos) and the existing context managers.
                          //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/setColours) -> here
                          filterColours = msg.params.filterColours
                          send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[txtToOOId("Spawner")],"from":"${name}"}});
                          for (let t in contextObj){
                              send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[contextObj[t].contextMan],"from":"${name}"}});
                          }
                    break;


                    /********************************************************************************/ //handles positioning in the metalayout

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
return base_template(contextCurator_outerTemplateObj);
}
