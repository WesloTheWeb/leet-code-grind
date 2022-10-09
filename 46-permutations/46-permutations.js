/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return [[]];
    
    const fullPermutations = [];
    const first = nums[0];
    const perms = permute(nums.slice(1));
    
    for (let perm of perms) {
        for (let i = 0; i <= perm.length; i++) {
            fullPermutations.push([...perm.slice(0,i), first, ...perm.slice(i)]);
        };
    };
    
    return fullPermutations;
};

// time and space complexity: n factorial