/*
Common Elements

Given two integer array A and B of size N and M respectively. Your task is to find all the common elements in both the array.

NOTE:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

Input 1:

 A = [1, 2, 2, 1]
 B = [2, 3, 1, 2]
Input 2:

 A = [2, 1, 4, 10]
 B = [3, 6, 2, 10, 10]

 Output 1:

 [1, 2, 2]
Output 2:

 [2, 10]

Date: 08/07/21
*/

module.exports = { 
	//param A : array of integers
	//param B : array of integers
	//return a array of integers
	solve : function(A, B){
		// create hashmap
		let map = {};
		// ans
		let final = [];
		
		for (let x of A) {
			map[x] = map[x] || 0;
			map[x]++;
		}
		
		// search B in map
		for (let x of B) {
			if (map[x]>0) {
				final.push(x);
				map[x]--;
			}
		}
		
		return final;
	}
};