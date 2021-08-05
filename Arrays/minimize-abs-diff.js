/*
Minimize the absolute difference
Given three sorted arrays A, B and Cof not necessarily same sizes.

Calculate the minimum absolute difference between the maximum and minimum number from the triplet a, b, c such that a, b, c belongs arrays A, B, C respectively. i.e. minimize | max(a,b,c) - min(a,b,c) |.

Example :

Input:

A : [ 1, 4, 5, 8, 10 ]
B : [ 6, 9, 15 ]
C : [ 2, 3, 6, 6 ]
Output:

1
Explanation: We get the minimum difference for a=5, b=6, c=6 as | max(a,b,c) - min(a,b,c) | = |6-5| = 1.

Date: 05/08/21
*/

module.exports = { 
  //param A : array of integers
  //param B : array of integers
  //param C : array of integers
  //return an integer
  solve : function(A, B, C){
    let n = A.length, m = B.length, k = C.length;
    let len = n + m + k;
    let p = 0, q = 0, r = 0;
    let x, y, z;
    let currentMin = Number.MAX_SAFE_INTEGER;
    let min, max;
    
    
    
    for (let i = 0; i < len; i++) {
        
        if (p >= n || q >= m || r >= k) break;
        
        x = A[p];
        y = B[q];
        z = C[r];
        
        min = Math.min(x,y,z);
        max = Math.max(x,y,z);
        
        if (min === x) p++;
        else if (min === y) q++;
        else if (min === z) r++;
        
        if (currentMin > Math.abs(max-min)) {
            currentMin = Math.abs(max-min);
        }
        
    }
    
    return currentMin;
  }
}; 