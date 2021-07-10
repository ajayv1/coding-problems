/*Permutations of A in B

Problem Description

You are given two strings A and B of size N and M respectively.

You have to find the count of all permutations of A present in B as a substring. You can assume a string will have only lowercase letters.

Example Input
Input 1:

 A = "abc"
 B = "abcbacabc"
Input 2:

 A = "aca"
 B = "acaa"


Example Output
Output 1:

 5
Output 2:

 2

Example Explanation
Explanation 1:

Permutations of A that are present in B as substring are:
    1. abc
    2. cba
    3. bac
    4. cab
    5. abc
    So ans is 5.
Explanation 2:

Permutations of A that are present in B as substring are:
    1. aca
    2. caa 

Date: 10/07/21
*/

module.exports = { 
  //param A : string
  //param B : string
  //return an integer
  solve : function(A, B){
    if (!(A || A.length)) return 0;
    
    let M = A.length;
    let N = B.length;
    
    let freq_A = Array(26).fill(0);
    let freq_B = Array(26).fill(0);
    
    let count = 0, temp, diff = 'a'.charCodeAt(0);
    
    // create count char map for pattern and text
    for (let i = 0; i < M; i++) {
        freq_A[A[i].charCodeAt(0) - diff]++;
        freq_B[B[i].charCodeAt(0) - diff]++;
    }
    
    for (let i = M; i < N; i++) {
      if (this.isCompare(freq_A, freq_B)) {
        count++;
      }
      
      // add current char
      temp = B[i].charCodeAt(0) - diff;
      freq_B[temp]++;
      
      // remove first char
      temp = B[i-M].charCodeAt(0) - diff;
      freq_B[temp]--;
    }
    
    // check last char
    if (this.isCompare(freq_A, freq_B)) {
      count++;
    }
    
    return count;
  },

  isCompare: function (A, B) {
    for (let i = 0; i < 26; i++) {
      if (A[i] !== B[i]) return false;
    }
    
    return true;
  }
};