/*Elements Removal

Given an integer array A of size N. In one operation, you can remove any element from the array, and the cost of this operation is the sum of all elements in the array present before this operation.

Find the minimum cost to remove all elements from the array.

Return an integer denoting the total cost of removing all elements from the array.

A = [2, 1]
o/p - 4

Given array A = [2, 1]
Remove 2 from the array => [1]. Cost of this operation is (2 + 1) = 3.
Remove 1 from the array => []. Cost of this operation is (1) = 1.
So, total cost is = 3 + 1 = 4.

Date: 13/07/21*/

module.exports = { 
  //param A : array of integers
  //return an integer
   solve : function(A){
    A.sort(function (a, b) {
      return a-b;
    });
    
    let len = A.length;
    let sum = 0;
    
    for (let i = len-1; i >= 0; i--) {
        sum += A[i];
    }
    
    let prevSum = sum;
    
    for (let i = len-2; i >= 0; i--) {
      prevSum = prevSum - A[i+1];
      sum = sum + prevSum;
    }
    
    
    return sum;
  }
};
