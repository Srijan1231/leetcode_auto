/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = nums[0]
    for(let i=0; i<nums.length; i++){
        let accu= 1
        for(let j=i; j<nums.length; j++){
            accu *=nums[j]
            result = Math.max(result,accu)
        }
    }
    return result
};
//This is a brute-force approach 