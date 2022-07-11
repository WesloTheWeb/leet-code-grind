/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*APPROACH:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Input: nums = [0]
Output: [[],[0]]

- empty array can be one
- all combinations

*/
const subsets = (nums, depth = 0, subset = [], results = []) => {
    if (depth === nums.length) {
        results.push(subset);
    } else {
        subsets(nums, depth + 1, subset, results);
        subsets(nums, depth + 1, [...subset, nums[depth]], results)
    }
    return results;
};