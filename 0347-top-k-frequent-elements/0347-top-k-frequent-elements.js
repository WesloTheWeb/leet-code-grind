/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
1. Create results array
2. Create frequency hashmap
3. Iterate over the nums array, filling out the hashmap.
4. sort the frequency hashmap from greatest to least
5. iterate over the sorted frequency 'k' times and grab the elements to push to results
6. Return results.
*/

var topKFrequent = function(nums, k) {
    const results = [];
    const frequencyMap = new Map();

    // populate our hashmap
    for (let num of nums) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1)
        } else {
          frequencyMap.set(num, 1);  
        };
    };
    
    // sort from greatest to least
    let sortedFrequencies = [...frequencyMap.entries()].sort((a, z) => z[1] - a[1]);
    
    // iterate k times to grab the most frequent elements.
    for (let i = 0; i < k; i++) {
        results.push(sortedFrequencies[i][0]);
    };
   
    return results;
};