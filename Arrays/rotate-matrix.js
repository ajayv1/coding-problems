// Rotate Matrix

// Rotate the matrix by 90 degrees (clockwise). in-place 
/*
input 
[
  [1, 2],
  [3, 4]
]

o/p - 
[
  [3, 1],
  [4, 2]
]

hint: A -> A^T -> rev each rows
*/

module.exports = { 
  //param A : array of array of integers 
  //return nothing 
  solve : function(A){ 
      let row = A.length;
      let col = A[0].length;
      
      this.transposeMatrix(A);
      
      for (let i = 0; i < row; i++) {
          this.reverse(A[i]);
      }
  },
  
  reverse: function (arr) {
      let len = arr.length;
      let i = 0, j = len - 1;
      
      while (i < j) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
      }
      
  },
  
  transposeMatrix: function (A) {
      let row = A.length;
      let col = A[0].length;
      let temp;
      
      for (let i = 0; i < row; i++) {
          for (let j = 0; j < col; j++) {
              if (i < j) {
                  temp = A[i][j];
                  A[i][j] = A[j][i];
                  A[j][i] = temp;
              }
          }
      }
  }
};