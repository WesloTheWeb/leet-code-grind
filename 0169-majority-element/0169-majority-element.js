/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Approach 1: Hashmap
- We can create a hashmap as we iterate through the array and get the occurrences of each element. 
- As a check, we can set a number that defines the majority element, which is n length / 2 times.
- We iterate over the hashmap and return the number greater than that.
*/

var majorityElement = function(nums) {
    const frequencies = new Map();
    const threshold = nums.length / 2;
    let elementFound = 0;
    
    for (let num of nums) {
        if (frequencies.has(num)) {
            frequencies.set(num, frequencies.get(num) + 1);
        } else {
            frequencies.set(num, 1);
        };
    };
    
    // iterate over map
    for (let [key, value] of frequencies.entries()) {
        if (value > threshold) {
            elementFound = key;
        };
    };
    
    return elementFound;
};