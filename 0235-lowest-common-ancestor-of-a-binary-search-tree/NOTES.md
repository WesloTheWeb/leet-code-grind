# Findings / Assumptions
Because this is a binary search tree we can take advantage of its nature and do this iteratively.
- If p and q are greater than the root we go right.
- If p and q are less than the root we go left.
-else we return the root (case where they are in opposite sub trees).
​
If they are in opposite subtrees its going to be root.