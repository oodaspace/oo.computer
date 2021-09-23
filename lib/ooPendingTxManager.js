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
let pendingTx_proc = function(context,prospective,distance,name="pendingTx",_class='base'){
let description = `Container to show/edit pending transactions.`
let pendingTx_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name} {z-index: 10 !important;}
                #${name}title {display:grid;grid-template: auto / 50px  185px auto;grid-area:1 / 1 / 2 / 3;    width: calc(100vw - 75px);}
                #${name}desc {display: none;}
                #${name}_content {background-color:transparent;font-size:small;font-family: courier;overflow: visible;max-width:none;max-height:none;min-width:none;min-height:none;
}
                #${name}table {grid-area:1 / 3 / 2 / 4; overflow: scroll;scrollbar-width: none;display: flex;flex-direction:row;flex-wrap:wrap;align-self: start;}/*max-height: 500px;*/
                #${name}table::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}button {grid-area:1 / 2 / 2 / 3;margin:2px;border:solid 1px black;background-color:lightgoldenrodyellow;align-self: start;padding:10px;text-align:center;display:none;cursor: pointer;box-shadow: black 0px 0px 2px 0px;}
                #${name}CurrencyNote {grid-area:5 / 1 / 6 / 2;font-size:12px;color:#555;text-align: center;display:none;align-self:end;}
                #${name}meIcon {grid-area:1 / 1 / 2 / 2;align-self:start;justify-self:center;padding: 5px;background-color:transparent;}
                #${name}meIcon:hover {background-color:lightblue;}
                #${name}logo {grid-area:1 / 3 / 2 / 4;position:relative;left:0px;justify-self:end;width:50px;cursor:pointer;}
                #${name}menu {grid-area:2 / 3 / 3 / 4;background-color:transparent;max-height:calc(100vh - 250px);overflow-y:scroll;border:solid 0px black;margin-left:0px;display:none;flex-direction:column;width:100%;height:auto;z-index: 1;}
                #${name}menu::-webkit-scrollbar {
                  display: none;
                }
                #${name}mainID {grid-area:2 / 1 / 3 / 4;background-color:transparent;max-height:calc(100vh - 250px);overflow-y:scroll;border:solid 0px black;margin-left:0px;display:none;flex-direction:column;width:100%;height:auto;z-index: 1;}
                #${name}mainID::-webkit-scrollbar {
                  display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                #${name}menu {
                  -ms-overflow-style: none;  /* IE and Edge */
                  scrollbar-width: none;  /* Firefox */
                }
                .${name}menuitem:hover {background-color:#9E9E9E;cursor:pointer;}
                #${name}signalcontainer {grid-area:2 / 1 / 4 / 4;background-color:whitesmoke;max-height:calc(100vh - 250px);overflow-y:scroll;border:solid 3px black;margin-left:0px;display:none;z-index: 1;}
                /* Hide scrollbar for Chrome, Safari and Opera */
                #${name}signalcontainer::-webkit-scrollbar {
                  display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                #${name}signalcontainer {
                  -ms-overflow-style: none;  /* IE and Edge */
                  scrollbar-width: none;  /* Firefox */
                }
                #${name}aboutcontainer {grid-area:2 / 1 / 3 / 3;background-color:whitesmoke;max-height:calc(100vh - 270px);overflow-y:scroll;border:solid 3px black;margin-left:0px;display:none;white-space: pre-wrap;}
                /* Hide scrollbar for Chrome, Safari and Opera */
                #${name}aboutcontainer::-webkit-scrollbar {
                  display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                #${name}aboutcontainer {
                  -ms-overflow-style: none;  /* IE and Edge */
                  scrollbar-width: none;  /* Firefox */
                }
                #${name}introContainer {grid-area:2 / 1 / 3 / 3;background-color:whitesmoke;max-height:calc(100vh - 250px);overflow-y:scroll;border:solid 3px black;margin-left:0px;display:none;white-space: pre-wrap;}
                /* Hide scrollbar for Chrome, Safari and Opera */
                #${name}introContainer::-webkit-scrollbar {
                  display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                #${name}introContainer {
                  -ms-overflow-style: none;  /* IE and Edge */
                  scrollbar-width: none;  /* Firefox */
                }
                #${name}hideSignal {grid-area:2 / 3 / 3 / 3;align-self:start;justify-self:end; padding: 30px;display:none;z-index:10;}
                .${name}menuitem {
                  background-color:whitesmoke; padding:20px;height:auto;margin-top:2px;margin-left:10px;
                }
            </style>
            \<div id="${name}title">
                    \<div id="${name}desc"> \<b>${name}: \</b>${description}\</div>
                    \<div id="${name}table">\</div>


                    \<div id="${name}button">Send Signal(s)\</div>

                    <div id="${name}CurrencyNote">1 unit : 1 ETH </div>
            \</div>
            <!--\<div id="${name}logo"><img width="50px" src="./icon.png"></img>\</div>-->
            \<div id="${name}meIcon">\</div>
            \<div id="${name}signalcontainer">\</div>
            \<div id="${name}aboutcontainer">test</div>
            \<div id="${name}introContainer">hmm</div>
            \<div id="${name}mainID">
                  <div id="${name}mainID1" class="${name}menuitem">Introduction</div>
                  <!--<div id="${name}mainID2" class="${name}menuitem">The Idea Value Tree</div>
                  <div id="${name}mainID3" class="${name}menuitem">The "oo"</div>
                  <div id="${name}mainID4" class="${name}menuitem">Value Signals</div>
                  <div id="${name}mainID5" class="${name}menuitem">The Signal Set</div>
                  <div id="${name}mainID6" class="${name}menuitem">White Paper</div>
                  \<div id="${name}mainID7" class="${name}menuitem">about</div>-->

            </div>
            \<div id="${name}menu">
                  <div id="${name}intro" class="${name}menuitem">Introduction</div>
                  <div id="${name}valuetree" class="${name}menuitem">The Idea Value Tree</div>
                  <div id="${name}theoo" class="${name}menuitem">The "oo"</div>
                  <div id="${name}valuesignals" class="${name}menuitem">Value Signals</div>
                  <div id="${name}signaltemplates" class="${name}menuitem">The Signal Set</div>
                  <div id="${name}whitepaper" class="${name}menuitem">White Paper</div>
                  \<div id="${name}about" class="${name}menuitem">about</div>

            </div>
            <div id="${name}hideSignal"><button>x</button></div>
            `,
  objectDefs : `
      //initialise display to not visible

      function putInValueTree(valueTree,context,prospective,d,dind=0,chain=[]){
        if (d==dind){
          for (let c in valueTree){
            if (c == context){
              chain.push(context)
              chain.push(prospective)
              return chain
            }

          }
          return []
        }
        else {
            for (let c in valueTree){
              chain.push(c)
                outchain = putInValueTree(valueTree,context,d,dind+1,chain)
                if (outchain.length > d){
                  return outchain
                }
                chain.pop()
            }

        }
        return false

      }

let contextObj;
let valueTree = {};
let msgno = signalChain.length;

let initSent = true
let msgIndex = 0

//document.getElementById('${name}title').style.cssText += ' grid-template:none';
      document.getElementById('${name}_rank').style.cssText += ' display:none';
      document.getElementById('${name}_ranktotal').style.cssText += ' display:none';
      document.getElementById('${name}_upFlagsR').style.cssText += ' display:none';
      document.getElementById('${name}_upFlagsL').style.cssText += ' display:none';
      document.getElementById("${name}_content").style.cssText += "  width:auto;height:auto;border: solid 0px;display:grid;grid-template:50px auto / 50px calc(100vw - 270px) 200px;"//min-width:10000px;
      document.getElementById("${name}_left").style.cssText += " display:none;"
      document.getElementById("${name}_right").style.cssText += " display:none;"
      document.getElementById("${name}_rightSignalMask").style.cssText += " display:none;"
      document.getElementById("${name}_leftSignalMask").style.cssText += " display:none;"
      el.style.cssText += " grid-template:repeat(4,auto) / 14px 18px auto 18px 14px; height:auto; z-index:1;"

      // relocate on window resize
      function ${name}_onresize(){
          let y = 3//window.innerHeight-215;
          send({"jsonrpc":"2.0","method":"MOVE","params":{"x":-45,"y":y,"to":["${name}"],"from":"${name}"}})
      }
      window.addEventListener("resize",${name}_onresize);

      function ${name}_hideSignal(){
          document.getElementById("${name}signalcontainer").style.cssText += "display:none;"
          document.getElementById("${name}aboutcontainer").style.cssText += "display:none;"
          document.getElementById("${name}introContainer").style.cssText += "display:none;"
          document.getElementById("${name}hideSignal").style.cssText += "display:none;"
      }
      document.getElementById("${name}hideSignal").addEventListener("click",${name}_hideSignal);


      function ${name}_showAbout(){
        ${name}_hideSignal()
        document.getElementById("${name}aboutcontainer").innerHTML = "<div style='white-space: pre-wrap;padding: 20px;'>" + oodaSpaceSignalSet.glossary().oodaSpacesignalset + "</div>" //"<pre style='white-space:pre-wrap;'>" + oodaSpaceSignalSet.glossary().oodaSpacesignalset + "</pre>"
          document.getElementById("${name}aboutcontainer").style.cssText += "display:grid;border: 20px solid #9E9E9E;border-style: ridge;padding:20px;"
          document.getElementById("${name}hideSignal").style.cssText += "display:grid;"
      }
      document.getElementById("${name}about").addEventListener("click",${name}_showAbout);
      function ${name}_showWhat(){
        ${name}_hideSignal()
        document.getElementById("${name}introContainer").innerHTML = oodaSpaceSignalSet.glossary().intro//"<div style='white-space: pre-wrap;padding: 20px;'>" + oodaSpaceSignalSet.glossary().oo + "</div>"//"<pre style='white-space:pre-wrap;'>" + oodaSpaceSignalSet.glossary().intro + "</pre>"
          document.getElementById("${name}introContainer").style.cssText += "display:grid;border: 20px solid #9E9E9E;border-style: ridge;padding:20px;"
          document.getElementById("${name}hideSignal").style.cssText += "display:grid;"
      }
      document.getElementById("${name}intro").addEventListener("click",${name}_showWhat);
      function ${name}_showValueTree(){
        ${name}_hideSignal()
        document.getElementById("${name}introContainer").innerHTML = oodaSpaceSignalSet.glossary().ideavaluetree
          document.getElementById("${name}introContainer").style.cssText += "display:grid;border: 20px solid #9E9E9E;border-style: ridge;padding:20px;"
          document.getElementById("${name}hideSignal").style.cssText += "display:grid;"
      }
      document.getElementById("${name}valuetree").addEventListener("click",${name}_showValueTree);
      function ${name}_showtheoo(){
        ${name}_hideSignal()
        document.getElementById("${name}introContainer").innerHTML = oodaSpaceSignalSet.glossary().oo
          document.getElementById("${name}introContainer").style.cssText += "display:grid;border: 20px solid #9E9E9E;border-style: ridge;padding:20px;"
          document.getElementById("${name}hideSignal").style.cssText += "display:grid;"
      }
      document.getElementById("${name}theoo").addEventListener("click",${name}_showtheoo);
      function ${name}_showvaluesignal(){
        ${name}_hideSignal()
        document.getElementById("${name}introContainer").innerHTML = oodaSpaceSignalSet.glossary().valuesignal
          document.getElementById("${name}introContainer").style.cssText += "display:grid;border: 20px solid #9E9E9E;border-style: ridge;padding:20px;"
          document.getElementById("${name}hideSignal").style.cssText += "display:grid;"
      }
      document.getElementById("${name}valuesignals").addEventListener("click",${name}_showvaluesignal);

      let menuShown = false
     /* function ${name}_toggleMenu(){
        if (menuShown){
          document.getElementById("${name}menu").style.cssText += "display:none;"
          menuShown = false
        }
        else {
          document.getElementById("${name}menu").style.cssText += "display:flex;"
          menuShown = true
        }

      }
      document.getElementById("${name}logo").addEventListener("click",${name}_toggleMenu);*/

        let pendingIdeas = {}
        let pendingFilters = {}
        let pendingDiscards = {}
            let pendingClaims = {}
            let pendingInit = ''
            let claimid
        let accountset = false;
        let dirs
        let counter = 0
        let thisooid = '0x' + IdeaValueTree.key
        let interv = setInterval(function () {

        if (initNeeded){
              let to = txtToOOId("pendingTx")
              send({"jsonrpc":"2.0","method":"InitSignal","params":{"to":[txtToOOId("pendingTx")],"from":"index"}});
              clearInterval(interv)
        }
        counter++

        if (counter>10){clearInterval(interv)}


    }, 1000);

    // this function sends the queued transactions to the oodaspacev0 contract.
    async function ${name}_button_click(e){
      let frontRunProtection = false
          if (!accountset){
              /*  if (typeof ethereum.request == 'function') {
                        accounts = await ethereum.request({ method: 'eth_requestAccounts' });//
                 }
                 else {
                       ethereum.send('eth_requestAccounts')//
                       accounts = await web3.eth.getAccounts();
                 }*/
                accountset = true;
          }

          let claims = [];
          let claimedWords = [];
          // Initialise salt - the random number mixed with the word to be claimed - used to reduce risk of front running
          let salt = []
          let arr = new Uint8Array(32)
          window.crypto.getRandomValues(arr).forEach(x => salt.push(Number(x).toString(16)))
          salt = '0x' + salt.join('').toLowerCase()
          if (salt.length < 66){
            for (let i = 0; i < 66 - salt.length; i++){
              salt += '0'
            }
          }
          if (frontRunProtection){

            }
            else { // no frontrunprotection


                 if (pendingInit == 'INIT'){
                   let signalSetHash = await sha256(JSON.stringify(oodaSpaceSignalSet))

                         let initSignal = await signSignal(oodaSpaceSignalSet.INIT(signaller,'0x' + mainKey,signalSetHash));

                         msgno++;
                         v = await sha256(JSON.stringify(initSignal))
                         //initSignal = JSON.stringify(\`{"SIGNAL":\${initSignal},"TYPE":"INIT","SIGNALLER":\${signaller},"SIGNAL_SET_HASH":\${signalSetHash},"SIGNAL_HASH":\${initSignal.SIGNALHASH},"SIGNATURE":\${initSignal.SIGNATURE}}\`)

                         //--send({"jsonrpc":"2.0","method":"InitSignal","params":{"initSignal":initSignal,"to":[txtToOOId("hyperManager")],"from":"${name}"}})
                         initSignal.signalHash = v
                         initSignal = JSON.stringify(initSignal)
                      console.log('INIT SIGNAL',initSignal)
                         msgIndex++
                         window.api.send('SignalChain:put'+'.'+String(msgIndex),initSignal)
                         await new Promise(r => {window.api.receive('SignalChain:put_response'+'.'+String(msgIndex),(result)=>{r(result)})})


                         let tel = document.getElementById('pendinginit'+'_0x0000000000000000000000000000000000000000000000000000000000000000_'+thisooid)
                         if (tel) tel.parentNode.removeChild(tel)
                         //tel = document.getElementById('_0x0000000000000000000000000000000000000000000000000000000000000000_'+thisooid)
                         //tel.style.cssText += "display:none;"
                         initSent = true;

                  }


              for (let t in pendingIdeas){
                      let cel = document.getElementById('pendingidea'+String(t))
                      let prospective = pendingIdeas[t].prospective.toLowerCase();
                      let context = pendingIdeas[t].context.toLowerCase();
                      let idea = pendingIdeas[t].idea.toLowerCase();
                      let n = pendingIdeas[t].distance;
                      document.getElementById('pendingClaimprogressbar'+String(t)).style.cssText += "width:"+String(100)+"%";
                      document.getElementById('pendingClaimprogressbar'+String(t)).innerHTML = 'Sending value signal';

                      let valueSignal = await signSignal(oodaSpaceSignalSet.VALUE(signaller,pendingIdeas[t].context,'JWK__eef03f0cc39cddf49af996f7c24ab547da058967fa34ebb2fe5d6b',pendingIdeas[t].idea,'JWK__eef03f0cc39cddf49af996f7c24ab547da058967fa34ebb2fe5d6b',n,pendingIdeas[t].prospective,'JWK__eef03f0cc39cddf49af996f7c24ab547da058967fa34ebb2fe5d6b',parseInt(pendingIdeas[t].amt),'GBP',String(msgno),9));
                      msgno++;
                      v = await sha256(JSON.stringify(valueSignal))
                      //valueSignal = JSON.stringify(\`{"SIGNAL":"\${JSON.stringify(valueSignal)}","TYPE":"VALUE","SIGNALLER":"\${signaller}","CONTEXT":"\${pendingIdeas[t].context}","CONTEXT_INITIATOR":"\${signaller}","IDEA":"\${pendingIdeas[t].idea}","IDEA_INITIATOR":"\${signaller}","PROSPECTIVE":"\${pendingIdeas[t].prospective}","PROSPECTIVE_INITIATOR":"\${signaller}","AMOUNT":\${pendingIdeas[t].amt},"CURRENCY":'GBP',"SIGNAL_HASH":\${valueSignal.SIGNALHASH},"SIGNATURE":"\${valueSignal.SIGNATURE}"}\`)
                      send({"jsonrpc":"2.0","method":"pendingSignalConfirmed","params":{"dict":pendingIdeas[t],"valueSignal":valueSignal,"to":[txtToOOId("filtermain")],"from":"${name}"}})
                      //--send({"jsonrpc":"2.0","method":"ValueSignal","params":{"dict":pendingIdeas[t],"valueSignal":valueSignal,"to":[txtToOOId("hyperManager")],"from":"${name}"}})
                      valueSignal.signalHash = v
                      valueSignal = JSON.stringify(valueSignal)
                      console.log('VALUE SIGNAL',valueSignal)
                      msgIndex++
                      window.api.send('SignalChain:put'+'.'+String(msgIndex),valueSignal)
                      console.log('sent put', 'SignalChain:put_response'+'.'+String(msgIndex))
                      let res = await new Promise(r => {window.api.receive('SignalChain:put_response'+'.'+String(msgIndex),(result)=>{r(result)})})
                      console.log('got response', res,'SignalChain:put_response'+'.'+String(msgIndex))
                      let contextman = '_'+metaooManagerProspective+'_'+XORcontextidea(metaooManagerProspective,context,metaoodistance)
                      setTimeout(function () {
                        //send({"jsonrpc": "2.0", "method": 'refreshPath',params:{"context": context, "to":[contextman], "from": "${name}"}})
                      }, 500);


                      if (pendingIdeas[t].idea in mediaObj){
                        console.log('got media',mediaObj)
                        let b64 = await blobToBase64(mediaObj[pendingIdeas[t].idea])
                        //wordObj.media['content'] = b64
                        wordObj.media['contentMediaType'] = mediaObj[pendingIdeas[t].idea].type
                        msgIndex++
                        window.api.send('media:add'+'.'+String(msgIndex),[pendingIdeas[t].idea,b64,mediaObj[pendingIdeas[t].idea].type])
                      }
                      let tel = document.getElementById('pendingidea'+String(t))
                      if (tel) tel.parentNode.removeChild(tel)

               }

               for (let t in pendingClaims){
                       let cel = document.getElementById('pendingclaim'+String(t))
                       let prospective = pendingClaims[t].prospective.toLowerCase();
                       let context = pendingClaims[t].context.toLowerCase();
                       let idea = pendingClaims[t].idea.toLowerCase();
                       let n = pendingClaims[t].distance;
                       /*document.getElementById('pendingClaimprogressbar'+String(t)).style.cssText += "width:"+String(100)+"%";
                       document.getElementById('pendingClaimprogressbar'+String(t)).innerHTML = 'Sending filter signal';*/
                       kash = await IdeaValueTree.key //await sha256(JSON.stringify(k))
                       kash = '0x' + kash

                       claimSignal = await signSignal(oodaSpaceSignalSet.CLAIM(kash,pendingClaims[t].idea));//
                       msgno++;
                       v = await sha256(JSON.stringify(claimSignal))
                       //claimSignal = JSON.stringify(\`{"SIGNAL":\${claimSignal},"TYPE":"CLAIM","SIGNALLER":\${signaller},"IDEA":\${pendingClaims[t].idea},"SIGNAL_HASH":\${claimSignal.SIGNALHASH},"SIGNATURE":\${claimSignal.SIGNATURE}}\`)
                       //--send({"jsonrpc":"2.0","method":"ClaimSignal","params":{"dict":pendingClaims[t],"claimSignal":claimSignal,"to":[txtToOOId("hyperManager")],"from":"${name}"}})
                       claimSignal.signalHash = v
                      claimSignal = JSON.stringify(claimSignal)
                       msgIndex++
                       window.api.send('SignalChain:put'+'.'+String(msgIndex),claimSignal)
                       await new Promise(r => {window.api.receive('SignalChain:put_response'+'.'+String(msgIndex),(result)=>{r(result)})})


                       let tel = document.getElementById('pendingclaim'+String(t))
                       if (tel) tel.parentNode.removeChild(tel)
                }




                for (let t in pendingDiscards){
                        let cel = document.getElementById('pendingdiscard'+String(t))
                        let prospective = pendingDiscards[t].prospective.toLowerCase();
                        let context = pendingDiscards[t].context.toLowerCase();
                        let idea = pendingDiscards[t].idea.toLowerCase();
                        let n = pendingDiscards[t].distance;

                        discardSignal = await signSignal(oodaSpaceSignalSet.DISCARD(signaller,pendingDiscards[t].context,pendingDiscards[t].idea,n,pendingDiscards[t].prospective,String(msgno),9));
                        msgno++;
                        v = await sha256(JSON.stringify(discardSignal))
                        discardSignal = JSON.stringify(\`{"SIGNAL":\${discardSignal},"TYPE":"DISCARD","SIGNALLER":\${signaller},"CONTEXT":\${pendingDiscards[t].context},"IDEA":\${pendingDiscards[t].idea},"PROSPECTIVE":\${pendingDiscards[t].prospective},"SIGNAL_HASH":\${discardSignal.SIGNALHASH},"SIGNATURE":\${discardSignal.SIGNATURE}}\`)
                        //--send({"jsonrpc":"2.0","method":"DiscardSignal","context":context,"params":{"dict":pendingDiscards[t],"context":context,"discardSignal":discardSignal,"to":[txtToOOId("hyperManager")],"from":"${name}"}})
                        send({"jsonrpc":"2.0","method":"pendingDiscardSignalConfirmed","params":{"dict":pendingDiscards[t],"context":context,"discardSignal":discardSignal,"to":[txtToOOId("filtermain")],"from":"${name}"}})
                        msgIndex++
                        window.api.send('SignalChain:put'+'.'+String(msgIndex),valueSignal)
                        await new Promise(r => {window.api.receive('SignalChain:put_response'+'.'+String(msgIndex),(result)=>{r(result)})})


                        let tel = document.getElementById('pendingdiscard'+String(t))
                        if (tel) tel.parentNode.removeChild(tel)
                        //tel = document.getElementById('_'+context+'_'+prospective)
                      //  tel.style.cssText += "display:none;"

                 }


                 pendingIdeas = {}
                 pendingFilters = {}
                 pendingDiscards = {}
                 pendingClaims = {}
                 pendingInit = ''

        }

    }
    document.getElementById("${name}button").addEventListener("click",${name}_button_click);

    let menuVisible = false
    function ${name}addToClipboard(){
      navigator.clipboard.writeText(IdeaValueTree.key)
      console.log('key added to clipboard', IdeaValueTree.key)
      if (!menuVisible){
          document.getElementById('${name}mainID').style.cssText = "display:flex;"
          menuVisible = true
      }
      else {
           document.getElementById('${name}mainID').style.cssText = "display:none;"  
           menuVisible = false     
      }
      document.getElementById('${name}mainID1').innerHTML = "This is hyper://" + IdeaValueTree.key
    }
    document.getElementById("${name}meIcon").addEventListener("click",${name}addToClipboard);


    // setup Horizontal scrolling.
    window.addEventListener('wheel', async (e) => {
                //await pause(0.0005)
                document.getElementById("${name}").style.cssText += "left:" +String(window.pageXOffset-45) + "px;"


    })

    send({"jsonrpc":"2.0","method":"ADDRICON","params":{"address":'0x'+mainKey,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id":"ADDRICON"});
  `,
  RESULTcases : `case 'ICONforPending':
                        // response from IconCreator with small icon. Remove click event handler also added here.
                        //ooIdea:click(discard) -> ooContextManager(root) -> ooIconCreator(smallIcon) -> here
                        //ooIdea:click(discard) -> ooContextManager(child)... -> ooContextManager(root) -> ooIconCreator(smallIcon) -> here
                        //ooIdea:click(func/{}up1000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/createSVG25)*n -> -> ooIconCreator:case(result/ICONforPending) -> here
                        //ooIdea:click(func/{}up10000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/createSVG25)*n -> oIconCreator:case(result/ICONforPending) -> here
                        //ooIdea:click(func/{}up1000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25) -> ooIconCreator:case(result/ICONforPending) -> here
                        //ooIdea:click(func/{}up10000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25) -> ooIconCreator:case(result/ICONforPending) -> here
                        //ooFilterMain:click(func/_plus1>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> -> ooIconCreator:case(result/ICONforPending) -> here
                        //ooFilterMain:click(func/_plus10>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> -> ooIconCreator:case(result/ICONforPending) -> here
                        //ooFilterMain:click(func/_plus1>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> -> ooIconCreator:case(result/ICONforPending) -> here
                        //ooFilterMain:click(func/_plus10>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> -> ooIconCreator:case(result/ICONforPending) -> here
                        //ooFilterMain:click(func/{}enterfilter>>msg/ValueSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> -> ooIconCreator:case(result/ICONforPending) -> here
                        //ooFilterMain:click(func/{}enterfilter>>msg/ValueSignal) -> ooPendingTxManager:case(msg/ClaimSignal) -> ooPendingTxManager:case(msg/createSVG25)*n -> ooIconCreator:case(result/ICONforPending) -> here


                        for (let t in pendingIdeas){
                            if (String(t) == "_"+String(msg.result.context)+'_'+String(msg.result.prospective)) {
                              document.getElementById('pend_'+String(msg.result.context)+'_'+String(msg.result.prospective)).innerHTML = msg.result.svg;
                            }
                            document.getElementById('pend'+String(t) +'close').addEventListener("click", () => {
                              send({"jsonrpc": "2.0", "method": "removePending",params:{"dict":pendingIdeas[t], "to":[txtToOOId("filtermain")], "from": "${name}"}})
                              delete pendingIdeas[t];
                              let tel = document.getElementById('pendingidea'+String(t))
                              if (tel) tel.parentNode.removeChild(tel)
                              if (Object.keys(pendingIdeas).length==0){
                                  //document.getElementById("${name}button").style.cssText += " display:none;";
                                  document.getElementById("${name}CurrencyNote").style.cssText += " display:none;";
                                  //document.getElementById("${name}").style.cssText += " display:none;";
                              }
                            })
                            document.getElementById('pend'+String(t) +'show').addEventListener("click", () => {
                              let sig = oodaSpaceSignalSet.VALUE(signaller,pendingIdeas[t].context, '0x' + IdeaValueTree.key, pendingIdeas[t].idea, '0x' + IdeaValueTree.key, pendingIdeas[t].distance,pendingIdeas[t].prospective, '0x' + IdeaValueTree.key, parseInt(pendingIdeas[t].amt), 'ETH', String(msgno), 9)//hyper:\/\/
                                document.getElementById("${name}signalcontainer").innerHTML = "<div style='white-space: pre-wrap;padding: 20px;'>" + sig.SIGNAL + "</div>"
                                document.getElementById("${name}signalcontainer").style.cssText += "display:grid;box-shadow: 0px 0px 3px 3px lightgreen;border: 20px solid black;border-style: double;"
                                document.getElementById("${name}hideSignal").style.cssText += "display:grid;"

                            })
                      }
                      for (let t in pendingClaims){
                        if (String(t) == "_"+String(msg.result.context)+'_'+String(msg.result.prospective)) {
                          document.getElementById('pendclaim_'+String(msg.result.context)+'_'+String(msg.result.prospective)).innerHTML = msg.result.svg;
                        }
                          document.getElementById('pendclaim'+String(t) +'close').addEventListener("click", () => {


                            delete pendingClaims[t];
                            let tel = document.getElementById('pendingclaim'+String(t))
                            if (tel) tel.parentNode.removeChild(tel)
                          })
                          document.getElementById('pendclaim'+String(t) +'show').addEventListener("click", () => {
                            let sig = oodaSpaceSignalSet.CLAIM('0x'+IdeaValueTree.key,pendingClaims[t].idea)
                              document.getElementById("${name}signalcontainer").innerHTML = "<div style='white-space: pre-wrap;padding: 20px;'>" + sig.SIGNAL + "</div>"
                              document.getElementById("${name}signalcontainer").style.cssText += "display:grid;box-shadow: 0px 0px 3px 3px lightblue;border: 20px solid black;border-style: double;"
                              document.getElementById("${name}hideSignal").style.cssText += "display:grid;"

                          })
                        }
                      for (let t in pendingFilters){
                          document.getElementById('pend'+String(t) +'close').addEventListener("click", () => {
                            delete pendingFilters[t];
                            let tel = document.getElementById('pendingidea'+String(t))
                            if (tel) tel.parentNode.removeChild(tel)
                            if (Object.keys(pendingFilters).length==0){
                                //document.getElementById("${name}button").style.cssText += " display:none;";
                                document.getElementById("${name}CurrencyNote").style.cssText += " display:none;";
                                //document.getElementById("${name}").style.cssText += " display:none;";
                            }
                          })
                          document.getElementById('pend'+String(t) +'show').addEventListener("click", () => {
                            let sig = oodaSpaceSignalSet.FILTER('0x'+IdeaValueTree.key,pendingFilters[t].prospective)
                              document.getElementById("${name}signalcontainer").innerHTML = "<div style='white-space: pre-wrap;padding: 20px;'>" + sig.SIGNAL + "</div>"
                              document.getElementById("${name}signalcontainer").style.cssText += "display:grid;box-shadow: 0px 0px 3px 3px lightblue;border: 20px solid black;border-style: double;"
                              document.getElementById("${name}hideSignal").style.cssText += "display:grid;"

                          })
                        }
                        for (let t in pendingDiscards){
                          if (String(t) == "_"+String(msg.result.context)+'_'+String(msg.result.prospective)) {
                            document.getElementById('discard_'+String(msg.result.context)+'_'+String(msg.result.prospective)).innerHTML = msg.result.svg;
                          }
                            document.getElementById('discard'+String(t) +'dicardclose').addEventListener("click", () => {
                              delete pendingDiscards[t];
                              let tel = document.getElementById('pendingdiscard'+String(t))
                              if (tel) tel.parentNode.removeChild(tel)
                            })
                            document.getElementById('discard'+String(t) +'dicardshow').addEventListener("click", () => {
                              let sig = oodaSpaceSignalSet.DISCARD(signaller,pendingDiscards[t].context, pendingDiscards[t].idea, pendingDiscards[t].distance,pendingDiscards[t].prospective, String(msgno), 9)
                                document.getElementById("${name}signalcontainer").innerHTML = "<div style='white-space: pre-wrap;padding: 20px;'>" + sig.SIGNAL + "</div>"
                                document.getElementById("${name}signalcontainer").style.cssText += "display:grid;box-shadow: 0px 0px 3px 3px orange;border: 20px solid black;border-style: double;"
                                document.getElementById("${name}hideSignal").style.cssText += "display:grid;"

                            })
                          }
                          if (pendingInit == 'INIT' && !initSent){
                                let t = '_'+String(msg.result.context)+'_'+String(msg.result.prospective)
                                if (document.getElementById('pendinit_'+String(msg.result.context)+'_'+String(msg.result.prospective))){

                                         document.getElementById('pendinit_'+String(msg.result.context)+'_'+String(msg.result.prospective)).innerHTML = msg.result.svg;


                                        document.getElementById('pendinit'+String(t) +'show').addEventListener("click", async () => {

                                          let signalSetHash = await sha256(JSON.stringify(oodaSpaceSignalSet))
                                          let sig = oodaSpaceSignalSet.INIT(signaller,'0x' + mainKey,signalSetHash)
                                            document.getElementById("${name}signalcontainer").innerHTML = "<div style='white-space: pre-wrap;padding: 20px;'>" + sig.SIGNAL + "</div>"
                                            document.getElementById("${name}signalcontainer").style.cssText += "display:grid;box-shadow: 0px 0px 3px 3px orange;border: 20px solid black;border-style: double;"
                                            document.getElementById("${name}hideSignal").style.cssText += "display:grid;"

                                        })
                                      }

                          }

                            if (Object.keys(pendingIdeas).length + Object.keys(pendingClaims).length + pendingInit.length + Object.keys(pendingFilters).length + Object.keys(pendingDiscards).length ==0){
                                document.getElementById("${name}button").style.cssText += " display:none;";
                            }
                            
                  break;
                  case 'ADDRICON':

                            document.getElementById("${name}meIcon").innerHTML =  msg.result.svg


                  break;
                  `
                    ,
  METHODcases : `case 'ValueSignal':
                        //ooIdea:click(func/{}up1000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> here
                        //ooIdea:click(func/{}up10000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> here
                        //ooFilterMain:click(func/{}_plus1>>func/signalValue>>msg/ValueSignal) -> here
                        //ooFilterMain:click(func/{}_plus10>>func/signalValue>>msg/ValueSignal) -> here
                        //ooFilterMain:click(func/{}enterfilter>>msg/ValueSignal) -> here
                        // handles value signals (from pressing value signal button on an oo). Collates into provisional transactions to be sent.
                        idea =  String(XORcontextprospective(msg.params.context,msg.params.prospective,msg.params.distance));
                        ideaid = '_'+ String(msg.params.context) + '_' + String(msg.params.prospective)
                        id = 'pend_'+String(msg.params.context)+'_'+String(msg.params.prospective)
                        for (let t in pendingDiscards){
                          if (String(t) == "_"+String(msg.params.context)+'_'+String(msg.params.prospective)) {
                            // remove peding discard signal:
                            delete pendingDiscards[t];
                            let tel = document.getElementById('pendingdiscard'+String(t))
                            if (tel) tel.parentNode.removeChild(tel)
                          }
                        }
                        if (!(ideaid in pendingIdeas)){
                                  document.getElementById('${name}table').innerHTML += \`<div id="pendingidea_\${msg.params.context}_\${msg.params.prospective}" style="padding:2px;margin:2px;border:solid 1px black;display:grid; grid-template: 32px / auto auto auto auto auto;height:32px;box-shadow: black 0px 0px 2px 0px;background-color:lightgreen;">
                                  <div id="amt\${ideaid}" style="grid-area: 1 / 1 / 2 / 2;align-self:center;">VALUE SIGNAL of <b>\${String(BigInt(msg.params.amt))}</b></div>
                                  <div style="grid-area: 1 / 2 / 2 / 3;align-self:center;">&nbsp;to&nbsp;</div><div id="\${id}" style="grid-area: 1 / 3 / 2 / 4;align-self:center;"></div>
                                  <div id="\${id}close" style="grid-area: 1 / 5 / 2 / 6;align-self:center;padding-right:5px;"><button>x</button></div>
                                  <div id="\${id}show" style="grid-area: 1 / 4 / 2 / 5;align-self:center;padding:5px;"><button>	&#8675;</button></div>
                                  <div style="grid-area: 1 / 1 / 2 / 3;display:flex;">
                                      <div id="pendingprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:green;width:0%;font-size: 9px;align-self:end;height:25%;"></div>
                                  </div>
                                  <div style="grid-area: 1 / 1 / 2 / 3;display:flex;"><div id="pendingClaimprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:#e8a326;font-size: 9px;text-align: center;width:0%;height:25%;"></div>
                                  </div></div>\`


                                  send({"jsonrpc": "2.0", "method": "createSVG25", "params": {"context": String(msg.params.context),"idea": idea,"prospective": String(msg.params.prospective),"prospectiveaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","contextaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","ideaaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICONforPending" });


                                  let prospectiveaddr = "0x0000000000000000000000000000000000000000"
                                  let contextaddr = "0x0000000000000000000000000000000000000000"
                                  let ideaaddr = "0x0000000000000000000000000000000000000000"

                                  pendingIdeas[ideaid] = {amt : msg.params.amt, context: msg.params.context, prospective:msg.params.prospective,idea:idea,distance:msg.params.distance,"prospectiveaddr":prospectiveaddr,"contextaddr":contextaddr,"ideaaddr":ideaaddr, "chain":msg.params.chain}


                                  document.getElementById("${name}button").style.cssText += " display:grid;";
                                  //document.getElementById("${name}CurrencyNote").style.cssText += " display:grid;";
                                  document.getElementById("${name}").style.cssText += " display:grid;";
                         }
                         else {
                                 let amt = document.getElementById(\`amt\${ideaid}\`).innerHTML
                                 amt = amt.split('<b>')[1].split('</b>')[0]
                                  document.getElementById(\`amt\${ideaid}\`).innerHTML ="VALUE SIGNAL of <b>" + String(BigInt(msg.params.amt) + BigInt(amt)) + "</b>";
                                  pendingIdeas[ideaid] = {amt : String(BigInt(msg.params.amt) + BigInt(amt)),context: msg.params.context, prospective:msg.params.prospective,idea:idea,distance:msg.params.distance, "chain":msg.params.chain}
                         }

                         // check if value signalled contexts and idea already have an owner, if not, claim it
                         msgIndex++
                 window.api.send('IdeaValueTree:get'+'.'+String(msgIndex),['default',msg.params.context])
                 dirs = await new Promise(r => {window.api.receive('IdeaValueTree:get_response'+'.'+String(msgIndex),(result)=>{r(result)})})
                         //dirs = await IdeaValueTree.readdir('')
                         if (dirs){
                             wordObj = dirs//await IdeaValueTree.readFile(msg.params.context)
                             wordObj = JSON.parse(wordObj)
                             if(!(Object.keys(wordObj).includes("Owner")) && (!(Object.keys(pendingClaims).includes("_0x0000000000000000000000000000000000000000000000000000000000000000_" + msg.params.context))))
                             {send({"jsonrpc":"2.0","method":"ClaimSignal","params":{"word":msg.params.context,"to":["${name}"],"from":"${name}"}})}
                         }
                         else {
                           //send({"jsonrpc":"2.0","method":"ClaimSignal","params":{"word":msg.params.context,"to":["${name}"],"from":"${name}"}})
                         }
                         msgIndex++
                         window.api.send('IdeaValueTree:get'+'.'+String(msgIndex),['default',idea])
                         dirs = await new Promise(r => {window.api.receive('IdeaValueTree:get_response'+'.'+String(msgIndex),(result)=>{r(result)})})
                         if (dirs){
                               wordObj = dirs//await IdeaValueTree.readFile(idea)
                               wordObj = JSON.parse(wordObj)
                               if(!(Object.keys(wordObj).includes("Owner")) && (!(Object.keys(pendingClaims).includes("_0x0000000000000000000000000000000000000000000000000000000000000000_" + idea))))
                               {send({"jsonrpc":"2.0","method":"ClaimSignal","params":{"word":idea,"to":["${name}"],"from":"${name}"}})}
                         }
                         else {
                          // send({"jsonrpc":"2.0","method":"ClaimSignal","params":{"word":idea,"to":["${name}"],"from":"${name}"}})
                         }
                         msgIndex++
                         window.api.send('IdeaValueTree:get'+'.'+String(msgIndex),['default',msg.params.prospective])
                         dirs = await new Promise(r => {window.api.receive('IdeaValueTree:get_response'+'.'+String(msgIndex),(result)=>{r(result)})})
                         if (dirs){
                               wordObj = dirs//await IdeaValueTree.readFile(msg.params.prospective)
                               wordObj = JSON.parse(wordObj)
                               if(!(Object.keys(wordObj).includes("Owner")) && (!(Object.keys(pendingClaims).includes("_0x0000000000000000000000000000000000000000000000000000000000000000_" + msg.params.prospective))))
                               {send({"jsonrpc":"2.0","method":"ClaimSignal","params":{"word":msg.params.prospective,"to":["${name}"],"from":"${name}"}})}
                        }
                        else {
                          //send({"jsonrpc":"2.0","method":"ClaimSignal","params":{"word":msg.params.prospective,"to":["${name}"],"from":"${name}"}})
                        }
                  break;

                  case 'ClaimSignal':
                          //ooIdea:click(func/{}up1000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/ClaimSignal) -> here
                          //ooIdea:click(func/{}up10000_click(e)>>msg/ValueSignal) -> ooContextManager:case(msg/ValueSignal)*n -> ooPendingTxManager:case(msg/ClaimSignal) -> here
                          //ooFilterMain:click(func/_plus1>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/ClaimSignal) -> here
                          //ooFilterMain:click(func/_plus10>>func/signalValue>>msg/ValueSignal) -> ooPendingTxManager:case(msg/ClaimSignal) -> here
                          //ooFilterMain:click(func/{}enterfilter>>msg/ValueSignal) -> ooPendingTxManager:case(msg/ClaimSignal) -> here
                          // handles claim signals (from pressing value signal button on an oo). Collates into provisional transactions to be sent.

                          claimid = '_'+ String('0x0000000000000000000000000000000000000000000000000000000000000000') + '_' + String(msg.params.word)
                          id = 'pendclaim'+ claimid
                          if (!(ideaid in pendingClaims)){
                                    document.getElementById('${name}table').innerHTML += \`
                                    <div id="pendingclaim\${claimid}" style="padding:2px;margin:2px;border:solid 1px black;display:grid; grid-template: 32px / auto auto auto auto auto;height:32px;box-shadow: black 0px 0px 2px 0px;background-color:lightblue;">
                                          <div id="amt\${claimid}" style="grid-area: 1 / 1 / 2 / 2;align-self:center;">CLAIM SIGNAL: </div>
                                          <div style="grid-area: 1 / 2 / 2 / 3;align-self:center;">&nbsp;for&nbsp;</div>
                                          <div id="\${id}" style="grid-area: 1 / 3 / 2 / 4;align-self:center;"></div>
                                          <div id="\${id}show" style="grid-area: 1 / 4 / 2 / 5;align-self:center;padding:5px;"><button>	&#8675;</button></div>
                                          <div id="\${id}close" style="grid-area: 1 / 5 / 2 / 6;align-self:center;padding-right:5px;"><button>x</button></div>
                                          <div style="grid-area: 1 / 1 / 2 / 3;display:flex;">
                                                <div id="pendingprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:green;width:0%;font-size: 9px;align-self:end;height:25%;"></div>
                                          </div>
                                          <div style="grid-area: 1 / 1 / 2 / 3;display:flex;">
                                                <div id="pendingClaimprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:#e8a326;font-size: 9px;text-align: center;width:0%;height:25%;"></div>
                                          </div>
                                    </div>\`
                                    send({"jsonrpc": "2.0", "method": "createSVG25", "params": {"context": '0x0000000000000000000000000000000000000000000000000000000000000000',"idea": msg.params.word,"prospective": msg.params.word,"prospectiveaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","contextaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","ideaaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICONforPending" });


                                    let prospectiveaddr = "0x0000000000000000000000000000000000000000"
                                    let contextaddr = "0x0000000000000000000000000000000000000000"
                                    let ideaaddr = "0x0000000000000000000000000000000000000000"

                                    pendingClaims[claimid] = {amt : "CLAIM", context: '0x0000000000000000000000000000000000000000000000000000000000000000', prospective:msg.params.word,idea:msg.params.word,distance:0,"prospectiveaddr":prospectiveaddr,"contextaddr":contextaddr,"ideaaddr":ideaaddr}


                                    document.getElementById("${name}button").style.cssText += " display:grid;";
                                    document.getElementById("${name}").style.cssText += " display:grid;";
                           }
                           else {
                                   /*let amt = document.getElementById(\`amt\${claimid}\`).innerHTML
                                    document.getElementById(\`amt\${ideaid}\`).innerHTML = 'CLAIM';
                                    pendingFilters[ideaid] = {"amt" : "CLAIM","context": msg.params.context, "prospective":msg.params.prospective,"idea":idea,distance:msg.params.distance}*/
                           }


                    break;

                  case 'DiscardSignal':
                        //ooIdea:click(discard) -> ooContextManager(root) -> here
                        //ooIdea:click(discard) -> ooContextManager(child)... -> ooContextManager(root) -> here
                        // handles value signals (from pressing value signal button on an oo). Collates into provisional transactions to be sent.
                        idea =  String(XORcontextprospective(msg.params.context,msg.params.prospective,msg.params.distance));
                        ideaid = '_'+ String(msg.params.context) + '_' + String(msg.params.prospective)
                        id = 'discard_'+String(msg.params.context)+'_'+String(msg.params.prospective)
                        for (let t in pendingIdeas){
                          if (String(t) == "_"+String(msg.params.context)+'_'+String(msg.params.prospective)) {
                            // remove peding value signal:
                            send({"jsonrpc": "2.0", "method": "removePending",params:{"dict":pendingIdeas[t], "to":[txtToOOId("filtermain")], "from": "${name}"}})
                            delete pendingIdeas[t];
                            let tel = document.getElementById('pendingidea'+String(t))
                            if (tel) tel.parentNode.removeChild(tel)
                            if (Object.keys(pendingIdeas).length==0){
                                document.getElementById("${name}CurrencyNote").style.cssText += " display:none;";
                            }
                          }
                        }
                        if (!(ideaid in pendingDiscards)){
                                  document.getElementById('${name}table').innerHTML += \`<div id="pendingdiscard_\${msg.params.context}_\${msg.params.prospective}" style="padding:2px;margin:2px;border:solid 1px black;display:grid; grid-template: 32px / auto auto auto auto auto;height:32px;box-shadow: black 0px 0px 2px 0px;background-color:orange;">
                                  <div id="discardtxt\${ideaid}" style="grid-area: 1 / 1 / 2 / 2;align-self:center;">DISCARD SIGNAL</div>
                                  <div style="grid-area: 1 / 2 / 2 / 3;align-self:center;">&nbsp;for&nbsp;</div><div id="\${id}" style="grid-area: 1 / 3 / 2 / 4;align-self:center;"></div>
                                  <div id="\${id}dicardclose" style="grid-area: 1 / 5 / 2 / 6;align-self:center;padding-right:5px;"><button>x</button></div>
                                  <div id="\${id}dicardshow" style="grid-area: 1 / 4 / 2 / 5;align-self:center;padding:5px;"><button>	&#8675;</button></div>
                                  <div style="grid-area: 1 / 1 / 2 / 3;display:flex;">
                                      <div id="discardprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:green;width:0%;font-size: 9px;align-self:end;height:25%;"></div>
                                  </div>
                                  <div style="grid-area: 1 / 1 / 2 / 3;display:flex;"><div id="discardClaimprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:#e8a326;font-size: 9px;text-align: center;width:0%;height:25%;"></div>
                                  </div></div>\`


                                  send({"jsonrpc": "2.0", "method": "createSVG25", "params": {"context": String(msg.params.context),"idea": idea,"prospective": String(msg.params.prospective),"prospectiveaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","contextaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","ideaaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICONforPending" });


                                  let prospectiveaddr = "0x0000000000000000000000000000000000000000"
                                  let contextaddr = "0x0000000000000000000000000000000000000000"
                                  let ideaaddr = "0x0000000000000000000000000000000000000000"

                                  pendingDiscards[ideaid] = {amt : msg.params.amt, context: msg.params.context, prospective:msg.params.prospective,idea:idea,distance:msg.params.distance,"prospectiveaddr":prospectiveaddr,"contextaddr":contextaddr,"ideaaddr":ideaaddr, "chain":msg.params.chain}

                                  document.getElementById("${name}button").style.cssText += " display:grid;";
                                  document.getElementById("${name}").style.cssText += " display:grid;";
                         }
                         else {

                         }


                  break;
                  case 'FilterSignal':
                          //send({"jsonrpc":"2.0","method":"FilterSignal","params":{"filter":filterid,"context":currentaddresspad,"prospective":filtercontext,"distance":1,"to":[txtToOOId("pendingTx")],"from":"${name}"}});
                          // handles value signals (from pressing value signal button on an oo). Collates into provisional transactions to be sent.

                          idea =  String(XORcontextprospective(msg.params.context,msg.params.prospective,msg.params.distance));
                          ideaid = '_'+ String(msg.params.context) + '_' + String(msg.params.prospective)
                          id = 'pend_'+String(msg.params.context)+'_'+String(msg.params.prospective)
                          if (!(ideaid in pendingFilters)){
                                    document.getElementById('${name}table').innerHTML += \`
                                    <div id="pendingidea_\${msg.params.context}_\${msg.params.prospective}" style="padding:2px;margin:2px;border:solid 1px black;display:grid; grid-template: 32px / auto auto auto auto auto;height:32px;box-shadow: black 0px 0px 2px 0px;background-color:lightblue;">
                                          <div id="amt\${ideaid}" style="grid-area: 1 / 1 / 2 / 2;align-self:center;">FILTER SIGNAL</div>
                                          <div style="grid-area: 1 / 2 / 2 / 3;align-self:center;">&nbsp;for&nbsp;</div>
                                          <div id="\${id}" style="grid-area: 1 / 3 / 2 / 4;align-self:center;"></div>
                                          <div id="\${id}show" style="grid-area: 1 / 4 / 2 / 5;align-self:center;padding:5px;"><button>	&#8675;</button></div>
                                          <div id="\${id}close" style="grid-area: 1 / 5 / 2 / 6;align-self:center;padding-right:5px;"><button>x</button></div>
                                          <div style="grid-area: 1 / 1 / 2 / 3;display:flex;">
                                                <div id="pendingprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:green;width:0%;font-size: 9px;align-self:end;height:25%;"></div>
                                          </div>
                                          <div style="grid-area: 1 / 1 / 2 / 3;display:flex;">
                                                <div id="pendingClaimprogressbar_\${msg.params.context}_\${msg.params.prospective}" style="background-color:#e8a326;font-size: 9px;text-align: center;width:0%;height:25%;"></div>
                                          </div>
                                    </div>\`
                                    send({"jsonrpc": "2.0", "method": "createSVG25", "params": {"context": String(msg.params.context),"idea": idea,"prospective": String(msg.params.prospective),"prospectiveaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","contextaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","ideaaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICONforPending" });


                                    let prospectiveaddr = "0x0000000000000000000000000000000000000000"
                                    let contextaddr = "0x0000000000000000000000000000000000000000"
                                    let ideaaddr = "0x0000000000000000000000000000000000000000"
                                  /*  try {prospectiveaddr = await oodaspacev0.methods.ownerOf(msg.params.prospective).call()} catch {prospectiveaddr = "0x0000000000000000000000000000000000000000"}
                                    try {contextaddr = await oodaspacev0.methods.ownerOf(msg.params.context).call()} catch {contextaddr = "0x0000000000000000000000000000000000000000"};
                                    try {ideaaddr = await oodaspacev0.methods.ownerOf(idea).call()} catch {ideaaddr = "0x0000000000000000000000000000000000000000"}*/
                                    pendingFilters[ideaid] = {amt : "FILTER", context: msg.params.context, prospective:msg.params.prospective,idea:idea,distance:msg.params.distance,"prospectiveaddr":prospectiveaddr,"contextaddr":contextaddr,"ideaaddr":ideaaddr, "chain":msg.params.chain}


                                    document.getElementById("${name}button").style.cssText += " display:grid;";
                                    //document.getElementById("${name}CurrencyNote").style.cssText += " display:grid;";
                                    document.getElementById("${name}").style.cssText += " display:grid;";
                           }
                           else {
                                   let amt = document.getElementById(\`amt\${ideaid}\`).innerHTML
                                    document.getElementById(\`amt\${ideaid}\`).innerHTML = 'FILTER';
                                    pendingFilters[ideaid] = {"amt" : "FILTER","context": msg.params.context, "prospective":msg.params.prospective,"idea":idea,distance:msg.params.distance}
                           }


                    break;
                    case 'InitSignal':
                            // handles init signal (from index.html). Collates into provisional transactions to be sent.


                            ideaid = '_0x0000000000000000000000000000000000000000000000000000000000000000' + '_' + '0x' + IdeaValueTree.key
                            id = 'pendinit'+'_0x0000000000000000000000000000000000000000000000000000000000000000' + '_' + '0x' + IdeaValueTree.key
                            if (!(pendingInit == 'INIT')){
                                      document.getElementById('${name}table').innerHTML += \`
                                      <div id="pendinginit_\${'0x0000000000000000000000000000000000000000000000000000000000000000'}_\${thisooid}" style="padding:2px;margin:2px;border:solid 1px black;display:grid; grid-template: 32px / auto auto auto auto auto;height:32px;box-shadow: black 0px 0px 2px 0px;background-color:lightblue;">
                                            <div id="amt\${ideaid}" style="grid-area: 1 / 1 / 2 / 2;align-self:center;">INIT SIGNAL</div>
                                            <div style="grid-area: 1 / 2 / 2 / 3;align-self:center;">&nbsp;for&nbsp;</div>
                                            <div id="\${id}" style="grid-area: 1 / 3 / 2 / 4;align-self:center;"></div>
                                            <div id="\${id}show" style="grid-area: 1 / 4 / 2 / 5;align-self:center;padding:5px;"><button>	&#8675;</button></div>
                                            <div id="\${id}close" style="grid-area: 1 / 5 / 2 / 6;align-self:center;padding-right:5px;"><button>x</button></div>
                                            <div style="grid-area: 1 / 1 / 2 / 3;display:flex;">
                                                  <div id="pendingprogressbar_\${'0x0000000000000000000000000000000000000000000000000000000000000000'}_\${thisooid}" style="background-color:green;width:0%;font-size: 9px;align-self:end;height:25%;"></div>
                                            </div>
                                            <div style="grid-area: 1 / 1 / 2 / 3;display:flex;">
                                                  <div id="pendingClaimprogressbar_\${'0x0000000000000000000000000000000000000000000000000000000000000000'}_\${thisooid}" style="background-color:#e8a326;font-size: 9px;text-align: center;width:0%;height:25%;"></div>
                                            </div>
                                      </div>\`
                                      send({"jsonrpc": "2.0", "method": "createSVG25", "params": {"context": "0x0000000000000000000000000000000000000000000000000000000000000000","idea": thisooid,"prospective": thisooid,"prospectiveaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","contextaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","ideaaddr": "0x0000000000000000000000000000000000000000000000000000000000000000","to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICONforPending" });


                                      let prospectiveaddr = "0x0000000000000000000000000000000000000000"
                                      let contextaddr = "0x0000000000000000000000000000000000000000"
                                      let ideaaddr = "0x0000000000000000000000000000000000000000"

                                      pendingInit = "INIT"
                                      initSent = false;

                                      document.getElementById("${name}button").style.cssText += " display:grid;";
                                      //document.getElementById("${name}CurrencyNote").style.cssText += " display:grid;";
                                      document.getElementById("${name}").style.cssText += " display:grid;";
                             }



                      break;

                  case 'CONTEXTS':
                      //updates the context object, informs input oo of ancesters (to avoid name conflicts)
                      contextObj = msg.params.contexts
                      out = putInValueTree(valueTree,msg.params.contextObj.parentContext,msg.params.contextObj.context,msg.params.contextObj.distance,dind=0,chain=[])
                  break;
                  `,
  STARTUPmessages : `[{"jsonrpc":"2.0","method":"MOVE","params":{"x":-45,"y":3,"to":["${name}"],"from":"${name}"}}]`, //window.innerHeight-215
  context: context,
  prospective: prospective

}
return base_template(pendingTx_outerTemplateObj);
}
