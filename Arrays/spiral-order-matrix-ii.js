/*
Spiral Order Matrix II

Problem Description

Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order.

i/p -
2

o/p -
[ [1, 2], [4, 3] ]

1 --> 2
      |
      |
4<--- 3

Date: 05/07/21
*/

module.exports = { 
  //param A : integer
  //return a array of array of integers
  generateMatrix : function(A){
    let arr = this.createSpiralArray(A);
    let finalArr = [];
    
    for (let i = 0; i < A; i++) {
      finalArr.push(arr[i]);
    }
    
    return finalArr;
   },
   
   createSpiralArray: function (n) {
    let arr = Array(n).fill().map(() => Array(n).fill(0));;
    let num = 1;
    let T = 0, L = 0, B = n-1, R = n-1;
    
    while (L <= R && T <= B) {
      // Left to Right
      for (let i = L; i <= R; i++) {
        arr[T][i] = num++;
      }
      T++;
      
      // Top to Bottom 
      for (let i = T; i <= B; i++) {
        arr[i][R] = num++;
      }
      R--;
      
      // Right to Left
      for (let i = R; i >= L; i--) {
        arr[B][i] = num++;
      }
      B--;
      
      // Bottom to Top
      for (let i = B; i >= T; i--) {
        arr[i][L] = num++;
      }
      L++;
    }
    
    return arr;
  }
};
