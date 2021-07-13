/*Arithmetic Progression?

Given an integer array A of size N. Return 1 if the array can be rearranged to form an arithmetic progression, otherwise, return 0.

A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

A = [3, 5, 1]
o/p: 1

Date: 13/07/21
*/

module.exports = { 
  //param A : array of integers
  //return an integer
  solve : function(A){
    let min = this.findFirst2min(A);
    let d = Math.abs(min[0]-min[1]);
    
    let map = {};
    
    for (let x of A) {
      map[x] = (map[x] || 0) + 1;
    }
    
    // case1. when all elements are equal
    if (Object.keys(map).length === 1) return 1;
    
    let temp = min[1] + d;
    
    let i = 2, len = A.length;
    
    while (i++ < len) {
      if (!map[temp]) {
        return 0;
      } 
      temp += d;
    }
    
    return 1;
  },
  
  findFirst2min: function (A) {
    let min1 = A[0], min2 = A[0];
    
    for (let i = 1, len = A.length; i < len; i++) {
      if (A[i] < min1) {
        min2 = min1;
        min1 = A[i];
      }
      
      if ((A[i] !== min1) && A[i] < min2) {
        min2 = A[i];
      }
    }
    
    return {
      0: min1,
      1: min2
    };
  }
}; 