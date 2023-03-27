PSEUDO CODE
1. first, we'll determine the minimum number of repitions to identify a repeated element
2. Sort the array
3. instantiate counter varaible, set to 0
​
iterate over the array
- begin tracking element occurrences
- if current element is same as previous element, update counter
- else, reset counter to 1
​
- if counter >= minimum number of repetitions, return element
​
​
**Alternate Solution (Not as efficient):**
```
var solution = function(nums) {
nums.sort()
​
const n = nums.length / 2
const minimumRepitions = nums.length - (n)
let counter = 0
​
for (let i = 0; i < nums.length; i++) {
if (i === 0) {
counter++
continue
}
​
if (nums[i] === nums[i - 1]) {
counter++
} else {
counter = 1
}
if (counter >= minimumRepitions) return nums[i]
}
};
```