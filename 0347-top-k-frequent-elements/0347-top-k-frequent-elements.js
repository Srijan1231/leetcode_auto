/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
   // Step 1: Create a frequency map to count occurrences of each element
    const frequencyMap = new Map();
    nums.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
    
    // Step 2: Create an array of unique elements sorted by frequency
    const uniqueNums = Array.from(frequencyMap.keys());
    console.log(uniqueNums)
    uniqueNums.sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));
    
    // Step 3: Return the first k elements from the sorted array
    return uniqueNums.slice(0, k);
    
    
    
};