/*
Pascal Triangle
Given numRows, generate the first numRows of Pascal's triangle.

Given numRows = 5,
[
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1]
]

Date: 05/07/2021

*/

module.exports = { 
  //param A : integer
  //return a array of array of integers
  solve : function(A){
    let final = [];

    if (A >= 1) {
        final.push([1]);
    } 
    
    if (A >= 2) {
        final.push([1,1]);
    }
    
    let temp = [];
    
    for (let i = 2; i < A; i++) {
        temp = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                temp.push(1);    
            } else {
                temp.push(final[i-1][j] + final[i-1][j-1]);
            }
        }
        final.push(temp);
    }
    
    return final;
  }
};