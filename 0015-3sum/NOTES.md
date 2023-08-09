if (i !== 0 && nums[i] === nums[i-1]) {
continue;
};
let low = i + 1;
let high = nums.length - 1;
while (low < high) {
let runningSum = nums[i] + nums[low] + nums[high];
if (runningSum === 0) {
results.push([nums[i], nums[low], nums[high]]);
// Move past duplicates to avoid duplicate triplets
while (low < high && nums[low] === nums[low + 1]) low++;
while (low < high && nums[high] === nums[high - 1]) high--;
​
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
```