

function caesarEncrypt(){
    var stri= document.getElementById("plainText").value;
    console.log(stri);
    var key= document.getElementById("secretKey").value;
    console.log(key);
    str= stri.toUpperCase();
    console.log(str);
    var cipher= "";
    var i,n,asciCode;
    for(i=0;i<str.length;i++){
        asciCode=str[i].charCodeAt();
// above line fetches ascii code of given letter
        if(asciCode>=65 && asciCode<=90){
            n=parseFloat(asciCode)+parseFloat(key);
// parseFloat() must to be used else the output for 65+2 will be 652 and not 67
            if(n>90){   // if n exceeds 90 i.e. acii for 'Z'
                n=parseFloat(asciCode)+parseFloat(key);
                n= n+65-90;         
// i.e. if Y+6 then asci(Y)=89
// 89+6=95  also 95>90 outta acii range 65~90
// use logic      (89+6+-90+65)=>(asci(Y)+key-asci(z or end point)+asci(A or start point)
// console.log("n after logic "+n);
            }
            cipher= cipher+String.fromCharCode(n);
// String.fromCharCode(n) converts a numeric value to corr. ascii symbol ex for n=65 result is A
            console.log(cipher);
        }
        else{
            cipher= cipher+str[i];  //for blank spaces or special characters
        }
    }  
    console.log(cipher);
    if(cipher !==""){
        document.getElementById("dispCipher").innerHTML="The encrypted message is :- "+"<br>"+cipher;
        document.getElementById("dispCipher").classList.toggle("hideMsg");
    }
    else{
                alert("Please Enter Value(s) In Input Field(s)");
        }
}
