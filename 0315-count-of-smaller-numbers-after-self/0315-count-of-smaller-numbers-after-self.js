/**
 * @param {number[]} nums
 * @return {number[]}
 */

var countSmaller = function(nums) {
    let indexedNums = [];
    
    for (let i = 0; i < nums.length; i++) {
        indexedNums.push([nums[i], i]);
    };

    let result = new Array(nums.length).fill(0);

    mergeSort(indexedNums, result);

    return result;
};

function mergeSort(nums, result) {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid), result);
    let right = mergeSort(nums.slice(mid), result);
    
    return merge(left, right, result);
};

function merge(left, right, result) {
    let merged = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i][0] <= right[j][0]) {
            result[left[i][1]] += j;   // Increment by number of smaller elements encountered so far from right
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        };
    };

    while (i < left.length) {
        result[left[i][1]] += j;
        merged.push(left[i]);
        i++;
    };

    while (j < right.length) {
        merged.push(right[j]);
        j++;
    };

    return merged;
};