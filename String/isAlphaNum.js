/*Isalnum()

You are given a function isalpha() consisting of a character array A.

Return 1 if all the characters of a character array are alphanumeric (a-z, A-Z and 0-9), else return 0.

Date: 14/07/21
*/

module.exports = { 
  //param A : array of characters
  //return an integer
  solve : function(A){
    let code;
    
    let code_A = 'A'.charCodeAt(0);
    let code_Z = 'Z'.charCodeAt(0);
    let code_a = 'a'.charCodeAt(0);
    let code_z = 'z'.charCodeAt(0);
    let code_0 = '0'.charCodeAt(0);
    let code_9 = '9'.charCodeAt(0);
    
    
    for (let i = 0, len = A.length; i < len; i++) {
      code = A[i].charCodeAt(0);
      
      if ((code >= code_A && code <= code_Z) ||
          (code >= code_a && code <= code_z) ||
          (code >= code_0 && code <= code_9)) {
          continue;
      }
      return 0;
    }
    
    return 1;
  }
}; 