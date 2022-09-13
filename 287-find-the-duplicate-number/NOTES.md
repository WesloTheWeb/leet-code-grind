APPROACH:
- We could iterate through the array and each number add to a hashmap/
- Each number become its own key and gets a value of number of times
- If run into same value, we can return the key
​
​
Initial Attempt
```
const numMap = new Map();
for (let i = 0; i < nums.length; i++) {
if (numMap.has(nums[i])) {
// create key
numMap.set(nums[i]);
} else {
return nums[i];
};
};
```