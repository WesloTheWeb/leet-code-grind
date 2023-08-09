/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/* Approach - 2 pointers w/ iterator to occupy 3 numbers
1. create results array.
2. sort the input the array (o(nlogn)
3. outer loop iterate over the array
4. create inner loop while low < high
5. create runningSum to do calculations and to find triplets
6. return results array


*/
var threeSum = function(nums) {
    const results = [];
    
    nums.sort((a,z) => a - z);
    
    for (let i = 0; i < nums.length; i++) {
         // check for duplicates
        if (i !== 0 && nums[i] === nums[i-1]) {
            continue;
        }
      let low = i + 1;
      let high = nums.length - 1;
   
        while (low < high) {
            let runningSum = nums[i] + nums[low] + nums[high];
            
            if (runningSum === 0) {
                results.push([nums[i], nums[low], nums[high]]);
                 // Move past duplicates to avoid duplicate triplets
                while (low < high && nums[low] === nums[low + 1]) low++;
                while (low < high && nums[high] === nums[high - 1]) high--;

                low++;
                high--;
            } else if (runningSum > 0) {
                high--;
            } else {
                low++;
            };
        };
    };
    
    return results;
};