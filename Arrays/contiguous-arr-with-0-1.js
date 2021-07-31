/*Contiguous Array
Given an array of integers A consisting of only 0 and 1.

Find the maximum length of a contiguous subarray with equal number of 0 and 1.

Input 1:
    A = [1, 0, 1, 0, 1]
Output 1:
    4
    Explanation 1:
        Subarray from index 0 to index 3 : [1, 0, 1, 0]
        Subarray from index 1 to index 4 : [0, 1, 0, 1]
        Both the subarrays have equal number of ones and equal number of zeroes.

Input 2:
    A = [1, 1, 1, 0]
Output 2: 2

*/

module.exports = { 
  //param A : array of integers
  //return an integer
  solve : function(A){
    let map = {0: -1}, n = A.length;
    
    for (let i = 0; i < n; i++) {
        if (A[i] === 0) {
            A[i] = -1;
        } 
    }
    
    let sum = 0;
    let diff = 0, temp;
    
    // method1: using Prefix sum with array
    // let P = [];
    // P[0] = A[0];
    // for (let i = 1; i < n; i++) {
    //     P[i] = A[i] + P[i-1];
    // }
    
    // for (let i = 0; i < n; i++) {
    //     if (P[i] in map) {
    //         if (diff < (i-map[P[i]])) {
    //             diff = i-map[P[i]];
    //         }
    //     } else {
    //         map[P[i]] = i;
    //     }
    // }
    
    // method2: using Prefix sum with no array
    for (let i = 0; i < n; i++) {
        sum += A[i];
        if (sum in map) {
            if (diff < (i - map[sum])) {
                diff = i - map[sum];
            }
        } else {
            map[sum] = i;
        }
    }
    
    return diff;
  }
}; 