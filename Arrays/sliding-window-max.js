/*

Sliding Window Maximum
Problem Description

Given an array of integers A. There is a sliding window of size B which is moving from the very left of the array to the very right. You can only see the B numbers in the window. Each time the sliding window moves rightwards by one position. You have to find the maximum for each window.

Return an array C, where C[i] is the maximum value in the array from A[i] to A[i+B-1].

Refer to the given example for clarity.

NOTE: If B > length of the array, return 1 element with the max of the array.

Input Format
The first argument given is the integer array A.

The second argument given is the integer B.



Output Format
Return an array C, where C[i] is the maximum value of from A[i] to A[i+B-1].



Example Input
Input 1:

 A = [1, 3, -1, -3, 5, 3, 6, 7]
 B = 3
Input 2:

 A = [1, 2, 3, 4, 2, 7, 1, 3, 6]
 B = 6


Example Output
Output 1:

 [3, 3, 5, 5, 6, 7]
Output 2:

 [7, 7, 7, 7]

  Date: 1st aug 2021

*/

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return a array of integers
  slidingMaximum : function(A, B){
    let n = A.length;
    
    if (n <= 1 || B === 1) return A;
    
    if (B > n) B = n;
    
    let q = [], k = 0;
    
    q[0] = 0;
    
    // k to keep track of length of queue
    k++;
    
    let finalArr = [];
    
    for (let i = 1; i < n; i++) {
        if (A[i] < A[q[k-1]]) {
            q.push(i);
            k++;
        } else {
            while (i >= 0 && k > 0 && A[i] > A[q[k-1]]) {
                q.pop();
                k--;
            }
            
            q.push(i);
            k++;
        }
        
        while (i - q[0] >= B) {
            q.shift(0);
            k--;
        }
        
        if (i >= B - 1) {
            finalArr.push(A[q[0]]);
        }
    }
    
    return finalArr;
  }
}; 
