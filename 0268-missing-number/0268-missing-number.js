/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sNums = nums.sort(function (a, b) {  return a - b;  })
   let res = 0
   console.log(sNums)
   for(let i=0; i<sNums.length; i++){
       if(sNums[i] != i + 1 ){
           res = i + 1
          
       }
   }
    return res
};