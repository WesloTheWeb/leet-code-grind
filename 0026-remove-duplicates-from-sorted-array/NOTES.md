# Findings
- We have an array sorted ascending
- k determines how many unique numbers to return.
​
**Examples**
what if k = 5 and nums is just [1, 2, 3]. If k is larger than nums array.
consider negative numbers
​
#  Approach
**3 pointer approach**
- left pointer (beginning), have i start at the beginning, right pointer (end)
- create results array for unique numbers.
​
**[0, 0, 1, 1, 1, 2, 2, 3, 3 ,4 ]**
Input: nums =
[ 0, 1, 1, 1, 2, 2, 3, 3 ,4 ]
p1
p2
**its difficult because we have to remove the elments in the nums array in addition to counting unique elements.**
​
# Solution
Here's the two-pointer approach:
​
1. If the given nums array is empty or has only 1 element, return its length as it is.
2. Initialize i to 0 and j to 1.
3. Traverse the nums array using the j pointer.
4. Whenever nums[i] is not equal to nums[j], this means we've found a new unique element. We then increment i and update nums[i] with nums[j]. This way, we're effectively overwriting duplicates in-place.
5. Keep moving the j pointer until the end of the array.
6. The unique elements count would be i + 1 as i is 0-indexed.