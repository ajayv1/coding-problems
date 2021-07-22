/*Grid Unique Paths

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

TC: O(min(m,n))
SC: O(1)

Date: 22/07/21*/

module.exports = { 
  //param A : integer
  //param B : integer
  //return an integer
  uniquePaths : function(A, B){
        if (A === 1 || B === 1) return 1;
        if (A <= 0 || B <= 0) return 0;
        
        let x = A + B - 2;
        
        let ans = this.findNcR(x, Math.min(A,B)-1);
        
        return ans;
  },
  
  findNcR: function (n, r) {
      if (r > n - r) r = n - r; // because C(n, r) == C(n, n - r)
      
      let ans = 1;
  
      for (let i = 1; i <= r; i++) {
          ans *= n - r + i;
          ans /= i;
      }  
      
      return ans;
      
  }
}