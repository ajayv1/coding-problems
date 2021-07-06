/*
Closest MinMax

Given an array A. Find the size of the smallest subarray such that it contains atleast one occurrence of the maximum value of the array

and atleast one occurrence of the minimum value of the array.


Output Format
Return the length of the smallest subarray which has atleast one occurrence of minimum and maximum element of the array

Input 1: A = [1, 3]
Input 2: A = [2]

Output 1: 2
Output 2: 1

Date: 06/07/21

*/

module.exports = { 
  //param A : array of integers
  //return an integer
  solve : function(A){
    let len = A.length;
    
    if (len <= 2) return len;
    
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    
    let latest_idx_min, latest_idx_max;
    let ans = len;
    
    for (let x of A) {
        if (x < min) {
            min = x;
        } 
        
        if (x > max) {
            max = x;
        }
    }
    
    if (min === max) return 1;
    
    for (let i = 0; i < len; i++) {
        if (A[i] === min) {
            latest_idx_min = i;
        } else if (A[i] === max) {
            latest_idx_max = i;
        }
        
        if (latest_idx_min >= 0 && latest_idx_max >= 0) {
            ans = Math.min(ans, (Math.abs(latest_idx_max - latest_idx_min) + 1));
        }
    }
    
    return ans;
  }
}; 