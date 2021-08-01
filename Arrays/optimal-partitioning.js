/*
Optimal Partitioning
Problem Description

You are given an array A having N integers.

You have to divide / split the array into 2 subsequence partitions such that:

Both the partitions are non-empty.
Each integer A[i] in the array belongs to exactly one of the two partitions.
Absolute difference between the maximum of first partition and the minimum of second partition is minimum possible.
If B and C represent the two partitions, then size(B) >= 1, size(C) >= 1 and |max(B) - min(C)| is minimum possible. You have to find such a spliting and tell the minimum value of |max(B) - max(C)|.

Example Input
Input 1:

 A = [3, 1, 2, 6, 4]
Input 2:

 A = [2, 1, 3, 2, 4, 3]


Example Output
Output 1:

 1 
Output 2:

 0 

*/

module.exports = { 
  //param A : array of integers
  //return an integer
  solve : function(A){
    let n = A.length;
    
    A.sort((a,b) => a-b);
    
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < n-1; i++) {
        if (A[i+1]-A[i] < min) {
            min = A[i+1]-A[i];
        }
    }
    
    return min;
  }
}; 