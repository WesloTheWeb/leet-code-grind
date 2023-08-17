/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // base case
    if (nums.length === 0) return [[]];
    
    const first = nums[0];
    const remainingElements = nums.slice(1);
    
    // recursive call
    const withoutFirstElement = subsets(remainingElements);
    // create array with first element
    const withFirstElement = withoutFirstElement.map((sub) => {
        return [first, ...sub];
    });
    
    return results = [...withoutFirstElement, ...withFirstElement];
};
// time: O(2^n), doubling the number of subsets.