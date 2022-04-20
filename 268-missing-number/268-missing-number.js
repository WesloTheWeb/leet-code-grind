/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   // 0. Initialize vars: expected_sum, actual_sum
    let expectedSum = (nums.length * (nums.length + 1) / 2);
    let actualSum = nums.reduce((acc, cV) => acc + cV);
    // 1. set expected sum to = n(n+1)/2
    // 3. set actual_sum to Sum of the elements in the array 
    // 5. return  expectedSum - actual_sum
    return expectedSum - actualSum;
};