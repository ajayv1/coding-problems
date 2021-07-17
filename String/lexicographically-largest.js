/*Lexicographically Largest

You are given a string S. You want to change it to the lexicographically largest possible string by changing some of its characters. But you can only use characters of the string T as a replacement for characters of S. Formally, find the lexicographically largest string you can form by replacing some(or none) of the characters of S by using only the characters of string T. Note: Each character of T can be used at the most once.

i/P: ittmcsvm_jktvvblefw
o/p: wvvtlsvm

Date: 17/07/21*/

module.exports = { 
  //param A : string
  //return a strings
  getLargest : function(A){
    let x = A.split('_');
    let s = x[0];
    let t = x[1].split('').sort((a,b) => b > a ? 1 : -1);
    
    let final = '', k = 0;
    let u = s.length, v = t.length;
    
    
    if (!u || !v) return s;
    
    for (let i = 0; i < u; i++) {
        if ((k < v) && t[k] > s[i]) {
            final+= t[k];
            k++;
        } else {
            final+= s[i];
        }
    }
    
      return final;
  }
}; 