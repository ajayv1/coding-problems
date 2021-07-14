/*toupper()

You are given a function to_upper() consisting of a character array A.

Convert each charater of A into Uppercase character if it exists. If the Uppercase of a character does not exist, it remains unmodified.
The lowercase letters from a to z is converted to uppercase letters from A to Z respectively.

Return the uppercase version of the given character array.

A = ['S', 'c', 'A', 'L', 'E', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']

['S', 'C', 'A', 'L', 'E', 'R', 'A', 'C', 'A', 'D', 'E', 'M', 'Y']

Date: 14/07/21*/

module.exports = { 
  //param A : array of characters
  //return a array of characters
  to_upper : function(A){
    let temp, code;
    let codeA = 'a'.charCodeAt(0);
    let codeZ = 'z'.charCodeAt(0);
    
    for (let i = 0, len = A.length; i < len; i++) {
        code = A[i].charCodeAt(0);
        
        if (code >= codeA && code <= codeZ) {
            temp = code - 32;
            A[i] = String.fromCharCode(temp);
        }
    }
    
    return A;
  }
}; 