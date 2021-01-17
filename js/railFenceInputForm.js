
    function railFenceEncrypt() {

        var stri= document.getElementById("plainText").value;
        console.log(stri);
        var key= document.getElementById("secretKey").value;
        console.log(key);
        if(stri ===""){
            alert("Please Enter Value(s) In Input Field(s)");
        }
        else{
        var messageInput=stri;
        var rowNumber= key;
        var messageOutput = '';
      
        var fanceTable = [];
        for (var pos = 0; pos < rowNumber; ++pos) {
          fanceTable[pos] = [];
        }
      
        // First, enter the letters into the fence table:
      
        var r = 0;
        var direction = 1;
      
        for (var c = 0; c < messageInput.length; ++c) {
          fanceTable[r].push(messageInput[c]);
      
          if (((r == rowNumber - 1) && (direction == 1)) ||
              ((r == 0) && (direction == -1))) {
            direction = -direction;
          }
      
          r = r + direction;
        }
      
        // Then, read off the ciphertext:
      
        var row = 0;
        while (row < rowNumber) {
          for (var pos = 0; pos < fanceTable[row].length; ++pos) {
            messageOutput = messageOutput.concat(fanceTable[row][pos]);
          }
          ++row;
        }
      
        document.getElementById("dispCipher").innerHTML="The encrypted message is :- "+"<br>"+messageOutput;
        document.getElementById("dispCipher").classList.toggle("hideMsg");t;
      }
    }
    
    
    
    