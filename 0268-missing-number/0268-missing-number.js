/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
     nums.sort(function (a, b) {  return a - b;  })
   let res = 0
   
   for(let i=0; i<nums.length; i++){
       if(nums[i] != i + 1 ){
           
           res = i + 1
          
       }
   }
    return res
};