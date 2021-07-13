/*Wave Array

Given an array of integers A, sort the array into a wave like array and return it, In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....

NOTE : If there are multiple answers possible, return the one that's lexicographically smallest.

A = [1, 2, 3, 4]

o/p: [2, 1, 4, 3]

Date: 13/07/21
*/

module.exports = { 
  //param A : array of integers
  //return a array of integers
  wave : function(A){
    // sort A
    A.sort(function (a, b) {
      return a-b;
    });
    
    let ans = [];
    
    if (A.length <= 1) return A;
    
    for (let i = 0, len = A.length; i < len; i+=2) {
      if (i+1 < len) {
        ans.push(A[i+1]);    
      }
      ans.push(A[i]);
    }
    
    return ans;
  }
};