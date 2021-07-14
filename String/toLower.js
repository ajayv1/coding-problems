/*tolower()

You are given a function to_lower() consisting of a character array A.

Convert each charater of A into lowercase character if it exists. If the lowercase of a character does not exist, it remains unmodified.
The uppercase letters from A to Z is converted to lowercase letters from a to z respectively.

Return the lowercase version of the given character array.

A = ['S', 'c', 'A', 'l', 'e', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']
['s', 'c', 'a', 'l', 'e', 'r', 'a', 'c', 'a', 'd', 'e', 'm', 'y']

Date: 14/07/21*/

module.exports = { 
  //param A : array of characters
  //return a array of characters
  to_lower : function(A){
    let temp, code;
    let codeA = 'A'.charCodeAt(0);
    let codeZ = 'Z'.charCodeAt(0);
    
    for (let i = 0, len = A.length; i < len; i++) {
        code = A[i].charCodeAt(0);
        
        if (code >= codeA && code <= codeZ) {
            temp = code + 32;
            A[i] = String.fromCharCode(temp);
        }
    }
    
    return A;
  }
}; 