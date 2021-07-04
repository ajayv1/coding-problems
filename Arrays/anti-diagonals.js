// Give a N*N square matrix, return an array of its anti-diagonals. Look at the example for more details.
// Date: 04/07/21
/*
input 
1 2 3
4 5 6
7 8 9

output
[ 
  [1],
  [2, 4],
  [3, 5, 7],
  [6, 8],
  [9]
]
*/

module.exports = { 
  //param A : array of array of integers
  //return a array of array of integers
  diagonal : function(A){
    let row = A.length;
    let col = A[0].length;
    
    let T = 0, B = row-1, L = 0, R = col-1;
    
    let iter = 0;
    let final = [];

    while (T <= B && L <= R) {
        let temp = iter;
        for (let i = L; i <= R; i++) {
            if (iter == 0) {
                final.push([A[T][i]]);    
            } else {
                final[temp++].push(A[T][i]);
            }
        }
        
        T++;
        
        for(let i = T; i <= B; i++) {
            if (iter == 0) {
                final.push([A[i][R]]);   
            } else {
                final[temp++].push(A[i][R]);
            }
        }
        
        R--;
        iter++;
    
    }
    return final;
  }
};
