/**
 * Intersection Of Sorted Arrays
Problem Description

Find the intersection of two sorted arrays. OR in other words, Given 2 sorted arrays, find all the elements which occur in both the arrays.

Example:

Input:
    A: [1 2 3 3 4 5 6]
    B: [3 3 5]

Output: [3 3 5]

Input:
    A: [1 2 3 3 4 5 6]
    B: [3 5]

Output: [3 5]
 */

module.exports = { 
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  intersect : function(A, B){
    let n = A.length;
    let m = B.length;
    
    let finalArr = [];
    
    /** method with Hashmap sol (not optimal)
    * let map = {};
    for (let x of A) {
        if (x in map) {
            map[x]++;
        } else {
            map[x] = 1;
        }
    }
    
    for (let x of B) {
        if (x in map && map[x] > 0) {
            finalArr.push(x);
            map[x]--;
        }
    }*/
    
    /**
    method 2: using 2 ptr and properly utilizing the info that array is sorted (optimal) 
    using O(1) space and O(m+n) TC
    */
    let i = 0; j = 0;
    
    while (i < n && j < m) {
        if (A[i] < B[j]) i++;
        else if (A[i] > B[j]) j++;
        else {
            finalArr.push(A[i]);
            i++; j++;
        }
    }
    
    return finalArr;
  }
}; 