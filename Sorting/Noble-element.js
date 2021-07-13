/*
Noble Integer
Given an integer array, find if an integer p exists in the array such that the number of integers greater than p in the array equals to p If such an integer is found return 1 else return -1.

1 2 4 2 5

o/p: 1  (2 has 2 ele greater than it) 

Date: 13/07/21
*/

module.exports = { 
  //param A : array of integers
  //return an integer
  solve : function(A){
    // sort the array A
    A.sort();
    
    for (let i = 0, len = A.length; i < len; i++) {
        if (i+1 < len && (A[i] === A[i+1])) continue;
        if (len-i-1 === A[i]) return 1;
    }
    
    return -1;
  }
}; 