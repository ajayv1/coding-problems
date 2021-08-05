/**
Smallest sequence with given Primes
Problem Description

Given three prime number(A, B, C) and an integer D. Find the first(smallest) D integers which have only A, B, C or a combination of them as their prime factors.



Problem Constraints
1 <= A, B, C <= 10000

1 <= D <= 100000



Input Format
First argument is an integer A.
Second argument is an integer B.
Third argument is an integer C.
Fourth argument is an integer D.



Output Format
Return an integer array of size D, denoting the first D integers described above.

NOTE: The sequence should be sorted in ascending order



Example Input
Input 1:

 A = 2
 B = 3
 C = 5
 D = 5
Input 2:

 A = 3
 B = 2
 C = 7
 D = 3


Example Output
Output 1:

 [2, 3, 4, 5, 6]
Output 2:

 [2, 3, 4]


Example Explanation
Explanation 1:

 4 = A * A ( 2 * 2 ), 6 = A * B ( 2 * 3 )
Explanation 2:

 2 has only prime factor 2. Similary 3 has only prime factor 3. 4 = A * A ( 2 * 2 )
*/

module.exports = { 
  //param A : integer
  //param B : integer
  //param C : integer
  //param D : integer
  //return a array of integers
  solve : function(A, B, C, D) {
    let p1 = A, p2 = B, p3 = C;
    let x = 0, y = 0, z = 0, min;
    let ans = [1];
    
    for (let i = 0; i < D; i++) {
      p1 = ans[x]*A;
      p2 = ans[y]*B;
      p3 = ans[z]*C;
      
      min = Math.min(p1,p2,p3);
      
      if (min === p1) x++;
      if (min === p2) y++;
      if (min === p3) z++;
  
      ans.push(min);
    }
    
    ans.shift();
    
    return ans;
  }
};