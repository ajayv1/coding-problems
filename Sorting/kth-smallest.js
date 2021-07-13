/*
Kth Smallest Element

Find the Bth smallest element in given array A .

A = [2, 1, 4, 3, 2]
B = 3

o/p: 2

Hint: Selection sort

Date: 13/07/21
*/

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
  kthsmallest : function(A, B){
    let min, temp, len = A.length;
    
    if (B > len) return -1;
    
    for (let i = 0; i < B; i++) {
        min = this.findMinIndex(A, i, len);
            
        // swap
        temp = A[i];
        A[i] = A[min];
        A[min] = temp;
    }
    
    return A[B-1];
  },

  findMinIndex: function (A, i, j) {
    let min = A[i];
    let index = i;
    
    for (let k = i+1; k < j; k++) {
        if (A[k] < min) {
            min = A[k];
            index = k;
        }
    }
    
    return index;
  }
}; 