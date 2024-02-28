/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let len = nums.length
    let resultArr = new Array(len)
    
    resultArr[0] = 1
    for (let i=1; i<=len-1; i++){
        resultArr[i] = resultArr[i-1] * nums[i-1]
    }
    
    let multiplier = 1
    
    for (let i=len-1; i>=0; i--){
        
        resultArr[i]=resultArr[i] * multiplier
        
        multiplier = multiplier * nums[i]
    }
    return resultArr
};