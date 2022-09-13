/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let dup = new Map(); // define the map
    
    // iterate through the map
    for(let val of nums) {
        if(dup.has(val)) {
            dup.set(val, dup.get(val) + 1);
            return val;
        }
        else
            dup.set(val, 1);
    };
};