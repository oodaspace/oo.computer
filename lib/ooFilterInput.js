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
let filterInput_proc = function(context,prospective,distance,name="filterInput",_class='base'){
let description = `template for a filterInput`
let filterInput_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>

  #${name}title {display:grid;grid-template: auto 20px 25px auto 20px 25px auto/ auto;max-height: 150px;}
  #${name}idea {font-size:14px; text-align: center;align-self: center;grid-area: 4 / 1 / 5 / 2;display:none;}
  #${name}_content {display:none;}
  #${name}titleTxt {text-align: center;align-self: end;grid-area: 1 / 1 / 2 / 2;padding:4px;font-size:16px;}
  #${name}directorTxt {text-align: center;align-self: end;grid-area: 2 / 1 / 3 / 2;padding:2px;}
  #${name}nameTxt {text-align: center;align-self: end;grid-area: 4 / 1 / 6 / 2;padding:2px;}
  #${name}directorInput {font-size:12px; border:solid 1px black;width:290px;}
  #${name}nameInput {font-size:12px; border:solid 1px black;width:290px;}
  #${name}directorInputcontainer {display:grid;grid-area: 3 / 1 / 4 / 1; padding-bottom: 22.5px;align-self:start;justify-self:start;width:100%;justify-content: start;padding: 2px;}
  #${name}nameInputcontainer {display:grid;grid-area: 6 / 1 / 7 / 1; padding-bottom: 22.5px;align-self:start;justify-self:start;width:100%;justify-content: start;padding: 2px;}
  #${name}buttoncontainer {display:flex;font-size:15px;padding:10px;overflow: scroll;scrollbar-width: none;grid-area:7 / 1 / 8 / 2;justify-self:center;align-self:center;}
  #${name}buttoncontainer::-webkit-scrollbar {width: 0px;height:0px;}
  #${name}addbutton {border:2px solid black; background-color:gray;cursor: pointer;}
#${name} {display:none;}

  #${name}inputSearchIcon {grid-area: 3 / 1 / 5 / 1; padding-bottom: 22.5px;align-self:end;justify-self:start;width:100%;justify-content: start;display:grid;position: relative;top:-15px;display:inline;cursor: pointer;}
  #${name}inputSearchIcon:hover {color:blue;}
        </style>
        \<div id="${name}title">
                \<div id="${name}idea">\</div>
                \<div id="${name}titleTxt"><b><u>Add a filter here:</u></b></div>
                \<div id="${name}directorTxt"><b>Filter director</b> (use an address you control to set up your own filter):</div>
                \<div id="${name}directorInputcontainer">\<input id="${name}directorInput" placeholder="Valid address (Ethereum address space)">\</input>\</div>
                \<div id="${name}nameTxt"><b>Filter name</b>:</div>
                \<div id="${name}nameInputcontainer">\<input id="${name}nameInput" placeholder="Filter name">\</input></div>
                \<div id="${name}buttoncontainer"> \<div id="${name}addbutton"> Add this filter</div></div>
              \</div>

        \</div>
                      `,
  objectDefs : `
  stopInitalIconRequest = true;
  document.getElementById('${name}').style.cssText += '  display:none;';
  document.getElementById('${name}_content').style.cssText += '  border:solid 2px black;';

  document.getElementById('${name}_left').style.cssText += ' top:22px';
  document.getElementById('${name}_right').style.cssText += ' display:none;top:22px;';

  document.getElementById('${name}_leftSignalMask').style.cssText += '  display:none;top:37px';
  document.getElementById('${name}_rightSignalMask').style.cssText += '  display:none;top:37px';

  document.getElementById('${name}_upFlagsL').style.cssText += ' top:37px;background-color:transparent;';
  document.getElementById('${name}_upFlagsR').style.cssText += ' top:37px;background-color:transparent;';

  document.getElementById('${name}').style.cssText += ' left:0px;';
console.log(document.getElementById('${name}'))

  let colours =  ["grey","tomato","khaki","lightgreen","dodgerblue","plum","black"];
  let colourIndex = 0;
  let currentidea = '0x0000000000000000000000000000000000000000000000000000000000000000'
  hideBigCircle = true
  let currentcontext = "${context}"
  let thiscontext = "${context}";
  let thisprospective = "0x0000000000000000000000000000000000000000000000000000000000000000"
  let currentaddresspad = "0x0000000000000000000000000000000000000000000000000000000000000000"
  let filterprospective = "0x0000000000000000000000000000000000000000000000000000000000000000"
  let filternamehex = "0x0000000000000000000000000000000000000000000000000000000000000000"
  let isUp = false;
  isContextAnAddress = true

  // This is the click handler for the add filter button. After user has added filter director address and name to inputs...
  function ${name}addFilterClick(e){
              let filtercontext =    XORcontextidea(XORcontextidea(hexifyString('Filters'),currentaddresspad,1),filternamehex,2)
              let initfilterDict = {fromBlock:"0x0",toBlock:'latest',address:oodaspacev0._address,topics:[[web3.utils.sha3('Up(address,uint256,uint256,uint256)')],[currentaddresspad],filtercontext]}
              let filterid = '_' + XORcontextidea(hexifyString('Filters'),currentaddresspad,1) + '_' + filtercontext

              send({"jsonrpc":"2.0","method":"FilterSignal","params":{"filter":filterid,"context":XORcontextidea(hexifyString('Filters'),currentaddresspad,1),"prospective":filtercontext,"distance":2,"to":[txtToOOId("pendingTx")],"from":"${name}"}});
              send({"jsonrpc":"2.0","method":"newFilter","params":{"filterDict":initfilterDict,"filter":filterid,"isFilter":true,"to":[txtToOOId("filterCurator")],"from":"${name}"}});
              currentcontext = "0x0000000000000000000000000000000000000000000000000000000000000000"
              send({"jsonrpc": "2.0", "method": "setContext", "params": {"context": "0x0000000000000000000000000000000000000000000000000000000000000000","to":["${name}"],"from":"${name}"}})
              send({"jsonrpc": "2.0", "method": "setProspective", "params": {"prospective": "0x0000000000000000000000000000000000000000000000000000000000000000","to":["${name}"],"from":"${name}"}})
              document.getElementById('${name}_right').style.cssText += ' display:none;';
              document.getElementById("${name}nameInputcontainer").firstChild.value = ''
              document.getElementById("${name}directorInputcontainer").firstChild.value = ''
              document.getElementById("${name}_content").style.cssText += " display:none;"
              console.log('filter inputted ', filtercontext,filterid)
  }
  document.getElementById("${name}addbutton").addEventListener("click", ${name}addFilterClick);

  //handles screen resize
  function ${name}_onresize(){
    let y = window.innerHeight-220;
    send({"jsonrpc":"2.0","method":"SETY","params":{"y":y,"to":["${name}"],"from":"${name}"}})
  }
  window.addEventListener("resize",${name}_onresize);

  function bufferToHex (buffer) {
      return [...new Uint8Array (buffer)]
          .map (b => b.toString (16).padStart (2, "0"))
          .join ("");
  }
          // input field has valid address, update icon.
  currentaddresspad = '0x' + IdeaValueTree.key

  let str = currentaddresspad
  let val = str.toLowerCase()//.replace('"','').replace("'",'')
  str = val.replace(/(.{21})/g, "$1<br>").slice(0,-2)
  document.getElementById("${name}idea").innerHTML = \`\${str} <br>\`

  //currentaddresspad =  XORcontextidea(hexifyString('Filters'),hexifyString(val),2);
  let currentcontext2 =  XORcontextidea(hexifyString('Filters'),hexifyString(val),1);
  send({"jsonrpc": "2.0", "method": "setContext", "params": {"context": currentcontext2,"to":[txtToOOId("filterInput")],"from":"${name}"}})
  send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext2,"idea":filternamehex ,"prospective":XORcontextidea(currentcontext2,filternamehex,2) ,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" });

  // handles input of prospective filter director address. checks if valid. updates icon
  /*function ${name}inputfunc(e){
          if(!(isUp)){
            document.getElementById('${name}directorInputcontainer').style.cssText += '  top: -2px; left: -2px;'
            document.getElementById("${name}directorInput").style.cssText += ' max-width: 300px;';
          }
          document.getElementById('${name}_content').style.cssText += ' display:grid; border:solid 2px black;';
          document.getElementById('${name}_left').style.cssText += ' display:block';
          document.getElementById('${name}_right').style.cssText += ' display:block';
          document.getElementById('${name}_upFlagsL').style.cssText += ' display:grid';
          document.getElementById('${name}directorTxt').style.cssText += ' display:block';
          document.getElementById('${name}').style.cssText += ' left:0px';


                  let str = this.value
                  let val = str.toLowerCase()//.replace('"','').replace("'",'')
                  str = val.replace(/(.{21})/g, "$1<br>").slice(0,-2)
                  document.getElementById("${name}idea").innerHTML = \`\${str} <br>\`
                  currentaddresspad =  hexifyString(val);

                  send({"jsonrpc": "2.0", "method": "setContext", "params": {"context": currentaddresspad,"to":[txtToOOId("filterInput")],"from":"${name}"}})
                  send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentaddresspad,"idea":filternamehex ,"prospective":XORcontextidea(currentaddresspad,filternamehex,2) ,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" });

       }
  document.getElementById("${name}directorInput").addEventListener("keyup", ${name}inputfunc);*/

  // handles input of prospective filter director address. checks if valid.
  function ${name}nameInputfunc(e){
        filternamehex = hexifyString(this.value)
        send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentaddresspad,"idea":filternamehex ,"prospective":XORcontextidea(currentaddresspad,filternamehex,2) ,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" });
       }
  document.getElementById("${name}nameInput").addEventListener("keyup", ${name}nameInputfunc);

  // expand collapse display on click of left icon
  function ${name}_left_click(){
        let tel = document.getElementById('${name}_content');
        if(tel.style.display=='none'){
            tel.style.cssText += ' display:grid;'
              document.getElementById('${name}_right').style.cssText += ' display:grid;';
          }
        else{
            tel.style.cssText += ' display:none;'
            document.getElementById('${name}_right').style.cssText += ' display:none;';
          }
  }
  document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

  `,
  RESULTcases : ``
                    ,
  METHODcases : `

                    /*
                        setContext:     sets the context and request new icon from icon creator oo (ensures that address icon shown for zero case)
                        setProspective:    sets the prospective and request new icon from icon creator oo
                        ShiftLeft   Used to set the position of this oo in the layout.
                        incColourIndex: increment colour index (sets colour of next inuptted filter)
                        setColour  sets the colour of the prospective filter

                      */
                    case 'setContext':
                      currentcontext = msg.params.context;
                      if (currentcontext == "0x0000000000000000000000000000000000000000000000000000000000000000"){
                        send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": filternamehex,"prospective": XORcontextidea(currentcontext,filternamehex,1),"hideIdea":true,"isContextAnAddress":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                      }
                      else {
                        send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": filternamehex,"prospective": XORcontextidea(currentcontext,filternamehex,1),"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                      }

                    break;
                    case 'setProspective':
                      currentprospective = msg.params.prospective;
                      if (currentcontext == "0x0000000000000000000000000000000000000000000000000000000000000000"){
                        send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": filternamehex,"prospective": currentprospective,"hideIdea":true,"isContextAnAddress":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                      }
                      else {
                        send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": filternamehex,"prospective": currentprospective,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                      }

                    break;
                    case 'ShiftLeft':

                      send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":msg.params.left+35,"to":["${name}"],"from":"${name}"}});
                    break;

                    case 'incColourIndex':
                      colourIndex ++;
                    break;
                    case 'setColour':
                      document.getElementById('${name}_upFlagsL').style.cssText += ' background-color:'+msg.params.colour;
                      document.getElementById('${name}_upFlagsR').style.cssText += ' background-color:'+msg.params.colour;

                      break;
                      `,
  STARTUPmessages : `[{"jsonrpc":"2.0","method":"SETY","params":{"y":window.innerHeight-220,"to":["${name}"],"from":"${name}"}},{"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}},{"jsonrpc": "2.0", "method": "createSVG", "params": {"context": "0x0000000000000000000000000000000000000000000000000000000000000000","idea": "0x0000000000000000000000000000000000000000000000000000000000000000","prospective": "0x0000000000000000000000000000000000000000000000000000000000000000","isContextAnAddress":true,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" }]`,
  context: context,
  prospective: prospective

}
return base_template(filterInput_outerTemplateObj);
}
