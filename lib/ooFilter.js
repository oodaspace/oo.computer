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
let filter_proc = function(context,prospective,distance=0,name="filter",_class='base'){
let description = `a filter oo`;
let filter_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:grid;grid-template: 18px auto 34px 18px/ auto 30px 30px;max-width:300px;}
                #${name} {display:none;}
              </style>
      \<div id="${name}title">

         
      \</div>
                      `,
  objectDefs : `

  //***   ooFilter.js  ***//



    let leftOffset = -14;
    let parent
    let filterObj = {}    // contains members of this filter
    let contextAddressProspectiveObj = {}
    let prospectiveObj = {total:0}

    let filterTotal = 0;
    let filterProspective = "${name}".split('_')[2];
    let barColour = "orange";

    let colWidth

    dropObj['setChild'] = true;
    dropObj['ShiftLeft'] = true;
    let isMetaFilter = (cla == 'meta') ? true : false;


    let total = 0

    let filterdirector = XORcontextprospective("${context}","${prospective}",2)


async function getWeightingsForFilter(){
      let filtercontext = "${prospective}"
      let wordObj = await IdeaValueTreeGet(filtercontext)
      if (wordObj){
              // word in value tree:

                          wordObj = JSON.parse(wordObj)
                          console.log('filter setting filterObj',wordObj)
                          //if (typeof wordObj === 'string'){wordObj = JSON.parse(wordObj)}
                             let propsObj = wordObj.signallers[filterdirector].propsObj
                             let totalsObj = wordObj.signallers[filterdirector].totalsObj
                             for (let item in propsObj){
                                    let addr = XORcontextprospective("${prospective}",item,3)
                                     if (!(Object.keys(filterObj).includes(addr))){
                                          filterObj[addr] = {amt:0,prop:0}
                                    }
                                    if (!(Object.keys(filterObj[addr]).includes('amt'))){
                                          filterObj[addr].amt = totalsObj[item]
                                    }
                                    else {
                                          filterObj[addr].amt = totalsObj[item]
                                    }
                                    if (!(Object.keys(filterObj[addr]).includes('prop'))){
                                          filterObj[addr]['prop'] = propsObj[item]
                                    }
                                    else {
                                          filterObj[addr].prop = propsObj[item]
                                    }
                             }
      }
      send({"jsonrpc":"2.0","method":"filterforcontainer","params":{"filter":"${name}","filterObj":filterObj,"color":barColour,"to":[txtToOOId("filtermain")],"from":"${name}2"}})
}


async function getWeightingsForContext(context){
      let contextProspectiveObj = {}
      let ideas = []
      for (let filterer in filterObj){
            let wordObj = await IdeaValueTreeGet(context) 
            if (wordObj){
                      // word in value tree:
                      wordObj = JSON.parse(wordObj)
                      let dist = wordObj.distance
                      if (typeof wordObj === 'string'){wordObj = JSON.parse(wordObj)}
                      if (Object.keys(wordObj.signallers).includes(filterer)){
                               propsObj = wordObj.signallers[filterer].propsObj
                               totalsObj = wordObj.signallers[filterer].totalsObj
                               total = wordObj.signallers[filterer].total

                               for (let prospective in propsObj){
                                        //let idea = XORcontextprospective(context,prospective,dist)
                                       if (!(Object.keys(contextProspectiveObj).includes(context))){
                                              contextProspectiveObj[context] = {total:0}
                                       }
                                       if (!(Object.keys(contextProspectiveObj[context]).includes(prospective))){
                                               contextProspectiveObj[context][prospective] = {total:0,prop:0}
                                       }

                                       let b = await IdeaValueTreeGet(prospective)
                                       if (b){
                                                b = JSON.parse(b)
                                                if (!b.isDiscarded){
                                                         contextProspectiveObj[context][prospective].total += totalsObj[prospective]*filterObj[filterer].prop
                                                         contextProspectiveObj[context][prospective].prop += propsObj[prospective]*filterObj[filterer].prop
                                                         contextProspectiveObj[context].total += totalsObj[prospective]*filterObj[filterer].prop
                                                         let idea = XORcontextprospective(context,prospective,wordObj.distance)
                                                         if (!ideas.includes(idea)) ideas.push(idea)
                                                  }
                                                else {
                                                    contextProspectiveObj[context][prospective].total = 0
                                                    contextProspectiveObj[context][prospective].prop = 0
                                                    let idea = XORcontextprospective(context,prospective,wordObj.distance)
                                                    ideas = ideas.filter(item => {item !== idea})
                                                    send({"jsonrpc":"2.0","method":"RemoveOO","params":{"prospective":prospective,to:['_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,String(context),metaoodistance)]}})
                                                }
                                          }
                                          else {
                                            contextProspectiveObj[context][prospective].total += totalsObj[prospective]*filterObj[filterer].prop
                                             contextProspectiveObj[context][prospective].prop += propsObj[prospective]*filterObj[filterer].prop
                                             contextProspectiveObj[context].total += totalsObj[prospective]*filterObj[filterer].prop
                                             let idea = XORcontextprospective(context,prospective,wordObj.distance)
                                             if (!ideas.includes(idea)) ideas.push(idea)
                                          }
                              }
                      }
            }
      }
    
      //normalise:
      let maxProp = 0
      for (let p in contextProspectiveObj[context]){
            if (contextProspectiveObj[context][p].prop > maxProp){
              maxProp = contextProspectiveObj[context][p].prop
            }
      }
      for (let p in contextProspectiveObj[context]){
            contextProspectiveObj[context][p].prop = contextProspectiveObj[context][p].prop/maxProp
      }
      send({"jsonrpc": "2.0", "method": 'SignalForContextCurator',params:{"context": context, "isFromMetaFilter":isMetaFilter,"filter": "${name}","prospectiveObj": contextProspectiveObj[context],"total":total, "to":[txtToOOId("contextCurator")], "from": "${name}"}})
}


send({"jsonrpc":"2.0","method":"refreshFilter","params":{"to":["${name}"],"from":"${name}"}});

setTimeout(function () {
  getWeightingsForContext('0x0000000000000000000000000000000000000000000000000000000000000000')
}, 1000);

  `,
  RESULTcases : ` /*
                      ADDRICON: Responding with the icon for a filter address, from icon creator oo
                  */

                  case 'ADDRICON':
                              let ael = document.getElementById(\`\${name+'_'+String(msg.result.address)}icon\`);
                              try{ael.innerHTML = msg.result.svg}catch{}
                  break;
                  `
                    ,
  METHODcases : `
              /*
                  newContext: notifcation of a new context.
                  SignalAddress: notifcation of a value signal for one of the addresses in this filter. The filter director has indicated relative value of and address. This adjusts the weighting of the addresses within the filter accordingly, adding a new address if necessary. Updates the bar-chart.
                  SignalIdea: A notification of a new value signal for an oo in the layout. This calculates the distribution of value signals from this filter and sends to the contextcurator for co-ordination of updates to oos.
                  setColour: set the colour of this filter.
                  ShiftLeft: moves to a position on the x-axis.
                  setChild: sets the child (the oo to the left in the layout chain) should be either a  filler or the filter input  oo
                  setParent: sets the parent (the oo to the left in the layout chain) should be a filler.
              */

                case 'destroyFilter':
                          // notifcation that this filter is now longer required in the layout
                        send({"jsonrpc": "2.0", "method": "filterDestroyed", params:{"contextAddressProspectiveObj" : JSON.stringify(contextAddressProspectiveObj), "filter" : "${name}", "to":[txtToOOId("contextCurator")], "from": "${name}"}})
                  break;

                  case 'newContext':
                          // notifcation of a new context.
                          if (!(msg.params.context in contextAddressProspectiveObj)){
                                contextAddressProspectiveObj[msg.params.context] = {}
                                getWeightingsForContext(msg.params.context)
                          }
                  break;

                  case 'filtererFromMain':
                          //ooFilterMain:click(func/{}enterfilterer>>func/addfiltererToFilter>>msg/filtererFromMain) -> here
                          address = msg.params.address
                          if (!(address in filterObj)){   // New address in filter
                                    filterObj[address] = {"amt":0,"prop":0}

                                    for (let t in contextAddressProspectiveObj){
                                        contextAddressProspectiveObj[t][address] = {}
                                    }
                                    send({"jsonrpc":"2.0","method":"newAddress","params":{"address":address,"to":[txtToOOId("filterCurator")],"from":"${name}"}});
                                    send({"jsonrpc":"2.0","method":"ADDRICON","params":{"address":address,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id":"ADDRICON"});
                                    send({"jsonrpc":"2.0","method":"filterforcontainer","params":{"filter":"${name}","filterObj":filterObj,"color":barColour,"to":[txtToOOId("filtermain")],"from":"${name}1"}})
                            }

                  break;


                  case 'refreshContext':
                          getWeightingsForContext(msg.params.context)
                    break;

                    case 'refreshFilter':
                            getWeightingsForFilter()
                      break;

                  case 'SignalAddress':
                          //notifcation of a value signal for one of the addresses in this filter. The filter director has indicated relative value of and address. This adjusts the weighting of the addresses within the filter accordingly, adding a new address if necessary. Updates the bar-chart.

                          address = XORcontextprospective(msg.params.context,msg.params.prospective,3);
                          let context = msg.params.context;
                          let prospective = msg.params.prospective;
                          let idea = address;
                          if (String(context) == filterProspective){
                                    filterTotal = 0;
                                    filterObj[address].amt = msg.params.amt;
                                    for (let f in filterObj){
                                        filterTotal += (f == address) ? msg.params.amt : filterObj[f].amt;
                                    }

                                    if (filterTotal != 0){
                                              for (let k in filterObj){
                                                filterObj[k].prop = filterObj[k].amt/filterTotal;
                                              }
                                              for (let f in filterObj){
                                                    let pel = document.getElementById(\`\${String(name)+'_'+String(f)}\`);
                                                    let pr =  \`height:\${filterObj[f].prop*100}%\`
                                                    pel.style.cssText += pr;
                                              }
                                    }
                              }
                              else if (idea in filterObj){
                                            filterTotal = 0
                                            filterObj[idea].amt = msg.params.amt;
                                            for (let f in filterObj){
                                                    filterTotal += (f == idea) ? msg.params.amt : filterObj[f].amt;
                                            }
                                            if (filterTotal != 0){
                                                    for (let k in filterObj){
                                                        filterObj[k].prop = filterObj[k].amt/filterTotal
                                                    }
                                                    for (let f in filterObj){
                                                        let uel = document.getElementById(\`\${String(name)+'_'+String(f)}\`);
                                                        uel.style['height'] =  \`"\${filterObj[f].prop*100}%;"\`
                                                    }
                                              }
                              }
                              send({"jsonrpc":"2.0","method":"filterforcontainer","params":{"filter":"${name}","filterObj":filterObj,"color":barColour,"to":[txtToOOId("filtermain")],"from":"${name}2"}})
                    break;

                      case 'SignalIdea':
                                // A notification of a new value signal for an oo in the layout. This calculates the distribution of value signals from this filter and sends to the contextcurator for co-ordination of updates to oos.
                                let maxP = 0;
                                total = 0;
                                if (!(msg.params.context in contextAddressProspectiveObj)){
                                    contextAddressProspectiveObj[msg.params.context] = {}

                                }
                                contextAddressProspectiveObj[msg.params.context][msg.params.address] = msg.params.prospectiveObj


                                for (let a in contextAddressProspectiveObj[msg.params.context]){
                                        if (a in filterObj){
                                              for (let h in contextAddressProspectiveObj[msg.params.context][a]){
                                                if (h != 'total'){
                                                    if (!(h in prospectiveObj)){
                                                      prospectiveObj[h] = {total:0,prop:0}

                                                      prospectiveObj[h].total = contextAddressProspectiveObj[msg.params.context][a][h].total*filterObj[a].prop
                                                      prospectiveObj[h].prop = contextAddressProspectiveObj[msg.params.context][a][h].prop*filterObj[a].prop
                                                    }
                                                    else {
                                                      prospectiveObj[h].total += contextAddressProspectiveObj[msg.params.context][a][h].total*filterObj[a].prop
                                                      prospectiveObj[h].prop += contextAddressProspectiveObj[msg.params.context][a][h].prop*filterObj[a].prop
                                                    }
                                                    prospectiveObj.total += contextAddressProspectiveObj[msg.params.context][a][h].total*filterObj[a].prop
                                              }
                                            }
                                        }
                                }


                                  for (let h in prospectiveObj){
                                    if (h != 'total'){
                                          prospectiveObj[h].prop = prospectiveObj[h].total/prospectiveObj.total
                                        }
                                    }

                                send({"jsonrpc": "2.0", "method": 'SignalForContextCurator',params:{"context": msg.params.context, "isFromMetaFilter":isMetaFilter,"filter": "${name}","prospectiveObj": prospectiveObj,"total":total, "to":[txtToOOId("contextCurator")], "from": "${name}"}})

                        break;


                        case 'discardSignal':
                            //ooPendingTxManager:click(send_signal-discard) -> ooFilterMain(case-pendingDiscardSignalConfirmed) -> here
                            //check if item has zero prop, remove if so
                            for (let h in prospectiveObj){
                              if (prospectiveObj[h].prop == 0){
                                delete prospectiveObj[h]
                              }
                            }
                            send({"jsonrpc": "2.0", "method": 'DiscardSignalForContextCurator',params:{"context": msg.params.context, "filter": "${name}","prospectiveObj": prospectiveObj, "to":[txtToOOId("contextCurator")], "from": "${name}"}})

                        break;
                        case 'setColour':
                                  //set the colour of this filter.
                                  barColour = msg.params.colour;
                                  send({"jsonrpc":"2.0","method":"filterforcontainer","params":{"filter":"${name}","filterObj":filterObj,"color":barColour,"to":[txtToOOId("filtermain")],"from":"${name}3"}})

                        break;





                      `,
  STARTUPmessages : `[{"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SETY","params":{"x":-25,"y":window.innerHeight-220,"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SHOW","params":{"to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}

return base_template(filter_outerTemplateObj);
}
