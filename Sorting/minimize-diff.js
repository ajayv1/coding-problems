/*Minimize Difference

Given an array of integers A of size, N. Minimize the absolute difference between the maximum and minimum element of the array.

You can perform two types of operations at most B times in total to change the values in the array.
Multiple operations can be performed on the same element.

Increment : A[i] -> A[i] + 1.

Decrement : A[i] -> A[i] - 1.

Return the minimum difference possible.

A = [2, 6, 3, 9, 8]
B = 3

o/p: 5

We can apply the atmost 3 operations in the following sequence.
 Initial array => [2, 6, 3, 9, 8].
   Decrement 9 => [2, 6, 3, 8, 8].
   Increment 2 => [3, 6, 3, 8, 8].
   Increment 3 => [3, 6, 4, 8, 8].
 Max = 8. Min = 3.
 Therefore, abs|Max - Min| = |8 - 3| = 5.

Problem link: https://codeforces.com/contest/1244/problem/E

Date: 14/07/21
*/

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
  solve : function(A, B){
    A.sort(function (a,b) {
        return a - b;
    });
    
    let len = A.length;
    
    let i = 0, j = len-1, x;
    
    while (i < j) {
        x = (A[i+1]-A[i])*(i+1) + (A[j]-A[j-1])*(len-j);
        if (x >= B) {
            return Math.max(A[j]-A[i]-Math.floor(B/(i+1)) , 0);
        }
        i++; j--; B-=x;
    }
    
    return 0;
  }
};
