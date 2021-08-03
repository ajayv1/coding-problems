/*
Sub-matrix Sum Queries

Given a matrix of integers A of size N x M and multiple queries Q, for each query find and return the submatrix sum.

Inputs to queries are top left (b, c) and bottom right (d, e) indexes of submatrix whose sum is to find out.

NOTE:

Rows are numbered from top to bottom and columns are numbered from left to right.
Sum may be large so return the answer mod 109 + 7.

Problem Constraints
1 <= N, M <= 1000
-100000 <= A[i] <= 100000
1 <= Q <= 100000
1 <= B[i] <= D[i] <= N
1 <= C[i] <= E[i] <= M



Input Format
The first argument given is the integer matrix A.
The second argument given is the integer array B.
The third argument given is the integer array C.
The fourth argument given is the integer array D.
The fifth argument given is the integer array E.
(B[i], C[i]) represents the top left corner of the i'th query.
(D[i], E[i]) represents the bottom right corner of the i'th query.



Output Format
Return an integer array containing the submatrix sum for each query.



Example Input
Input 1:

 A = [   [1, 2, 3]
         [4, 5, 6]
         [7, 8, 9]   ]
 B = [1, 2]
 C = [1, 2]
 D = [2, 3]
 E = [2, 3]
Input 2:

 A = [   [5, 17, 100, 11]
         [0, 0,  2,   8]    ]
 B = [1, 1]
 C = [1, 4]
 D = [2, 2]
 E = [2, 4]


Example Output
Output 1:

 [12, 28]
Output 2:

 [22, 19]


Example Explanation
Explanation 1:

 For query 1: Submatrix contains elements: 1, 2, 4 and 5. So, their sum is 12.
 For query 2: Submatrix contains elements: 5, 6, 8 and 9. So, their sum is 28.
Explanation 2:

 For query 1: Submatrix contains elements: 5, 17, 0 and 0. So, their sum is 22.
 For query 2: Submatrix contains elements: 11 and 8. So, their sum is 19.
 
*/

module.exports = { 
  //param A : array of array of integers
  //param B : array of integers
  //param C : array of integers
  //param D : array of integers
  //param E : array of integers
  //return a array of integers
  solve : function(A, B, C, D, E){
    let n = A.length, m = A[0].length;
    let mod = 1e9+7;
    
    let PS = [];
    
    // Prefix sum row wise
    for (let i = 0; i < n; i++) {
        PS.push([]);
        for (let j = 0; j < m; j++) {
            if (j === 0) PS[i][j] = A[i][j] % mod;
            else {
                PS[i][j] = (PS[i][j-1] + A[i][j]) % mod;
            }
        }
    }
    
    // Prefix sum col wise
    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            PS[j][i] = (PS[j-1][i] + PS[j][i]) % mod;
        }
    }
    
    let len1 = B.length, sum, b, c, d, e, reduceCount;
    let ans = [];
    
    for (let i = 0; i < len1; i++) {
        b = B[i] - 1;
        c = C[i] - 1;
        d = D[i] - 1;
        e = E[i] - 1;
        reduceCount = 0;
        
        sum = PS[d][e];
        
        if (b > 0) {
            sum = (sum - PS[b-1][e]) % mod;
            reduceCount++;
        }
        if (c > 0) {
            sum = (sum - PS[d][c-1]) % mod;
            reduceCount++;
        }
        if (reduceCount === 2) {
            sum = (sum + PS[b-1][c-1]) % mod;
        }
        
        sum = sum % mod;
        
        if (sum < 0) sum += mod;
        
        ans.push(sum);
    }
    
    return ans;
  }
}; 