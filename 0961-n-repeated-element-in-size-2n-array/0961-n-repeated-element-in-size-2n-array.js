/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    for (let k = 1; k <= 3; k++) {
        for (let i = 0; i < nums.length - k; i++) {
            if (nums[i + k] === nums[i]) {
              return nums[i]
            };
        };
    };
};