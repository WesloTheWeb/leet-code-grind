/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*APPROACH:
- Take in an array, we want to sort to get it in non-decreasing order.
- once sorted, iterate through each element squaring them, pushing it to a new array.
- return new array that containst the squares.

*/
var sortedSquares = function(nums) {
        // use two pointers
    // create a new array
    const result = new Array(nums.length);
    let left = 0, 
        right = nums.length - 1;
    
	// don't want to rearrange the array, so iterating the array in descending order 
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[i] = nums[right] ** 2
            right--;
        } else {
            result[i] = nums[left] ** 2
            left++;
        }
    }
    
    return result;
};