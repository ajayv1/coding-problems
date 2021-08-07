/**
 * N/3 Repeat Number
Problem Description

You're given a read only array of n integers. Find out if any integer occurs more than n/3 times in the array in linear time and constant additional space.
If so, return the integer. If not, return -1.

If there are multiple solutions, return any one.

Example:

Input: [1 2 3 1 1]
Output: 1 
1 occurs 3 times which is more than 5/3 times.
 */

module.exports = {
  /**
   * param A: list of integers
   * return: an integer
   */
  solve: function (A) {
    let ans1 = -1, ans2 = -1, n = A.length;
    let count1 = 0, count2 = 0;
  
    for (let i = 0; i < n; i++) {
        if (ans1 >= 0 && A[i] === A[ans1]) {
            count1++;
        } else if (ans2 >= 0 && A[i] === A[ans2]) {
            count2++;
        } else if (count1 === 0) {
            ans1 = i;
            count1++;
        } else if (count2 === 0) {
            ans2 = i;
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
  
    count1 = 0;
    count2 = 0;
  
    for (let x of A) {
        if (x === A[ans1]) count1++;
        if (x === A[ans2]) count2++;
    }
  
    if (count1 * 3 > n) return A[ans1];
    if (count2 * 3 > n) return A[ans2];
  
    return -1;
    
  }
};