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
let inputidea_proc = function(context,prospective,distance,x=0,name="inputidea",_class='base'){
let description = `template for a inputidea`
let inputidea_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name} {left:${x}px;}
                #${name}_content {font-size:10px;overflow:unset;border-style:dashed;}
                #${name}title {position: relative;display:grid;grid-template: 150px auto auto auto/ 300px;width:300px;}
                #${name}idea {font-size:30px; text-align: center;align-self: center;grid-area: 1 / 1 / 2 / 2;padding-left:0px;padding-right:0px;position: absolute;clip: rect(0px,300px,150px,0px);top:0px;height: 100%; width: 100%;justify-content: center;  display:table-cell;align-items:center;justify-items:center;vertical-align:middle;line-height:150px;box-sizing:border-box;grid-template: 100% / 100%;}
                #${name}idea:empty{ line-height:150px; box-sizing:border-box; text-align:left; padding-left:150px;  }/*ensures cursor starts in center of box*/
                #${name}loadinginfo {display:none;font-size:30px; text-align: center;align-self: center;grid-area: 1 / 1 / 5 / 3;padding-left:10px;padding-right:10px;}
                #${name}input {border:solid 2px black;width:298px;max-width:298px;justify-self:start;height:50px;}
                #${name}idea:focus {vertical-align:middle;}
                #${name}inputideaIcon {display:none;grid-area: 3 / 1 / 5 / 2; padding-bottom: 22.5px;align-self:end;justify-self:start;width:100%;justify-content: start;position: relative;top:-70px;cursor: pointer;}
                #${name}inputideaIcon:hover {color:blue;}
                #${name}inputcontainer {grid-area: 1 / 1 / 2 / 2; padding-bottom: 22.5px;align-self:end;justify-self:start;width:100%;justify-content: start;position: relative;top: 46px; left:-1px;display: grid; /*grid-template: 150px auto / 300px;*/ width:300px;}
                #${name}inputcontainer:hover {display:grid;}
                #${name}inputtypeselectorbar {width:300px;height:25px;background-color:transparent;grid-area: 2 / 1 / 3 / 2; display: flex; justify-content: center;align-content:center;display:none;height:22px;}
                #${name}inputbuttons{ display: none; grid-area: 3 / 1 / 4 /2;  align-self: center;  text-align:center; }
                #${name}inputhtmlcontainer{ display: none; grid-area: 4 / 1 / 5 /2; border:2px solid black; overflow: auto; font-size: 30px;  height:150px; background-color:white; }
                #${name}LabelHelperNote {display:none; font-size: 12px; text-align:center;align-items:end; grid-area: 1 / 1 / 2 /2;height: 20px;  width: 300px; align-self:end;background-color:#eee;justify-content: center; }
                #${name}inputtypeselectorbarLabelButton {margin-top:0.5px;background-color: #d0eaf1;cursor: pointer; display:none;}
                button {font-family: dingbats;background-color:#d0eaf1;}
                #${name}recordvideo{width:300px;justify-self:end;align-self:start;background-color:transparent;cursor: pointer;height:30px;display:none;grid-area:1/ 1 / 2 / 2;z-index:3;grid-template: auto / auto 30px 30px;}
                #${name}recordvideoicondiv{display:grid;grid-area:1/ 3 / 2 / 4;height:30px;align-self:start;}
                #${name}articleicondiv{display:grid;grid-area:1/ 2 / 2 / 3;height:30px;align-self:start;align-items: center;}
                #${name}recordvideoicon{background-color:red;}
                #${name}recordvideoicon:hover{background-color:green;}
                #${name}countvideoicondiv {align-self: center;justify-self:center;font-size:35px;grid-area:1 / 1 / 2 / 3;}
                #${name}video {width: 100%;    width: 300px;
    /* clip: rect(0px,300px,150px,0px); */
    object-fit: cover;
    height: 150px;}
                #${name}videodiv {width: 300px;grid-area:1 / 1 / 2 / 2;display:none; }
                #${name}articlediv {    text-align: start;/*font-size:10px;*/width: 100%;height:100%;grid-area:1 / 1 / 2 / 2; display:none; grid-template:repeat(5,calc(20% - 1px)) / repeat(10,calc(10% - 1px)); grid-gap:1px;background-color:lightgray; overflow:scroll;}
                #${name}articlediv::-webkit-scrollbar {width: 0px;height:0px;}
                .${name}articledivchild {background-color:white;cursor:pointer;}
                .${name}articlebox {background-color:white;cursor:pointer;}
                #${name}articledivchildhovered {background-color:red;pointer-events: none;}
                @keyframes rotationbig {
                  from {
                    transform: rotate(359deg) scale(0.85);/*transform="rotate(45,32,32) scale(0.85) translate(5,5)"*/
                    transform-origin: 32px 32px;
                  }
                  to {
                    transform: rotate(0deg) scale(0.85);
                    transform-origin: 32px 32px;
                  }
                }
              #${name}bottombar {grid-area: 1 / 1 / 2 / 3;overflow: scroll;scrollbar-width: none;border: solid 0px;  display:none;grid-template:auto / repeat(8, auto);grid-gap:0px;background-color: transparent;justify-content:space-around;z-index:1;position: relative;top:153.5px;background-color: transparent;height: 30px; max-width:300px;/*box-shadow: black 0px 0px 1px 1px;border-bottom:0px;*/}
                #${name}bottombar::-webkit-scrollbar {width: 0px;height:0px;}

         
                #${name}bottombar::-webkit-scrollbar {width: 0px;height:0px;}

              #${name}rightbar {grid-area: 1 / 1 / 2 / 3;overflow: scroll;scrollbar-width: none;border: solid 0px; background-color: white; display:none;grid-template:auto / repeat(8, auto); grid-gap:0px;justify-content:space-evenly;z-index:1;position: relative;left:303px;height: 150px; max-width:30px;/*box-shadow: black 0px 0px 1px 1px;border-bottom:0px;*/flex-direction:column;}
                #${name}rightbar::-webkit-scrollbar {width: 0px;height:0px;}  
             
                #${name}topbar {grid-area: 1 / 1 / 2 / 3;overflow: scroll;scrollbar-width: none;border: solid 0px; background-color: transparent; display:none;grid-template:auto / repeat(8, auto);grid-gap:0px;justify-content:space-around;z-index:1;position: relative;top:-35px;height: 30px; max-width:300px;/*box-shadow: black 0px 0px 1px 1px;border-bottom:0px;*/}
                #${name}topbar::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}fullscreen{width:100%;justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}discard{width:100%;justify-self:center;align-self:center;text-align:center;background-color:orange;cursor: pointer;height:30px;width:44px;font-size:1.5em;padding:0.5em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}helpertext {width:100%;justify-self:center;align-self:center;text-align:center;background-color:lightgray;cursor: pointer;font-size:1.5em;padding:0.5em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}fullscreen:hover{width:100%;background-color:lightgray;border: 0px;   border-top: 0.2px black;}
              #${name}discard:hover{width:100%;background-color:red;border: 0px;    border-top: 0.2px black;}

              #${name}recordvideobutton{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:35px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}createarticlebutton{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:35px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;    padding-left: 0.6em;}
              #${name}createwordbutton{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:35px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}right0{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}togglehtml{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}justcen{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}justright{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}justleft{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}textinc{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}textdec{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}guidestoggle{justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}

              #${name}grid0{width:20%;justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}grid0:hover{width:20%;background-color:lightgray;border: 0px;   border-top: 0.2px black;}
              #${name}grid1{width:20%;justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}grid1:hover{width:20%;background-color:lightgray;border: 0px;   border-top: 0.2px black;}
              #${name}grid2{width:20%;justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}grid2:hover{width:20%;background-color:lightgray;border: 0px;   border-top: 0.2px black;}
              #${name}grid3{width:20%;justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0.4em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}grid3:hover{width:20%;background-color:lightgray;border: 0px;   border-top: 0.2px black;}
              #${name}customgrid{width:20%;justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;height:30px;font-size:1.5em;padding:0em;justify-self: center;border: 0px;    border-top: 0.2px black;}
              #${name}customgrid:hover{width:20%;background-color:lightgray;border: 0px;    border-top: 0.2px black;}
            </style>
            \<div id="${name}title" >
            \<div id="${name}recordvideo">
                  <!--\<div id="${name}recordvideoicondiv">
                        <svg x="0px" y="0px" width="30px" height="30px">
                          <g>
                          <circle id="${name}recordvideoicon" cx="15" cy="15" r="10" stroke="black" stroke-width="3" fill="red" />
                          </g>
                        </svg>
                  </div>
                  \<div id="${name}articleicondiv">
                        <svg x="0px" y="0px" width="25px" height="25px" viewBox="0 0 297 297">
                        <g>
                            <path d="M56.298,75.533h55.321c5.569,0,10.085-4.516,10.085-10.085c0-5.569-4.516-10.085-10.085-10.085H56.298   c-5.568,0-10.084,4.516-10.084,10.085C46.214,71.018,50.729,75.533,56.298,75.533z"/>
                            <path d="M56.298,112.446h129.083c5.568,0,10.084-4.515,10.084-10.084c0-5.569-4.516-10.085-10.084-10.085H56.298   c-5.568,0-10.084,4.516-10.084,10.085C46.214,107.932,50.729,112.446,56.298,112.446z"/>
                            <path d="M111.619,147.644H56.298c-5.568,0-10.084,4.515-10.084,10.084c0,5.569,4.516,10.085,10.084,10.085h55.321   c5.569,0,10.085-4.516,10.085-10.085C121.704,152.158,117.188,147.644,111.619,147.644z"/>
                            <path d="M280.852,37.456c-4.074-1.399-8.589-0.051-11.232,3.35L250.786,65.04V10.085C250.786,4.516,246.27,0,240.702,0H19.418   C13.849,0,9.333,4.516,9.333,10.085v276.83c0,5.569,4.516,10.085,10.085,10.085h221.284c5.568,0,10.084-4.516,10.084-10.085   V152.032l34.673-43.373c1.43-1.787,2.208-4.008,2.208-6.297V46.994C287.667,42.686,284.929,38.854,280.852,37.456z    M230.617,276.831H29.502V20.169h201.115v70.823l-90.079,115.91c-3.419,4.398-2.624,10.734,1.773,14.151   c1.841,1.43,4.019,2.122,6.182,2.122c3.007,0,5.981-1.338,7.969-3.895l11.314-14.558h36.041c3.064,0,5.963-1.394,7.877-3.788   l18.923-23.672V276.831z M267.498,98.826l-68.53,85.727H183.45l84.048-108.148V98.826z"/>
                          </g>
                        </svg>
                  </div>-->
                  \<div id="${name}countvideoicondiv">
                  </div>
            </div>
            \<div id="${name}videodiv"><video id="${name}video"></video></div>
            \<div id="${name}articlediv"><div class="${name}articledivchild" row="1" column="1" style="grid-area: 1 / 1 / 2 / 2;"></div>
                                          <div class="${name}articledivchild" row="1" column="2" style="grid-area: 1 / 2 / 2 / 3;"></div>
                                          <div class="${name}articledivchild" row="1" column="3" style="grid-area: 1 / 3 / 2 / 4;"></div>
                                          <div class="${name}articledivchild" row="1" column="4" style="grid-area: 1 / 4 / 2 / 5;"></div>
                                          <div class="${name}articledivchild" row="1" column="5" style="grid-area: 1 / 5 / 2 / 6;"></div>
                                          <div class="${name}articledivchild" row="1" column="6" style="grid-area: 1 / 6 / 2 / 7;"></div>
                                          <div class="${name}articledivchild" row="1" column="7" style="grid-area: 1 / 7 / 2 / 8;"></div>
                                          <div class="${name}articledivchild" row="1" column="8" style="grid-area: 1 / 8 / 2 / 9;"></div>
                                          <div class="${name}articledivchild" row="1" column="9" style="grid-area: 1 / 9 / 2 / 10;"></div>
                                          <div class="${name}articledivchild" row="1" column="10" style="grid-area: 1 / 10 / 2 / 11;"></div>
                                          <div class="${name}articledivchild" row="2" column="1" style="grid-area: 2 / 1 / 3 / 2;"></div>
                                          <div class="${name}articledivchild" row="2" column="2" style="grid-area: 2 / 2 / 3 / 3;"></div>
                                          <div class="${name}articledivchild" row="2" column="3" style="grid-area: 2 / 3 / 3 / 4;"></div>
                                          <div class="${name}articledivchild" row="2" column="4" style="grid-area: 2 / 4 / 3 / 5;"></div>
                                          <div class="${name}articledivchild" row="2" column="5" style="grid-area: 2 / 5 / 3 / 6;"></div>
                                          <div class="${name}articledivchild" row="2" column="6" style="grid-area: 2 / 6 / 3 / 7;"></div>
                                          <div class="${name}articledivchild" row="2" column="7" style="grid-area: 2 / 7 / 3 / 8;"></div>
                                          <div class="${name}articledivchild" row="2" column="8" style="grid-area: 2 / 8 / 3 / 9;"></div>
                                          <div class="${name}articledivchild" row="2" column="9" style="grid-area: 2 / 9 / 3 / 10;"></div>
                                          <div class="${name}articledivchild" row="2" column="10" style="grid-area: 2 / 10 / 3 / 11;"></div>
                                          <div class="${name}articledivchild" row="3" column="1" style="grid-area: 3 / 1 / 4 / 2;"></div>
                                          <div class="${name}articledivchild" row="3" column="2" style="grid-area: 3 / 2 / 4 / 3;"></div>
                                          <div class="${name}articledivchild" row="3" column="3" style="grid-area: 3 / 3 / 4 / 4;"></div>
                                          <div class="${name}articledivchild" row="3" column="4" style="grid-area: 3 / 4 / 4 / 5;"></div>
                                          <div class="${name}articledivchild" row="3" column="5" style="grid-area: 3 / 5 / 4 / 6;"></div>
                                          <div class="${name}articledivchild" row="3" column="6" style="grid-area: 3 / 6 / 4 / 7;"></div>
                                          <div class="${name}articledivchild" row="3" column="7" style="grid-area: 3 / 7 / 4 / 8;"></div>
                                          <div class="${name}articledivchild" row="3" column="8" style="grid-area: 3 / 8 / 4 / 9;"></div>
                                          <div class="${name}articledivchild" row="3" column="9" style="grid-area: 3 / 9 / 4 / 10;"></div>
                                          <div class="${name}articledivchild" row="3" column="10" style="grid-area: 3 / 10 / 4 / 11;"></div>
                                          <div class="${name}articledivchild" row="4" column="1" style="grid-area: 4 / 1 / 5 / 2;"></div>
                                          <div class="${name}articledivchild" row="4" column="2" style="grid-area: 4 / 2 / 5 / 3;"></div>
                                          <div class="${name}articledivchild" row="4" column="3" style="grid-area: 4 / 3 / 5 / 4;"></div>
                                          <div class="${name}articledivchild" row="4" column="4" style="grid-area: 4 / 4 / 5 / 5;"></div>
                                          <div class="${name}articledivchild" row="4" column="5" style="grid-area: 4 / 5 / 5 / 6;"></div>
                                          <div class="${name}articledivchild" row="4" column="6" style="grid-area: 4 / 6 / 5 / 7;"></div>
                                          <div class="${name}articledivchild" row="4" column="7" style="grid-area: 4 / 7 / 5 / 8;"></div>
                                          <div class="${name}articledivchild" row="4" column="8" style="grid-area: 4 / 8 / 5 / 9;"></div>
                                          <div class="${name}articledivchild" row="4" column="9" style="grid-area: 4 / 9 / 5 / 10;"></div>
                                          <div class="${name}articledivchild" row="4" column="10" style="grid-area: 4 / 10 / 5 / 11;"></div>
                                          <div class="${name}articledivchild" row="5" column="1" style="grid-area: 5 / 1 / 6 / 2;"></div>
                                          <div class="${name}articledivchild" row="5" column="2" style="grid-area: 5 / 2 / 6 / 3;"></div>
                                          <div class="${name}articledivchild" row="5" column="3" style="grid-area: 5 / 3 / 6 / 4;"></div>
                                          <div class="${name}articledivchild" row="5" column="4" style="grid-area: 5 / 4 / 6 / 5;"></div>
                                          <div class="${name}articledivchild" row="5" column="5" style="grid-area: 5 / 5 / 6 / 6;"></div>
                                          <div class="${name}articledivchild" row="5" column="6" style="grid-area: 5 / 6 / 6 / 7;"></div>
                                          <div class="${name}articledivchild" row="5" column="7" style="grid-area: 5 / 7 / 6 / 8;"></div>
                                          <div class="${name}articledivchild" row="5" column="8" style="grid-area: 5/ 8 / 6 / 9;"></div>
                                          <div class="${name}articledivchild" row="5" column="9" style="grid-area: 5 / 9 / 6 / 10;"></div>
                                          <div class="${name}articledivchild" row="5" column="10" style="grid-area: 5 / 10 / 6 / 11;"></div>
                                          <div id="${name}articledivchildhovered" style="display:none;background-color:yellow;"></div>
                                          </div>
                    \<div id="${name}loadinginfo">\Loading ideas...</div>
                    \<div id="${name}idea"  contenteditable="true">

                    </div>
                    \<div id="${name}inputtypeselectorbar">
                          <button id="${name}inputtypeselectorbarLabelButton"  title="Label" type="button">&#10000;</button>
                          <!--<button id="${name}inputtypeselectorbarPlainTextButton"  title="Plain Text" type="button">&#128196;</button>
                          <button id="${name}inputtypeselectorbarImageButton" title="Image" type="button">&#128247;</button>
                          <button title="Audio" type="button">&#127911;</button>
                          <button title="Video" type="button">&#127909;</button>
                          <button title="Article" type="button">&#128240;</button>-->
                    </div>
                    \<div id="${name}inputbuttons" class="${name}inputbuttons-actionbar"></div>
                    \<div id="${name}inputhtmlcontainer" contenteditable="true"></div>
                    \<div id="${name}inputideaIcon">
                    <svg class="bi bi-pencil" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
                      <path fill-rule="evenodd" d="M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z" clip-rule="evenodd"/>
                    </svg>
                    <svg width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                      <path fill-rule="evenodd" d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                    </svg>\</div>
                    \<div id="${name}LabelHelperNote"> <i>Use up to 29 characters. Enter &rarr;, shift+enter &uarr; </i>\</div>
                    \<div id="${name}topbar">

                    \<button id="${name}togglehtml"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="24px" height="24px" viewBox="0 0 35.033 35.033" style="enable-background:new 0 0 35.033 35.033;"
   xml:space="preserve">
<g>
  <path d="M11.811,10.535l-6.983,6.984l6.983,6.981c0.78,0.781,0.78,2.048,0,2.828c-0.392,0.392-0.901,0.586-1.414,0.586
    c-0.513,0-1.022-0.194-1.414-0.586l-8.397-8.396C0.211,18.558,0,18.049,0,17.519c0-0.529,0.211-1.039,0.586-1.414l8.397-8.398
    c0.781-0.78,2.047-0.78,2.828,0C12.591,8.488,12.591,9.752,11.811,10.535z M34.447,16.104l-8.396-8.398
    c-0.781-0.78-2.047-0.78-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l6.982,6.984L23.223,24.5c-0.781,0.781-0.781,2.048,0,2.828
    c0.392,0.392,0.902,0.586,1.414,0.586s1.023-0.194,1.414-0.586l8.396-8.396c0.375-0.375,0.586-0.884,0.586-1.414
    C35.033,16.99,34.822,16.479,34.447,16.104z M21.012,3.831c-1.076-0.277-2.161,0.373-2.435,1.441l-6,23.498
    c-0.272,1.07,0.373,2.16,1.442,2.434c0.167,0.043,0.334,0.063,0.497,0.063c0.894,0,1.706-0.603,1.937-1.505l6-23.498
    C22.727,5.193,22.081,4.104,21.012,3.831z"/>
</g></svg></button>

\<button id="${name}justleft"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" 
   viewBox="0 0 487.025 487.025" style="enable-background:new 0 0 487.025 487.025;" xml:space="preserve">
<g>
  <path d="M469.874,29.312H17.155C7.671,29.312,0,36.987,0,46.467v69.405c0,9.48,7.671,17.157,17.155,17.157h452.719
    c9.48,0,17.151-7.677,17.151-17.157V46.467C487.025,36.987,479.354,29.312,469.874,29.312z"/>
  <path d="M469.874,191.656H17.155C7.671,191.656,0,199.329,0,208.809v69.407c0,9.482,7.671,17.155,17.155,17.155h452.719
    c9.48,0,17.151-7.673,17.151-17.155v-69.407C487.025,199.329,479.354,191.656,469.874,191.656z"/>
  <path d="M226.357,353.998H17.155C7.671,353.998,0,361.672,0,371.151v69.407c0,9.482,7.671,17.155,17.155,17.155h209.202
    c9.484,0,17.155-7.673,17.155-17.155v-69.407C243.513,361.672,235.842,353.998,226.357,353.998z"/>
</g></svg></button>

\<button id="${name}justcen"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" 
   viewBox="0 0 487.025 487.025" style="enable-background:new 0 0 487.025 487.025;" xml:space="preserve">
<g>
  <path d="M469.87,29.312H17.152C7.671,29.312,0,36.987,0,46.467v69.405c0,9.481,7.671,17.157,17.152,17.157H469.87
    c9.483,0,17.155-7.677,17.155-17.157V46.467C487.025,36.987,479.353,29.312,469.87,29.312z"/>
  <path d="M469.87,191.656H17.152C7.671,191.656,0,199.329,0,208.809v69.407c0,9.482,7.671,17.155,17.152,17.155H469.87
    c9.483,0,17.155-7.673,17.155-17.155v-69.407C487.025,199.329,479.353,191.656,469.87,191.656z"/>
  <path d="M348.115,353.998H138.908c-9.48,0-17.157,7.675-17.157,17.153v69.407c0,9.482,7.677,17.155,17.157,17.155h209.207
    c9.479,0,17.15-7.673,17.15-17.155v-69.407C365.266,361.672,357.595,353.998,348.115,353.998z"/>
</g></button>



\<button id="${name}justright"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" 
   viewBox="0 0 491.51 491.51" style="enable-background:new 0 0 491.51 491.51;" xml:space="preserve">
<g>
  <path d="M474.198,29.585H17.313C7.748,29.585,0,37.328,0,46.879v70.079c0,9.55,7.748,17.293,17.313,17.293h456.886
    c9.565,0,17.311-7.743,17.311-17.293V46.879C491.51,37.328,483.764,29.585,474.198,29.585z"/>
  <path d="M474.198,193.42H17.313C7.748,193.42,0,201.161,0,210.717v70.078c0,9.547,7.748,17.293,17.313,17.293h456.886
    c9.565,0,17.311-7.746,17.311-17.293v-70.078C491.51,201.161,483.764,193.42,474.198,193.42z"/>
  <path d="M474.198,357.253H263.065c-9.565,0-17.313,7.747-17.313,17.299v70.076c0,9.554,7.748,17.297,17.313,17.297h211.133
    c9.565,0,17.311-7.743,17.311-17.297v-70.076C491.51,365,483.764,357.253,474.198,357.253z"/>
</g></svg></button>




\<button id="${name}textinc"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="24px" height="24px"  viewBox="0 0 325.495 325.496" style="enable-background:new 0 0 325.495 325.496;"
   xml:space="preserve">
<g>
  <g>
    <path d="M317.884,12.818c-0.062-5.479-4.521-9.889-10-9.889H10c-5.523,0-10,4.479-10,10v55c0,5.523,4.477,10,10,10h22.596
      c3.039,0,5.912-1.381,7.809-3.752l16.998-21.248h71.592v259.635c0,5.523,4.477,10,10,10h40c5.521,0,10-4.477,10-10V52.93h71.512
      l17.082,21.264c1.898,2.363,4.767,3.736,7.797,3.736h22.588c2.66,0,5.212-1.061,7.089-2.945c1.877-1.887,2.926-4.441,2.911-7.102
      L317.884,12.818z"/>
    <path d="M245.502,274.937c2.627,3.408,7.144,4.754,11.207,3.342l12.756-4.438l-0.002,38.723c0,2.652,1.053,5.197,2.928,7.072
      s4.421,2.93,7.072,2.93h9.992c5.521,0,10-4.479,10-10v-38.725l12.756,4.438c4.064,1.416,8.578,0.066,11.205-3.342
      c2.627-3.41,2.779-8.117,0.375-11.688l-31.035-46.113c-1.858-2.762-4.969-4.418-8.297-4.418s-6.438,1.656-8.295,4.418
      l-31.037,46.113C242.725,266.82,242.875,271.527,245.502,274.937z"/>
  </g>
</g></svg></button>


\<button id="${name}textdec"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="24px" height="24px"  viewBox="0 0 325.696 325.696" style="enable-background:new 0 0 325.696 325.696;"
   xml:space="preserve">
<g>
  <g>
    <path d="M277.588,74.292c1.898,2.363,4.766,3.737,7.797,3.737h22.588c2.66,0,5.211-1.061,7.088-2.946
      c1.877-1.885,2.926-4.441,2.912-7.102l0.035-55.064c-0.064-5.479-4.523-9.888-10-9.888H10c-5.523,0-10,4.478-10,10v55
      c0,5.522,4.477,10,10,10h22.596c3.039,0,5.912-1.381,7.809-3.753L57.403,53.03h71.592v259.635c0,5.521,4.477,10,10,10h40
      c5.521,0,10-4.479,10-10V53.031h71.513L277.588,74.292z"/>
    <path d="M323.617,260.448c-2.627-3.409-7.143-4.754-11.207-3.342l-12.756,4.437l0.002-38.723c0-2.652-1.053-5.196-2.928-7.072
      c-1.875-1.875-4.42-2.929-7.072-2.929h-9.99c-5.521,0-10,4.479-10,10v38.724l-12.758-4.437c-4.062-1.416-8.576-0.067-11.203,3.342
      c-2.629,3.408-2.779,8.115-0.375,11.688l31.033,46.113c1.859,2.762,4.971,4.418,8.297,4.418c3.328,0,6.439-1.656,8.297-4.418
      l31.035-46.113C326.395,268.563,326.244,263.856,323.617,260.448z"/>
  </g>
</g></svg></button>


\<button id="${name}guidestoggle"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
   viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
<path d="M57.317,60h-1.024c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.994c1.104,0,2.016,0.896,2.016,2S58.422,60,57.317,60z M50.326,60
  h-0.994c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.994c1.104,0,2,0.896,2,2S51.431,60,50.326,60z M43.365,60h-0.994c-1.104,0-2-0.896-2-2
  s0.896-2,2-2h0.994c1.104,0,2,0.896,2,2S44.47,60,43.365,60z M36.404,60H35.41c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.994
  c1.104,0,2,0.896,2,2S37.509,60,36.404,60z M29.443,60h-0.994c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.994c1.104,0,2,0.896,2,2
  S30.548,60,29.443,60z M22.482,60h-0.994c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.994c1.104,0,2,0.896,2,2S23.587,60,22.482,60z
   M15.522,60h-0.995c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.995c1.104,0,2,0.896,2,2S16.627,60,15.522,60z M8.562,60H7.566
  c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.995c1.104,0,2,0.896,2,2S9.666,60,8.562,60z M2,59.291c-1.104,0-2-0.892-2-1.996V56.3
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.987C4,58.392,3.104,59.291,2,59.291z M58,54.41c-1.104,0-2-0.896-2-2v-0.994
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.994C60,53.515,59.104,54.41,58,54.41z M2,52.334c-1.104,0-2-0.896-2-2V49.34
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.994C4,51.438,3.104,52.334,2,52.334z M58,47.45c-1.104,0-2-0.896-2-2v-0.995
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.995C60,46.555,59.104,47.45,58,47.45z M2,45.373c-1.104,0-2-0.896-2-2v-0.994
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.994C4,44.478,3.104,45.373,2,45.373z M58,40.489c-1.104,0-2-0.896-2-2v-0.995
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.995C60,39.594,59.104,40.489,58,40.489z M2,38.412c-1.104,0-2-0.896-2-2v-0.994
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.994C4,37.517,3.104,38.412,2,38.412z M58,33.528c-1.104,0-2-0.896-2-2v-0.995
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.995C60,32.633,59.104,33.528,58,33.528z M2,31.451c-1.104,0-2-0.896-2-2v-0.994
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.994C4,30.556,3.104,31.451,2,31.451z M58,26.567c-1.104,0-2-0.896-2-2v-0.994
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.994C60,25.672,59.104,26.567,58,26.567z M2,24.49c-1.104,0-2-0.896-2-2v-0.994
  c0-1.104,0.896-2,2-2s2,0.896,2,2v0.994C4,23.595,3.104,24.49,2,24.49z M58,19.606c-1.104,0-2-0.896-2-2v-0.994c0-1.104,0.896-2,2-2
  s2,0.896,2,2v0.994C60,18.711,59.104,19.606,58,19.606z M2,17.529c-1.104,0-2-0.896-2-2v-0.994c0-1.104,0.896-2,2-2s2,0.896,2,2
  v0.994C4,16.634,3.104,17.529,2,17.529z M58,12.646c-1.104,0-2-0.896-2-2V9.651c0-1.104,0.896-2,2-2s2,0.896,2,2v0.994
  C60,11.75,59.104,12.646,58,12.646z M2,10.568c-1.104,0-2-0.896-2-2V7.574c0-1.104,0.896-2,2-2s2,0.896,2,2v0.994
  C4,9.673,3.104,10.568,2,10.568z M58,5.685c-1.104,0-2-0.896-2-2V2.713c0-1.104,0.896-2.012,2-2.012s2,0.885,2,1.989v0.994
  C60,4.789,59.104,5.685,58,5.685z M52.418,4h-0.994c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.994c1.104,0,2,0.896,2,2S53.522,4,52.418,4z
   M45.457,4h-0.994c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.994c1.104,0,2,0.896,2,2S46.562,4,45.457,4z M38.496,4h-0.994
  c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.994c1.104,0,2,0.896,2,2S39.601,4,38.496,4z M31.535,4h-0.994c-1.104,0-2-0.896-2-2
  s0.896-2,2-2h0.994c1.104,0,2,0.896,2,2S32.64,4,31.535,4z M24.575,4H23.58c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.995
  c1.104,0,2,0.896,2,2S25.68,4,24.575,4z M17.614,4h-0.995c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.995c1.104,0,2,0.896,2,2
  S18.719,4,17.614,4z M10.653,4H9.658c-1.104,0-2-0.896-2-2s0.896-2,2-2h0.995c1.104,0,2,0.896,2,2S11.758,4,10.653,4z M3.692,4
  H2.713C1.608,4,0.705,3.104,0.705,2s0.889-2,1.993-2h0.994c1.104,0,2,0.896,2,2S4.797,4,3.692,4z"/>
</svg></button>

                    </div>


                    \<div id="${name}rightbar">

\<button id="${name}recordvideobutton"><svg x="0px" y="0px" width="30px" height="30px">
                          <g>
                          <circle id="${name}recordvideoicon" cx="15" cy="15" r="10" stroke="black" stroke-width="3" fill="red" />
                          </g>
                        </svg></button>
\<button id="${name}createwordbutton"><svg width="25px" height="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">

    <g>
      <path style="fill:#231F20;" d="M409.145,122.563h-306.29c-9.425,0-17.067,7.641-17.067,17.067v171.6
        c0,9.425,7.641,17.067,17.067,17.067h306.29c9.425,0,17.067-7.641,17.067-17.067v-171.6
        C426.212,130.204,418.57,122.563,409.145,122.563z M392.078,294.163H119.922V156.697h272.156V294.163z"/>
    
      <path transform="translate(0,30)" style="fill:#231F20;" d="M202.772,211.107h106.455c9.425,0,17.067-7.641,17.067-17.067s-7.641-17.067-17.067-17.067
        H202.773c-9.425,0-17.067,7.641-17.067,17.067S193.347,211.107,202.772,211.107z"/>

    </g>
                  </svg></button>

\<button id="${name}createarticlebutton"><svg x="0px" y="0px" width="25px" height="25px" viewBox="0 0 297 297">
                        <g>
                            <path d="M56.298,75.533h55.321c5.569,0,10.085-4.516,10.085-10.085c0-5.569-4.516-10.085-10.085-10.085H56.298   c-5.568,0-10.084,4.516-10.084,10.085C46.214,71.018,50.729,75.533,56.298,75.533z"/>
                            <path d="M56.298,112.446h129.083c5.568,0,10.084-4.515,10.084-10.084c0-5.569-4.516-10.085-10.084-10.085H56.298   c-5.568,0-10.084,4.516-10.084,10.085C46.214,107.932,50.729,112.446,56.298,112.446z"/>
                            <path d="M111.619,147.644H56.298c-5.568,0-10.084,4.515-10.084,10.084c0,5.569,4.516,10.085,10.084,10.085h55.321   c5.569,0,10.085-4.516,10.085-10.085C121.704,152.158,117.188,147.644,111.619,147.644z"/>
                            <path d="M280.852,37.456c-4.074-1.399-8.589-0.051-11.232,3.35L250.786,65.04V10.085C250.786,4.516,246.27,0,240.702,0H19.418   C13.849,0,9.333,4.516,9.333,10.085v276.83c0,5.569,4.516,10.085,10.085,10.085h221.284c5.568,0,10.084-4.516,10.084-10.085   V152.032l34.673-43.373c1.43-1.787,2.208-4.008,2.208-6.297V46.994C287.667,42.686,284.929,38.854,280.852,37.456z    M230.617,276.831H29.502V20.169h201.115v70.823l-90.079,115.91c-3.419,4.398-2.624,10.734,1.773,14.151   c1.841,1.43,4.019,2.122,6.182,2.122c3.007,0,5.981-1.338,7.969-3.895l11.314-14.558h36.041c3.064,0,5.963-1.394,7.877-3.788   l18.923-23.672V276.831z M267.498,98.826l-68.53,85.727H183.45l84.048-108.148V98.826z"/>
                          </g>
                        </svg></button>

                        

\<button id="${name}right0"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>done</title><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"/></svg></button>





                    </div>



                    \<div id="${name}bottombar">
                    <!--<div id="${name}helpertext"> Select grid:</div>-->
                    
\<button id="${name}grid0"><svg style="align-self: center;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-20 -5 340 155" height="20px">
  <g>
    <rect y="0" x = "0" width="300" height="150" style="fill:white;stroke-width:1;stroke:black;"></rect>
  </g>
</svg>\</button>
\<button id="${name}grid1"><svg style="align-self: center;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-20 -5 340 155" height="20px">
  <g>
    <rect y="0" x = "0" width="300" height="25" style="fill:white;stroke-width:1;stroke:black;"></rect> 
    <rect y="35" x = "0" width="300" height="115" style="fill:white;stroke-width:1;stroke:black;"></rect>
  </g>
</svg>\</button>
\<button id="${name}grid2"><svg style="align-self: center;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-20 -5 340 155" height="20px">
  <g>
    <rect y="0" x = "0" width="145" height="150" style="fill:white;stroke-width:1;stroke:black;"></rect> 
    <rect y="0" x = "155" width="145" height="150" style="fill:white;stroke-width:1;stroke:black;"></rect>
  </g>
</svg>\</button>
\<button id="${name}grid3"><svg style="align-self: center;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-20 -5 340 155" height="20px">
  <g>
    <rect y="0" x = "0" width="300" height="25" style="fill:white;stroke-width:1;stroke:black;"/></rect> 
    <rect y="35" x = "0" width="145" height="115" style="fill:white;stroke-width:1;stroke:black;"></rect> 
    <rect y="35" x = "155" width="145" height="115" style="fill:white;stroke-width:1;stroke:black;"></rect>
  </g>
</svg>\</button>
\<button id="${name}customgrid"><svg style="align-self: center;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve" height="20px">
<g>
  <g>
    <path d="M496.71,15.27c-20.336-20.336-53.425-20.336-73.761,0l-61.933,61.933H18.731C8.387,77.203,0,85.59,0,95.935v397.315    c0,10.345,8.387,18.731,18.731,18.731h397.315c10.345,0,18.731-8.387,18.731-18.731V150.965l61.933-61.933    C517.094,68.649,517.097,35.655,496.71,15.27z M397.317,474.518h-0.002H37.463V114.665h286.091l-94.031,94.032    c-3.725,3.554-0.91-1.332-42.761,91.758c-7.038,15.671,9.091,31.803,24.765,24.765c89.343-40.166,87.63-38.38,91.832-42.835    l93.958-93.957V474.518z M470.221,62.542L289.727,243.035l-20.782-20.782L449.439,41.76c5.731-5.729,15.054-5.729,20.783,0    C475.964,47.502,475.965,56.799,470.221,62.542z"/>
  </g>
</g>
</svg>\</button>

                    <!--\<button id="${name}fullscreen"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve" height="25px" width="25px">
<g>
  <g id="Chevron_Left_Circle">
    <path d="M192.485,0C86.185,0,0,86.185,0,192.485C0,298.797,86.173,384.97,192.485,384.97S384.97,298.797,384.97,192.485    C384.97,86.185,298.797,0,192.485,0z M192.485,361.282c-92.874,0-168.424-75.923-168.424-168.797S99.611,24.061,192.485,24.061    s168.424,75.55,168.424,168.424S285.359,361.282,192.485,361.282z"/>
    <path d="M235.878,99.876c-4.704-4.74-12.319-4.74-17.011,0l-83.009,84.2c-4.572,4.62-4.584,12.56,0,17.191l82.997,84.2    c4.704,4.74,12.319,4.74,17.011,0c4.704-4.752,4.704-12.439,0-17.191l-74.528-75.61l74.54-75.61    C240.57,112.315,240.57,104.628,235.878,99.876z"/>
  </g>
</g>
</svg>-->
\</button>
                    

                    \</div>
            \</div>
                      `,
  objectDefs : `
  document.getElementById("${name}_leftSignalMask").style.cssText += "display:none;"
  document.getElementById("${name}_rightSignalMask").style.cssText += "display:none;"

  let currentidea = '0x0000000000000000000000000000000000000000000000000000000000000000'
  let isMainHidden = true;
  let isHidden = true;
  let isIconHidden = true;
  let pendamt = 1;
  let currentcontext = "${context}";
  let currentprospective = "${context}";
  let ancestorObj = {'0x0000000000000000000000000000000000000000000000000000000000000000':true}  // this object tracks the ancestors, used to prevent circular references, updated by setAncestors case, informed by context manager.
  let urlHexChunkList = [] // list that will contain hexified url chunks uf required.
  let protcontext // this will contain the protocol context if url required.
  let enterJustPressed = false;
  let buttonPressed = false;
  let valueSignalJustPressed = false;
  let mode = "word" // || "video" || "article"



  async function getMedia(constraints) {
    let stream = null;

    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      /* use the stream */
    } catch(err) {
      /* handle the error */
    }
  }

  function addArticleBox(startRow,startCol,Row,Col){
    let el = document.createElement('div')
    el.classList.add("${name}articlebox")
    el.id = "textr"
    el.setAttribute("contenteditable",true)
    console.log('steeing',\`grid-area:\${startRow} /\${startCol} / \${Number(Row)+1} /\${Number(Col)+1};background-color:blue;\`)
    el.style.cssText += \`grid-area: \${startRow} /\${startCol} / \${Number(Row)+1} /\${Number(Col)+1};background-color:blue;text-align: start;\`
    el.onclick = function(){ selectedBox = this;selectedBox.setAttribute('htmlOn',false);}
    document.getElementById('${name}articlediv').appendChild(el)
    
    return el
  }
  let selectedBox = null;
  async function removeArticleBoxes(){
    let list = document.getElementsByClassName("${name}articlebox");
    let i=0
    while (list.length>0){    
      list[0].remove()
      i++
    }
  }
  async function removeArticleChildren(){
    let list = document.getElementsByClassName("${name}articledivchild");
    let i=0
    while (list.length>0){    
      let el = list[0]
      console.log('removing el',el)
      el.remove()
      i++
    }
    list = document.getElementsByClassName("${name}articledivchildhovered");
    i=0
    while (list.length>0){    
      let el = list[0]
      console.log('removing el',el)
      el.remove()
      i++
    }
  }
  async function removeContenteditables(){
    let list = document.getElementsByClassName("${name}articlebox");
    while (list.length>0){ 
      let el = list[0]
      el.removeAttribute('contenteditable')
      el.style.cssText += "border: 0px;"
      el.classList.remove("${name}articlebox")
      console.log('removed artcklass?',el,list)
    }
  }
  document.getElementById("${name}createarticlebutton").addEventListener("click",(e) => {
    mode = "article"
    document.getElementById("${name}bottombar").style.cssText += "display:flex;"
    document.getElementById("${name}topbar").style.cssText += "display:flex;"
    //document.getElementById("${name}bottombar").style.cssText += "display:flex;"
    //document.getElementById("${name}bottombar").style.cssText += "display:flex;"
  })
  /* toggle dashed guide lines */
  let guidesOn = true
  document.getElementById("${name}guidestoggle").addEventListener("click",(e) => {
    let list = document.getElementsByClassName("${name}articlebox");
    console.log('list',list,list.length)
    for (let i=0;i<list.length;i++){
      console.log('guidesOn',guidesOn,list[i])
      if (guidesOn){
          list[i].style.cssText += "border: 0px;"

          
      }
      else {
          list[i].style.cssText += "border: 0.5px dashed;"
          
      }
    }
    if (guidesOn) {guidesOn = false;document.getElementById("${name}articlediv").style.cssText += "background-color: white;"} else {guidesOn = true;document.getElementById("${name}articlediv").style.cssText += "background-color: lightgray;"}
  })
  document.getElementById("${name}togglehtml").addEventListener("click",(e) => {
        console.log('selectedBox---1',selectedBox)
        if (selectedBox) {
          console.log('selectedBox0',selectedBox,selectedBox.getAttribute("htmlOn"),selectedBox.getAttribute("htmlOn") == "true",selectedBox.getAttribute("htmlOn") == "false")
          if (selectedBox.getAttribute("htmlOn") == "false"){
            console.log('selectedBox1',selectedBox,selectedBox.getAttribute("htmlOn"))
            console.log('selectedBoxhtml',selectedBox.innerHTML)
            //let html = selectedBox.innerHTML.replace('<pre>','').replace('</pre>','')
            let textarea = document.createElement('textarea')
            let attr = selectedBox.attributes
            for (let i=0;i < attr.length;i++){
              textarea.setAttribute(attr[i].name,attr[i].value)
            }
textarea.value = selectedBox.innerHTML
            console.log('selectedBox1p',selectedBox.parentNode)
            selectedBox.parentNode.replaceChild(textarea,selectedBox)
            selectedBox = textarea
            selectedBox.onclick = function(){ selectedBox = this; }
            selectedBox.setAttribute('htmlOn',true)
          }
          else {
            console.log('selectedBox2',selectedBox,selectedBox.getAttribute("htmlOn"))
           /* let html = selectedBox.innerHTML
            if (!(html.includes('<pre>'))){
              selectedBox.innerHTML = '<pre>' + html + '</pre>'    
            }*/
            let div = document.createElement('div')
            let attr = selectedBox.attributes
            let pn = selectedBox.parentNode
            for (let i=0;i < attr.length;i++){
              div.setAttribute(attr[i].name,attr[i].value)
            }
            div.innerHTML = selectedBox.value
            console.log('selectedBox2p',selectedBox,selectedBox.parentNode,selectedBox.innerHTML,selectedBox.value,div.innerHTML)

            pn.replaceChild(div,selectedBox)
            selectedBox = div
            selectedBox.onclick = function(){ selectedBox = this;}
            selectedBox.setAttribute('htmlOn',false)
            selectedBox.setAttribute('contenteditable',true)
          } 
        }
  })
  document.getElementById("${name}").addEventListener("mouseover",(e) => {
        document.getElementById("${name}rightbar").style.cssText += "display:flex;"
  })
  document.getElementById("${name}").addEventListener("mouseout",(e) => {
        document.getElementById("${name}rightbar").style.cssText += "display:none;"
        /*setTimeout(function() {
            document.getElementById("${name}topbar").style.cssText += "display:none;"
            document.getElementById("${name}bottombar").style.cssText += "display:none;"
        }, 1000);*/
  })
    document.getElementById("${name}").addEventListener("wheel",(e) => {
            document.getElementById("${name}rightbar").style.cssText += "display:none;"
            document.getElementById("${name}topbar").style.cssText += "display:none;"
            document.getElementById("${name}bottombar").style.cssText += "display:none;"
    
  })
  document.getElementById("${name}textinc").addEventListener("click",(e) => {
        console.log('selectedBox',selectedBox)
        if (selectedBox) {
          let size = selectedBox.style['font-size'].split('em')[0]
          size = Number(size) + 0.1
          selectedBox.style.cssText += \`font-size:\${size}em;\`
        }
  })
  document.getElementById("${name}textdec").addEventListener("click",(e) => {
        console.log('selectedBox',selectedBox)
        if (selectedBox) {
          let size = selectedBox.style['font-size'].split('em')[0]
          size = Number(size) - 0.1
          selectedBox.style.cssText += \`font-size:\${size}em;\`
        }
  })
  document.getElementById("${name}justleft").addEventListener("click",(e) => {
        console.log('selectedBox',selectedBox)
        if (selectedBox) {
          selectedBox.style.cssText += \`text-align: start;\`
        }
  })
    document.getElementById("${name}justright").addEventListener("click",(e) => {
        console.log('selectedBox',selectedBox)
        if (selectedBox) {
          selectedBox.style.cssText += \`text-align: end;\`
        }
  })
    document.getElementById("${name}justcen").addEventListener("click",(e) => {
        console.log('selectedBox',selectedBox)
        if (selectedBox) {
          selectedBox.style.cssText += \`text-align: center;\`
        }
  })
  document.getElementById("${name}grid0").addEventListener("click",(e) => {
    removeArticleBoxes()
    let el = addArticleBox(1,1,6,10)
    el.style.cssText += "font-size:2em; padding:0.2em;background-color:white;"
    document.getElementById("${name}recordvideo").style.cssText += "display:none;"
  })
  document.getElementById("${name}grid1").addEventListener("click",(e) => {
    removeArticleBoxes()
    let el = addArticleBox(1,1,1,10)
    el.style.cssText += "font-size:3em;font-family:monospace;text-align: center;background-color:white;border:0.5px dashed;"
    el = addArticleBox(2,1,6,10)
    el.style.cssText += "font-size:2em;font-family:monospace;background-color:white;border:0.5px dashed;"
    document.getElementById("${name}recordvideo").style.cssText += "display:none;"
  })
  document.getElementById("${name}grid2").addEventListener("click",(e) => {
    removeArticleBoxes()
    let el = addArticleBox(1,1,6,5)
    el.style.cssText += "font-size:2em;font-family:monospace;background-color:white;border:0.5px dashed;"
    el = addArticleBox(1,6,6,10)
    el.style.cssText += "font-size:2em;font-family:monospace;background-color:white;border:0.5px dashed;"
    document.getElementById("${name}recordvideo").style.cssText += "display:none;"
  })
  document.getElementById("${name}grid3").addEventListener("click",(e) => {
    removeArticleBoxes()
    let el = addArticleBox(1,1,1,10)
    el.style.cssText += "font-size:3em;font-family:monospace;text-align: center;background-color:white;border:0.5px dashed;"
    el = addArticleBox(2,1,6,5)
    el.style.cssText += "font-size:2em;font-family:monospace;background-color:white;border:0.5px dashed;"
    el = addArticleBox(2,6,6,10)
    el.style.cssText += "font-size:2em;font-family:monospace;background-color:white;border:0.5px dashed;"
    document.getElementById("${name}recordvideo").style.cssText += "display:none;"
  })
    document.getElementById("${name}customgrid").addEventListener("click",(e) => {
    removeArticleBoxes()
  
  })
  document.getElementById("${name}createwordbutton").addEventListener("click",() => {
    mode = "word"
    removeArticleBoxes() //**
    document.getElementById("${name}idea").style.cssText += "display:grid;"
    document.getElementById("${name}articlediv").style.cssText += "display:none;"
    document.getElementById("${name}topbar").style.cssText += "display:none;"
    document.getElementById("${name}bottombar").style.cssText += "display:none;"
    document.getElementById("${name}idea").focus()
  });
  let newchildcontextid 
    document.getElementById("${name}right0").addEventListener("click",async (e) => {
            /* clean up html */
            switch(mode) {
              case "word":
                        // enter has been pressed. create a new oo in the context, and put the cursor in the the input box of the child context (allows rapid insertion of oos)
                          enterJustPressed = true;
                          newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance);

                          // tells context manager to create a new oo based on the input value.
                          send({"jsonrpc":"2.0","method":"newIdeaInsertAtTop","params":{'prospective':currentprospective,"isForMeta":isMeta,"distance":distance,"to":[thisContextMan],"from":"${name}"}})
                          let rightlim = Number(document.getElementById("${name}").style.left.replace('px',''))//getBoundingClientRect()
                          let widtth = document.getElementById("${name}").getBoundingClientRect().width
                          await pause(0.1)
                          let leftpos = rightlim + widtth - 31;

                          // tells context curators to create a new context. tells the new context manager the distance and left position for layout.
                          send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance+1),"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                          send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                        /*  send({"jsonrpc":"2.0","method":"newContext","params":{'context':currentprospective,"parentContext":"${context}","distance":"${distance}","isForMeta":isMeta,"left":leftpos,"to":[txtToOOId('contextCurator'),txtToOOId("filterCurator")],"from":"${name}"}})

                          send({"jsonrpc":"2.0","method":"setCursorContext","params":{"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});
*/

                          document.getElementById('${name}idea').value=''
                          document.getElementById("${name}idea").innerText = ''

                          valueSignalJustPressed = true

                          send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":[String(XORcontextprospective(currentcontext,currentprospective,distance))],"context":currentcontext,"prospective":currentprospective,"distance":distance,"amt": 1,"to":[thisContextMan],"from":"${name}"}});
                          send({"jsonrpc": "2.0", "method": "addtoContextPendingTotal", "params": {"amt":pendamt,"prospective":"${prospective}","context":currentcontext,"to":[thisContextMan],"from":"${name}"}});
                          await pause(0.1)

                          setTimeout(function () {
                            valueSignalJustPressed = false

                          }, 100);

                         /* setTimeout(function() {
                            console.log("shifiting child left",leftpos,currentprospective)
                            send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":leftpos,"fromParent":true,"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});
                          }, 1000);*/
                          

              break;
              case "article":
                    removeArticleChildren()
                    removeContenteditables()
                    let html = document.getElementById("${name}articlediv").innerHTML

                    let artBlob = new Blob([html], {type: 'text/html'})
                   
                    let artidea = await ideafromArrBuffer(artBlob,'text/html')
                    let artprospective = XORcontextidea("${context}",artidea,distance)
                    currentprospective = artprospective
                    mediaObj[artidea] = artBlob
                    console.log('mediaObj[artidea]input',mediaObj)
                    enterJustPressed = true;
                    newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,artprospective,metaoodistance);

                    // tells context manager to create a new oo based on the input value.
                    document.getElementById('${name}bottombar').style.cssText += 'display:none;'
                    document.getElementById("${name}topbar").style.cssText += 'display:none;'
                        mode = "word"
                    removeArticleBoxes() //**
                    document.getElementById("${name}idea").style.cssText += "display:grid;"
                    document.getElementById("${name}articlediv").style.cssText += "display:none;"
                    document.getElementById("${name}topbar").style.cssText += "display:none;"
                    document.getElementById("${name}bottombar").style.cssText += "display:none;"
              break;
              case "video":
                    // event listener added in media onstart function
              break;
              default:
            }
                   
                    send({"jsonrpc":"2.0","method":"newIdeaInsertAtTop","params":{'prospective':currentprospective,"isForMeta":isMeta,"distance":distance,"to":[thisContextMan],"from":"${name}"}})
                    let rightlim = Number(document.getElementById("${name}").style.left.replace('px',''))
                    let widtth = document.getElementById("${name}").getBoundingClientRect().width
                    await pause(0.1);
                    let leftpos = rightlim + widtth - 31;

                    // tells context curators to create a new context. tells the new context manager the distance and left position for layout.
                    send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance+1),"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                    send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                    send({"jsonrpc":"2.0","method":"newContext","params":{'context':currentprospective,"parentContext":"${context}","distance":"${distance}","isForMeta":isMeta,"left":leftpos,"to":[txtToOOId('contextCurator'),txtToOOId("filterCurator")],"from":"${name}"}})

                    send({"jsonrpc":"2.0","method":"setCursorContext","params":{"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});

                    document.getElementById('${name}idea').value=''
                    document.getElementById("${name}idea").innerText = ''

                    valueSignalJustPressed = true
                   

                    send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":[String(XORcontextprospective(currentcontext,currentprospective,distance))],"context":currentcontext,"prospective":currentprospective,"distance":distance,"amt": 1,"to":[thisContextMan],"from":"${name}"}});
                    send({"jsonrpc": "2.0", "method": "addtoContextPendingTotal", "params": {"amt":pendamt,"prospective":"${prospective}","context":currentcontext,"to":[thisContextMan],"from":"${name}"}});
                    await pause(0.1)

                    setTimeout(function () {
                      valueSignalJustPressed = false
                    }, 100);

  })
  let articleObj = {}

  var constraints = { audio: false, video: { width: 1200, height: 700 } };

  // user has clicked article icon. This allows input of html
  async function ${name}createarticle(ev){
    let isMousedown = false
    document.getElementById("${name}idea").style.cssText += "display:none;"
    document.getElementById('${name}LabelHelperNote').innerText = "Select boxes and type html"
    document.getElementById('${name}articlediv').style.cssText += "display:grid;"
    let list = document.getElementsByClassName('${name}articledivchild');
    let Row
    let Col
    let startRow
    let startCol
    let mouseoverTimeout = false
    for (let i=0; i<list.length; i++){
        list[i].addEventListener('mousedown', e => {
          
          isMousedown = true
          Row = list[i].getAttribute("row")
          Col = list[i].getAttribute("column")
          startRow = list[i].getAttribute("row")
          startCol = list[i].getAttribute("column")
          console.log('mousedown',startRow,startCol,isMousedown,\`display:grid;grid-area;\${startRow} /\${startCol} / \${Number(Row)+1} /\${Number(Col)+1};\`)
          document.getElementById("${name}articledivchildhovered").style.cssText += \`display:grid;grid-area:\${startRow} /\${startCol} / \${Number(Row)+1} /\${Number(Col)+1};\`
        })
        list[i].addEventListener('mouseup', e => {
          
          Row = list[i].getAttribute("row")
          Col = list[i].getAttribute("column")
          console.log('mouseup',startRow,startCol,Row,Col,isMousedown)
          if (isMousedown){
            isMousedown = false
              /*let el = document.createElement('div')
              el.classList.add("${name}articlebox")
              el.setAttribute("contenteditable",true)
              el.style.cssText += \`grid-area:\${startRow} /\${startCol} / \${Number(Row)+1} /\${Number(Col)+1};background-color:white;\`
              document.getElementById('${name}articlediv').appendChild(el)*/
              let el = addArticleBox(startRow,startCol,Row,Col)
              el.style.cssText += "font-size:2em;font-family:monospace;background-color:white;border:0.5px dashed;"
              /*if (Row > startRow && Col > startCol){
                  for (let j=startRow; j <= Row; j++){
                      for (let k=startCol; k <= Col; k++){
                            for (let m=0; m<list.length; m++){
                                  let r = list[m].getAttribute("row")
                                  let c = list[m].getAttribute("column")
                                  if (r == j && c == k){
                                      //list[m].style['background-color'] = 'white'
                                      //list[m].classList.remove("articledivchildhovered")
                                      document.getElementById("${name}articledivchildhovered").style.cssText += "display:none;"
                                  }
                            }
                      }
                  }
              }*/
          }
          
        })
        list[i].addEventListener('mouseover', e => {
          

          let rr = list[i].getAttribute("row")
          let cc = list[i].getAttribute("column")
          console.log('mouseover',startRow,startCol,Row,rr,Col,cc,isMousedown)
          if (isMousedown){// && (Row !== rr || Col !== cc)
              /*if (!(list[i].classList.contains("articledivchildhovered"))){
                  list[i].classList.add("articledivchildhovered")
              }*/
              let Row = rr
              let Col = cc
              console.log('mouseover2',startRow,startCol,Row,rr,Col,cc,isMousedown,\`display:grid;grid-area;\${startRow} /\${startCol} / \${Number(Row)+1} /\${Number(Col)+1};\`,document.getElementById("${name}articledivchildhovered").style.cssText)
              document.getElementById("${name}articledivchildhovered").style.cssText += \`display:grid;grid-area:\${startRow} / \${startCol} / \${Number(Row)+1} /\${Number(Col)+1};\`;
              console.log('mouseover3',document.getElementById("${name}articledivchildhovered").style.cssText,document.getElementById("${name}articledivchildhovered"))
              /*if (Row >= startRow && Col >= startCol){
                  for (let j=startRow; j <= Row; j++){
                      for (let k=startCol; k <= Col; k++){
                            for (let m=0; m<list.length; m++){
                                  let r = list[m].getAttribute("row")
                                  let c = list[m].getAttribute("column")
                                  //console.log('filling',r,c,j,k,list[m])
                                  if (r == j && c == k){
                                      list[m].style['background-color'] = 'orange'
                                  }
                            }
                      }
                  }
              }*/
          }
          else {
            for (let m=0; m<list.length; m++){
              //list[i].classList.remove("articledivchildhovered")
              document.getElementById("${name}articledivchildhovered").style.cssText += "display:none;"
            }
          }
        })
    }
    
                  
              /*
                  video.style.cssText += "display:none;"
                  document.getElementById('${name}videodiv').style.cssText += "display:none;"
                  console.log("mediaRecorder",chunks)
                  console.log("mediaRecorder",chunks,chunks[chunks.length-1].type)
                  document.getElementById("${name}recordvideoicon").setAttribute("fill","red")
                  //store and save vid:
                    // hash id it
                    let vididea = await ideafromArrBuffer(chunks[chunks.length-1],chunks[0].type)
                    console.log("mediaRecordervididea","${context}",vididea,distance,XORcontextidea("${context}",vididea,distance))
                    // savein oo
                    let vidprospective = XORcontextidea("${context}",vididea,distance)
                    currentprospective = vidprospective
                    mediaObj[vididea] = await chunks[chunks.length-1]//.arrayBuffer()
                    console.log('mediaObj[idea]input',mediaObj)
                    enterJustPressed = true;
                    let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,vidprospective,metaoodistance);

                    // tells context manager to create a new oo based on the input value.

                    send({"jsonrpc":"2.0","method":"newIdeaInsertAtTop","params":{'prospective':currentprospective,"isForMeta":isMeta,"distance":distance,"to":[thisContextMan],"from":"${name}"}})
                    let rightlim = Number(document.getElementById("${name}").style.left.replace('px',''))
                    let widtth = document.getElementById("${name}").getBoundingClientRect().width
                    await pause(0.1)
                    let leftpos = rightlim + widtth - 31;

                    // tells context curators to create a new context. tells the new context manager the distance and left position for layout.
                    send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance+1),"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                    send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                    send({"jsonrpc":"2.0","method":"newContext","params":{'context':currentprospective,"parentContext":"${context}","distance":"${distance}","isForMeta":isMeta,"left":leftpos,"to":[txtToOOId('contextCurator'),txtToOOId("filterCurator")],"from":"${name}"}})

                    send({"jsonrpc":"2.0","method":"setCursorContext","params":{"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});

                    document.getElementById('${name}idea').value=''
                    document.getElementById("${name}idea").innerText = ''

                    valueSignalJustPressed = true

                    send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":[String(XORcontextprospective(currentcontext,currentprospective,distance))],"context":currentcontext,"prospective":currentprospective,"distance":distance,"amt": 1,"to":[thisContextMan],"from":"${name}"}});
                    send({"jsonrpc": "2.0", "method": "addtoContextPendingTotal", "params": {"amt":pendamt,"prospective":"${prospective}","context":currentcontext,"to":[thisContextMan],"from":"${name}"}});
                    await pause(0.1)

                    setTimeout(function () {
                      valueSignalJustPressed = false
                    }, 100);

                    // save in layout - to contextMan...
                    // pendingTx
                    //empty input oo



                  
      



            })
            .catch(function(err) {
              console.log(err.name + ": " + err.message);
            });
      document.getElementById('${name}idea').style.cssText += " display: none;"


      isIconHidden = true;*/
  }
  document.getElementById("${name}createarticlebutton").addEventListener("click",${name}createarticle);


  // on mouseout from the content box, hides icon to be removed.
  async function ${name}recordvideo(ev){
    mode = "video"
    document.getElementById("${name}idea").style.cssText += "display:grid;"
    let video = document.getElementById('${name}video')
    video.style.cssText += "display:grid;"
    document.getElementById('${name}videodiv').style.cssText += "display:grid;"

                  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then(async function(stream) {
              let video = document.getElementById('${name}video')//var video = document.querySelector('video');
              // Older browsers may not have srcObject
              if ("srcObject" in video) {
                video.srcObject = stream;
              } else {
                
                video.src = window.URL.createObjectURL(stream);
              }
              video.onloadedmetadata = function(e) {
                video.play();
              };
              const mediaRecorder = new MediaRecorder(stream);
              //let chunks = [];

              mediaRecorder.ondataavailable = function(e) {
                chunks.push(e.data);
              }

              mediaRecorder.onstart = function(e) {
                  let counter = 0;
                  let stopped = false;
                  let inter = setInterval(function () {
                    document.getElementById("${name}countvideoicondiv").innerHTML = String(counter);
                    counter++
                    let clearOnStop = function(){
                        if (!(stopped)){
                            document.getElementById("${name}countvideoicondiv").innerHTML = ""
                              mediaRecorder.stop();
                              stream.getTracks().forEach(track => track.stop())
                              stopped = true
                              clearInterval(inter)
                          }

                      
                    }
                    document.getElementById("${name}recordvideo").addEventListener('click',() => {
                        clearOnStop()
                      })
                      document.getElementById("${name}videodiv").addEventListener('click',() => {
                          clearOnStop()
                        })
                      document.addEventListener('keyup',() => {
                          clearOnStop()
                        })
                        document.getElementById("${name}right0").addEventListener('click',() => {
                        clearOnStop()
                      })

                  }, 1000);
                }
                mediaRecorder.onstop = async function(e) {
                  video.style.cssText += "display:none;"
                  document.getElementById('${name}videodiv').style.cssText += "display:none;"
                  console.log("mediaRecorder",chunks)
                  console.log("mediaRecorder",chunks,chunks[chunks.length-1].type)
                  document.getElementById("${name}recordvideoicon").setAttribute("fill","red")
                  //store and save vid:
                    // hash id it
                    let vididea = await ideafromArrBuffer(chunks[chunks.length-1],chunks[0].type)
                    console.log("mediaRecordervididea","${context}",vididea,distance,XORcontextidea("${context}",vididea,distance))
                    // savein oo
                    let vidprospective = XORcontextidea("${context}",vididea,distance)
                    currentprospective = vidprospective
                    mediaObj[vididea] = await chunks[chunks.length-1]//.arrayBuffer()
                    console.log('mediaObj[idea]input',mediaObj)
                    enterJustPressed = true;
                    let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,vidprospective,metaoodistance);

                    // tells context manager to create a new oo based on the input value.

                    send({"jsonrpc":"2.0","method":"newIdeaInsertAtTop","params":{'prospective':currentprospective,"isForMeta":isMeta,"distance":distance,"to":[thisContextMan],"from":"${name}"}})
                    let rightlim = Number(document.getElementById("${name}").style.left.replace('px',''))
                    let widtth = document.getElementById("${name}").getBoundingClientRect().width
                    await pause(0.1)
                    let leftpos = rightlim + widtth - 31;

                    // tells context curators to create a new context. tells the new context manager the distance and left position for layout.
                    send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance+1),"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                    send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                    send({"jsonrpc":"2.0","method":"newContext","params":{'context':currentprospective,"parentContext":"${context}","distance":"${distance}","isForMeta":isMeta,"left":leftpos,"to":[txtToOOId('contextCurator'),txtToOOId("filterCurator")],"from":"${name}"}})

                    send({"jsonrpc":"2.0","method":"setCursorContext","params":{"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});

                    document.getElementById('${name}idea').value=''
                    document.getElementById("${name}idea").innerText = ''

                    valueSignalJustPressed = true

                    console.log('sending video value signal')
                    send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":[String(XORcontextprospective(currentcontext,currentprospective,distance))],"context":currentcontext,"prospective":currentprospective,"distance":distance,"amt": 1,"to":[thisContextMan],"from":"${name}"}});
                    send({"jsonrpc": "2.0", "method": "addtoContextPendingTotal", "params": {"amt":pendamt,"prospective":"${prospective}","context":currentcontext,"to":[thisContextMan],"from":"${name}"}});
                    await pause(0.1)

                    setTimeout(function () {
                      valueSignalJustPressed = false
                    }, 100);

                    // save in layout - to contextMan...
                    // pendingTx
                    //empty input oo



                  }
              let counter = 3
              document.getElementById("${name}recordvideoicon").setAttribute("fill","orange")
              document.getElementById("${name}countvideoicondiv").innerHTML = String(3);
              let interReady = setInterval(function () {
                counter--
                document.getElementById("${name}countvideoicondiv").innerHTML = String(counter);
                if (counter == 0) {
                  document.getElementById("${name}recordvideoicon").setAttribute("fill","green")
                  document.getElementById("${name}countvideoicondiv").innerHTML = "Go";
                  mediaRecorder.start();
                  clearInterval(interReady)
                }
              }, 1000);
              await pause(3)



            })
            .catch(function(err) {
              console.log(err.name + ": " + err.message);
            });
      document.getElementById('${name}idea').style.cssText += " display: none;"


      isIconHidden = true;
  }
  document.getElementById("${name}recordvideobutton").addEventListener("click",${name}recordvideo);

  // on mouseout from the content box, hides icon to be removed.
  /*function ${name}_all_mouseout(ev){

      document.getElementById('${name}inputideaIcon').style.cssText += " display: none;"


      isIconHidden = true;
  }
  document.getElementById("${name}title").addEventListener("mouseout",${name}_all_mouseout);*/

  function ${name}_content_mouseout(e){
console.log('input mouseout:',isHidden,justScrolled)
      //if (!(isHidden)){
        let mousedownwards = (e.clientY > window.innerHeight - 420 + 160) ? true : false;
        if (!mousedownwards) send({"jsonrpc":"2.0","method":"slideUpInput","params":{"to":["_"+"${context}" + "_"+"0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}"}});
        if (!justScrolled) {
              send({"jsonrpc":"2.0","method":"MOUSEOUT","params":{"to":[thisContextMan],"from":"${name}"}})
        }
      //}
  }
  document.getElementById("${name}_content").addEventListener("mouseout",${name}_content_mouseout);

  // on mouseout from the inputcontainer box, slides up box if mouseout direction is downwarnds
  function ${name}inputcontainer_mouseout(e){
     if ((!(document.getElementById('${name}idea') === document.activeElement))  ){//&& document.getElementById('${name}').style['z-index'] < 0
        let mousedownwards = (e.clientY > window.innerHeight - 420 + 174 +20) ? true : false;
        //if (mousedownwards) send({"jsonrpc":"2.0","method":"slideUpInput","params":{"to":["_"+"${context}" + "_"+"0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}"}});
      if (mousedownwards) document.getElementById('${name}inputtypeselectorbar').style.cssText += " display: none;"
      }

  }
  document.getElementById("${name}inputtypeselectorbar").addEventListener("mouseout",${name}inputcontainer_mouseout);

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

  // this will retrieve an item from the arweave blockweave, based on the context (in Arweave terminology). The sanitised html is only added if its hash is correct.
  async function ARgetter(lookupTx) {
          let tx = await arweave.transactions.get(lookupTx)
          let contenttype
          let data
          let config = {
                ALLOWED_TAGS: ["a", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "ins", "kbd", "li", "main", "ol",  "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table",  "tbody", "td", "th", "thead", "tr", "u", "ul"], // only <P> and text nodes
                KEEP_CONTENT: false, // remove content from non-white-listed nodes too
                ADD_ATTR: ['oo'], // custom attributes
                USE_PROFILES: {html: true,mathMl: true, svg: true},
                ALLOWED_URI_REGEXP: ""
          }; //config for html sanitizer
          tx.contexts.forEach(context => {
              let key = context.get('name', {decode: true, string: true});
              let value = context.get('value', {decode: true, string: true});
              if (String(key)=='Content-Type'){
                  contenttype = value
              }
          });
          let r = new Rusha
          let responseHash
          let html
          switch (contenttype) {
                case "text/html":
                      data = tx.get('data',{decode:true})

                      responseHash = r.digestFromArrayBuffer(data)
                      idea = '0x545854000000000000000000'+String(responseHash)
                      html = tx.get('data', {decode: true, string: true})
                      break;
                default:
                      html = 'content-type not supported'
            }


            currentprospective = XORcontextidea(currentcontext,idea,distance)
            send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": idea,"prospective": currentprospective,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
            document.getElementById("${name}idea").innerHTML = '';
            document.getElementById("${name}idea").innerHTML = DOMPurify.sanitize(html,config);

  }

  // Handler for input key presses.
  let initiatorIconTimeout
  async function ${name}inputfunc2(e){

    let val = document.getElementById('${name}idea').innerText
    if (e.keyCode == 13 && !e.shiftKey){ // enter keycode
                e.preventDefault()
                // in the not impossible event that the proposed prospective clashes with another in the layout, ask the user to adjust
                if (currentprospective in ancestorObj){
                          alert('This oo is already loaded, try another.')
                }
                else {
                          // enter has been pressed. create a new oo in the context, and put the cursor in the the input box of the child context (allows rapid insertion of oos)
                          enterJustPressed = true;
                          let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance);

                          // tells context manager to create a new oo based on the input value.
                          send({"jsonrpc":"2.0","method":"newIdeaInsertAtTop","params":{'prospective':currentprospective,"isForMeta":isMeta,"distance":distance,"to":[thisContextMan],"from":"${name}"}})
                          let rightlim = Number(document.getElementById("${name}").style.left.replace('px',''))//getBoundingClientRect()
                          let widtth = document.getElementById("${name}").getBoundingClientRect().width
                          await pause(0.1)
                          let leftpos = rightlim + widtth - 31;

                          // tells context curators to create a new context. tells the new context manager the distance and left position for layout.
                          send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance+1),"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                          send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                          send({"jsonrpc":"2.0","method":"newContext","params":{'context':currentprospective,"parentContext":"${context}","distance":"${distance}","isForMeta":isMeta,"left":leftpos,"to":[txtToOOId('contextCurator'),txtToOOId("filterCurator")],"from":"${name}"}})

                          send({"jsonrpc":"2.0","method":"setCursorContext","params":{"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});

                          document.getElementById('${name}idea').value=''
                          document.getElementById("${name}idea").innerText = ''

                          valueSignalJustPressed = true

                          send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":[String(XORcontextprospective(currentcontext,currentprospective,distance))],"context":currentcontext,"prospective":currentprospective,"distance":distance,"amt": 1,"to":[thisContextMan],"from":"${name}"}});
                          send({"jsonrpc": "2.0", "method": "addtoContextPendingTotal", "params": {"amt":pendamt,"prospective":"${prospective}","context":currentcontext,"to":[thisContextMan],"from":"${name}"}});
                          await pause(0.1)

                          setTimeout(function () {
                            valueSignalJustPressed = false
                          }, 100);

                }

                // timeout the enter pressed flag
                setTimeout(function () {
                  enterJustPressed = false
                }, 500);

      }
      else if (e.keyCode == 13 && e.shiftKey){ //shift+enter pressed
        e.preventDefault()
        // in the not impossible event that the proposed prospective clashes with another in the layout, ask the user to adjust
        if (currentprospective in ancestorObj){
                  alert('This oo is already loaded, try another.')
        }
        else {
                  // enter has been pressed. create a new oo in the context, and put the cursor in the the input box of the child context (allows rapid insertion of oos)
                  enterJustPressed = true;
                  let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance);

                  // tells context manager to create a new oo based on the input value.
                  send({"jsonrpc":"2.0","method":"newIdeaInsertAtTop","params":{'prospective':currentprospective,"isForMeta":isMeta,"distance":distance,"to":[thisContextMan],"from":"${name}"}})
                  let rightlim = Number(document.getElementById("${name}").style.left.replace('px',''))//getBoundingClientRect()
                  let widtth = document.getElementById("${name}").getBoundingClientRect().width
                  await pause(0.1)
                  let leftpos = rightlim + widtth - 31;

                  // tells context curators to create a new context. tells the new context manager the distance and left position for layout.
                  send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance+1),"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                  send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                  send({"jsonrpc":"2.0","method":"newContext","params":{'context':currentprospective,"isForMeta":isMeta,"left":leftpos,"to":[txtToOOId('contextCurator'),txtToOOId("filterCurator")],"from":"${name}"}})

                  send({"jsonrpc":"2.0","method":"setCursorContext","params":{"to":["${name}"],"from":"${name}"}});

                  document.getElementById('${name}idea').value=''
                  document.getElementById("${name}idea").innerText = ''

                  valueSignalJustPressed = true

                  send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":[String(XORcontextprospective(currentcontext,currentprospective,distance))],"context":currentcontext,"prospective":currentprospective,"distance":distance,"amt": 1,"to":[thisContextMan],"from":"${name}"}});
                  send({"jsonrpc": "2.0", "method": "addtoContextPendingTotal", "params": {"amt":pendamt,"prospective":"${prospective}","context":currentcontext,"to":[thisContextMan],"from":"${name}"}});

                  await pause(0.1)
send({"jsonrpc":"2.0","method":"gotoinput","params":{"prospective":"0x0000000000000000000000000000000000000000000000000000000000000000","to":[thisContextMan],"from":"${name}"}});
                  setTimeout(function () {
                    valueSignalJustPressed = false
                  }, 500);

        }

        // timeout the enter pressed flag
        setTimeout(function () {
          enterJustPressed = false
        }, 500);
      }
      else{
              // if here then user is typing in a new idea.
              if (val.length == 0){
                //have to adjust css to get central vertical alignment, due to quirk of browsers
                document.getElementById("${name}idea").style.cssText += " line-height: 150px; display:table-cell;"
              }
              else if (val.length == 1){
                //have to adjust css to get central vertical alignment, due to quirk of browsers
                document.getElementById("${name}idea").style.cssText += " display:flex; line-height: unset;align-items:center;"
              }
              if (val.length >0 && val.length <=29){
                        // can handle no more than 29 chars
                        currentidea = hexifyString(String.raw\`\${val}\`.replace(\/(?:\\r\\n\|\\r\|\\n)/g, ''))  // remove superfluous line breaks
                        currentprospective = XORcontextidea(currentcontext,currentidea,distance)
                        send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": hexifyString(val),"prospective": currentprospective,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                        isHidden = false;
                        clearTimeout(initiatorIconTimeout);
                        initiatorIconTimeout = setTimeout(function () {
                         send({"jsonrpc": "2.0", "method": "requestInitiators", "params": {"context": currentcontext,"prospective": currentprospective,"idea":hexifyString(val),"to":[txtToOOId("web3wsManager")],"from":"${name}"},"id": "requestInitiators" })
                        }, 10);
                      }
              else {
                // user has reached character limit. Expand to hash based.
                document.getElementById("${name}idea").innerText = val.slice(0,29);
                document.getElementById("${name}idea").focus()
                document.execCommand('selectAll', false, null);
                document.getSelection().collapseToEnd();
              }
            }
  }
document.getElementById("${name}idea").addEventListener("keyup", ${name}inputfunc2);

  // brings input box to front on context to text box.
  function ${name}inputContext(e){
        buttonPressed = true;
    send({"jsonrpc":"2.0","method":"gotoinput","params":{"prospective":"0x0000000000000000000000000000000000000000000000000000000000000000","to":[thisContextMan],"from":"${name}"}});
    document.getElementById("${name}idea").innerText = ''
    document.getElementById("${name}idea").focus();
    document.getElementById("${name}LabelHelperNote").style.cssText += " display: flex;"
    document.getElementById("${name}idea").style.cssText += "font-size:30px; vertical-align:middle;"
    document.getElementById('${name}inputtypeselectorbar').style.cssText += " display: none;"
    let buttoncontainer = document.getElementById("${name}inputbuttons").style.cssText += " display: none;"
    document.getElementById("${name}inputhtmlcontainer").style.cssText += " display: none;"

  setTimeout(function () {
      buttonPressed = false;
      }, 100)
  }
  document.getElementById("${name}inputtypeselectorbarLabelButton").addEventListener("click",${name}inputContext);



  // on context away from input, tells context manager to go back to the top idea.
 function ${name}inputContextout(e){

    if (!enterJustPressed){
        setTimeout(function () {
          if (!valueSignalJustPressed && !buttonPressed){
          send({"jsonrpc":"2.0","method":"gotoprevprospective","dontshowrear":true,"params":{"to":[thisContextMan],"from":"${name}"}});
        }
      }, 100);
    }
  }
  document.getElementById("${name}").addEventListener("focusout",${name}inputContextout);

/*  else if (e.target=="${name}inputtypeselectorbar" || document.getElementById("${name}inputtypeselectorbar").contains(e.target)){
    // clicked on content
    valueSignalJustPressed = true
  }*/


  // if user clicks outside input oo, go back to previous oo in the context
  function ${name}windowclick(e){

    if (document.getElementById("${name}").style['z-index'] != -1){ // only care about this click if the input is live
              if (e.target=="${name}_content" || document.getElementById("${name}_content").contains(e.target)){
                // clicked on content
                valueSignalJustPressed = true
              }

              else {
                // clicked outside content
                valueSignalJustPressed = false
                setTimeout(function () {
                  send({"jsonrpc":"2.0","method":"gotoprevprospective","params":{"dontshowrear":true,"to":[thisContextMan],"from":"${name}"}});
              }, 100);
              }
    }

  }
  window.addEventListener("click",${name}windowclick);


  function ${name}_onresize(){
    // set position when window resizes.
    let y = window.innerHeight-420;
    send({"jsonrpc":"2.0","method":"SETY","params":{"y":y,"to":["${name}"],"from":"${name}"}})
  }
  window.addEventListener("resize",${name}_onresize);


  let hasChildren = false;
  let isTop = false;
  let hasFilter = false;

  // this function sets a flag to indicate if this oo is presently at the front of the layout.
  function setTop(val){
    if (val){
      isTop = true;
    }
    else {
      isTop = false;
    }
  }

  // toggles expand or collapse of content onclick of left half of icon. Informs context manager.
  function ${name}_left_click(e){
            let tel = document.getElementById('${name}_content');
            let relX = e.clientX - el.getBoundingClientRect().left
            let relY = e.clientY - el.getBoundingClientRect().top
            isHidden = false;
            if(tel.style.display=='none' || tel.style.display==' none'){
                send({"jsonrpc":"2.0","method":"CLICK-Xpand","params":{"to":[thisContextMan],"from":"${name}"}})
            }
            else{
                send({"jsonrpc":"2.0","method":"CLICK-Collapse","params":{"to":[thisContextMan],"from":"${name}"}})
            }
  }
  document.getElementById("${name}_left").addEventListener("click",${name}_left_click);


  // toggles expand or collapse of content onclick of left half of icon. Informs context manager.
  function ${name}_right_click(e){
            // clicking on the right side of the icon should mimc the action when the user presses enter - an new oo is spawned under this context, and cursor context is passed to the new input idea in the child.
            // in the not impossible event that the proposed prospective clashes with another in the layout, ask the user to adjust
            if (currentprospective in ancestorObj){
                //alert('Cannot go into this context as already exists elsewhere in this session.')
            }
            else {
              let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance);
              let leftpos = document.getElementById("${name}").getBoundingClientRect().right - 45;
              send({"jsonrpc":"2.0","method":"newIdea","params":{'prospective':currentprospective,"isForMeta":isMeta,"distance":distance,"to":[thisContextMan],"from":"${name}"}})
              send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance+1),"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
              send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
              send({"jsonrpc":"2.0","method":"newContext","params":{'context':currentprospective,"isForMeta":true,"to":[txtToOOId('contextCurator'),txtToOOId("filterCurator")],"from":"${name}"}})
              setTimeout(function () {
                  send({"jsonrpc":"2.0","method":"MOVEX","params":{'x':leftpos,"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});
                  send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftpos,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
              }, 300);
              send({"jsonrpc":"2.0","method":"setCursorContext","params":{"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}})
              send({"jsonrpc":"2.0","method":"MOVEX","params":{'x':leftpos,"to":['_'+currentprospective+'_'+'0x0000000000000000000000000000000000000000000000000000000000000000'],"from":"${name}"}});
              document.getElementById('${name}input').value=''
              document.getElementById("${name}idea").innerHTML = \`</b> <br>\`
              currentprospective = XORcontextidea(currentcontext,hexifyString("0x0000000000000000000000000000000000000000000000000000000000000000"),distance)
              send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": "0x0000000000000000000000000000000000000000000000000000000000000000","prospective": currentprospective,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
          }

          // This last part of the function makes the right prospective icon spin for 10 seconds.
          console.log('weinput:',el.getElementsByClassName('prospectiveiconparent'))
          let ccel = el.getElementsByClassName('prospectiveiconparent')[0];
          let ccelchild = ccel.childNodes[2];
          ccelchild.style.cssText = "animation: rotation 2s infinite linear;";

          setTimeout(function () {
              ccelchild.style.cssText = "animation: none;";
            }, 10000);
    }
  document.getElementById("${name}_right").addEventListener("click",${name}_right_click);


let ccel
let ccelchild
let ccelchilda
let ccelchildb
el.style['z-index'] = "1";

/*
setTimeout(function () {

       document.getElementById("${name}_leftSignalMask").style.cssText += "display:none;"
       document.getElementById("${name}_rightSignalMask").style.cssText += "display:none;"
}, 2000);*/


isReady = true;
  `,
  RESULTcases : ``
                    ,
  METHODcases : `
                  /*
                      setContext:     sets the context and request new icon from icon creator oo
                      setCursorContext:    makes sure everyidea in the input box is visible and puts focus in input box.
                      shiftBackAsIdea   Used to set the position of this oo in the layout.
                      LOADINGSTATE  puts this into the loading state, with css animations, used to cover up layout whilst loading
                      CLEARLOADINGSTATE: clears the loading state, puts back to base state.
                      setAncestors: give this an object containing its ancestors so that circular referencing is avoided.
                      setDistanceAsIdea:  Used to set the distance of this oo.
                      distance was incorrectly initialised (e.g. due to msg dropping, or error else where)
                      setMetaStatus: tells this oo whether or not it's in the meta layout or the base.
                      SETTOP: notifies this oo that it's at the front of the layout
                      shiftBackAsIdea: Used to set the position of this oo in the layout.

                  */

                    case 'slideUpInput':
                      //document.getElementById('${name}inputcontainer').style.cssText += ' top: 0px';
                      document.getElementById('${name}inputtypeselectorbar').style.cssText += " display: none;"
                    break;

                    case 'slideDownInput':
                      //document.getElementById('${name}inputcontainer').style.cssText += ' top: 46px';
                      document.getElementById('${name}inputtypeselectorbar').style.cssText += " display: flex;"
                    break;

                    case 'setContext':
                      currentcontext = msg.params.context;
                      send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": currentidea,"prospective": XORcontextidea(currentcontext,currentidea,distance),"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                    break;

                    case 'setCursorContext':
                            //makes sure everyidea in the input box is visible and puts focus in input box.
                            document.getElementById("${name}idea").focus();
                            document.getElementById('${name}_content').style.cssText += ' display:grid; ';
                            document.getElementById('${name}_left').style.cssText += ' display:block';
                            document.getElementById('${name}_right').style.cssText += ' display:block';
                            document.getElementById('${name}_upFlagsL').style.cssText += ' display:grid';
                            setTimeout(function () {
                              document.getElementById("${name}idea").focus();
                              send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                              setTimeout(function () {
                                justScrolled = false;
                                send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                              }, 100);
                          }, 100);
                    break;

                    case "shiftBackAsIdea":
                            //Used to set the position of this oo in the layout.
                            // relay MOVEYZ to self
                            send({"jsonrpc":"2.0","method":"MOVEXYZ","params":{"x":msg.params.x,"y":window.innerHeight - 420,"z":0,"to":["${name}"],"from":"${name}"}});
                            //if z <0 then check if has children
                            if (msg.params.z < 0){
                                if (hasChildren){
                                  let rightpos = el.getBoundingClientRect().right;
                                  send({"jsonrpc":"2.0","method":"shiftBack","params":{"x":String(rightpos),"y":msg.params.y,"z":msg.params.z,"to":["_"+metaooManagerProspective + "_"+XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance)],"from":"${name}"}});
                                }
                                send({"jsonrpc":"2.0","method":"SETZIND","params":{"zind":-1,"to":["${name}"],"from":"${name}"}});
                              }
                              else if (msg.params.z == 0){
                                //  send({"jsonrpc":"2.0","method":"atFront","params":{"to":["_"+metaooManagerProspective + "_"+ XORcontextidea(metaooManagerProspective,currentprospective,metaoodistance)],"from":"${name}"}});
                                  send({"jsonrpc":"2.0","method":"SETZIND","params":{"zind":1,"to":["${name}"],"from":"${name}"}});
                              }
                            //if has children, get right dim of self and inform context manager to shift back.
                    break;


                    case "LOADINGSTATE":
                            //puts this into the loading state, with css animations, used to cover up layout whilst loading
                             document.getElementById("${name}loadinginfo").style.cssText += ' display:grid;'
                             document.getElementById("${name}").style.cssText += ' display:grid; z-index: 2;'
                             try {
                                   ccelchilda = el.getElementsByClassName('bigcirc')[0];
                                   ccelchildb = el.getElementsByClassName('bigcirc')[1];

                                   ccelchilda.style.cssText = "animation: rotationbig 2s infinite linear;";
                                   ccelchildb.style.cssText = "animation: rotationbig 2s infinite linear;";

                                   ccel = el.getElementsByClassName('contexticonparent')[0];

                                   ccelchild = ccel.childNodes[2];
                                   ccelchild.style.cssText = "animation: rotation 2s infinite linear;";
                             }
                             catch{}
                    break;


                    case "CLEARLOADINGSTATE":
                              //clears the loading state, puts back to base state.
                              document.getElementById("${name}loadinginfo").style.cssText += ' display:none;'
                              el.style['z-index'] = "-1"
                              try {
                              ccelchilda = el.getElementsByClassName('bigcirc')[0];
                              ccelchildb = el.getElementsByClassName('bigcirc')[1];
                              ccelchilda.style.cssText = "animation: none;";
                              ccelchildb.style.cssText = "animation: none;";
                              ccelchild.style.cssText = "animation: none;";
                            }
                            catch{}
                    break;

                    case "setAncestors":
                            ancestorObj = msg.params.ancestorObj
                    break;

                    case 'setDistanceAsIdea':
                          //Used to set the distance of this oo.
                          distance = msg.params.distance;

                    break;

                    case 'setMetaStatus':
                          //tells this oo whether or not it's in the meta layout or the base.
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

                      `,
  STARTUPmessages : `[]`,
  context: context,
  prospective: prospective

}

return base_template(inputidea_outerTemplateObj);
}
