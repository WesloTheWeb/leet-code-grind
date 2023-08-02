/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
 PSUEDO CODE:
1. Initialize an empty hashmap.
2. Iterate over the array with a for-loop.
3. For each element at index i, calculate the complement (target - nums[i]).
4. Check if the complement is in the hash map.
 */

var twoSum = function(nums, target) {
    // Initialize an empty hashmap.
    const pairs = new Map();

    // Iterate over the array with a for-loop.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement (target - nums[i]).
        let complement = target - nums[i];

        // Check if the complement is in the hash map.
        if (pairs.has(complement)) {
            // If it's in the hashmap, return the index stored in the hashmap and the current index.
            return [pairs.get(complement), i];
        }

        // If it's not in the hashmap, store the current number as key and its index as value in the hashmap.
        pairs.set(nums[i], i);
    }

    // If no pair found, return an empty array
    return [];
};