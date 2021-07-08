/*
2 Sum

Input: [2, 7, 11, 15], target=9
Output: index1 = 1, index2 = 2

If multiple solutions exist, output the one where index2 is minimum. If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them.

Date: 08/07/21
*/

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return a array of integers
  twoSum : function(A, B){
    let map = {};
    let temp;
    
    for (let i = 0, len = A.length; i < len; i++) {
        temp = B-A[i];
        
        if (map[temp] >= 0) {
            return [map[temp] + 1, i + 1];
        }
        
        if (map[A[i]] >= 0) {
            continue;
        }
        
        map[A[i]] = i;    
    }
    
    return [];
  }
};