/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*
1. Initialize two pointers low and high to be at the start and end of the array respectively.
2. while low is less than high write a while loo
3  make calculations to compare to target. 
4. If sum is too high, move high pointer to left,
5. if sum is too low, move low pointer to right.
6. Once find the sum to equal to the target, return the indices.
*/

var twoSum = function(numbers, target) {
    let low = 0;
    let high = numbers.length - 1;
        
    while ( low < high ) {        
        let runningSum = numbers[low] + numbers[high];
            
        if (runningSum === target) {
            return [low + 1, high + 1];
        } else if (runningSum > target) {
            high--;  
        } else if (runningSum < target) {
            low++;
        };
    };
};