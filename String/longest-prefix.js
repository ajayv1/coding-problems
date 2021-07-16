/*Longest Common Prefix

Given the array of strings A, you need to find the longest string S which is the prefix of ALL the strings in the array.

Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.

For Example: longest common prefix of "abcdefgh" and "abcefgh" is "abc".

A = ["abcdefgh", "aefghijk", "abcefgh"]
o/p: a

Date: 16/07/21
*/

module.exports = { 
  //param A : array of strings
  //return a strings
  longestCommonPrefix : function(A){
    let lcp = '', n = A.length;
    let index = 0;
    
    if (!A || !A.length) return lcp;
    
    for (let x of A[0]) {
        for (let i = 1; i < n; i++) {
            if (index > A[i].length || x !== A[i].charAt(index)) {
                return lcp;
            }
        }
        
        lcp += x;
        index++;
    }
    
    return lcp;
  }
};