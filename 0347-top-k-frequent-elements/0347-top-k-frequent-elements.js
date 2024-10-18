/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyNums = new Map();

    for (let num of nums) {
        frequencyNums.set(num, (frequencyNums.get(num) || 0) + 1);
    };

    const newArr = Array.from(frequencyNums).map(([num, freq]) => [freq, num]);

    return newArr.sort((a, b) => b[0] - a[0]).slice(0, k).map((pair) => pair[1]);
};

/*
1. Create a hashmap of the `numbers: frequency`
2. iterate over the `nums` array, constructing the hashmap.
3. We want to turn into an array, flip frequency to numbers, and sort greatest to least.
4. Once sorted slice from 0 to k 
5. return the numbers in a new array
*/