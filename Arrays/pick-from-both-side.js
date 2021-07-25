/*Pick from both sides!

Problem Description

Given an integer array A of size N.

You can pick B elements from either left or right end of the array A to get maximum sum.

Find and return this maximum possible sum.

NOTE: Suppose B = 4 and array A contains 10 elements then

You can pick first four elements or can pick last four elements or can pick 1 from front and 3 from back etc . you need to return the maximum possible sum of elements you can pick.

A = [5, -2, 3 , 1, 2]
B = 3

O/p: 8

Date: 25/07/21 */

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
  solve : function(A, B){
    let P = [];
    let n = A.length;
    
    P[0] = 0;
    for (let i = 1; i <= n; i++) {
        P[i] = A[i-1] + P[i-1];
    }
    
    let maxSum = Number.MIN_SAFE_INTEGER, sum = 0;
    let l = B, r = 0;
    
    while (B-- >= 0) { // total B+1 cases
        sum = P[l] + P[n] - P[n-r]; // calculate P[0, l] + P[n-r, n]
        
        if (maxSum < sum) maxSum = sum;
        
        l--; r++;
    }
    
    return maxSum;
  }
}; 