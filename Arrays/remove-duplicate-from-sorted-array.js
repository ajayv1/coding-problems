/*
Remove Duplicates from Sorted Array
Problem Description

Given a sorted array A consisting of duplicate elements.

Your task is to remove all the duplicates and return a sorted array of distinct elements consisting of all distinct elements present in A.

NOTE: The input format has been changed from previous versions.



Problem Constraints
1 <= |A| <= 106

1 <= A[i] <= 2*109



Input Format
First and only argurment containing the integer array A.



Output Format
Return an array/vector from the function as per the question.



Example Input
Input 1:

A = [1, 1, 2]
Input 2:

A = [1, 2, 2, 3, 3]


Example Output
Output 1:

[1, 2]
Output 2:

[1, 2, 3]
*/

module.exports = { 
  //param A : array of integers
  //return a array of integers
  solve : function(A){
    let n = A.length;
    
    /* method 1
    let ans = [A[0]];
    let j = 1;
    
    for (let i = 1; i < n; i++) {
        if (ans[j-1] === A[i]) {
            continue;
        }
        ans[j] = A[i];
        j++;
    }
    */
    
    // Method 2 - inplace - no extra space
    let i = 0;
    
    for (let j = 1; j < n; j++) {
        if (A[i] === A[j]) {
            continue;
        }
        i++;
        A[i] = A[j];
    }
    
    A = A.slice(0, i+1);
    return A;
  }
}; 