/*Pairs With Given Xor

Given an 1D integer array A containing N distinct integers.

Find the number of unique pairs of integers in the array whose XOR is equal to B.

NOTE:

Pair (a, b) and (b, a) is considered to be same and should be counted once.

Input 1:
 A = [5, 4, 10, 15, 7, 6]
 B = 5

 Input 2:
 A = [3, 6, 8, 10, 15, 50]
 B = 5


Example Output
Output 1: 1
Output 2: 2

Date: 09/07/21 */

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
  solve : function(A, B){
    let map = {};
    let final = {};
    let temp, str = '';
    
    for (let x of A) {
      temp = x ^ B;
      if (map[temp]) {
        str = Math.max(x, temp) + "-" + Math.min(x, temp);
        final[str] = final[str] || true;
      }
      
      map[x] = 1;
    }
    
    return Object.keys(final).length;
  }
};