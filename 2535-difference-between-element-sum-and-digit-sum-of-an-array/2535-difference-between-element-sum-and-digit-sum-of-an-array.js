/**
 * @param {number[]} nums
 * @return {number}
 */
/*
1. calculate total of elements using reduce
2. transform number to string then iterate through each digit
Time: O(n)
Space: O(1)
*/
var differenceOfSum = function(nums) {

    // calculate element sum
    let elementSum = nums.reduce((acc, cV) => cV + acc, 0);
    
    // calculate digitSum
    let digitSum = 0;
    
    for (let num of nums) {
        for (let digit of String(num)) { 
            digitSum += parseInt(digit);
        };
    };
    
    return Math.abs(elementSum - digitSum);
};