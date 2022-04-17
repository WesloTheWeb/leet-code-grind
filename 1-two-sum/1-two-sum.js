/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
/*
    go through the array
    get the sum of the first two numbers
    if they === target return
    if not, increase index of second pointer
    if second pointer gets to the end of the arr without = target, 
    increase the first pointer by 1 and initialize the second pointer to be 1 above that
    repeat until target is found
    if target is never found return null
*/
let pointer1 = 0; // initialize pointers
let pointer2 = pointer1 + 1;
let sum = nums[pointer1] + nums[pointer2]; // get the sum of first two
let answer = null; // set null at first in case target is never met, otherwise change it


// if the first two values don't then we increase pointer 2 till the end
while (true) {
    sum = nums[pointer1] + nums[pointer2];
    if (sum === target) { // if the new sum = target we record the indices as the answer and break from loop
        answer = [pointer1, pointer2];
        break;
    };
    pointer2++;
    if (pointer2 >= nums.length) { // if pointer 2 gets to the end without finding the answer we increment pointer 1 and reinitalize
        pointer1++;
        pointer2 = pointer1 + 1;
    };
    if (pointer1 >= nums.length) break; // if pointer 1 gets to the end of the arr that means we never found the answer so we just break from loop and return null
};
return answer;
};