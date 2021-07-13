/*Sort by Color

Problem Description

Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: Using library sort function is not allowed.

A = [0 1 2 0 1 2]
[0 0 1 1 2 2]

Date: 13/07
*/

module.exports = { 
  //param A : array of integers
  //return a array of integers
  sortColors : function(A){
    let count_0 = 0;
    let count_1 = 0;
    let count_2 = 0;
    
    let final = [];
    
    for (let x of A) {
        if (x === 0) count_0++;
        else if (x === 1) count_1++;
        else if (x === 2) count_2++;
    }
    
    let i = 0;
        
    while(count_0-- > 0) {
        final[i] = 0;
        i++;
    }
    
    while(count_1-- > 0) {
        final[i] = 1;
        i++;
    }
    
    while(count_2-- > 0) {
        final[i] = 2;
        i++;
    }
    
    return final;
  }
};
