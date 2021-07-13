/*Stepwise Selection Sort!

You need to sort the elements in increasing order using SelectionSort. Return a array containing the min value's index position before every iteration.

Return an integer array containing N - 1 integers denoting min value's index position before every iteration.

A = [6, 4, 3, 7, 2, 8]

o/p: [4, 2, 2, 4, 4]

Date: 13/07/21
*/

module.exports = { 
  //param A : array of integers
  //return a array of integers
  solve : function(A){
    let min, temp;
    let ans = [];
    
    for (let i = 0, len = A.length; i < len - 1; i++) {
      min = this.findMinIndex(A, i, len);
      
      // swap
      temp = A[i];
      A[i] = A[min];
      A[min] = temp;
      
      // store
      ans.push(min);
    }
      
    return ans;
  },
   
  findMinIndex: function (A, i, j) {
    let min = A[i];
    let index = i;
    
    for (let k = i; k < j; k++) {
      if (A[k] < min) {
        min = A[k];
        index = k;
      }
    }
    
    return index;
  }
}; 