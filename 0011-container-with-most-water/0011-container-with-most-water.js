/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let current = 0
    let max = 0
    
    while(left<right){
        
        let smaller = height[left]<height[right]?height[left]:height[right]
        current = smaller * (right-left)
        max = max<current? current : max
        
         if (height[left] > height[right]) {
            right--;
        } else if (height[left] < height[right]) {
            left++;
        } else {
            left++;
            right--;
        }
        
    }
    return max
    
    
};