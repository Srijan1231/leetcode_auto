/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length
    let memo = new Array(n).fill(1)
    
    for (let i = 1; i<n; i++){
        for (let j = 0; j<i; j++){
            if( nums[i]>nums[j] && memo[i]<memo[j] + 1){
                memo[i] = memo[j] + 1
            
            }
        }
    }
    return Math.max(...memo)
};