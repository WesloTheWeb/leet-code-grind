/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    nums.sort()

    const n = nums.length / 2
    const minimumRepitions = nums.length - (n)

    let counter = 0

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            counter++
            continue
        }

        if (nums[i] === nums[i - 1]) {
            counter++
        } else {
            counter = 1
        }

        if (counter >= minimumRepitions) return nums[i]
    }
};