/*
Special Subsequences "AG"

You have given a string A having Uppercase English letters.

You have to find that how many times subsequence "AG" is there in the given string.

NOTE: Return the answer modulo 10^9 + 7 as the answer can be very large.

Input 1: A = "ABCGAG"
Input 2: A = "GAB"

Output 1: 3
Output 2: 0

Date: 06/07/21

*/

module.exports = { 
  //param A : string
  //return an integer
  solve : function(A){
    let ans = 0;
    let count_a = 0;
    
    for (let x of A) {
      if (x === 'A') {
        count_a++;
      } else if (x === 'G') {
        ans += count_a;
      }
    }
    
    return ans % 1000000007;
  }
};