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
let base_template = function(outerTemplateObj){return `;(async function () {

/*
This is the code for the oo with

id: '${outerTemplateObj.name}'
human readable name if available (else hex): ${stringifyHex(XORcontextprospective(outerTemplateObj.context,outerTemplateObj.prospective,Number(outerTemplateObj.distance)))}

Note this code has been created from a base template in combination with one type of outer template. The sections populated by the outer template are delineated by : //OUTER TEMPLATE SECTION// and //END OF OUTER TEMPLATE SECTION//

Required replacements (in outerTemplateObj):

name - unique name for the idea, used as the id of the element in the browser document. Should be the concatenation of the context and prospective this helps ensure uniqueness
class - defines wheter the process will be in the meta or base layout layer.
distance - the distance of the idea in the oo tree
content - div containing contents to be displayed.
objectDefs - js object definitions required (e.g. to store layout info)
RESULTcases - case: statements to define js code that runs for result ids
METHODcases - case: statemetnss to define js code that runs for methods
STARTUPmessages  -define messages that are sent from this on initialisation.
context - the context id of this
prospective - the prospective id of this


*/

  let name = "_" + '${outerTemplateObj.context}' + "_" + '${outerTemplateObj.prospective}' 
  let cla= '${outerTemplateObj.class}';
  let distance = '${outerTemplateObj.distance}';
  let el = document.createElement('div');
  let selfContext = '${outerTemplateObj.context}';
  let selfProspective = '${outerTemplateObj.prospective}';
  el.style.backgroundColor = 'transparent';
  el.style.position = 'absolute';
  el.style.top = "+1000000px";
  el.style.left = "+1000000px";
  el.context = '${outerTemplateObj.context}'
  el.prospective = '${outerTemplateObj.prospective}'
  el.className = cla
  el.id = "_" + '${outerTemplateObj.context}' + "_" + '${outerTemplateObj.prospective}'//'${outerTemplateObj.name}'//
  el.style.height = '174px';
  let addressesHidden = false;
  let idea = XORcontextprospective(hexifyString("${outerTemplateObj.context}"),hexifyString("${outerTemplateObj.prospective}"),"${outerTemplateObj.distance}");
  let hideBigCircle = false; // if set to true in the outertemplate, the bigpart of the icon is not shown.
  let isProspectiveAnAddress = false;
  let isContextAnAddress = false;
  let stopInitalIconRequest = false; // if set to true in the outertemplate, an icon request is not automatically sent

  // this is a reference to where oos are located in the idea value tree. Change here and in index to change this. The utility functions are used to allow use of human readable process names e.g "ooFilter"
  let metaThisProspective = XORcontextidea('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',hexifyString('this'),0)
  let metaooManagerProspective = XORcontextidea('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',hexifyString('this'),0)
  let metaoodistance = 1
  function txtToOOId(txt){
    return '_' + metaooManagerProspective + '_' + XORcontextidea(metaooManagerProspective,hexifyString(txt),metaoodistance)
  }
  function txtToOOProspective(txt){
    return XORcontextidea(metaooManagerProspective,hexifyString(txt),metaoodistance)
  }

  // Every oo has a context. Every context has a 'context manager' a process that tracks the status of all its child oos.
  let thisContextMan = '_' + metaooManagerProspective + '_' + XORcontextidea(metaooManagerProspective,'${outerTemplateObj.context}',metaoodistance); //the id of the context manager process in meta mode.

  // appends to the base or meta div in the layout, and set isMeta flag (used to determine layout functionality in oos)
  let isMeta = false
  if (cla == 'base'){
      document.getElementById('base').appendChild(el);
  }
  else {
    document.getElementById('meta').appendChild(el);
    isMeta = true
  }

  el.style.cssText += "display: grid; grid-template: 130px 16px 24px 6px / 14px 18px auto 18px 14px;"

// define the outer structure of the oo: the left and right portion of the icon container, and the various layers required. And the container for the content - updated from the outer template.
el.innerHTML = \`
<style>

  #${outerTemplateObj.name}_content {
    grid-area: 1 / 3 / 4 / 4;background-color: white;grid-template:auto / auto; font-size:xx-small;     white-space: -moz-pre-wrap !important;  /* Mozilla, since 1999 */
    border: solid 3px black;  padding-left:0px;  padding-right:0px; max-width: 290px; max-height: 150px;  min-height: 150px; min-width: 300px; height: 100%;  align-self: end;
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    white-space: pre-wrap;       /* css-3 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
    white-space: -webkit-pre-wrap; /* Newer versions of Chrome/Safari*/
  /*  word-break: break-all;*/
    white-space: normal;
    display:none;
    overflow: hidden;
  }

  #${outerTemplateObj.name}_rank {grid-area: 1 / 2 / 4 / 3; background-color:transparent; display:none; width:100%; justify-self:end;align-self:end;border:0px solid #333;border-left:0px solid #333;margin-top:0px;transform-style: preserve-3d;z-index:-1;position:relative;font-size:12px;text-align: end;padding-right:10px;top: 3px;}

#${outerTemplateObj.name}_ranktotal {grid-area: 1 / 4 / 4 / 5; background-color:transparent; display:none; width:100%; align-self:end;border:0px solid #333;border-right:0px solid #333;margin-top:0px;transform-style: preserve-3d;z-index:-1;position:relative;font-size:12px;text-align: start;padding-left:10px;top: 3px;}

#${outerTemplateObj.name}_leftSignalMask {grid-area: 1 / 1 / 4 / 3; background-color:transparent; display:none;grid-template: auto / auto; width:100%; align-self:center;left: 0%; border-top:1px solid transparent;z-index:-1;top: -1px; position: relative;}

#${outerTemplateObj.name}_rightSignalMask {grid-area: 1 / 4 / 4 / 6; background-color:transparent; display:none;grid-template: auto / auto; width:100%; align-self:center;left: 0%; border-top:1px solid transparent;z-index:-1;top: -1px;
position: relative;}

#${outerTemplateObj.name}_left {grid-area: 1 / 1 / 4 / 3;align-self:start;height:100%;position: relative;
transform: scaleY(-1);cursor: pointer;top: 10px;}

#${outerTemplateObj.name}_right {grid-area: 1 / 4 / 4 / 6; align-self:start; overflow:auto;height:100%;position: relative; transform: scaleY(-1); top: 10px;cursor: pointer;}

#${outerTemplateObj.name}_addressCoverL { grid-area: 1 / 1 / 2 / 3;background-color: white;height: 71.3px;display:none;}

  #${outerTemplateObj.name}_addressCoverR {grid-area: 1 / 4 / 2 / 6;background-color: transparent;height: 
      display:none;}
</style>

<div id = "${outerTemplateObj.name}_rank"></div>

<div id = "${outerTemplateObj.name}_ranktotal"></div>
<!--
  <div id = "${outerTemplateObj.name}_upFlagsL" style="grid-area: 1 / 2 / 4 / 3; background-color:#d0eaf1; display:flex; width:100%; height:90px;align-self:center;left: 0%; position:relative;border-top:1px solid transparent;z-index:-1;border-radius-bottom-right:25px;position:relative;top:-22px;">
  </div>
</div>-->

<div id = "${outerTemplateObj.name}_leftSignalMask">
          <div style="width:100%;grid-area: 1 / 1 / 2 / 2;z-index:1;">
                <svg width="47" height="130" xmlns="http://www.w3.org/2000/svg" viewBox="0 -15 18 130">
                      <defs>
                          <clipPath id="${outerTemplateObj.name}flagtrim">
                              <path d="M 36 16 L 36 16 Q 18 0 0 16 L 0 16 L 0 90 Q 18 106 36 90Z" stroke="green" stroke-width="1"/>
                          </clipPath>
                      </defs>
                      <path d=" M 36 16 Q 18 0 0 16" stroke="black" stroke-width="1" fill="transparent"/>
                      <path d=" M 0 90 Q18 106 36 90" stroke="black" stroke-width="1" fill="transparent"/>
                      <path d=" M 36 16 L 36 16 Q 18 0 0 16 L 0 16 L 0 90 Q 18 106 36 90Z" stroke="black" stroke-width="1" fill="transparent"/>
                      <g id = "${outerTemplateObj.name}_upFlagsL">
                            <rect x="0" y ="0" width="100%" height="116" fill="white" clip-path="url(#${outerTemplateObj.name}flagtrim)" />
                      </g>
              </svg>
        </div>
</div>

<div id = "${outerTemplateObj.name}_rightSignalMask" style="">
          <div style="width:100%;grid-area: 1 / 1 / 2 / 2;z-index:1;">
                <svg width="47" height="130" xmlns="http://www.w3.org/2000/svg" viewBox="24 -15 36 130">
                      <defs>
                          <clipPath id="${outerTemplateObj.name}flagtrim">
                              <path d="M 36 16 L 36 16 Q 18 0 0 16 L 0 16 L 0 90 Q 18 106 36 90Z" stroke="green" stroke-width="1"/>
                          </clipPath>
                      </defs>
                      <path d=" M 36 16 Q 18 0 0 16" stroke="black" stroke-width="1" fill="transparent"/>
                      <path d=" M 0 90 Q18 106 36 90" stroke="black" stroke-width="1" fill="transparent"/>
                      <path d=" M 36 16 L 36 16 Q 18 0 0 16 L 0 16 L 0 90 Q 18 106 36 90Z" stroke="black" stroke-width="1" fill="transparent"/>
                      <g id = "${outerTemplateObj.name}_upFlagsR" style="z-index:-1;">
                            <rect x="0" y ="0" width="100%" height="116" fill="white" clip-path="url(#${outerTemplateObj.name}flagtrim)" />
                      </g>
              </svg>
        </div>
</div>

<div id="${outerTemplateObj.name}_left"></div>



<div id='${outerTemplateObj.name}_right'></div>
<div id='${outerTemplateObj.name}_addressCoverL'></div>
<div id='${outerTemplateObj.name}_addressCoverR'></div>
<div id='${outerTemplateObj.name}_content'>
  ${outerTemplateObj.content}
</div>
\`

// This sections handles the messaging function between the oos. All messages pass through the message manager object, msgMan. The send function pushes an input message to the relevant message queue in the msgMan object.

// utility functions
const pause =  sec => new Promise(r => setTimeout(r, 1000 * sec))
const domready = new Promise(r => window.requestAnimationFrame(r));

// this process must first be registered in the message manager object:
await msgMan.register("${outerTemplateObj.name}")

//The send function pushes an input message to the outbound message queue for this oo in the msgMan object.
async function send(msg) {
    while(true){
      if (!(msgMan[name])){
        // in the event that this oo has not been registered wait and try again.
        await pause(0.1)
      }
      else{
        break;
      }
    }
    //push the message to the outbound queue for this oo.
    msgMan[name].msgq_from.push(JSON.stringify(msg));
}


// this function sets the curvyness of the oo signal containers based on a value between 0 and 1.  1 = very curvy 0 ~ flat
function updateMaskCurves(val){
}

/************************************************************************/
/* Show/hide related functions: these show or hide part or all of the oo*/
// This function hides the addresses (the rhombus icons) for this oo, and sets a flag
function hideAddresses(){
  let list = document.getElementById("${outerTemplateObj.name}").querySelectorAll(".address")
  for (let i=0; i<list.length; i++){
      list[i].style.cssText += "visibility: hidden";
  }
  addressesHidden = true;
}

// This function show the addresses (the rhombus icons) for this oo, and resets a flag
function showAddresses(){
  let list = document.getElementById("${outerTemplateObj.name}").querySelectorAll(".address")
  for (let i=0; i<list.length; i++){
      list[i].style.cssText += "visibility: visible";
  }
  addressesHidden = false;
}

  // This function expands the content for this oo, and sets a flag. can be used to toggle
  let _isXpanded
  function Xpand(toggle=false){
    let el = document.getElementById('${outerTemplateObj.name}_content');
    if(el.style.display=='none' || el.style.display == ''){
      el.style.cssText += ' display:grid;'
      _isXpanded = true;
    }
    else if (toggle){
      el.style.cssText += ' display:none;'
      _isXpanded = false;
    }
  }

  // This function hides the content, but not the out icon parts, for this oo, and sets a flag. can be used to toggle
  function collapse(toggle=false){
    let el = document.getElementById('${outerTemplateObj.name}_content');
    if(el.style.display=='grid' || el.style.display == ''){
      el.style.cssText += ' display:none;'
      _isXpanded = false;

    }
    else if (toggle){
      el.style.cssText += ' display:grid;'
      _isXpanded = true;
    }
  }

  // hides this oo.
  let isDisplay = true;
  function hide(){
    ////console.log('hiding', el)
    el.style.cssText += " display: none;"
    isDisplay = false;
  }

  // shows this oo
  let isReady = false;
  async function show(){
    ////console.log('showing', el)
    el.style.cssText += " display: grid;"
   
   /*     if (isReady){
            el.style.cssText += " display: grid;"
        }
        else {
            await pause(0.1)
            el.style.cssText += " display: grid;"
        }*/
  }

  /************************************************************************/
  /* Positioning functions: these set or translate the position of the oo in the layout*/
  let thisx = 0;
  let thisy = 0;
  let thisz = 0;

// Moves this oo to the specified coordinates. x is the desired posistion of the left of the oo, y is the top. In pixels
function moveto(x,y,z=0){
  let el = document.getElementById("${outerTemplateObj.name}")
  el.style.left = String(x) + 'px';
  el.style.top = String(y) + 'px';
  el.style['z-index'] = String(Math.ceil(z));
  if (z!=0) el.style.transform += "translateZ("+String(z)+ "px)";
  else el.style.transform = ''
  thisx=x;
  thisy=y;
}

// Moves this oo to the specified coordinates. x is the desired posistion of the left of the oo, y is the top. In percencontexte
function movepercto(x,y,z=0){
  let el = document.getElementById("${outerTemplateObj.name}")
  el.style.left = String(x) + '%';
  el.style.top = String(y) + '%';
  el.style['z-index'] = String(Math.ceil(z));
  el.style.transform = "perspective(1000px)";
  el.style.transform += "translateZ("+String(z)+ "%)";
}

// Moves this oo's x axis lcoation to the specified coordinate. x is the desired posistion of the left of the oo. In pixels
function moveX(x){
  if (document.getElementById("${outerTemplateObj.name}")){
    let el = document.getElementById("${outerTemplateObj.name}")
    el.style.left = String(x) + 'px';
    thisx = x
  }
}

// Moves this oo's y axis by a specified number of pixels. This is inconsistent with above. A clearer naming convention should be added. e.g. moveTo and moveBy or move and set
function moveY(y){
  let el = document.getElementById("${outerTemplateObj.name}");
  el.style.transform += "translateY("+String(y)+ "px)";
  thisy += y;
}

// Moves this oo on the z axis by a specified number of pixels. Currently does noidea
function moveZ(z){
  let el = document.getElementById("${outerTemplateObj.name}");
  thisz=z;
}

// Moves this oo's y axis lcoation to the specified coordinate. x is the desired posistion of the left of the oo. In pixels
function setY(y){
  let el = document.getElementById("${outerTemplateObj.name}");
  el.style.top = String(y) + 'px';
  thisy=y;
}

// set the y and z coords of this oo. in pixels
function moveYZ(y,z){
  let el = document.getElementById("${outerTemplateObj.name}");
  el.style['z-index'] = String(Math.ceil(z/100));
  el.style.top = String(y) + 'px';
  if (z!=0) el.style.transform = "translateZ("+String(z)+ "px)";
  else el.style.transform = ''
  thisy = y;
  thisz = z;
}

/************************************************************************/
// The receiver will drop duplicate messages (oldest first) for methods in dropObj. So if this oo receives lots of MOVE requests, it only processes the latest, for example. This can be added to in the out template definitions.
let dropObj = {
  'MOVE':true,
  'MOVE_PERC':true,
  'MOVEY':true,
  'MOVEZ':true,
  'SETY':true,
'SHOW':true, 
  'HIDE':true,
  'HIDEADDRESSES':true,
  'SHOWADDRESSES':true,
  'XPAND':true,
  'COLLAPSE':true,
  'UPDATECURVES':true,
  'MOVEYZ':true,
  'MOVEX':true
}

/**************************************************************************************/
//OUTER TEMPLATE SECTION//
/* This is where the out template object definitions (inc functions) are placed. These, in part, define the behaviour of the oo.*/
  ${outerTemplateObj.objectDefs}
//END OF OUTER TEMPLATE SECTION//
/**************************************************************************************/

/**************************************************************************************/
/* This is where the oo receives messages. It works by continuously monitoring the inbound msg queue in the message manager. It does this using a Proxy on the queue with embedded promises (defined in the msgMan object).*/

  const receiver = async function () {
          let msg;

          // continusously watch for messages
          while (true){

                  // if the inbound message queue is emtpy monitor for a newmsg (a promise that resolves when a message is added to the inbound list). If noidea for one second then loop back here. (occasionally the newmsg promise is not successfully caught)
                  if(!(msgMan["${outerTemplateObj.name}"].msgq_to.length >0)){
                        await Promise.race([msgMan["${outerTemplateObj.name}"].msgq_to.newmsg(),pause(1)]);
                  }

                  // This section will drop duplicate messages with methods that are defined above in dropObj.
                  batchDropObj = {} // defines the messages that are included in this synchronous batch.
                  while (msgMan["${outerTemplateObj.name}"].msgq_to.length >0){
                        let msg = msgMan["${outerTemplateObj.name}"].msgq_to.reverse().pop() // take message from inbound queue

                        //use array of dropable message methods, when in the while loop, just pass (drop message) if one has already been seen in this batch.
                          if (msg.method in batchDropObj){
                            //if here it means that the message is a droppable duplicate
                          }
                          else if (msg.id in batchDropObj){
                            //if here it means that the message is a droppable duplicate
                          }
                          else { //process msg
                            //if here it means that the message is not a droppable duplicate and must be processed:

                                if (msg.method in dropObj){
                                  batchDropObj[msg.method] = true;
                                }
                                if (msg.id in dropObj){
                                  batchDropObj[msg.id] = true;
                                }

                                // deals with results - a reponse from a JSONrpc call.
                                if ("result" in msg){
                                              // a switch statement acts on the msg id.
                                              /*
                                                  ICON: A response from the iconcreator oo, is the unique set svg icons for this oo. The is used to set the icon html.
                                                  requestInitiators: A response from _ to give the owners of the context, prospective and idea comrising this oo. When it's received and icon request is sent to the icon creator oo.
                                              */

                                              switch (msg.id) {
                                                case 'ICON':
                                                      document.getElementById('${outerTemplateObj.name}_left').innerHTML = msg.result.left;
                                                      document.getElementById('${outerTemplateObj.name}_right').innerHTML = msg.result.right;
                                                      // various actions taken based on state flags.
                                                      if (isDisplay){
                                                          el.style.cssText += " display: grid;"
                                                      }
                                                      isReady = true;
                                                      if (addressesHidden){hideAddresses()}
                                                  break;
                                                case 'requestInitiators':
                                                      send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": msg.result.context,"idea": msg.result.idea,"prospective": msg.result.prospective,"prospectiveaddr": msg.result.prospectiveaddr,"contextaddr": msg.result.contextaddr,"ideaaddr": msg.result.ideaaddr,"hideIdea":hideBigCircle,"isProspectiveAnAddress":isProspectiveAnAddress,"isContextAnAddress":isContextAnAddress,"to":[txtToOOId("IconCreator")],"from":"${outerTemplateObj.name}"},"id": "ICON" });
                                                  break;

                                                  /**************************************************************************************/
                                                  //OUTER TEMPLATE SECTION//
                                                  /* This is where distinct result cases are placed by the outer template. These, in part, define the distinct behaviour of a type of oo.*/
                                                  ${outerTemplateObj.RESULTcases}
                                                  /**************************************************************************************/
                                                default:

                                              }
                                }
                                else { //this must be a direct message, with a method,
                                                // a switch statement acts on the msg method.
                                                /*
                                                    MOVE: moves this oo so left = params.x and top = params.y and z is msg.params.z. In pixels
                                                    MOVE_PERC: moves this oo so left = params.x and top = params.y and z is msg.params.z. In percencontexte
                                                    MOVEX: moves this oo so left = params.x In pixels
                                                    MOVEY: translates this oo so top = top + params.y In pixels
                                                    MOVEZ: moves this oo so z = params.x In pixels
                                                    SETY: sets y this oo so y = params.y In pixels
                                                    SETZIND: sets the z-index of this oo
                                                    HIDE: hide this oo
                                                    HIDEADDRESSES: hide the address icons on this oo.
                                                    SHOW: show this oo.
                                                    SHOWADDRESSES: show the address icons on this oo.
                                                    MOVEYZ: moves this oo so top = params.y and z is msg.params.z. In pixels
                                                    MOVEXYZ: moves this oo so left = params.x and top = params.y and z is msg.params.z. In pixels
                                                    XPAND: Expand this oo (show the content div)
                                                    COLLAPSE: Collapse this oo (hide the content div)
                                                    UPDATECURVES: Update the curves at the top and bottom of the signal containers with params.val (between 0 and 1), 1 = very curvy 0 ~ flat
                                                    GETTIMES: to remove, used for debugging
                                                */

                                                switch (msg.method) {
                                                  case 'MOVE':
                                                        // moves this oo so left = params.x and top = params.y and z is msg.params.z. In pixels
                                                        if (msg.params.z === undefined){ moveto(msg.params.x,msg.params.y);}
                                                        else {
                                                          moveto(msg.params.x,msg.params.y,msg.params.z);
                                                        }
                                                    break;
                                                    case 'MOVE_PERC':
                                                          // moves this oo so left = params.x and top = params.y and z is msg.params.z. In percencontexte
                                                          if (msg.params.z === undefined){ movepercto(msg.params.x,msg.params.y);}
                                                          else {
                                                            movepercto(msg.params.x,msg.params.y,msg.params.z);
                                                          }
                                                      break;
                                                  case 'MOVEX':
                                                      //moves this oo so left = params.x In pixels
                                                      moveX(msg.params.x)
                                                  break;
                                                  case 'MOVEY':
                                                        // moves this oo so y = params.y In pixels
                                                        moveY(msg.params.y)
                                                  break;
                                                  case 'MOVEZ':
                                                        // moves this oo so z = params.z In pixels
                                                        moveZ(msg.params.z)
                                                  break;
                                                  case 'SETY':
                                                        // sets y this oo so y = params.y In pixels
                                                        setY(msg.params.y)
                                                  break;
                                                  case 'SETZIND':
                                                        // sets y this oo so y = params.y In pixels
                                                        el.style['z-index'] = msg.params.zind;
                                                  break;
                                                  case 'HIDE':
                                                        hide()
                                                  break;
                                                  case 'HIDEADDRESSES':
                                                        // hide the address icons on this oo.
                                                        hideAddresses()
                                                  break;
                                                  case 'SHOW':
                                                        //show this oo
                                                        show()
                                                  break;
                                                  case 'SHOWADDRESSES':
                                                        // show the address icons on this oo.
                                                        showAddresses()
                                                  break;
                                                  case 'MOVEYZ':
                                                        // moves this oo so top = params.y and z is msg.params.z. In pixels
                                                        moveYZ(msg.params.y,msg.params.z)
                                                  break;
                                                  case 'MOVEXYZ':
                                                        // moves this oo so left = params.x and top = params.y and z is msg.params.z. In pixels
                                                        if (thisy != msg.params.y || thisy != msg.params.z){
                                                          moveYZ(msg.params.y,msg.params.z)
                                                        }
                                                        if (thisx != msg.params.x){
                                                          moveX(msg.params.x)
                                                        }
                                                  break;
                                                  case 'XPAND':
                                                        // Expand this oo (show the content div)
                                                        Xpand();
                                                  break;
                                                  case 'COLLAPSE':
                                                      // Collapse this oo (hide the content div)
                                                      collapse()
                                                  break;
                                                  case 'UPDATECURVES':
                                                    // Update the curves at the top and bottom of the signal containers with params.val (between 0 and 1), 1 = very curvy 0 ~ flat
                                                    updateMaskCurves(msg.params.val);
                                                  break;


                                                  /**************************************************************************************/
                                                  //OUTER TEMPLATE SECTION//
                                                  /* This is where distinct method cases are placed by the outer template. These, in part, define the distinct behaviour of a type of oo.*/
                                                  ${outerTemplateObj.METHODcases}
                                                  //END OF OUTER TEMPLATE SECTION//
                                                  /**************************************************************************************/
                                                  default:
                                                } // end of switch statement
                                                //if(debug){timetot += (Date.now() - time0);};
                                  } // end of result-method conditional
                            }// endof should msg be processed conditional (else statement)
                    } // endof while messages in inbound queue
            } // end of while(true) infinite loop
      } // end of receiver function

      // run the receiver function when this oo is instantiated.
      receiver();

      // updates the staus of this oo in the message manager.
      msgMan["${outerTemplateObj.name}"].inDom = true;

      // this function gets the msgMan to decant any messages that were sent to this oo before it was instantiated.
      msgMan["${outerTemplateObj.name}"].getHeldMsgs();

      /**************************************************************************************/
      //OUTER TEMPLATE SECTION//
      /* This is where outer templates can specify messages that get sent on startup. */
      try{
      ${outerTemplateObj.STARTUPmessages}.forEach((msg) => send(msg));
      }
      catch{
        //console.warn('Start up messages ill-defined in', name);
      }
      //END OF OUTER TEMPLATE SECTION//
      /**************************************************************************************/
})(msgMan);`
}
