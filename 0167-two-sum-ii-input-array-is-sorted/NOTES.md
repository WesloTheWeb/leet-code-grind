# Question / Findings
- There will be exaclty one solution.
- it is 1-indexed not 0-indexed. We want to repair a pair of indices.
- Already sorted in ascending order.
- Clarification on not using same element twice?
- also clarification one 1-indexed, are ww starting from 1? or is it still iterating 0-index and we add one?
​
# Approach
Two Pointers, low and high since it is already sorted.
We iterate over the array that is sorted, having a running sum to compare to our target.
conditionally move the low and high pointers depending on sum, we are guaranteed there is exactly one.
return the pair of indices once sum is made.
Time: O(n), space: O(!)
# pseudocode
1. Initialize two pointers low and high to be at the start and end of the array respectively.
2. while low is less than high write a while loo
3  make calculations to compare to target.
4. If sum is too high, move high pointer to left,
5. if sum is too low, move low pointer to right.
6. Once find the sum to equal to the target, return the indices.
​