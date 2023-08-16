​
**5. Return:**
Return the results array which now contains the k most frequent elements.
```
function topKFrequent(nums, k) {
const results = [];
const frequencyMap = new Map();
​
// populate our hashmap
for (let num of nums) {
if (frequencyMap.has(num)) {
frequencyMap.set(num, frequencyMap.get(num) + 1);
} else {
frequencyMap.set(num, 1);
}
}
​
// Convert Map to Array and sort by frequency
let sortedFrequencies = [...frequencyMap.entries()].sort((a, z) => z[1] - a[1]);
​
// Push only the numbers into the results array
for (let i = 0; i < k; i++) {
results.push(sortedFrequencies[i][0]);
}
​
return results;
}
```
​
​