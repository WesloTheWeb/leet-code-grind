/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const occurences = new Map();

    // hash map build
    for (let num of nums) {
        if (occurences.has(num)) {
            occurences.set(num, occurences.get(num) + 1);
        } else {
            occurences.set(num, 1);
        };
    };

    // iterate over hashmap to see if occurrence is 2 or greater
    for (let [el, count] of occurences.entries()) {
        if (count >= 2) {
            return true;
        }
    }

    return false;
};