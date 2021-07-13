
/*Minimum Increment to Make Array Unique

Given an array of integers nums, a move consists of choosing any nums[i], and incrementing it by 1.

Return the least number of moves to make every value in nums unique.

Input: nums = [3,2,1,2,1,7]
Output: 6
Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown with 5 or less moves that it is impossible for the array to have all unique values.

Date: 14/07/21 */

module.exports = { 
  //param A : array of integers
  //return an integer
  solve : function(A){
      A.sort(function (a, b) {
          return a-b;
      });
    
        let count = 0;
        let prev, cur;
        
        for (let i = 1, len = A.length; i < len; i++) {
            prev = A[i-1];
            cur = A[i];
            
            if ( prev >= cur) {
                count += prev - cur + 1;
                A[i] = prev + 1;
            }
        }
        
        return count;
  }
}; 