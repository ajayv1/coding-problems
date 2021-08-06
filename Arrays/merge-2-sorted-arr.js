/***
 * Merge Two Sorted Arrays
Problem Description

Given two sorted integer arrays A and B, merge B and A as one sorted array and return it as an output.



Problem Constraints
-1010 <= A[i],B[i] <= 1010



Input Format
First Argument is a 1-D array representing A.

Second Argument is also a 1-D array representing B.



Output Format
Return a 1-D vector which you got after merging A and B.



Example Input
Input 1:

A = [4, 7, 9 ]
B = [2 ,11, 19 ]
Input 2:

A = [1]
B = [2]


Example Output
Output 1:

[2, 4, 7, 9, 11, 19]
Output 2:

[1, 2]
 */
module.exports = { 
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve : function(A, B){
    let i = 0, j = 0;
    let n = A.length, m = B.length;
    let finalArr = [];
    
    while (i < n && j < m) {
        if (A[i] <= B[j]) {
            finalArr.push(A[i]);
            i++;
        } else {
            finalArr.push(B[j]);
            j++;
        }
    }
    
    while (i < n) {
        finalArr.push(A[i]);
        i++;
    }
    
    while (j < m) {
        finalArr.push(B[j]);
        j++;
    }
    
    return finalArr;
  }
}; 