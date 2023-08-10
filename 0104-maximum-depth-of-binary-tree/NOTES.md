# Findings / Question
Basically how far tree go
- can probably count each time we go down to children since that is to a level until we reach a root node
​
edge cases:
need to consider longest path, because if DFS might count double for left and right at same level
​
Pseudo code
​
Base Case:
​
Check if you're at a null node (meaning you've moved past a leaf or you're starting with an empty tree).
If true, return a depth of 0 since there's no depth to a non-existent node.
Recursive Exploration:
​
For the current node, make two recursive calls:
a. Call the algorithm on the left child of the node.
b. Call the algorithm on the right child of the node.
These calls will eventually return the depths of the left and right subtrees respectively.
Calculate Current Depth:
​
Determine the depth of the current node by:
a. Taking the maximum of the depths returned by the left and right recursive calls. This gives the maximum depth below the current node.
b. Adding 1 to account for the depth of the current node itself.
Return Result:
​
Return the depth calculated in the previous step. When you're at the root, this will be the maximum depth of the entire tree.
​
Base Case: