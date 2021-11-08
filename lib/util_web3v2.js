/*
© (c) Copyright 2020 ooda space ltd
###############################################################################
A. Redistribution and use:
    1. Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
            i.    Redistributions of source code must retain the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F.*).
            ii.   Redistributions in binary form must reproduce the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F.*) in the documentation and/or other materials provided with the distribution.
    2. Redistribution and use in source and binary forms, with modification, are permitted provided that the following conditions are met:
            i.    Redistributions of source code must retain the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F*. with Section C. modified as per A.2.iii).
            ii.   Redistributions in binary form must reproduce the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F.* with Section C. modified as per A.2.iii) in the documentation and/or other materials provided with the distribution.
            iii.  The modifier has updated Section C. below as described in Section D.
            iv.   The modifier has signalled value in the modified file on the ideas.oodaspace.eth smart contract as described in section E.
            v.    The modified file is stored on the Arweave system as described in Section F.
    3. If any part of this text (Sections A., B., C., D.*, E.*, and F.*) is held to be invalid it shall not invalidate the text as a whole or any other part of this text (Sections A., B., C., D., E., and F.).
    * Sections D., E., and F. may be replaced by reference to an arweave transaction containing version 0 of the full license (with nothing else included). I.e. "For Sections D., E., and F. refer to the Arweave transaction am0Zxgnoxrip32hGUzCd3VTFoLMpZ9VbyfdvA_fIZ-I"
###############################################################################
B. Disclaimer:
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
###############################################################################
C. The file
    1. Media-type:                                              text/plain
    2. Ethereum address of modifier:                            0x266D80d1a7f8926FE44BA310eA2bDa7d302a9615
    3. Distance [integer dec]:                                  0
    4. Context [256bit word hex]:                               0x0000000000000000000000000000000000000000000000000000000000000000
    5. SHA3 256-bit hash of the file [only for redistributions in binary form, else "Not Applicable"]:  Not Applicable
###############################################################################
For Sections D., E., and F. refer to the Arweave transaction am0Zxgnoxrip32hGUzCd3VTFoLMpZ9VbyfdvA_fIZ-I
###############################################################################
*/
/*! https://mths.be/utf8js v3.0.0 by @mathias */




/*ISC License

Copyright (c) 2019, Andrea Giammarchi, @WebReflection

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.*/
let any = (Promise.any || function ($) {
  return new Promise(function (D, E, A, L) {
    A = [];
    L = $.map(function ($, i) {
      return Promise.resolve($).then(D, function (O) {
        return ((A[i] = O), --L) || E({errors: A});
      });
    }).length;
  });
}).bind(Promise);
//END ISC License
/***********************************************************************************/


let blobToBase64 = (blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      resolve(reader.result.split(";base64,")[1]);
    };
  });
};

//https://stackoverflow.com/a/16245768/
const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        	byteArrays.push(byteArray);
      	}

      const blob = new Blob(byteArrays, {type: contentType});
      return blob;
}

async function sha1fromtxt(message) {
  // encode as UTF-8
  console.log('dot', message)
  const msgBuffer = new TextEncoder('utf-8').encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}

async function sha1fromArrBuffer(msgBuffer) {
  // encode as UTF-8
  console.log('dot', msgBuffer)

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}

async function ideafromArrBuffer(blob,contentType) {
  // encode as UTF-8
  let msgBuffer = await blob.arrayBuffer()
  console.log('dot', blob,msgBuffer,contentType)

  let ctBuffer = new TextEncoder('utf-8').encode(contentType);

  // hash the message
  let hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
  let cthashBuffer = await crypto.subtle.digest('SHA-1', ctBuffer);
  // convert ArrayBuffer to Array
  let hashArray = Array.from(new Uint8Array(hashBuffer));
  let cthashArray = Array.from(new Uint8Array(cthashBuffer));
  // convert bytes to hex string
  let hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  let cthashHex = cthashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');

  if (!(Object.keys(MIMEObj).includes(cthashHex))){
    MIMEObj[cthashHex.slice(0,18)] = contentType
  }

  console.log('dot', String(hashHex),String(cthashHex),String(cthashHex).slice(0,18))
  return '0x4d4544' + String(cthashHex).slice(0,18)+ String(hashHex);
}


async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder('utf-8').encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}

ToBase64 = function (code) {
    return btoa(String.fromCharCode.apply(null, code));
}

FromBase64 = function (str) {
    return atob(str).split('').map(function (c) { return c.charCodeAt(0); });
}



function toHexStrFromByteArray(bytes) {
	return Array.from(bytes, byte => {return ('0' + (byte & 0b11111111).toString(16)).slice(-2);}).join('')
}

function pad(arr,fmt='utf8') {
	switch (fmt) {
		case 'utf8':
			return toUtf8listFromString('|||').concat(UTF8zeros(29-arr.length).concat(arr));
		break;
		case 'ETHaddr' :
			return toUtf8listFromString('|||ETHaddr||').concat(arr);
		break;
		case 'xor' :
			return UTF8zeros(64-arr.length).concat(arr);
		break;
		default:
	}
}

function UTF8zeros(leng) {
	let outlist = [];
    for (let chrno=0; chrno < leng; chrno++) {
		outlist.push(0x00);
	}
	return outlist;
}

function toBytesFromHexstlist(hexstrlist){
	let out = [];
	for (let i =0; i < hexstrlist.length; i++){
				let hexstr = hexstrlist[i]

				for (let j = 2; j < hexstr.length; j += 2){
			    out.push(parseInt(hexstr.substr(j, 2), 16));
				}
	}
	return new Uint8Array(out);
}



function toUtf8listFromString(str){
	var outlist = [];
	for (let charno=0; charno < str.length; charno++) {
			let charCode = str.codePointAt(charno);
			if (charCode <= 0x7f){
				// char encoded as single byte
				outlist.push(charCode)
			}
			else if (charCode >= 0x80 && charCode <= 0x7ff){
				// char encoded as two bytes, byte 1 is 110xxxxx, byte 2 is 10xxxxxx
				outlist.push(((charCode >> 6) & 0b00011111) | 0b11000000)
				outlist.push(((charCode & 0b00111111) | 0b10000000))
			}
			else if (charCode >= 0x800 && charCode <= 0xffff){
				// char encoded as three bytes, byte 1 is 1110xxxx, byte 2 and 3 is 10xxxxxx
				outlist.push(((charCode >> 12) & 0b00001111) | 0b11100000)
				outlist.push(((charCode >> 6) & 0b00111111) | 0b10000000)
				outlist.push((charCode & 0b00111111) | 0b10000000)
			}
			else if (charCode >= 0x10000 && charCode <= 0x1fffff){
				// char encoded as four bytes, byte 1 is 1110xxxx, byte 2 and 3 is 10xxxxxx
				outlist.push(((charCode >> 18) & 0b00001111) | 0b11110000)
				outlist.push(((charCode >> 12) & 0b00111111) | 0b10000000)
				outlist.push(((charCode >> 6) & 0b00111111) | 0b10000000)
				outlist.push((charCode & 0b00111111) | 0b10000000)
				charno++
			}
			else if (charCode >= 0x200000 && charCode <= 0x3ffffff){
				// char encoded as five bytes,  byte 1 is 11110xxx, bytes 2, 3 and 4 are 10xxxxxx
				outlist.push(((charCode >> 24) & 0b00000011) | 0b11111000)
				outlist.push(((charCode >> 18) & 0b00111111) | 0b10000000)
				outlist.push(((charCode >> 12) & 0b00111111) | 0b10000000)
				outlist.push(((charCode >> 6) & 0b00111111) | 0b10000000)
				outlist.push((charCode & 0b00111111) | 0b10000000)
				charno++
			}
			else if (charCode >= 0x4000000 && charCode <= 0x7fffffff){
				// char encoded as six bytes,  byte 1 is 11110xxx, bytes 2, 3 and 4 are 10xxxxxx
				outlist.push(((charCode >> 24) & 0b00000001) | 0b11111100)
				outlist.push(((charCode >> 24) & 0b00111111) | 0b10000000)
				outlist.push(((charCode >> 18) & 0b00111111) | 0b10000000)
				outlist.push(((charCode >> 12) & 0b00111111) | 0b10000000)
				outlist.push(((charCode >> 6) & 0b00111111) | 0b10000000)
				outlist.push((charCode & 0b00111111) | 0b10000000)
				charno++
			}
	}
	return outlist
}



function XORcontextprospective(context,prospective,n=0) {
	if (typeof context != 'string' || typeof prospective != 'string' || prospective.slice(0,2) != "0x" || context.slice(0,2) != "0x"){
		console.warn('Problem with input to XORcontextprospective',context,typeof context,arguments,n)
	}
	if (typeof context != 'string'){
		throw Error('my TypeError')
	}
	if (isNaN(n)){
	 console.warn('XORcontextprospective, my distance is not a number, setting to 0',n,XORcontextprospective.caller )
	 n=0;
	}
	try {
			let shiftn = (Number(n) * 3) % 256;
			let contextint = bigInt(context.slice(2),16)
			let prospectiveint = bigInt(prospective.slice(2),16)
			let innerprospectiveint = bigInt(rotl(prospectiveint,shiftn),16);
			let innercontextint = bigInt(rotr(contextint,shiftn),16); //possible to improve this turncate int in BInt format?
			let outcontext = innercontextint.xor(innerprospectiveint);
			return '0x' + pad((outcontext).toString(16).split(''),fmt='xor').join('')
	}
	catch {
			return '0x0000000000000000000000000000000000000000000000000000000000000000'
	}

}

function XORcontextidea(context,idea,n=0) {
	if (typeof context != 'string' || typeof idea != 'string' || idea.slice(0,2) != "0x" || context.slice(0,2) != "0x"){
		console.warn('Problem with input to XORcontextidea',context,idea,typeof context,typeof idea,arguments,n)
	}
	if (typeof context != 'string'){
		throw Error('my TypeError')
	}
	if (isNaN(n)){
	 console.warn('XORcontextidea, my distance is not a number, setting to 0',n,XORcontextidea.caller )
	 n=0;
	}
	try {
			let shiftn = (Number(n) * 3) % 256;
			let contextint = bigInt(context.slice(2),16)
			let ideaint = bigInt(idea.slice(2),16)
			let innercontextint = bigInt(rotr(contextint,shiftn),16);
			let innerprospectiveint = innercontextint.xor(ideaint) //bigInt(rotr(prospective,n),16); //possible to improve this turncate int in BInt format?
			let outcontext = rotr(innerprospectiveint,shiftn)
			return '0x' + outcontext
	}
	catch {
			return '0x0000000000000000000000000000000000000000000000000000000000000000'
	}

}

function XORideaprospective(idea,prospective,n=0) {
	if (typeof idea != 'string' || typeof prospective != 'string' || prospective.slice(0,2) != "0x" || idea.slice(0,2) != "0x"){
		console.warn('XORideaprospective',idea,prospective,typeof idea,typeof prospective,arguments,XORideaprospective.caller)
	}
	if (typeof idea != 'string'){
		throw Error('my TypeError')
	}
	if (isNaN(n)){
	 console.warn('XORideaprospective, my distance is not a number, setting to 0',n,XORideaprospective.caller )
	 n=0;
	}
	try {
		let shiftn = (Number(n) * 3) % 256;
		let prospectiveint = bigInt(prospective.slice(2),16)
		let ideaint = bigInt(idea.slice(2),16)
		let innerprospectiveint = bigInt(rotl(prospectiveint,shiftn),16);
		let innercontextint = innerprospectiveint.xor(ideaint) //bigInt(rotr(prospective,n),16); //possible to improve this turncate int in BInt format?
		let outcontext = rotl(innercontextint,shiftn)
		return '0x' + pad((outcontext).toString(16).split(''),fmt='xor').join('')
	}
	catch {
		return '0x0000000000000000000000000000000000000000000000000000000000000000'
	}

}

function rotr(a,n){
	let str = a.shiftRight(n).or(a.shiftLeft(256-n)).toString(16)
	if (str.length >64){
		str=str.substring(str.length-64)
	}
	return pad(str.split(''),fmt='xor').join('') //'0x' +
}

function rotl(a,n){
	let str = a.shiftLeft(n).or(a.shiftRight(256-n)).toString(16)
	if (str.length >64){
		str=str.substring(str.length-64)
	}
	return pad(str.split(''),fmt='xor').join('')
}

function hexifyString(str,fmt='utf8'){
	if (isHex(str) && str.length ==66) {
		var out = str
	}
	else if (isHex(str) && str.length <66) {
		var out = '0x' + pad(str.slice(2).split(''),'xor').join('')
	}
	else if (str === '') {
		var out = '0x' + UTF8zeros(64).join('')
	}
	else {
		var out = '0x'+toHexStrFromByteArray(pad(toUtf8listFromString(str),fmt));
	}
	if (out.length !=66) {
		return 'invalid';
	}
	else {
		return out;
	}
}

function isAddress(inidea){
	if (inidea.length == 42){   //replaced above if to remove web3 dependency for web worker
		return true
	}
	else if( inidea.slice(0,26) == '0x7c7c7c455448616464727c7c'){
		return true
	}
	else if( inidea.slice(0,26) == '0x000000000000000000000000'){
		if (inidea.slice(26)[0] =='0'){
			return false;
		}
		return true;//web3.utils.isAddress('0x'+inidea.slice(26));//
	}
	else if( inidea.slice(-4) == toHexStrFromByteArray(toUtf8listFromString('.eth')).slice(-4)){
		return true
	}
	else if( inidea.slice(-4) == '.eth'){
		return true
	}
	else {
		return false;
	}
}

function isHex(input) {
		if (input.slice(0,2)=='0x'){
				return Boolean(input.slice(2).match(/[a-fA-F0-9]+$/));
		}
		else {
				return false;
		}
}

ToHex = function (code) {
    return String.fromCharCode.apply(null, code)//.map((c)=>{let h = c.toString(16); return h.length == 1 ? '0' + h : h});
}


function stringifyHex(hex,pad=false){
	if (hex.slice(0,8) == '0x7c7c7c'){
		let str = ''
	  for (let i=0;i<hex.length;i+=2){
			code = parseInt(hex.substr(i,2), 16);
	    str += String.fromCharCode(code).replace(/00/g,'');
		}

		return str.replace('|||','').replace('\u0000','');//(/(!#0*)/g,'');
	}
	else return String(hex)
}
