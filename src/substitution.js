// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
   
    //if the substitution alphabet is missing
    if( alphabet=== undefined || 
//              if the substitution alphabet is not exactly 26 characters
             alphabet.length!=26 ||
                  //if the substitution alphabet does not contain unique characters
                 new Set(alphabet.split("")).size !== alphabet.length
    ) return false;
    
    
    
    alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    i=0;

    result = "";

    while (i < input.length) {
  if(input.charAt(i)===" ") result += input.charAt(i);

      if(encode){
　　 ind = alph.indexOf(input.charAt(i));
　　 result += alphabet.charAt(ind);
      }
      else{
        ind= alphabet.indexOf(input.charAt(i));
        result+=alph.charAt(ind);
      }

　　 i++;

}

　console.log('result is : '+result)

return result

　
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
