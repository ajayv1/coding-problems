/*
Pattern Printing -2
Problem Description

Print a Pattern According to The Given Value of A.

i/p: A = 3
o/p: 
[ 
  [0, 0, 1]
  [0, 2, 1]
  [3, 2, 1]
]

Date: 06/07/21
*/

module.exports = { 
  //param A : integer
  //return a array of array of integers
  solve : function(A){
    let arr = Array(A).fill().map(() => Array(A).fill(0));
    let j;
    
    for (let i = 0; i < A; i++) {
      j = A - 1;
      for (let m = 1; m <= i+1; m++) {
        arr[i][j] = m;
        j--;
      }
    }
    return arr;
  }
};


