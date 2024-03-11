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
//The problem of finding the longest strictly increasing subsequence in a given sequence is a classic problem in computer science and mathematics. It has applications in various fields like data analysis, genetics, and computer algorithms.

//To find the longest strictly increasing subsequence, you can use dynamic programming. Here's a simple dynamic programming approach:

//Initialize an array lis of the same length as the input sequence, where lis[i] represents the length of the longest strictly increasing subsequence ending at index i.

//Initialize all values of lis to 1, as the longest increasing subsequence for any single element is 1.

//Iterate over the input sequence from left to right. For each element arr[i], iterate over all elements before it (from arr[0] to arr[i-1]). If arr[i] is greater than arr[j], update lis[i] to lis[j] + 1, but only if lis[i] would be increased by doing so.

//After completing the iteration, the maximum value in the lis array will be the length of the longest strictly increasing subsequence.

