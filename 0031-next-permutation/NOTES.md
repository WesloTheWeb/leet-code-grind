​
Find the first decreasing element from the end: Traverse the array from rightmost side and find the first number which is smaller than its next number.
​
Swap this number with the next greatest number on the right: Once we have the number nums[i], we need to swap it with the smallest number nums[j] which is larger than nums[i] and lies to its right.
​
Reverse the sub-array to the right of nums[i]: This is because, after nums[i], we just want the smallest lexicographical order.