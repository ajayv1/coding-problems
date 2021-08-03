/*
Majority Element
Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example :

Input : [2, 1, 2]
Return  : 2 which occurs 2 times which is greater than 3/2.


Date: 3 Aug 21
*/

module.exports = { 
  //param A : array of integers
  //return an integer
  majorityElement : function(A){
  let n = A.length;
  
  if (!A || !n) return -1;
  
    let me = A[0];
    let count = 1;
    
    for (let i = 1; i < n; i++) {
      if (!me) me = A[i];
      
      if (A[i] === me) {
          count++;
      } else {
          count--;
      }
      
      if (count === 0) me = null;
    }
    
    if (!me) return -1;
    
    let countMe = 0;
    
    for (let x of A) {
        if (x === me) countMe++;
    }
    
    if ((countMe << 1) > n) return me;
    
    return -1;
  }
}; 