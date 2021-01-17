var isChet = false;
var isEnd = false;
var flag = false;
var flagX = false;
var flagAdd = false;
function getKeyword(key) { 
   var key = document.getElementById("secretKey").value;
   return document.getElementById("secretKey").value;
}

function getString() {
  return document.getElementById("plainText").value;
}

function playFairEncrypt() { 
  var key = getKeyword();
  key = key.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
  var result = [];
  var temp = '';
  var alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
  for(var i = 0; i < key.length; i++) {
    if (alphabet.indexOf(key[i]) !== -1) {
      alphabet = alphabet.replace(key[i], '');
      temp += key[i];
    }
  }
  temp += alphabet;
  var result = [];
  temp = temp.split('');
  while(temp[0]) {
    result.push(temp.splice(0,5));
  }
  return result;
}

function cipher() {
  var keyresult = playFairEncrypt();
  var res = [];
  var error = 'Warning!!! String is empty';
  var str = getString();
  if(str === '') {
    document.getElementById('printValue').innerHTML = error;
  }
  // var err = 'ERRORX';
  var textPhrase, separator;
  str = str.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
  if(str.length === 0) {
    //document.getElementById("printValue").innerHTML = err.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
    }
  else {
    textPhrase = str[0];
  }
  var help = 0; flagAdd = false;
  for(var i = 1; i < str.length; i++) {
      if(str[i - 1] === str[i]) {
        if(str[i] === 'X') {
          separator = 'Q';
        }
        else {
          separator = 'X';
        }
        textPhrase += separator + str[i];
        help = 1; 
      }
      else {
        textPhrase += str[i];
      }
    if(help === 1) {
      flagAdd = true;
    }
  }
  
  if(textPhrase.length % 2 !== 0) {
    if(textPhrase[textPhrase.length - 1] === 'X') {
      textPhrase += 'Q';
      isEnd = true;
      flagX = false;
    }
    else {
      textPhrase += 'X';
      isEnd = true;
      flagX = true;
    }
  }
  
  var t = [];
  var enCodeStr = '';
  for(var i = 0; i < textPhrase.length; i += 2){
  	var pair1 = textPhrase[i];
  	var pair2 = textPhrase[i + 1];
  	var p1i, p1j, p2i, p2j;
  	for(var stroka = 0; stroka < keyresult.length; stroka++) {
	    for(var stolbec = 0; stolbec < keyresult[stroka].length; stolbec++){
	      if (keyresult[stroka][stolbec] == pair1){
	      	p1i = stroka;
	      	p1j = stolbec;
	      }
	      if (keyresult[stroka][stolbec] == pair2){
	      	p2i = stroka;
	      	p2j = stolbec;
	      }
	    }
	  }
    var coord1 = '', coord2 = '';
    
    if(p1i === p2i) {
      if(p1j === 4) {
        coord1 = keyresult[p1i][0];
      }
      else {
        coord1 = keyresult[p1i][p1j + 1];
      }
      if(p2j === 4) {
        coord2 = keyresult[p2i][0];
      }
      else {
        coord2 = keyresult[p2i][p2j + 1]
      }
    }
    if(p1j === p2j) {
      if(p1i === 4) {
        coord1 = keyresult[0][p1j];
      }
      else {
        coord1 = keyresult[p1i + 1][p1j];
      }
      if(p2i === 4) {
        coord2 = keyresult[0][p2j];
      }
      else {
        coord2 = keyresult[p2i + 1][p2j]
      }
    }
    if(p1i !== p2i && p1j !== p2j) {
      coord1 = keyresult[p1i][p2j];
      coord2 = keyresult[p2i][p1j];
    }
    enCodeStr = enCodeStr + coord1 + coord2;
  }
  document.getElementById("dispCipher").innerHTML = "The encrypted message is :- "+"<br>"+enCodeStr;
  document.getElementById("dispCipher").classList.toggle("hideMsg");
  return enCodeStr;
}

