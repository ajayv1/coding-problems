/*
Length of longest consecutive ones

Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.

Input 1:
    A = "111000"
Output 1:
    3

Input 2:
    A = "111011101"
Output 2:
    7

Date: 08/07/21

*/

module.exports = { 
//param A : string
//return an integer
	solve : function(A){
		let maxConsecutive1 = 0;
		let start = 0;
		let count_0 = 0;
		let k = 1; // indicate we can switch atmost k swap of 0 to 1
		let last_start = 0, last_end = 0;
		
		for (let end = 0, len = A.length; end < len; end++) {
			if (A[end] === '0') {
				count_0++;
			} 
			
			while (count_0 > k) {
				if (A[start] === '0') {
					count_0--;
				}
				start++;
			}
			
			
			if (maxConsecutive1 < (end-start+1)) {
				last_start = start;
				last_end = end;
				maxConsecutive1 = end-start+1;
			}
		}
		
		let zeroUsed = false;
		let found1 = false;
		
		for (let r = last_start; r <= last_end; r++) {
			if (A[r] === '0') {
				zeroUsed = true;
				break;
			}
		}
		
		// if no 0's are there
		if (!zeroUsed) return maxConsecutive1;
		
		// found the final window 
		// check for 1 at left side
		for (let l = last_start - 1; l >= 0; l--) {
			if (A[l] === '1') {
				found1 = true;
				break;
			}
		}
		
		// found at left side ?
		if (zeroUsed && found1) {
			return maxConsecutive1;
		}
		
		// check for 1 at right side
		for (let r = last_end+1; r < A.length; r++) {
			if (A[r] === '1') {
				found1 = true;
				break;
			}
		}
		
		// found at right side ?
		if (zeroUsed && found1) {
			return maxConsecutive1;
		}
		
		// remove extra 0 which counted as 1
		return maxConsecutive1 - 1;
	}
};