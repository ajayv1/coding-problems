/*Reverse the String

A sequence of non-space characters constitutes a word.
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
If there are multiple spaces between words, reduce them to a single space in the reversed string.

A = "the sky is blue"
o/P "blue is sky the"

Date: 14/07/21*/

module.exports = { 
  //param A : string
  //return a strings
  solve : function(A){
    let arr = A.trim().replace(/ +/g, ' ').split(' ');
    
    let l = 0, r = arr.length - 1, temp;
    
    while (l < r) {
        temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++; r--;
    }
    
    return arr.join(' ');
  }
};