Use of three pointers
Approach:
- Use 3 pointers low, mid and high.
If 0 (swap mid with low, mid++, low++)
If 1 (mid++)
if 2 (swap mid with high, mid++, high--)
​
Solution:
```
var sortColors = function (nums) {
let low = 0;
let mid = 0;
let high = nums.length - 1;
​
while (mid <= high) {
if (nums[mid] === 0) {
swapHelper(nums, mid++, low++);
//swap (low, mid)
// [input[mid], input[low]] = [input[low], input[mid]]
} else if (nums[mid] === 2) {
swapHelper(nums, mid, high--)
} else {
mid++;
};
};
};
​
// Key helper that helps with swapping
const swapHelper = (arr, i, j) => {
const temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
};
```
​
Important to note that swap helper method that helps it be plug and chug.