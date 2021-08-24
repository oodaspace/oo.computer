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
let hyperManager_proc = function(context,prospective,distance,name="hyperManager",_class='meta'){
let description = `Hyper* Manager: responsible for writing to the user's signal chain (a hypercore) and the user's idea-value-tree (a hyperdrive)`
let hyperManager_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>hyperManager\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div>
                      `,
  objectDefs : `

                /********************************************************************************/ //handles positioning/events in the metalayout

                let hasChildren = false
                let isTop = false;
                let revchain
                let prevpath
                let total
                function setTop(val){
                  if (val){
                    isTop = true;
                  }
                  else {
                    isTop = false;
                  }
                }



                //MIMEObj is a global intended to be a dictionary mapping MIME types to a 72 bit number, (for packing into 256 bit content identifiers). It is the first 72bits of the SHA256 has of the text of the encodings.
                MIMEObj['8ca5f3ec8516986e22'] = "video/x-matroska;codecs=avc1,opus"
                MIMEObj['563a04b7bf464ad2e0'] = "video/webm; codecs=\\"vp8, opus\\""
                MIMEObj['010acb220a9c2c8c0e'] = "text/html"
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
                //detect filter contexts
                let filterer = await IdeaValueTree.key;
                filterer = '0x' + filterer
                let id = await IdeaValueTree.key
                id = '0x' +  id
                let thisooid = id
                let filtercontexts = []
                let logSorterObj = {}
                logSorterObj['addressObj'] = {};
                logSorterObj['filters'] = [XORcontextidea(hexifyString('Filters'),filterer,1)];
                logSorterObj['filterAddressObj'] = {};
                logSorterObj.filterAddressObj[XORcontextidea(hexifyString('Filters'),filterer,1)] =  {}
                let initDist = 4;



               let filters = await IdeaValueTree.readdir('0x0000000000000000000000000000000000000000000000000000000000000000/'+hexifyString('Filters'))
               let filterObj2 = {}
               let filterlist = []


                async function reRankPath(context){
                      //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> this:case(func/reRankPath) -> here
                      //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> this:case(func/reRankPath) -> here
                      let wordObj = await IdeaValueTree.readFile(context)
                      wordObj = JSON.parse(wordObj)

                      //if (Object.keys(wordObj.signallers).includes(filter)){
                          let totalsObj = wordObj.signallers[thisooid].totalsObj
                          let keysSorted = Object.keys(totalsObj).sort(function(a,b){return Number(totalsObj[a])-Number(totalsObj[b])})
                          wordObj.signallers[thisooid].rankedList = keysSorted
                          await IdeaValueTree.writeFile(context, JSON.stringify(wordObj))
                        //}
                }


                async function updateContext(context,filter){
                  await reRankPath(context,filter)
                  send()// send filter refreshed method to ooFilter

                }


                  let initfilterDict = {}
                  let filterid 
                  let initFilterContext = XORcontextidea(hexifyString('Filters'),hexifyString('me'),1)
                  let initFilterProspective = XORcontextidea(initFilterContext,'0x' + IdeaValueTree.key,2)
                  let initFilterer = XORcontextidea(initFilterProspective,'0x' + IdeaValueTree.key,3)
                `,
  RESULTcases : ``
                    ,
  METHODcases : `

     case 'UpdateFilter':

       updateContext(msg.params.context,msg.params.filter)

     break;
  case 'ValueSignal':
          //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> here

          revchain = msg.params.dict.chain.reverse()
          prevpath = ''
          total =0
          path = revchain.slice(0,-1).join().replaceAll(',','/')

          /*
          For context, idea, prospective:
                check if in valueTree
                if yes, iterate filters and increment any containing root id
                if no, create new wordObj and insert into valueTree
          */

          a = await IdeaValueTree.readdir('')
          if (a.includes(msg.params.valueSignal.CONTEXT)){
              //word is already in value tree
              let wordObj = await IdeaValueTree.readFile(msg.params.valueSignal.CONTEXT)
              let thisooid = '0x' + IdeaValueTree.key
              wordObj = JSON.parse(wordObj)
              if (!(wordObj.children.includes(msg.params.valueSignal.PROSPECTIVECONTEXT))){ wordObj.children.push(msg.params.valueSignal.PROSPECTIVECONTEXT) }
              if (!(Object.keys(wordObj.signallers).includes('0x'+IdeaValueTree.key))){
                  wordObj.signallers[thisooid] = {}
                  wordObj.signallers[thisooid].rankedList = [msg.params.valueSignal.PROSPECTIVECONTEXT]
                  wordObj.signallers[thisooid].totalsObj = {}
                  wordObj.signallers[thisooid].total = Number(msg.params.dict.amt)

                wordObj.signallers[thisooid].totalsObj[msg.params.valueSignal.PROSPECTIVECONTEXT] = Number(msg.params.dict.amt)
                wordObj.signallers[thisooid].propsObj[msg.params.valueSignal.PROSPECTIVECONTEXT] = 1
              }
              else {
                if (!(Object.keys(wordObj.signallers[thisooid].totalsObj).includes(msg.params.valueSignal.PROSPECTIVECONTEXT))){
                    wordObj.signallers[thisooid].totalsObj[msg.params.valueSignal.PROSPECTIVECONTEXT] = Number(msg.params.dict.amt)
                }
                else {
                  wordObj.signallers[thisooid].totalsObj[msg.params.valueSignal.PROSPECTIVECONTEXT] += Number(msg.params.dict.amt)
                }

                wordObj.signallers[thisooid].total += Number(msg.params.dict.amt)
              }
              for (let w in wordObj.signallers[thisooid].totalsObj){
                wordObj.signallers[thisooid].propsObj[w] = wordObj.signallers[thisooid].totalsObj[w]/wordObj.signallers[thisooid].total
              }
              wordObj = JSON.stringify(wordObj)
              await IdeaValueTree.writeFile(msg.params.valueSignal.CONTEXT, wordObj)
          }
          else {
              //word is not already in value tree, so insert it
              let wordObj = {}
              let thisooid = '0x' + IdeaValueTree.key
              wordObj.parent = msg.params.dict.chain[msg.params.dict.chain.length-2]
              wordObj.distance = msg.params.valueSignal.DISTANCE
              wordObj.children = [msg.params.valueSignal.PROSPECTIVECONTEXT]
              wordObj.isDiscarded = false
              wordObj.isSignaller = false
              wordObj.isFilter = false
              wordObj.signallers = {}
              wordObj.signallers[thisooid] = {}
              wordObj.signallers[thisooid].rankedList = [msg.params.valueSignal.PROSPECTIVECONTEXT]
              wordObj.signallers[thisooid].totalsObj = {}
              wordObj.signallers[thisooid].totalsObj[msg.params.valueSignal.PROSPECTIVECONTEXT] = Number(msg.params.dict.amt)
              wordObj.signallers[thisooid].propsObj = {}
              wordObj.signallers[thisooid].propsObj[msg.params.valueSignal.PROSPECTIVECONTEXT] = 1
              wordObj.signallers[thisooid].total = Number(msg.params.dict.amt)
              wordObj = JSON.stringify(wordObj)
            await IdeaValueTree.writeFile(msg.params.valueSignal.CONTEXT, wordObj)
          }



          a = await IdeaValueTree.readdir('')
          if (!(a.includes(msg.params.valueSignal.IDEA))){
              //word is not already in value tree
              let wordObj = {}
              let thisooid = '0x' + IdeaValueTree.key
              wordObj.parent = "0x0000000000000000000000000000000000000000000000000000000000000000"
              wordObj.distance = 0
              wordObj.children = []
              wordObj.isDiscarded = false
              wordObj.isSignaller = false
              wordObj.isFilter = false
              wordObj.signallers = {}
              wordObj.signallers[thisooid] = {}
              wordObj.signallers[thisooid].rankedList = []
              wordObj.signallers[thisooid].totalsObj = {}
              wordObj.signallers[thisooid].propsObj = {}
              wordObj.signallers[thisooid].total = 0
              wordObj.media = {}
              wordObj = JSON.stringify(wordObj)
              await IdeaValueTree.writeFile(msg.params.valueSignal.IDEA, wordObj)
          }

          if (Object.keys(mediaObj).includes(msg.params.valueSignal.IDEA)){
            //if(Object.keys(MIMEObj).includes(msg.params.valueSignal.IDEA.slice(8,26))){
                    let wordObj = await IdeaValueTree.readFile(msg.params.valueSignal.IDEA)
                    wordObj = JSON.parse(wordObj.toString())
                    if (!(Object.keys(wordObj.media).includes('content'))){
                        //wordObj = JSON.parse(wordObj.toString())
                        let b64 = await blobToBase64(mediaObj[msg.params.valueSignal.IDEA])
                        //wordObj.media['content'] = b64
                        wordObj.media['contentMediaType'] = mediaObj[msg.params.valueSignal.IDEA].type
                        let cid = await IPFS.add(b64)
                        wordObj.media['ipfs'] = cid
                        wordObj = JSON.stringify(wordObj)
                        await IdeaValueTree.writeFile(String(msg.params.valueSignal.IDEA), wordObj)
                      }
            //}
          }
          a = await IdeaValueTree.readdir('')
          if (!(a.includes(msg.params.valueSignal.PROSPECTIVECONTEXT))){
              //word is not already in value tree
              let wordObj = {}
              let thisooid = '0x' + IdeaValueTree.key
              wordObj.parent = msg.params.valueSignal.CONTEXT
              wordObj.distance = msg.params.valueSignal.DISTANCE 
              wordObj.children = []
              wordObj.isDiscarded = false
              wordObj.isSignaller = false
              wordObj.isFilter = false
              wordObj.signallers = {}
              wordObj.signallers[thisooid] = {}
              wordObj.signallers[thisooid].rankedList = []
              wordObj.signallers[thisooid].totalsObj = {}
              wordObj.signallers[thisooid].propsObj = {}
              wordObj.signallers[thisooid].total = 0
              wordObj.media = {}
              wordObj = JSON.stringify(wordObj)
              await IdeaValueTree.writeFile(msg.params.valueSignal.PROSPECTIVECONTEXT, wordObj)
          }
          // word object:

          reRankPath(msg.params.valueSignal.CONTEXT)

          send({"jsonrpc": "2.0", "method": "updateFilters",params:{"to":[txtToOOId("filtermain")], "from": "${name}"}});

          send({"jsonrpc":"2.0","method":"refreshContext","params":{"context":msg.params.dict.context,"to":[txtToOOId("filterCurator")],"from":"${name}"}})
          send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[txtToOOId("contextCurator")],"from":"${name}"}});
  break;

  case 'ClaimSignal':
          //ooPendingTxManager:click(func/{}_button_click>>msg/ClaimSignal) -> here
          total =0
          a = await IdeaValueTree.readdir('')
          if (a.includes(msg.params.claimSignal.WORD)){
              //word is already in value tree
              let wordObj = await IdeaValueTree.readFile(msg.params.claimSignal.WORD)
              let thisooid = '0x' + IdeaValueTree.key
              wordObj = JSON.parse(wordObj)
              wordObj.Owner = thisooid
              wordObj = JSON.stringify(wordObj)
              await IdeaValueTree.writeFile(msg.params.claimSignal.WORD, wordObj)
          }
          else {
              //word is not already in value tree
              let wordObj = {}
              let thisooid = '0x' + IdeaValueTree.key
              wordObj.parent = '0x0000000000000000000000000000000000000000000000000000000000000000'
              wordObj.distance = 0
              wordObj.children = []
              wordObj.isDiscarded = false
              wordObj.isSignaller = false
              wordObj.isFilter = false
              wordObj.Owner = thisooid
              wordObj.signallers = {}
              wordObj.signallers[thisooid] = {}
              wordObj.signallers[thisooid].rankedList = []
              wordObj.signallers[thisooid].totalsObj = {}
              wordObj.signallers[thisooid].totalsObj[msg.params.claimSignal.WORD] = 0
              wordObj.signallers[thisooid].propsObj = {}
              wordObj.signallers[thisooid].propsObj[msg.params.claimSignal.WORD] = 0
              wordObj.signallers[thisooid].total = 0
              wordObj.media = {}
              wordObj = JSON.stringify(wordObj)
              await IdeaValueTree.writeFile(msg.params.claimSignal.WORD, wordObj)
          }

          break;

  case 'FilterSignal':
  //ooPendingTxManager:click(func/{}_button_click>>msg/FilterSignal) -> here
/*
  a = await IdeaValueTree.readdir('')
  if (!(a.includes(hexifyString('Filters')))){
    let wordObj = {}
    let thisooid = '0x' + IdeaValueTree.key
    wordObj.parent = "0x0000000000000000000000000000000000000000000000000000000000000000"
    wordObj.distance = 0
    wordObj.children = [msg.params.dict.prospective]
    wordObj.isDiscarded = false
    wordObj.isSignaller = false
    wordObj.isFilter = false
    wordObj.signallers = {}
    wordObj.signallers[thisooid] = {}
    wordObj.signallers[thisooid].rankedList = [msg.params.dict.prospective]
    wordObj.signallers[thisooid].totalsObj = {}
    wordObj.signallers[thisooid].totalsObj[msg.params.dict.prospective] = 1
    wordObj.signallers[thisooid].propsObj = {}
    wordObj.signallers[thisooid].propsObj[msg.params.dict.prospective] = 1
    wordObj.signallers[thisooid].total = 1
    wordObj = JSON.stringify(wordObj)
    await IdeaValueTree.writeFile(hexifyString('Filters'), wordObj)
  }
  else {
    let thisooid = '0x' + IdeaValueTree.key
    let wordObj = await IdeaValueTree.readFile(msg.params.dict.prospective)
    wordObj = JSON.parse(wordObj)
    wordObj.children.push()
    wordObj.signallers[thisooid].rankedList.push
    wordObj.signallers[thisooid].totalsObj[msg.params.dict.prospective] = 1

    wordObj.signallers[thisooid].total += 1
    wordObj = JSON.stringify(wordObj)
    await IdeaValueTree.writeFile(hexifyString('Filters'), wordObj)
  }
reRankPath(msg.params.dict.prospective)

  if (!(a.includes(msg.params.dict.prospective))){
      // no word in value tree:
      let wordObj = {}
      let thisooid = '0x' + IdeaValueTree.key
      wordObj.parent = "0x0000000000000000000000000000000000000000000000000000000000000000"
      wordObj.distance = msg.params.distance
      wordObj.children = []
      wordObj.isDiscarded = false
      wordObj.isSignaller = false
      wordObj.isFilter = true
      wordObj.signallers = {}
      wordObj.signallers[thisooid] = {}
      wordObj.signallers[thisooid].rankedList = []
      wordObj.signallers[thisooid].totalsObj = {}
      wordObj.signallers[thisooid].propsObj = {}
      wordObj.signallers[thisooid].total = 0
      wordObj.media = {}
      wordObj = JSON.stringify(wordObj)
      await IdeaValueTree.writeFile(String(msg.params.dict.prospective), wordObj)

  }
  else {
      //word is already in value tree
      let wordObj = await IdeaValueTree.readFile(msg.params.dict.prospective)
      wordObj = JSON.parse(wordObj)
      wordObj.isFilter = true
      wordObj = JSON.stringify(wordObj)
      await IdeaValueTree.writeFile(msg.params.dict.prospective, wordObj)
  }


*/
  break;


  case 'DiscardSignal':
    //ooPendingTxManager:click(func/{}_button_click>>msg/DiscardSignal) -> here

  a = await IdeaValueTree.readdir('')
  if (!(a.includes(msg.params.dict.prospective))){
      // no word in value tree:
      let wordObj = {}
      let thisooid = '0x' + IdeaValueTree.key
      wordObj.parent = "0x0000000000000000000000000000000000000000000000000000000000000000",
      wordObj.distance = 0,
      wordObj.children = [],
      wordObj.isDiscarded = true
      wordObj.isSignaller = false
      wordObj.isFilter = false
      wordObj.signallers = {}
      wordObj.signallers[thisooid] = {}
      wordObj.signallers[thisooid].rankedList = []
      wordObj.signallers[thisooid].totalsObj = {}
      wordObj.signallers[thisooid].propsObj = {}
      wordObj.signallers[thisooid].total = 0
      wordObj.media = {}
      wordObj = JSON.stringify(wordObj)
      await IdeaValueTree.writeFile(msg.params.dict.prospective, wordObj)
  }
  else {
      //word is already in value tree
      let wordObj = await IdeaValueTree.readFile(msg.params.dict.context)
      wordObj = JSON.parse(wordObj)
      wordObj.isDiscarded = true
      wordObj = JSON.stringify(wordObj)
      await IdeaValueTree.writeFile(msg.params.dict.prospective, wordObj)
  }


          reRankPath(msg.params.dict.context)

send({"jsonrpc":"2.0","method":"refreshContext","params":{"context":msg.params.dict.context,"to":[txtToOOId("filterCurator")],"from":"${name}"}})


  break;

  case 'InitSignal':
  //ooPendingTxManager:click(func/{}_button_click>>msg/InitSignal) -> here
  signalChain.append(msg.params.initSignal.SIGNAL)
  a = await IdeaValueTree.readdir('')
  if (!(a.includes('0x0000000000000000000000000000000000000000000000000000000000000000'))){
        //word is not already in value tree
        let wordObj = {}
        let thisooid = '0x' + IdeaValueTree.key
        wordObj.parent = '0x0000000000000000000000000000000000000000000000000000000000000000'
        wordObj.distance = 0
        wordObj.children = []
        wordObj.isDiscarded = false
        wordObj.isSignaller = false
        wordObj.isFilter = false
        wordObj.signallers = {}
        wordObj.signallers[thisooid] = {}
        wordObj.signallers[thisooid].rankedList = []
        wordObj.signallers[thisooid].totalsObj = {}
        wordObj.signallers[thisooid].totalsObj['0x0000000000000000000000000000000000000000000000000000000000000000'] = 0
        wordObj.signallers[thisooid].propsObj = {}
        wordObj.signallers[thisooid].propsObj['0x0000000000000000000000000000000000000000000000000000000000000000'] = 0
        wordObj.signallers[thisooid].total = 0
        wordObj.media = {}
        wordObj = JSON.stringify(wordObj)
        await IdeaValueTree.writeFile('0x0000000000000000000000000000000000000000000000000000000000000000', wordObj)

  }
 
 /*
filterid = '_' + initFilterContext + '_' + initFilterProspective 
  send({"jsonrpc":"2.0","method":"newFilter","params":{"filterDict":initfilterDict,"filter":filterid,"isFilter":true,"to":[txtToOOId("filterCurator")],"from":"${name}"}});
  send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["0x0000000000000000000000000000000000000000000000000000000000000000",hexifyString('Filters'),initFilterContext].reverse(),"context":hexifyString('Filters') ,"prospective":initFilterContext,"distance":1,"amt": 1,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
  send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["0x0000000000000000000000000000000000000000000000000000000000000000",hexifyString('Filters'),initFilterContext,initFilterProspective].reverse(),"context":initFilterContext ,"prospective":initFilterProspective,"distance":1,"amt": 2,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
  send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["0x0000000000000000000000000000000000000000000000000000000000000000",hexifyString('Filters'),initFilterContext,initFilterProspective,initFilterer].reverse(),"context":initFilterProspective ,"prospective":initFilterer,"distance":3,"amt": 1,"to":[txtToOOId("pendingTx")],"from":"${name}"}})*/
  break;
                      `,
  STARTUPmessages : `[]`,
  context: context,
  prospective: prospective

}
return base_template(hyperManager_outerTemplateObj);
}
