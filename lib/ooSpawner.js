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
let spawner_proc = function(context,prospective,distance,name="Spawner",_class='meta'){
let description = `This adds a new oo to the dom when instructed.`
let spawner_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>Spawner\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div>
                      `,
  objectDefs : `

  let createProc = (txt) => {
    let jel = document.createElement('script');
     jel.innerHTML = txt;
    document.getElementById('main').append(jel);

  }


/*** This is where all of the initialisation processes are spawned (spawner itself is spawned from index.)*/

  /* Inital processes to spawn. */
    createProc(userComms_proc(metathisooManagersprospective,txtToOOhk('userComms'),metaoodistance,txtToOOId('userComms')));
 // createProc(webWorker_proc(metathisooManagersprospective,txtToOOhk('webWorker'),metaoodistance,txtToOOId('webWorker')))
  createProc(IconCreator_proc(metathisooManagersprospective,txtToOOhk('IconCreator'),metaoodistance,txtToOOId('IconCreator')))
  //createProc(logSorter_proc(metathisooManagersprospective,txtToOOhk('logSorter'),metaoodistance,txtToOOId('logSorter')))
createProc(filtermain_proc(metathisooManagersprospective,txtToOOhk('filtermain'),metaoodistance,txtToOOId('filtermain')))
  createProc(contentGetter_proc(metathisooManagersprospective,txtToOOhk('contentGetter'),metaoodistance,txtToOOId('contentGetter')))
  createProc(filterCurator_proc(metathisooManagersprospective,txtToOOhk('filterCurator'),metaoodistance,txtToOOId('filterCurator')))
  createProc(contextCurator_proc(metathisooManagersprospective,txtToOOhk('contextCurator'),metaoodistance,txtToOOId('contextCurator')))
  //createProc(filterInput_proc(metathisooManagersprospective,txtToOOhk('filterInput'),metaoodistance,txtToOOId('filterInput')))
  createProc(metaFilterInput_proc(metathisooManagersprospective,txtToOOhk('metaFilterInput'),metaoodistance,txtToOOId('metaFilterInput'),'meta'))
  createProc(pendingTx_proc(metathisooManagersprospective,txtToOOhk('pendingTx'),metaoodistance,txtToOOId('pendingTx')))
//  createProc(logo_proc(metathisooManagersprospective,txtToOOhk('logo'),metaoodistance,txtToOOId('logo')));
  createProc(metalogo_proc(metathisooManagersprospective,txtToOOhk('metalogo'),metaoodistance,txtToOOId('metalogo')));
  createProc(hyperManager_proc(metathisooManagersprospective,txtToOOhk('hyperManager'),metaoodistance,txtToOOId('hyperManager')))


  let thiscontext = XORcontextidea("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",hexifyString("this"),0)
  let thisid = "_0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff_" + thiscontext


// delayed simulated click on right icon of "this" in meta layer, this forces rearrangement of oos that are live - map to spawned processes above.
setTimeout(function () {
    send({"jsonrpc":"2.0","method":"simulteClickOnRight","params":{context:"${context}","to":[thisid],"from":"${name}"}})
}, 4000);


  /*********************************************************************************/

                let filterColours;
                let spawned = {}

                /********************************************************************************/ // handles ideas to do with meta layer representation

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


                // handle on hover in meta layer
                function ${name}_content_hover(e){
                    send({"jsonrpc":"2.0","method":"setLayoutState","params":{"setting":"isFixed","flag":true,"to":[parentcontextManId],"from":"${name}"}})
                    if (!(isHidden)){
                      send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[parentcontextManId],"from":"${name}"}})
                    }
                }
                document.getElementById("${name}_content").addEventListener("mouseover",${name}_content_hover);

                // put this oo in meta layer for display to user
                send({"jsonrpc":"2.0","method":"addideatoMetaManContext","params":{"prospective":"${prospective}","fromParent":true,"to":["_"+ metaooManagerProspective + "_" + XORcontextidea(metaooManagerProspective,metaooManagerProspective,metaoodistance)],"from":"${name}"}});



                // handle scrolling in meta layer
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

                // handle mouseout in meta layer
                function ${name}_content_mouseout(e){
                    if (!(isHidden)){
                      send({"jsonrpc":"2.0","method":"MOUSEOUT","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}})
                    }
                }
                document.getElementById("${name}_content").addEventListener("mouseout",${name}_content_mouseout);



                /********************************************************************************/






  `,
  RESULTcases : ``,
  METHODcases : `
            /*
                  spawn: spawns an oo (the main item visible in the layout.) notifies it of the filter colour scheme
                        params: - parameters for the templating process
                            name :
                            context :
                            prospective :
                            distance

                  spawnInput: spawns an input idea - one is used for each context in the layuout
                        params: - parameters for the templating process
                            name :
                            context :
                            prospective :
                            distance
                  spawnContextManager: spawns a context manager oo
                        params: - parameters for the templating process
                            name :
                            context :
                            prospective :
                            distance
                  spawnFilter: spawns a filter oo
                        params: - parameters for the templating process
                            isMeta : bool - true if filter is for meta layer
                            context :
                            prospective :
                  spawnFiller: spawns a filler oo for the filters (provides a padding for the layout. This is an artefact of the development process and will be removed in future)
                        params: - parameters for the templating process
                            isMeta : bool - true if filter is for meta layer
                            context :
                            prospective :
                  setColours: update the filter colours
                  shiftBackAsIdea: set the z position of this oo in the meta layer layout.
                  setDistance: set the distance of this oo in the meta layer layout.
            */

                case 'spawn':
                    // spawns a idea (the main item visible in the layout.)
                    //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(/msg/Signal) -> ooContextManager:case(msg/spawn) -> here
                    //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext)-> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(msg/spawn) -> here
                    //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(msg/spawn) -> here
                    //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> ooHyperManager:case(msg/refreshContext) -> ooFilterCurator:case(msg/refreshContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator:case(msg/newContext#if no context#) -> ooFilterCurator:case(msg/newContext) -> ooFilter:case(func/getWeightingsForContext>>msg/SignalForContextCurator) -> ooContextCurator(msg/Signal) -> ooContextManager:case(msg/spawn) -> here
                    //check, valid params:
                    if (msg.params.context.slice(0,2) == '0x' && msg.params.prospective.slice(0,2) == '0x'){
                            if (!(msg.params.name in spawned)){
                                spawned[msg.params.name] = true;
                            if (msg.params._class == 'meta'){
                                createProc(idea_proc(msg.params.context,msg.params.prospective,msg.params.distance,msg.params.x,msg.params.name,'meta'));
                            }
                            else {
                                createProc(idea_proc(msg.params.context,msg.params.prospective,msg.params.distance,msg.params.x,msg.params.name));
                            }
                                send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":["_"+String(msg.params.context)+"_"+String(msg.params.prospective)],"from":"${name}","class":'originBlkchnEvent'}});
                            }
                    }
                    break;

                case 'spawnInput':
                    //spawns an input idea - one is used for each context in the layuout. Note thedefault prospective for input ideas is "0x0000000000000000000000000000000000000000000000000000000000000000"

                    if (!('_'+String(msg.params.context)+'_0x0000000000000000000000000000000000000000000000000000000000000000' in spawned)){
                          spawned['_'+String(msg.params.context)+'_0x0000000000000000000000000000000000000000000000000000000000000000'] = true;
                          if (msg.params._class == 'meta'){
                            createProc(inputidea_proc(msg.params.context,'0x0000000000000000000000000000000000000000000000000000000000000000',msg.params.distance,msg.params.x,'_'+String(msg.params.context)+'_0x0000000000000000000000000000000000000000000000000000000000000000','meta'));
                          }
                          else {
                            createProc(inputidea_proc(msg.params.context,'0x0000000000000000000000000000000000000000000000000000000000000000',msg.params.distance,msg.params.x,'_'+String(msg.params.context)+'_0x0000000000000000000000000000000000000000000000000000000000000000'));
                          }
                    }
                break;
                case 'spawnContextManager':
                    //spawns a context manager oo - one is used for each context in the layuout.
                    createProc(context_proc(msg.params.context,msg.params.prospective,msg.params.distance,msg.params.name,'meta'));
                break;
                case 'spawnFilter':
                    //spawns an input idea - one is used for each context in the layuout. Note thedefault prospective for input ideas is "0x0000000000000000000000000000000000000000000000000000000000000000"

                          if (msg.params.isMeta){
                            createProc(filter_proc(msg.params.context,msg.params.prospective,msg.params.distance,"_"+msg.params.context+"_"+msg.params.prospective,'meta'))//
                          }
                          else {
                            createProc(filter_proc(msg.params.context,msg.params.prospective,msg.params.distance,"_"+msg.params.context+"_"+msg.params.prospective))//
                          }

                break;

                case 'spawnFiller':
                    //spawns an input idea - one is used for each context in the layuout. Note thedefault prospective for input ideas is "0x0000000000000000000000000000000000000000000000000000000000000000"
                          if (msg.params.isMeta){
                            createProc(filler_proc(msg.params.context,msg.params.prospective,1,"_"+msg.params.context+"_"+msg.params.prospective,'meta'))//
                          }
                          else {
                            createProc(filler_proc(msg.params.context,msg.params.prospective,1,"_"+msg.params.context+"_"+msg.params.prospective))//
                          }

                break;
                case 'setColours':
                      //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/setColours) -> ooContextCurator(msg/setColours) -> here
                      filterColours = msg.params.filterColours
                break;


                          /********************************************************************************/

                        case "shiftBackAsIdea":
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

                          case 'setDistance':
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
return base_template(spawner_outerTemplateObj);
}
