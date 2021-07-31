/*
Given an array of integers A, consider all non-empty subsequences of A.
For any sequence S, let the width of S be the difference between the maximum and minimum element of S.
Return the sum of the widths of all subsequences of A.
As the answer may be very large, return the answer modulo 10^9 + 7.

Example 1:
Input: [2,1,3]
Output: 6

Explanation:
Subsequences are [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3].
The corresponding widths are 0, 0, 0, 1, 1, 2, 2.
The sum of these widths is 6.

Note:
1 <= A.length <= 20000
1 <= A[i] <= 20000

Approach: 

Sum(A[i] * (2^i - 2^(N -i-1))) == Sum(A[i] * 2^i - A[N-i-1] * 2^i)

First of all, sort the array then the i'th element will be minimum in all subsets that do not include the i-1 first elements, and include this element. There will be 2^(n-i) of those. In the same way, i will be the highest element in each subset that does not include any number after i, and include i, and there are 2^(i-1) such subsets.now iterate and for each i add:

TC: O(nlogn)
SC: O(n)
*/

module.exports = { 
  //param A : array of integers
  //return an integer
  solve : function(A) {
    let sum = 0, n = A.length, temp;
    let mod = 1e9 + 7, c = 1;
    
    A.sort((a,b) => a-b);
    
    let powDP = [1];
    
    for (let i = 1; i < n; i++) {
        powDP[i] = (powDP[i-1] * 2) % mod;
    }
    
    // method1
    for (let i = 0; i < n; i++) {
        temp = powDP[i] - powDP[n-i-1];
        sum = (sum + A[i] * temp) % mod;
    }
    
    // method 2: (A[i] - A[n-i-1])*2^i 
    // for (let i = 0; i < n; i++) {
    //     temp = A[i] - A[n-i-1];
    //     sum = (sum + temp * c) % mod;
    //     c = (c << 1) % mod;
    // }
    
    return sum % mod;
  }
};

