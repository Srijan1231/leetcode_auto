/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // let count = 0
    // while(n!=0){
    //     if(n&1){
    //         count++
    //     }
    //     n = n>>1
    // }
    // return count;
   
    let count = n.toString(2).replace(/0/g,'').length
    return count
};