I can't seem to find what x would be.
​
But would have done recursive DFS
- set variable of number of good nodes
- write helper function
- base case: if (!root) return null
- if value is equal x, then += num of good nodes by 1
- return num of good nodes.
​
CHAT GPT Solution:
​
Explanation:
​
We initialize a count variable to keep track of the number of good nodes. Then we define a recursive function traverse which takes in a node and the maximum value seen so far in the path from the root to the current node. If the current node's value is greater than or equal to the maxSoFar value, then we increment the count and update the maxSoFar value. We then recursively call traverse on the left and right children of the current node.
​
Finally, we call traverse on the root node with an initial maxSoFar value of negative infinity (since any value will be greater than negative infinity) and return the count variable.