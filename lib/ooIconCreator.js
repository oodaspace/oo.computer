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
let IconCreator_proc = function(context,prospective,distance,name="IconCreator",_class='meta'){
let description = `This creates and sends back icons on request.`
let IconCreator_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>IconCreator\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div>
                      `,
  objectDefs : `let toscreen = document.getElementById("${name}_toscreen");




  /********************************************************************************/ // thissection handles events for this oo's representation in the meta layer

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

  /********************************************************************************/


  // initialise the jdenticon settings
  window.jdenticon_config = {
        lightness: {
            color: [0.23, 0.63],
            grayscale: [0.15, 0.90]
        },
        saturation: {
            color: 0.71,
            grayscale: 0.00
        },
        backColor: "transparent",
        padding: 0
  };



  /*this is the template string for the left half of the iconographic oo representation.
              $IDEACSS - replace with inline css for idea icon
              $IDEASVG - replace with the desired icon (jdenticon by default)
              $CONTEXTSVG   - the left "o" of the oo, replace with the context icon
              $CONTEXTADDRESSSVG - the icon for the context initiator
              $IDEAADDRESSSVG  -  theicon for the idea initiator.
  */
                let lefticon = \`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="130" viewBox="0 0 32 130" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <clipPath id="clipPath4">
                          <path d="M32 1 L32 32 L63 32 A31 31 0 0 1 32 63 L32 63 L32 32 L1 32 A31 31 0 0 1 32 1 Z" fill="transparent" stroke="black"></path>
                    </clipPath>
                </defs>
                <g class="ideaIcon" transform="translate(0,66.5)" $IDEACSS>
                      <circle cx="32" cy="32" r="25" stroke="white" stroke-width="1" fill="white"/>
                      <g class="bigcirc" transform="rotate(45,32,32) scale(0.85) translate(5,5)">
                            <g  class = "ideaiconparent" fill="white" style="clip-path: url(#clipPath4);" transform="rotate(0,32,32)"><!--idea icon-->
                                  \$IDEASVG
                            </g>
                            <path d="M2 32 A30 30 0 0 1 32 2" fill="transparent" stroke="black" stroke-width="2"></path>

                            <path d="M62 32 A30 30 0 0 1 32 62" fill="transparent" stroke="black" stroke-width="2"></path>
                      </g>
                </g>
                <g class="contexticonparent" transform="scale(1) translate(1.5,85)"><!--prospective icon-->
                      \$CONTEXTSVG
                </g>
                <g class="address" fill="white" transform="scale(1) translate(1.3,29)"><!--address1 icon-->
                      <!--\$CONTEXTADDRESSSVG-->
                </g>
                <g class="address" fill="white" transform="scale(1) translate(19,11)"><!--address1 icon-->
                      \$IDEAADDRESSSVG
                </g>
                </svg>\`;


                /*this is the template string for the right half of the iconographic oo representation.
                            $IDEACSS - replace with inline css for idea icon
                            $IDEASVG - replace with the desired icon (jdenticon by default)
                            $PROSPECTIVESVG  - the icon for the right "o" of the oo
                            $PROSPECTIVEADDRESSSVG - the icon for the initator of the prospective context.
                            $IDEAADDRESSSVG  -  the icon for the idea initiator.
                */
                let rightticon = \`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="130" viewBox="32 0 64 130" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <clipPath id="clipPath4">
                      <path d="M32 1 L32 32 L63 32 A31 31 0 0 1 32 63 L32 63 L32 32 L1 32 A31 31 0 0 1 32 1 Z" fill="white" stroke="black"></path>
                    </clipPath>
                </defs>
                <g class="ideaIcon" transform="scale(2) translate(-16,34)" $IDEACSS>
                      <circle cx="32" cy="32" r="25" stroke="white" stroke-width="1" fill="white"/>
                      <g class="bigcirc" transform="rotate(45,32,32) scale(0.85) translate(5,5)" >
                            <g class = "ideaiconparent"  fill="white" style="clip-path: url(#clipPath4);" transform="rotate(0,32,32)"><!--idea icon-->
                                  \$IDEASVG
                            </g>
                            <path d="M2 32 A30 30 0 0 1 32 2" fill="transparent" stroke="black" stroke-width="2"></path>
                            <path d="M62 32 A30 30 0 0 1 32 62" fill="transparent" stroke="black" stroke-width="2"></path>
                      </g>
                </g>
                <g class = "prospectiveiconparent" transform="scale(2) translate(21.5,52.5)" ><!--prospective icon-->
                      \$PROSPECTIVESVG
                </g>
                <g class="address" fill="white" transform="scale(2) translate(19,-4)"><!--address1 icon-->
                      \$PROSPECTIVEADDRESSSVG
                </g>
                <g class="address" fill="white" transform="scale(2) translate(2.5,-21.5)"><!--address1 icon-->
                      \$IDEAADDRESSSVG
                </g>
                </svg>\`;

                /*this is the template string for the entire iconographic oo representation.
                            $IDEACSS - replace with inline css for idea icon
                            $IDEASVG - replace with the desired icon (jdenticon by default)
                            $CONTEXTSVG   - the left "o" of the oo, replace with the context icon
                            $CONTEXTADDRESSSVG - the icon for the context initiator
                            $PROSPECTIVESVG  - the icon for the right "o" of the oo
                            $PROSPECTIVEADDRESSSVG - the icon for the initator of the prospective context.
                            $IDEAADDRESSSVG  -  the icon for the idea initiator.
                */

                let fullicon = \`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 60 64 134" preserveAspectRatio="xMidYMid meet">
                      <defs>
                          <clipPath id="clipPath4">
                            <path d="M32 1 L32 32 L63 32 A31 31 0 0 1 32 63 L32 63 L32 32 L1 32 A31 31 0 0 1 32 1 Z" fill="white" stroke="black">
                            </path>
                          </clipPath>
                        </defs>
                      <g transform="scale(2) translate(-16,34)">
                            <circle cx="32" cy="32" r="25" stroke="white" stroke-width="1" fill="white"/>
                            <g transform="rotate(45,32,32) scale(0.85) translate(5,5)" >
                                  <g  ideaiconparent fill="white" style="clip-path: url(#clipPath4);" transform="rotate(0,32,32)"><!--idea icon-->
                                          \$IDEASVG
                                  </g>
                                  <path d="M2 32 A30 30 0 0 1 32 2" fill="transparent" stroke="black" stroke-width="2"></path>
                                  <path d="M62 32 A30 30 0 0 1 32 62" fill="transparent" stroke="black" stroke-width="2"></path>
                            </g>
                      </g>
                      <g transform="scale(2) translate(21.5,52.5)"><!--prospective icon-->
                            \$PROSPECTIVESVG
                      </g>
                      <g class="address" fill="white" transform="scale(2) translate(19,-4)"><!--address1 icon-->
                            \$PROSPECTIVEADDRESSSVG
                      </g>
                      <g transform="scale(2) translate(-15.5,52.5)"><!--prospective icon-->
                            \$CONTEXTSVG
                      </g>
                      <g class="address" fill="white" transform="scale(1) translate(1.3,29)"><!--address1 icon-->
                            <!--\$CONTEXTADDRESSSVG-->
                      </g>
                      <g class="address" fill="white" transform="scale(2) translate(2.5,-21.5)"><!--address1 icon-->
                            \$IDEAADDRESSSVG
                      </g>

                </svg>\`;

                let fulliconDiamond = \`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 60 64 134" preserveAspectRatio="xMidYMid meet">
                      <defs>
                          <clipPath id="clipPath4">
                            <path d="M32 6 L60 32 L32 57 L2 32Z" fill="transparent" stroke="black" ></path>
                            </path>
                          </clipPath>
                        </defs>
                      <g transform="scale(2) translate(-16,34)">
                            <path d="M32 6 L60 32 L32 57 L2 32Z" fill="white" stroke="black" stroke-width="0"></path>
                            <g transform="rotate(45,32,32) scale(0.85) translate(5,5)" >
                                  <g  ideaiconparent fill="white" style="clip-path: url(#clipPath4);" transform="rotate(0,32,32)"><!--idea icon-->
                                          \$IDEASVG
                                  </g>

                            </g>
                            <path d="M32 6 L60 32 L32 57 L2 32Z" fill="transparent" stroke="black" stroke-width="2"></path>
                      </g>
                      <g transform="scale(2) translate(21.5,52.5)"><!--prospective icon-->
                            \$PROSPECTIVESVG
                      </g>
                      <g class="address" fill="white" transform="scale(2) translate(19,-4)"><!--address1 icon-->
                            \$PROSPECTIVEADDRESSSVG
                      </g>
                      <g transform="scale(2) translate(-15.5,52.5)"><!--prospective icon-->
                            \$CONTEXTSVG
                      </g>
                      <g class="address" fill="white" transform="scale(1) translate(1.3,29)"><!--address1 icon-->
                            <!--\$CONTEXTADDRESSSVG-->
                      </g>
                      <g class="address" fill="white" transform="scale(2) translate(2.5,-21.5)"><!--address1 icon-->
                            \$IDEAADDRESSSVG
                      </g>

                </svg>\`;


                /*this is the template string for the svg containing an address format icon (a diamond).
                            $ADDRESSSVG - the svg icon for the address
                */
                let addressIcon = \`<svg  width="27" height="27" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet">
                      <defs>
                      <clipPath id="clipPath56">
                            <path d="M32 0 L64 32 L32 64 L0 32 Z" fill="transparent" stroke="black" stroke-width="1"/>
                      </clipPath>
                      </defs>
                      <g  transform="translate(0,0)">
                            <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="white" stroke="black" stroke-width="1"></path>
                            <g transform="scale(0.5) rotate(45,32,32)"  style="clip-path: url(#clipPath56);">
                                  \$ADDRESSSVG

                            </g>
                            <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="transparent" stroke="black" stroke-width="1"></path>
                      </g>
                </svg>\`

                /*this is the template string for the svg containing a non-address format icon (a circle).
                            $ICONSVG - the svg icon
                */
                let circleIcon = \`<svg width="25" height="25" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet">
                      <defs>
                            <clipPath id="clipPath55">
                                    <circle cx="32" cy="32" r="31" stroke="black" stroke-width="1" fill="transparent"/>
                            </clipPath>
                      </defs>
                      <circle cx="16" cy="16" r="15.5" stroke="black" stroke-width="1" fill="white"/>
                      <g transform="scale(0.5) rotate(45,32,32)" style="clip-path: url(#clipPath55);" >
                                \$ICONSVG
                      </g>
                      <circle cx="16" cy="16" r="15"  stroke="black" stroke-width="1" fill="transparent"/>
                </svg>\`


                let response;
                let ideasvg
                let ideaaddrsvg
                let ideaaddr
                let contextsvg
                let contextaddrsvg
                let contextaddr
                let prospectivesvg
                let prospectiveaddrsvg
                let prospectiveaddr
                let fullsvg
                let leftsvg
                let rightsvg
                let result
              `,
  RESULTcases : ``,
  METHODcases : `case 'createSVG':
                      // This is a request to create and reply with an icon.
                      ////toscreen.innerHTML +=\`\${new Date().toLocaleTimeString()}: Received <i>\${msg.method}</i> from <b>\${msg.params.from}</b>\\<br>\`
                      //svg is empty for zero, else is a jdenticon
                      ideasvg = (msg.params.idea == '0x0000000000000000000000000000000000000000000000000000000000000000') ? '' : jdenticon.toSvg(msg.params.idea,64);
                      //create address icons only if requested.
                      if (msg.params.ideaaddr) { ideaaddr = msg.params.ideaaddr} else { ideaaddr = '0x0000000000000000000000000000000000000000000000000000000000000000'}
                      //pad to 256bits if necessary, and create the idea initiator icon.
                      if (ideaaddr.length == 42) {ideaaddr = "0x000000000000000000000000" + ideaaddr.slice(2)}
                      ideaaddrsvg = (!msg.params.ideaaddr || ideaaddr == '0x0000000000000000000000000000000000000000000000000000000000000000') ? addressIcon.split('$ADDRESSSVG').join('') : addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(ideaaddr.toLowerCase(),64));
                      //0xf is also a special case (should be black icon.)
                      if (msg.params.prospective == "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"){
                          prospectivesvg = \`<svg width="25" height="25" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><circle cx="16" cy="16" r="15.5" stroke="white" stroke-width="1" fill="black"></circle></svg>\`
                      }
                      else {
                          if (msg.params.prospective == '0x0000000000000000000000000000000000000000000000000000000000000000') {
                              if (msg.params.isProspectiveAnAddress == true){
                                  prospectivesvg =  addressIcon.split('$ADDRESSSVG').join('')
                              }
                              else {
                                  prospectivesvg = circleIcon.split('$ICONSVG').join('')
                              }
                          }
                          else if(isAddress(msg.params.prospective)){
                              prospectivesvg = addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(msg.params.prospective.toLowerCase(),64))
                          }
                          else {
                              prospectivesvg = circleIcon.split('$ICONSVG').join(jdenticon.toSvg(msg.params.prospective,64))
                          }
                      }
                      if (msg.params.context == "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"){
                          contextsvg = \`<svg width="25" height="25" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><circle cx="16" cy="16" r="15.5" stroke="white" stroke-width="1" fill="black"></circle></svg>\`
                      }
                      else {
                          if (msg.params.context == '0x0000000000000000000000000000000000000000000000000000000000000000') {
                              if (msg.params.isContextAnAddress == true){
                                contextsvg =  addressIcon.split('$ADDRESSSVG').join('')
                              }
                              else {
                                contextsvg = circleIcon.split('$ICONSVG').join('')
                              }
                          }
                          else if(isAddress(msg.params.context)){
                              contextsvg = addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(msg.params.context.toLowerCase(),64))
                          }
                          else {
                              contextsvg = circleIcon.split('$ICONSVG').join(jdenticon.toSvg(msg.params.context,64))
                          }

                      }
                      if (msg.params.prospectiveaddr) { prospectiveaddr = msg.params.prospectiveaddr} else { prospectiveaddr = '0x0000000000000000000000000000000000000000000000000000000000000000'}
                      if (prospectiveaddr.length == 42) {prospectiveaddr = "0x000000000000000000000000" + prospectiveaddr.slice(2)}
                      prospectiveaddrsvg = (!msg.params.prospectiveaddr || prospectiveaddr == '0x0000000000000000000000000000000000000000000000000000000000000000') ? addressIcon.split('$ADDRESSSVG').join('') :  addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(prospectiveaddr.toLowerCase(),64));
                      if (msg.params.contextaddr) { contextaddr = msg.params.contextaddr} else { contextaddr = '0x0000000000000000000000000000000000000000000000000000000000000000'}
                      if (contextaddr.length == 42) {contextaddr = "0x000000000000000000000000" + contextaddr.slice(2)}
                      contextaddrsvg = (!msg.params.contextaddr || contextaddr == '0x0000000000000000000000000000000000000000000000000000000000000000') ? addressIcon.split('$ADDRESSSVG').join('') : addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(contextaddr.toLowerCase(),64));
                      if(msg.params.hideIdea){hidecss = 'style="display:none;"'} else {hidecss = ''}
                      //combine the created icons into the main left and right svg templates.
                      leftsvg = lefticon.split('$IDEASVG').join(ideasvg).split('$CONTEXTSVG').join(contextsvg).split('$CONTEXTADDRESSSVG').join(contextaddrsvg).split('$IDEAADDRESSSVG').join(ideaaddrsvg).split('$IDEACSS').join(hidecss);
                      rightsvg = rightticon.split('$IDEASVG').join(ideasvg).split('$PROSPECTIVESVG').join(prospectivesvg).split('$PROSPECTIVEADDRESSSVG').join(prospectiveaddrsvg).split('$IDEAADDRESSSVG').join(ideaaddrsvg).split('$IDEACSS').join(hidecss);
                      result = {"left": String(leftsvg), "right" : String(rightsvg)}
                      response = {"jsonrpc": "2.0", "result": {"left": String(leftsvg), "right": String(rightsvg), "context":msg.params.context,"prospective":msg.params.prospective,"to":[msg.params.from], "from": "${name}"}, "id": msg.id}
                      send(response);
                      ////toscreen.innerHTML +=\`\${new Date().toLocaleTimeString()}: Sent reply <i>\${response.id}</i> to <b>\${response.result.to}</b>\\<br>\`
                  break;
                  case 'createSVG25':
                      // This creates 25px sized icons (e.g. for queued transactions)
                      //ooIdea:click(func/{}up1000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/createSVG25)*n -> here
                      //ooIdea:click(func/{}up10000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/createSVG25)*n -> here
                      //ooIdea:click(func/{}up1000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25) -> here
                      //ooIdea:click(func/{}up10000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25) -> here
                      //ooFilterMain:click(func/_plus1>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> here
                      //ooFilterMain:click(func/_plus10>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> here
                      //ooFilterMain:click(func/_plus1>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> here
                      //ooFilterMain:click(func/_plus10>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> here
                      //ooFilterMain:click(func/{}enterfilter>>msg/ValueSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> here
                      //ooFilterMain:click(func/{}enterfilter>>msg/ValueSignal) -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> here
                      ideasvg = (msg.params.idea == '0x0000000000000000000000000000000000000000000000000000000000000000') ? '' : jdenticon.toSvg(msg.params.idea,64);



                      ideaaddrsvg = (!msg.params.ideaaddr || msg.params.ideaaddr == '0x0000000000000000000000000000000000000000000000000000000000000000') ? addressIcon.split('$ADDRESSSVG').join('') : addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(msg.params.ideaaddr.toLowerCase(),64));

                      if (msg.params.prospective == "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"){
                          prospectivesvg = \`<svg width="25" height="25" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><circle cx="16" cy="16" r="15.5" stroke="white" stroke-width="1" fill="black"></circle></svg>\`
                      }
                      else {
                          prospectivesvg = (msg.params.prospective == '0x0000000000000000000000000000000000000000000000000000000000000000') ? circleIcon.split('$ICONSVG').join('') : (isAddress(msg.params.prospective)) ?  addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(msg.params.prospective,64)) :  circleIcon.split('$ICONSVG').join(jdenticon.toSvg(msg.params.prospective,64));
                      }
                      prospectiveaddrsvg = (!msg.params.prospectiveaddr ||msg.params.prospectiveaddr == '0x0000000000000000000000000000000000000000000000000000000000000000') ? addressIcon.split('$ADDRESSSVG').join('') : addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(msg.params.prospectiveaddr.toLowerCase(),64));
                      if (msg.params.context == "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"){
                          contextsvg = \`<svg width="25" height="25" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><circle cx="16" cy="16" r="15.5" stroke="white" stroke-width="1" fill="black"></circle></svg>\`
                      }
                      else {
                          contextsvg = (msg.params.context == '0x0000000000000000000000000000000000000000000000000000000000000000') ? circleIcon.split('$ICONSVG').join('') : (isAddress(msg.params.context)) ?  addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(msg.params.context,64)) :  circleIcon.split('$ICONSVG').join(jdenticon.toSvg(msg.params.context,64));
                      }
                      contextaddrsvg = (!msg.params.contextaddr ||msg.params.contextaddr == '0x0000000000000000000000000000000000000000000000000000000000000000') ? addressIcon.split('$ADDRESSSVG').join('') : addressIcon.split('$ADDRESSSVG').join(jdenticon.toSvg(msg.params.contextaddr.toLowerCase(),64));
                      if (!isAddress(msg.params.idea)){
                          fullsvg = fullicon.split('$IDEASVG').join(ideasvg).split('$CONTEXTSVG').join(contextsvg).split('$CONTEXTADDRESSSVG').join(contextaddrsvg).split('$IDEAADDRESSSVG').join(ideaaddrsvg).split('$PROSPECTIVESVG').join(prospectivesvg).split('$PROSPECTIVEADDRESSSVG').join(prospectiveaddrsvg);
                      }
                      else {
                          fullsvg = fulliconDiamond.split('$IDEASVG').join(ideasvg).split('$CONTEXTSVG').join(contextsvg).split('$CONTEXTADDRESSSVG').join(contextaddrsvg).split('$IDEAADDRESSSVG').join(ideaaddrsvg).split('$PROSPECTIVESVG').join(prospectivesvg).split('$PROSPECTIVEADDRESSSVG').join(prospectiveaddrsvg);
                      }
                      send({"jsonrpc": "2.0", "result": {"svg": String(fullsvg),  "context":msg.params.context,"prospective":msg.params.prospective,"to":[msg.params.from], "from": "${name}","nodeid":msg.params.nodeid}, "id": msg.id});

                      //toscreen.innerHTML +=\`\${new Date().toLocaleTimeString()}: Sent reply <i>\${response.id}</i> to <b>\${response.result.to}</b>\\<br>\`
                  break;
                  case 'ADDRICON':
                      // create a diamond address icon.
                      //ooFilterMain:init(msg.ADDRICON) -> here
                      //ooFilterMain:click(func/{}enterfilterer>>func/addfiltererToFilter>>msg/filtererFromMain) -> ooFilter(msg/ADDRICON) -> here
                      let addresssvg = (!msg.params.address || msg.params.address == '0x0000000000000000000000000000000000000000000000000000000000000000') ? '' : jdenticon.toSvg(msg.params.address.toLowerCase(),64);
                      let svg = addressIcon.split('$ADDRESSSVG').join(addresssvg);
                      send({"jsonrpc": "2.0", "result": {"svg": String(svg), "address":msg.params.address,"to":[msg.params.from], "from": "${name}"}, "id": msg.id});
                  break;

                /********************************************************************************/
                // handles messages to do with this in the meta layout.
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
  STARTUPmessages : `[{"jsonrpc":"2.0","method":"MOVE","params":{"x":"900","y":"600","to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}


return base_template(IconCreator_outerTemplateObj)
}
