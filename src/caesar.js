// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // check if the shift value isn't present
    if(shift===0 || shift>25 || shift<-25) return false;
    
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    //for decoding set shift
   if (encode === false) {
      shift = shift * -1;
    }
//ignoring capital letters and creating array for each letter/symbol
const inpArr = input.toLowerCase().split("");
    let result = "";
    
    inpArr.forEach(char =>{
      //when shift is negative
      if(shift < 0)  shift = 26 + (shift % 26);
      //check symbols
      if(char===" " || char=== ".") result += char;
      
                   else result+=   alphabets[(alphabets.length + alphabets.indexOf(char) + shift) % 26]
    }
                     );

    return result;
    
  }
  
 

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
