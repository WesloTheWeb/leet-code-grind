/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let remainder = ((sum % k) + k) % k;
    if (map.has(remainder)) {
      count += map.get(remainder);
    }
    map.set(remainder, (map.get(remainder) || 0) + 1);
  }

  return count;
};