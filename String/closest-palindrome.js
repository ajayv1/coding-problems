/*Closest Palindrome

Groot has a profound love for palindrome which is why he keeps fooling around with strings.
A palindrome string is one that reads the same backward as well as forward.

Given a string A of size N consisting of lowercase alphabets, he wants to know if it is possible to make the given string a palindrome by changing exactly one of its character.

Return the string YES if it is possible to make the given string a palindrome by changing exactly 1 character. Else, it should return the string NO.

A = "abbba"
YES

Date: 15/07/21*/

module.exports = { 
  //param A : string
  //return a strings
  solve : function(A){
    let n = A.length;
    let l = 0, r = n-1;
    let mismatchCount = 0;
    
    while (l < r) {
        if (A[l] !== A[r]) {
            mismatchCount++;
        }
        
        if (mismatchCount > 1) {
            break; 
        }
        
        l++; r--;
    }
    
    if (mismatchCount === 1) {
        return "YES";
    } else if (mismatchCount > 1) {
        return "NO";
    } else if (mismatchCount === 0 && (n % 2)) {
        return "YES";
    }
    
    return "NO";
  }
}; 