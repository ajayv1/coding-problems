/*Sorted Permutation Rank

Given a string A. Find the rank of the string amongst its permutations sorted lexicographically.
Assume that no characters are repeated.

Note: The answer might not fit in an integer, so return your answer % 1000003

A = "acb"

Given A = "acd".
The order permutations with letters 'a', 'c', and 'b' : 
abc
acb
bac
bca
cab
cba
So, the rank of A is 2.

o/p: 2

Date: 22/07/21*/

module.exports = { 
  //param A : string
  //return an integer
  findRank : function(A){
    let sorted = A.split('').sort().join('');
    let n = A.length;
    let ans = 0;
    let index, temp;
    let memo = {};
    
    for (let i = 0; i < n; i++) {
        index = this.findIndex(sorted, 0, n-1-i, A[i]);
        temp = this.perm(n-1-i, memo);
        
        ans = (ans + (index * temp) % 1000003) % 1000003;
        
        sorted = sorted.slice(0, index) + sorted.slice(index+1);
    }
    
    return (ans + 1) % 1000003;
  },
  
  findIndex: function (sorted, l, r, char) {
    if (l > r) return -1;
    
    let mid = parseInt((l + r)/2);
    
    if (sorted[mid] === char) return mid;
    
    if (sorted[mid] < char) return this.findIndex(sorted, mid+1, r, char);
    
    return this.findIndex(sorted, l, mid-1, char);
  },
  
  perm: function (x, memo={}) {
    let ans = 1;
    
    if (x <= 1) return 1;
    
    if (memo[x]) return memo[x];
    
    memo[x] = (x * this.perm(x - 1, memo)) % 1000003;
    
    return memo[x];
  }
}; 