/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // Need a way to compare two numbers, and push to a new array
    // use .sort() as it naturally does put numbers from least to greatest
    
    let n = nums.length;
    
    for(let i = 0; i < n; i++) {
        let min = i;
        
        for(let j = i+1; j<n; j++) {
            if(nums[j] < nums[min]) {
                min = j
            }
        }
    
        if (min != i) {
        // swapping the elements
        let tmp = nums[i];
        nums[i] = nums[min];
        nums[min] = tmp;
        }
    }
    return nums;
};