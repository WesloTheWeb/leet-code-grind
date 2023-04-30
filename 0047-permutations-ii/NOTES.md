Step 1.) Understand the Problem
We need to write a JavaScript function that takes an array of numbers (which may contain duplicate elements) and returns all possible unique permutations of the numbers in any order.
​
Step 2.) Identify possible solutions
We can use a backtracking algorithm to generate all possible permutations and then store the unique permutations using a Set or an object to keep track of the visited permutations.
​
Step 3.) Choose a Solution
We will use the backtracking algorithm along with an object to keep track of the unique permutations.
​
Step 4.) Build It
​
Step 5.) Test
Let's test the function with the given examples:
```
const nums1 = [1, 1, 2];
const output1 = uniquePermutations(nums1);
console.log(output1);
// Output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
​
const nums2 = [1, 2, 3];
const output2 = uniquePermutations(nums2);
console.log(output2);
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
```
​
​