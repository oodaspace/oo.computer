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
let filtermain_proc = function(context,prospective,distance=0,name="filtermain",_class='base'){
let description = `a filter oo`;
let filtermain_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:grid;grid-template: 100%/ 100%;}


                #${name}filterflex {display:flex;overflow: scroll;scrollbar-width: none;grid-area:1 / 1 / 2 / 2;padding-left:0px;padding-bottom: 0px;padding-right:0px;z-index:0;}
                #${name}filterflex::-webkit-scrollbar  {width: 0px;height:0px;}


                #${name}desc {display: none;}
                #${name}_content {  max-width: none;display:grid;background-color:transparent;height:none;}
                #${name}inputcontainer {grid-area:1 / 1 / 2 / 2;display:none;grid-template: auto auto / 11.5vw 75vw 11.5vw; padding-bottom: 0px;align-self:start;justify-self:center;width:calc(100vw - 60px);justify-content: center;padding-right: 3px;background-color:transparent; grid-gap:1vw;z-index:2;position:absolute;bottom: 130px;left:32px;}
                #${name}filterersuggestions {display:none;grid-area:1 / 2 / 2 / 3;}
                #${name}_input {grid-area:2/ 2 / 3 /3;text-align:center;width:75vw; height:30px;}
                #${name}enter {grid-area:1/ 3 / 2 /4;text-align:center; align-self:center;justify-self:center;background-color:grey;border: 2px solid black;padding:8px;cursor: pointer;font-size:13.3px;}


                #${name}filterinputcontainer {grid-area:1 / 1 / 2 / 2;display:none;grid-template: auto / 1vw 8vw 70vw 11vw; padding-bottom: 0px;align-self:start;justify-self:center;width:100vw;justify-content: center;padding-right: 3px;background-color:transparent; grid-gap:2vw;z-index:2;position:absolute;bottom: 130px;left:32px;}
                #${name}filterinput {grid-area:1/ 3 / 2 /4;text-align:center;width:70vw; height:30px;}
                #${name}filterenter {grid-area:1/ 4 / 2 /5;text-align:center; align-self:center;justify-self:start;background-color:grey;border: 2px solid black;padding:8px;cursor: pointer;font-size:13.3px;}
                  #${name}filtercolourSelector {display:none;grid-area:1/ 2 / 2 /3;text-align:center; align-self:center;justify-self:center;background-color:blue;border: 1px solid black;padding:8px;width:100%;}

                  #${name}infocontainer {grid-area:1 / 1 / 2 / 2;display:none;grid-template: auto / 1vw 8vw 70vw 11vw; padding-bottom: 0px;align-self:start;justify-self:center;width:100vw;justify-content: center;padding-right: 3px;background-color:transparent; grid-gap:2vw;z-index:2;position:absolute;top:-30px;left:32px;}
                  #${name}infobox {grid-area:1/ 3 / 2 /4;text-align:center;width:70vw; background-color:white;font-size:1.9em;}

                  .${name}suggestedfilterer {border: 2px solid transparent;font-size:2em;opacity:0.75;z-index:3;cursor:pointer;margin:2px;text-align:center;}
                  .${name}suggestedfilterer:hover {border: 2px solid transparent;font-size:2em;opacity:1}

                  /*.filterdiv:hover > .signal {display:grid;}*/

                .signal:hover {display:none;border:1px solid black;cursor:pointer;}

      </style>
      \<div id="${name}title">



              \<div id="${name}filterflex">
              \</div>
              \<div id="${name}inputcontainer">
                  \<div id="${name}filterersuggestions"></div>
                  <input id="${name}_input" placeholder="Enter hyperdrive key">\</input>
                  \<div id="${name}enter">
                  enter
                  \</div>
              \</div>
              \<div id="${name}filterinputcontainer">
              \<input id="${name}filtercolourSelector" placeholder="Filter colour">\</input>
                  <input id="${name}filterinput" placeholder="Enter a name for the filter">\</input>
                  \<div id="${name}filterenter">
                  enter
                  \</div>
              \</div>
              \<div id="${name}infocontainer">
                  <div id="${name}infobox" >\</div>


                  \</div>
              \</div>
      \</div>
                      `,
  objectDefs : `
          let width = window.innerWidth
          document.getElementById('${name}').style.cssText += ' left:-49px;';
          document.getElementById('${name}_content').style.cssText += ' width:'+String(width)+'px;'+'border:none;border-bottom:3px;max-height:none;height:none;';
          let filterObj
          let filterContainerObj ={}
          let pendingfilterObj
          let pendingfilterContainerObj ={}
          let filterColours = {}
          let noFilterers
          let noFilters
          let filterWidth
          let currentFilter
          let filterid
          let params
          let amt
          let total = 0
          let peers = []

          function ${name}enterfilterer(){
                    // check valid hyper drive.
                  //  send to filter - which sends back to this
                  let input = document.getElementById("${name}_input")
                  let address = input.value
                  if (address.slice(0,6) == 'dat://') address = address.slice(6)
                  if (address.slice(0,8) == 'hyper://') address = address.slice(8)
                  if (address.slice(0,2) !== '0x') address = '0x' + address

                  if(isHex(address) && address.length==66){
                      if (!(address in filterContainerObj[currentFilter])){
                            addfiltererToFilter(currentFilter,address)
                            input.value = ''
                      }
                      else {
                          alert('this is already in filter')
                      }
                  }
                  else alert('enter valid hyper drive')
                  document.getElementById('${name}inputcontainer').style['display'] = "none";
                  document.getElementById('${name}filterinputcontainer').style['display'] = "none";

          }
          document.getElementById("${name}enter").addEventListener("click",${name}enterfilterer);

          async function addfiltererToFilter(filter,address){
            //this:click#enter button filter input#(func/{}enterfilterer)
            send({"jsonrpc":"2.0","method":"filtererFromMain","params":{"address":address,"to":[filter],"from":"${name}"}});
            await pause(0.5)

            let filtercontext = filter.split('_')[1]
            let filterProspective = filter.split('_')[2]
            signalValue(filtercontext,filterProspective,address,1)
          }

          async function ${name}selectsuggestion(e){
                      let input = document.getElementById("${name}_input")
                      input.value = e.srcElement.id.split('_')[3]
                      ${name}enterfilterer()
          }


          async function ${name}loadsuggestions(){
            document.getElementById("${name}filterersuggestions").innerHTML = ''

            for (let p =0;p<peers.length;p++){
              let el = document.createElement('div')
              el.innerHTML = peers[p]
              el.id = "${name}_" + peers[p] + "_suggestedfilterer"
              el.classList.add( "${name}suggestedfilterer")
              el.style.cssText += "background-color:"+this.style['border'].slice(10)
              document.getElementById("${name}filterersuggestions").appendChild(el)
              el.addEventListener('click',${name}selectsuggestion)
            }
            let el = document.createElement('div')
            el.innerHTML = '<b>Last ten filterers seen on oo.computer</b>'
            el.classList.add( "${name}suggestedfilterer")
            el.id = "${name}caption_suggestedfilterer"
            document.getElementById("${name}filterersuggestions").appendChild(el)
            el.style.cssText += "background-color:white;";
            document.getElementById("${name}filterersuggestions").style.cssText += "display:flex;flex-direction:column;"
          }
          document.getElementById("${name}_input").addEventListener("focus",${name}loadsuggestions);


          async function ${name}enterfilter(){
                    // check valid hyper drive.
                  //  send to filter - which sends back to this
                  let input = document.getElementById("${name}filterinput")
                  let filternamehex = hexifyString(input.value)
                  let currentaddresspad = '0x' + IdeaValueTree.key


                  let filtercontext =    XORcontextidea(hexifyString('Filters'),filternamehex,1)
                  let filterprospective = XORcontextidea(filtercontext,currentaddresspad,2)
                  let initfilterDict = {fromBlock:"0x0",toBlock:'latest',address:'7',topics:[[web3.utils.sha3('Up(address,uint256,uint256,uint256)')],[currentaddresspad],filtercontext]}
                  let filterid = '_' + filtercontext + '_' + filterprospective //'_' + hexifyString('Filters') + '_' + filtercontext

                  //send({"jsonrpc":"2.0","method":"FilterSignal","params":{"filter":filterid,"context":XORcontextidea(hexifyString('Filters'),currentaddresspad,1),"prospective":filtercontext,"distance":2,"to":[txtToOOId("pendingTx")],"from":"${name}"}});
                  send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["0x0000000000000000000000000000000000000000000000000000000000000000",hexifyString('Filters'),filtercontext].reverse(),"context":hexifyString('Filters') ,"prospective":filtercontext,"distance":1,"amt": 1,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
                  send({"jsonrpc":"2.0","method":"newFilter","params":{"filterDict":initfilterDict,"filter":filterid,"isFilter":true,"to":[txtToOOId("filterCurator")],"from":"${name}"}});
                  currentcontext = "0x0000000000000000000000000000000000000000000000000000000000000000"

                  filterContainerObj[filterid] = {}
                  filterContainerObj[filterid][currentaddresspad] ={amt:1,prop:1}


                  addfiltererToFilter(filterid,currentaddresspad);


                  document.getElementById('${name}inputcontainer').style['display'] = "none";
                  document.getElementById('${name}filterinputcontainer').style['display'] = "none";

          }
          document.getElementById("${name}filterenter").addEventListener("click",${name}enterfilter);



            function ${name}showSignalOptions(){

              Array.from(this.children).forEach(function(el) {
                let classes = el.className.split(' ')
                if (classes.includes('signal')) el.style.cssText += "display:grid;"
            });
            }


            function ${name}hideSignalOptions(){
              this.querySelectorAll('.signal').forEach(function(el) {
              el.style.cssText += "display:none;"
            });
            }

          async function ${name}_inputFilterer(ev){
            document.getElementById('${name}infocontainer').style.cssText += "display:none;"
            document.getElementById('${name}filterinputcontainer').style['display'] = "none";
            document.getElementById('${name}inputcontainer').style['display'] = "grid";
            let tel = document.getElementById('${name}_input');
            let col = this.style['color']
            currentFilter = '_'+this.id.slice(1,-10)
            tel.style.cssText += 'border:3px solid ' + col + ';'
            tel.focus()
          }

          async function ${name}_inputFilter(ev){
            document.getElementById('${name}infocontainer').style.cssText += "display:none;"
            document.getElementById('${name}inputcontainer').style['display'] = "none";
            document.getElementById('${name}filterinputcontainer').style['display'] = "grid";


          }
          async function ${name}showinfo(){
            document.getElementById('${name}infocontainer').style.cssText += "display:grid;"
            document.getElementById('${name}infobox').innerHTML = "hyper://" + this.id.split('_')[3].slice(2)
            document.getElementById("${name}inputcontainer").style.cssText += "display:none;"
            document.getElementById("${name}filterinputcontainer").style.cssText += "display:none;"
          }

          async function ${name}_plus1(){
                    let filtercontext = this.id.split('_')[1]
                    let filterProspective = this.id.split('_')[2]
                    let filteraddress= this.id.split('_')[3]
                    signalValue(filtercontext,filterProspective,filteraddress,1)
          }
          async function ${name}_plus10(){
                    let filtercontext = this.id.split('_')[1]
                    let filterProspective = this.id.split('_')[2]
                    let filteraddress= this.id.split('_')[3]
                    signalValue(filtercontext,filterProspective,filteraddress,10)
          }

          function signalValue(filtercontext,filterProspective,filteraddress,amt){
                            //this:click(func/_plus1>>func/signalValue) -> here
                                send({"jsonrpc":"2.0","method":"ValueSignal","params":{"chain":["0x0000000000000000000000000000000000000000000000000000000000000000",hexifyString('Filters'),filtercontext,filterProspective,XORcontextidea(filterProspective,filteraddress,3)].reverse(),"context":filterProspective,"prospective":XORcontextidea(filterProspective,filteraddress,3),"distance":3,"amt": amt,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
                            let filterid = '_'+filtercontext+'_'+filterProspective
                               let total = 0;
                               for (let f in filterContainerObj[filterid]){
                                 total+=filterContainerObj[filterid][f].total
                               }
                               if (!(filterid in filterContainerObj)){
                                 filterContainerObj[filterid]={};
                               }
                               if (!(filteraddress in filterContainerObj[filterid])){
                                 filterContainerObj[filterid][filteraddress]={total:0,prop:0};
                               }
                               if (!(filterid in pendingfilterContainerObj)){
                                 pendingfilterContainerObj[filterid]={};
                               }
                               if (!(filteraddress in pendingfilterContainerObj[filterid])){
                                 pendingfilterContainerObj[filterid][filteraddress]={total:0,prop:0};
                               }
                               for (let f in pendingfilterContainerObj[filterid]){
                                 total+=pendingfilterContainerObj[filterid][f].total
                               }
                               total += Number(amt)
                               pendingfilterContainerObj[filterid][filteraddress].total += Number(amt)
                               for (let f in filterContainerObj[filterid]){
                                  filterContainerObj[filterid][f].prop = filterContainerObj[filterid][f].total/total
                                }
                                for (let f in pendingfilterContainerObj[filterid]){
                                  
                                      pendingfilterContainerObj[filterid][f].prop = pendingfilterContainerObj[filterid][f].total/total
                                    }
                               refreshFilters(filterContainerObj[filterid],filterid)
          }


          function refreshFilters(updatedfilterObj,updatedfilter,updatedcolor=''){
            //ooFilterMain:click(func/{}enterfilterer>>func/addfiltererToFilter>>msg/filtererFromMain) -> ooFilter:case(msg/filterforcontainer) -> this:case(func/refreshFilters) -> here
            //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/updateFilters) -> ooFilterMain:case(msg/refreshFilter) -> ooFilter:case(func/getWeightingsForFilter>>msg/filterforcontainer) -> this:case(func/refreshFilters) -> here

            filterObj = updatedfilterObj
            filterContainerObj[updatedfilter] = filterObj
            if (updatedcolor !== '') filterColours[updatedfilter] = updatedcolor;
            noFilters = 0;
            document.getElementById('${name}filterflex').innerHTML = '';
            for (let filter in filterContainerObj){
                        noFilters++
            }
            filterWidth = noFilters == 0 ? (window.innerWidth - 60) :  (window.innerWidth - 60) / noFilters;

            for (let filter in filterContainerObj){
              let div = document.createElement('div');
              div.id ='${name}' + filter
              div.class = "filterdiv"
              div.style.cssText = "display:grid;grid-template:60px auto / auto;background-color:transparent;"
              let buttondiv = document.createElement('div');

              let flexdiv = document.createElement('div');
              flexdiv.style.cssText = "display:flex;height:100%;width:"+filterWidth + "px;border-left:0px solid gray"

              noFilterers = 0
              for (let f in filterContainerObj[filter]){
                        noFilterers++
                }
                //filterWidth = (noFilterers == 0) ? (window.innerWidth - 60) :  (window.innerWidth - 60) / noFilterers;
                width = (filterWidth)/noFilterers

                let pendingHeight=0
                div.innerHTML = ''
                let max = 0
                for (let f in filterContainerObj[filter]){
                  let prop = filterContainerObj[filter][f].prop
                  if (filter in pendingfilterContainerObj){
                    prop += (f in pendingfilterContainerObj[filter]) ? pendingfilterContainerObj[filter][f].prop  : 0;
                  }
                  if (prop > max) max = prop;
                }
                    for (let f in filterContainerObj[filter]){
                        if (filter in pendingfilterContainerObj){
                              pendingHeight = (f in pendingfilterContainerObj[filter]) ? pendingfilterContainerObj[filter][f].prop/max * 100 : 0;
                        }
                        else {
                          pendingHeight = 0
                        }
                        let innerdiv  = document.createElement('div')
                        innerdiv.id = String(filter)+'_'+String(f) +"_innerdiv"
                        innerdiv.style.cssText = "display:grid; grid-template:  auto 30px 30px / auto;width:"+String(width)+"px;grid-gap:2px;"
                        innerdiv.innerHTML = \`<div id="\${String(filter)+'_'+String(f)}" style="width:\${100}%;align-self:end;height:\${100}%;grid-area: 1 / 1 / 4 / 2;display:flex;flex-direction:column-reverse;">
                                                              <div style="width:\${100}%;background-color:\${filterColours[filter]};align-self:end;height:\${filterContainerObj[filter][f].prop*100/max}%;">
                                                              </div>
                                                              <div style="width:\${100}%;background-color:\${filterColours[filter]};align-self:end;height:\${pendingHeight}%;opacity:0.5;"></div>
                                                      </div>
                        <div id="\${String(filter)+'_'+String(f)}_icon" style="height:32px; width:\${100}%;background-color:transparent;align-self:start;text-align:center;padding-top:2px;grid-area: 3 / 1 / 4 / 2;z-index:2;"></div>
                        <div id="\${String(filter)+'_'+String(f)}_plus1" class="signal plus1" style="display:none;width:\${30}px;background-color:lightgreen;align-self:center;height:auto;grid-area: 2 / 1 / 3 / 2;text-align:center;font-size:1.5em;padding:0.5em;justify-self: center;z-index:2;">+1</div>
                        <div id="\${String(filter)+'_'+String(f)}_plus10" class="signal plus10" style="display:none;width:\${30}px;background-color:green;align-self:center;height:auto;grid-area: 1 / 1 / 2 / 2;text-align:center;font-size:1.5em;padding:0.5em;justify-self: center;z-index:2;">+10</div>
                        <!--<div id="\${String(filter)+'_'+String(f)}_discard" class="signal discard" style="display:none;width:\${30}px;background-color:pink;align-self:center;height:auto;grid-area: 2 / 1 / 3 / 2;text-align:center;font-size:1.8em;padding:0.2em;justify-self: center;z-index:2;">&#128465;</div>-->
                        \`
                        flexdiv.appendChild(innerdiv)
                    }
                    let innerdiv  = document.createElement('div')
                    innerdiv.style.cssText = "display:grid; grid-template:  auto / auto;width:100%;border:0px solid " + filterColours[filter]+';'
                    innerdiv.innerHTML = \`<div id="\${String(filter)+'_showinput'}" style="width:\${100}%;color:\${filterColours[filter]};background-color:transparent;align-self:center;grid-area: 1 / 1 / 2 / 2;font-size:50px;    text-align: center;cursor: pointer;"> &oplus;</div>
                    \`
                    buttondiv.appendChild(innerdiv)
                    div.appendChild(buttondiv)
                    div.appendChild(flexdiv)
              document.getElementById('${name}filterflex').appendChild(div)
            }

            let div = document.createElement('div');
            div.id ='${name}filterbarcontainer'
            div.style.cssText = "display:flex;height:100%;width:60px;"
            noFilterers = 1

              width = 60  //100/noFilterers

              div.innerHTML = ''

                  let innerdiv  = document.createElement('div')
                  innerdiv.style.cssText = "display:grid; grid-template:  auto 30px / auto;padding-top:4px;width:"+String(width)+"px;border-left:3px solid black;"
                  innerdiv.innerHTML = \`<div id="\${String(name)+'_showinput'}" style="width:\${100}%;color:black;background-color:transparent;align-self:center;grid-area: 1 / 1 / 3 / 2;font-size:50px; cursor: pointer;"> &oplus;</div>
                  <div id="\${String(name)+'_inputicon'}" style="height:32px; width:\${100}%;background-color:transparent;align-self:start;text-align:center;padding-top:2px;grid-area: 2 / 1 / 3 / 2;"></div>\`
                  div.appendChild(innerdiv)

            document.getElementById('${name}filterflex').appendChild(div)


            for (let filter in filterContainerObj){
                    document.getElementById(String(filter) +"_showinput").addEventListener("click",${name}_inputFilterer);

            }
            document.getElementById(String(name)+'_showinput').addEventListener("click",${name}_inputFilter);

            let addresses = []
            for (let filter in filterContainerObj){
              for (let f in filterContainerObj[filter]){
                document.getElementById(String(filter)+'_'+String(f) +"_innerdiv").addEventListener("mouseover",${name}showSignalOptions);
                document.getElementById(String(filter)+'_'+String(f) +"_innerdiv").addEventListener("mouseout",${name}hideSignalOptions);
                document.getElementById(String(filter)+'_'+String(f) +"_icon").addEventListener("click",${name}showinfo);
                addresses.push(f)
            }
            }


          addresses = [...new Set(addresses)]
          addresses.forEach((f, i) => {
            send({"jsonrpc":"2.0","method":"ADDRICON","params":{"address":f,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id":"ADDRICON"});
          });



            document.querySelectorAll('.plus1').forEach(function(el) {
                el.addEventListener("click",${name}_plus1);
            });
            document.querySelectorAll('.plus10').forEach(function(el) {
                el.addEventListener("click",${name}_plus10);
            });
          }

          //handles screen resize
          function ${name}_onresize(){
            document.getElementById('${name}_content').style.cssText += ' width:'+String(window.innerWidth)+'px;'+'border:none;border-bottom:3px;';
            refreshFilters(filterContainerObj[Object.keys(filterContainerObj)[0]],Object.keys(filterContainerObj)[0])
            send({"jsonrpc":"2.0","method":"SETY","params":{"x":-25,"y":window.innerHeight-170,"to":["${name}"],"from":"${name}"}})
          }
          window.addEventListener("resize",${name}_onresize);


          // setup Horizontal scrolling.
          window.addEventListener('wheel', async (e) => {
                      //await pause(0.0005)
                      document.getElementById("${name}").style.cssText += "left:" +String(window.pageXOffset - 49) + "px;"
          })


          window.addEventListener('click', async (e) => {

                            if (e.target.id.slice(-6) == "nfobox") {//e.srcElement.innerText.charCodeAt(0) == 8853 ||
                              document.getElementById("${name}infocontainer").style.cssText += "display:none;"

                            }
                            else if (e.target.id.slice(-6) == "_input" || e.target.id.slice(-6) == "rinput") {
                                document.getElementById("${name}infocontainer").style.cssText += "display:none;"
                            }
                            else if (e.target.id.slice(-6) == "winput") {
                                document.getElementById("${name}infocontainer").style.cssText += "display:none;"
                            }
                            else  if (e.target.id.slice(-17) == "suggestedfilterer") {
                                document.getElementById("${name}infocontainer").style.cssText += "display:none;"
                              }

                            else {
                              document.getElementById("${name}infocontainer").style.cssText += "display:none;"
                            document.getElementById("${name}inputcontainer").style.cssText += "display:none;"
                            document.getElementById("${name}filterinputcontainer").style.cssText += "display:none;"

                            }
            })



  `,
  RESULTcases : ` /*
                      ADDRICON: Responding with the icon for a filter address, from icon creator oo
                  */
                  case 'ADDRICON':
                              //this:init(msg/ADDRICON) -> ooIconCreator:case(result/ADDRICON)
                              //ooFilterMain:click(func/{}enterfilterer>>func/addfiltererToFilter>>msg/filtererFromMain) -> ooFilter:case(msg/ADDRICON) -> ooIconCreator:case(result/ADDRICON) -> here
                              for (let filter in filterContainerObj){
                                for (let f in filterContainerObj[filter]){
                                        if (f == msg.result.address){
                                          document.getElementById(\`\${filter+'_'+String(f)}_icon\`).innerHTML = ''
                                          pause(0.5)
                                          document.getElementById(\`\${filter+'_'+String(f)}_icon\`).innerHTML =  msg.result.svg


                                        }
                                }
                              }
                  break;
                  `
                    ,
  METHODcases : `
                  /*
                      newContext: notifcation of a new context.
                      SignalAddress: notifcation of a value signal for one of the addresses in this filter. The filter director has indicated relative value of and address. This adjusts the weighting of the addresses within the filter accordingly, adding a new address if necessary. Updates the bar-chart.
                      SignalIdea: A notification of a new value signal for an oo in the layout. This calculates the distribution of value signals from this filter and sends to the contextcurator for co-ordination of updates to oos.
                      ShiftLeft: moves to a position on the x-axis.
                      setChild: sets the child (the oo to the left in the layout chain) should be either a  filler or the filter input  oo
                      setParent: sets the parent (the oo to the left in the layout chain) should be a filler.
                      filterdiv: receives div to add to flex box
                  */

                  case 'updateFilters':
                  //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/updateFilters) -> here
                  for (let f in filterContainerObj){
                      send({"jsonrpc": "2.0", "method": "refreshFilter",params:{"to":[f], "from": "${name}"}})
                   }
                  break;

                  case 'filterforcontainer':
                  //ooFilterMain:click(func/{}enterfilterer>>func/addfiltererToFilter>>msg/filtererFromMain) -> ooFilter(msg/filterforcontainer) -> here
                  //ooPendingTxManager:click(func/{}_button_click>>msg/ValueSignal) -> ooHyperManager:case(msg/updateFilters) -> ooFilterMain:case(msg/refreshFilter) -> ooFilter:case(func/getWeightingsForFilter>>msg/filterforcontainer) -> here
                      filterContainerObj[msg.params.filter] = msg.params.filterObj;
                      refreshFilters(msg.params.filterObj,msg.params.filter,msg.params.color);
                  break;

                  case 'pendingSignalConfirmed':
                      //ooPendingTxManager:click(func/{}_button_click>>msg/pendingSignalConfirmed) -> here
                      filterid = '_' + msg.params.dict.chain[2] + '_' + msg.params.dict.context
                      if (filterid in pendingfilterContainerObj){
                          if (msg.params.dict.idea in pendingfilterContainerObj[filterid]){
                            amt = pendingfilterContainerObj[filterid][msg.params.dict.idea].total
                            pendingfilterContainerObj[filterid][msg.params.dict.idea].total -= msg.params.dict.amt
                            pendingfilterContainerObj[filterid][msg.params.dict.idea].prop -= msg.params.dict.amt/amt
                            //refreshFilters(filterObj,Object.keys(filterContainerObj)[0])
                            //send({"jsonrpc": "2.0", "method": "SignalAddress",params:{"chain":msg.params.dict.chain,"context": msg.params.dict.context, "prospective": msg.params.dict.prospective,"address": msg.params.dict.idea ,"amt": msg.params.dict.amt, "to":[filterid], "from": "${name}"}})


                          }
                      }
                      pendingfilterContainerObj[filterid] = {}

                          //send({"jsonrpc": "2.0", "method": "refreshFilter",params:{"to":[filterid], "from": "${name}"}})


                  break;

                  case 'pendingDiscardSignalConfirmed':
                      //ooPendingTxManager:click(func/{}_button_click>>msg/pendingDiscardSignalConfirmed) -> here

                      filterid = '_' + msg.params.dict.chain[2] + '_' + msg.params.dict.context
                      if (filterid in pendingfilterContainerObj){
                          if (msg.params.dict.idea in pendingfilterContainerObj[filterid]){
                            delete pendingfilterContainerObj[filterid][msg.params.dict.idea]

                            send({"jsonrpc": "2.0", "method": "DiscardAddress",params:{"chain":msg.params.dict.chain,"context": msg.params.dict.context, "prospective": msg.params.dict.prospective,"address": msg.params.dict.idea , "to":[filterid], "from": "${name}"}})


                          }
                      }
                      msg.method = "discardSignal"
                      //for (let f in filterContainerObj[filterid]){
                          msg.params.to = Object.keys(filterContainerObj)
                          send(msg)
                      // }

                  break;

                  case 'removePending':
                  // Remove a pending value signal
                  //ooPendingTxManager:click(func/())>>msg/removePending) -> here
                      filterid = '_' + msg.params.dict.chain[2] + '_' + msg.params.dict.context
                      if (filterid in pendingfilterContainerObj){
                          if (msg.params.dict.idea in pendingfilterContainerObj[filterid]){

                            pendingfilterContainerObj[filterid][msg.params.dict.idea].total -= msg.params.dict.amt

                             total = 0;
                            for (let f in filterContainerObj[filterid]){
                              total += filterContainerObj[filterid][f].total
                            }
                            for (let f in pendingfilterContainerObj[filterid]){
                              total += pendingfilterContainerObj[filterid][f].total
                            }

                            for (let f in filterContainerObj[filterid]){
                               filterContainerObj[filterid][f].prop = filterContainerObj[filterid][f].total/total
                             }
                             for (let f in pendingfilterContainerObj[filterid]){
                                   pendingfilterContainerObj[filterid][f].prop = pendingfilterContainerObj[filterid][f].total/total

                                 }

                            refreshFilters(filterObj,filterid)


                          }
                      }

                  break;


                      `,
  STARTUPmessages : `[{"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SETY","params":{"x":-25,"y":window.innerHeight-170,"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SHOW","params":{"to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}

return base_template(filtermain_outerTemplateObj);
}
