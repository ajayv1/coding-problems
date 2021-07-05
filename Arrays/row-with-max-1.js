/*
Row with maximum number of ones

Problem Description

Given a binary sorted matrix A of size N x N. Find the row with the maximum number of 1.

NOTE:

If two rows have the maximum number of 1 then return the row which has a lower index.
Rows are numbered from top to bottom and columns are numbered from left to right.
Assume 0-based indexing.
Assume each row to be sorted by values.
Expected time complexity is O(rows).

A = [   
  [0, 1, 1]
  [0, 0, 1]
  [0, 1, 1]
]

o/p:  0

Date: 04/07/21
*/

module.exports = { 
  //param A : array of array of integers
  //return an integer
  solve : function(A){
    let row = A.length;
    let col = A[0].length;
    
    let final = 0;
    let finalRow = 0;
    let countof1 = 0;
    
    // find first 1 in first row
    for (let i = 0; i < row; i++) {
        let indx = this.binarySearch(A[i], 0, col-1);
        let numOf1 = col - indx; 
        if (final < numOf1) {
            final = numOf1;
            finalRow = i;
        }
    }
    return finalRow;
  },

  binarySearch: function (x, l, r) {
    if (l > r) return -1;
    if (l==r && x[l] === 1) return l;
  
    let mid = parseInt((l+r)/2);
    
    if (x[mid] === 1 && (mid=== 0 || x[mid-1] === 0)) return mid;
    
    if (x[mid] === 0) {
      return this.binarySearch(x, mid+1, r);
    } else {
      return this.binarySearch(x, l, mid-1);
    }
  }
};
