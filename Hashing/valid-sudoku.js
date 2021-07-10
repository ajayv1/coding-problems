/*
Valid Sudoku
Determine if a Sudoku is valid, according to: http://sudoku.com.au/TheRules.aspx

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Date: 10/07/21
*/

module.exports = { 
  //param A : array of strings
  //return an integer
  isValidSudoku : function(A){
    let row = A.length;
    let col = A[0].length;
    
    let rows = [];
    let cols = [];
    let box = [];
    
    let value, box_num;
    
    // check row, col and box
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        value = A[i][j];
        
        if (value === '.') continue;
        
        box_num = Math.floor(i/3) * 3 + Math.floor(j/3);
        
        rows[i] = rows[i] || {};
        cols[j] = cols[j] || {};
        box[box_num] = box[box_num] || {};
    
        if (rows[i][value] || cols[j][value] || box[box_num][value]) {
          return 0;
        }
        
        rows[i][value] = 1;
        cols[j][value] = 1;
        box[box_num][value] = 1;
      }    
    }
    
    return 1;
  }
};