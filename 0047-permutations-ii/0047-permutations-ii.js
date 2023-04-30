/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];
    const visited = new Set();

    function backtrack(start) {
        if (start === nums.length) {
            const permString = nums.join(',');
            if (!visited.has(permString)) {
                visited.add(permString);
                result.push([...nums]);
            }
            return;
        };

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        };
    };

    backtrack(0);
    return result;
};