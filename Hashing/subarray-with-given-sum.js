module.exports = { 
  //param A : array of integers
  //param B : integer
  //return a array of integers
  solve : function(A, B){
    let map = {
        0: -1
    };
    let ans, sum = 0, temp;
    
    for (let i = 0, len = A.length; i < len; i++) {
        sum += A[i];
        temp = map[sum - B];
        if (temp !== undefined) {
            ans = A.slice(temp+1, i+1);
            break;
        } 
        
        map[sum] = i;
    }
    
    return ans || [-1];
  }
};