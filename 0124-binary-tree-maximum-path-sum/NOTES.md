# Findings / Assumptions #
We are adding the node value from the root to leaf paths
1
/   \
2      3
- we can traverse in any order, 2 + 1 + 3 gives us 6.
# Approach #1: Bottom Up
We start at the leaf nodes, compute the maximum path sum at the leaf level (base cases), and then use those to compute the maximum path sum for their parent nodes.
For each node, we compute the maximum path sum for its left and right children first (i.e., we solve the problem for the children first, which is a hallmark of bottom-up approach), and then use those to compute the maximum path sum that includes the current node.
​
# Pseudo Code:#
For every node:
Calculate the maximum path sum from its left child (if exists).
Calculate the maximum path sum from its right child (if exists).
Update the global maximum path sum considering the current node value, the left maximum path, and the right maximum path.