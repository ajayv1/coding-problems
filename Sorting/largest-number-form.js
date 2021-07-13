/*Largest Number

Given a array A of non negative integers, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.

Return a string representing the largest number.

A = [3, 30, 34, 5, 9]
o/p: "9534330"

Date: 13/07/21
*/

module.exports = { 
  //param A : array of integers
  //return a strings
  largestNumber : function(A){
    let isAllZero = true;
    
    for (let x of A) {
        if (x) {
            isAllZero = false;
            break;
        }
    }
    
    if (isAllZero) return '0';
    
    A.sort(this.lexOrder);
    
    return A.join('');
  },

  lexOrder: function (a, b) {
    let s1 = a.toString(), s2 = b.toString();
    let x = s1 + s2, y = s2 + s1;
      
    if (x > y) return -1;
    if (x < y) return 1;

    return 0;
  }
}; 