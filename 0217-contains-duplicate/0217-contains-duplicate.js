/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    temp = nums.sort()
    for(let i=0; i < nums.length; i++) {
        if (temp[i] === temp[i + 1]) {
            return true
        }
    }
    return false
    
    
};