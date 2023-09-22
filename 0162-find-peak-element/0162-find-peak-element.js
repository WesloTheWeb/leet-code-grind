/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
   let left = 0
   let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] < nums[mid + 1]) {
            // If the next element is greater, then we might have a peak on the right side
            left = mid + 1;
        } else {
            // If the next element is not greater, then the peak might be on the left side or at mid itself
            right = mid;
        }
    }
    
    // When left meets right, we've found a peak
    return left;
};