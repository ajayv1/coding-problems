/*
Search in a row wise and column wise sorted matrix

Problem Description

Given a matrix of integers A of size N x M and an integer B.
In the given matrix every row and column is sorted in increasing order. Find and return the position of B in the matrix in the given form:
If A[i][j] = B then return (i * 1009 + j)
If B is not present return -1.

Note 1: Rows are numbered from top to bottom and columns are numbered from left to right.
Note 2: If there are multiple B in A then return the smallest value of i*1009 +j such that A[i][j]=B.

Example Input
A = [ [1, 2, 3]
          [4, 5, 6]
          [7, 8, 9] ]
B = 2

Example Output
1011


Example Explanation
A[1][2]= 2
1*1009 + 2 =1011

Date: 05/07/21
*/

module.exports = { 
  //param A : array of array of integers
  //param B : integer
  //return an integer
  solve : function(A, B){
    let rows = A.length;
    let cols = A[0].length;
    
    let index = 0;
    let temp = [];
    
    // search row wise
    for (let i = 0; i < rows; i++) {
        index = this.binarySearch(A[i], 0, cols-1, B);
        
        // console.log(index);
        
        if (index > -1) {
            return (i+1) * 1009 + (index+1);
        } 
    }
    
    // search col wise
    for (let i = 0; i < cols; i++) {
        temp = [];
        
        for (let j = 0; j < rows; j++) {
            temp.push(A[j][i]);
        }
        
        index = this.binarySearch(temp, 0, rows-1, B);
        
        if (index > -1) {
            return (index+1) * 1009 + (i+1);
        } 
    }
    
    return -1;
  },
  
  binarySearch: function (A, l, r, B) {
    if (l > r) return -1;
    if (A[l] === B) return l;
    if (l === r) {
        if (A[l] === B) return l;
        return -1;
    }
    let mid = parseInt((l + r)/2);
    
    if (A[mid] === B) return mid;
    
    if (A[mid] < B) return this.binarySearch(A, mid+1, r, B);
    
    return this.binarySearch(A, l, mid-1, B);
  }
};
