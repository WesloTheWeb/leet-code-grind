# Findings / Question
Basically how far tree go
- can probably count each time we go down to children since that is to a level until we reach a root node
​
edge cases:
need to consider longest path, because if DFS might count double for left and right at same level
​
Pseudo code
- DFS traversal recursive
- counter for each child til we reach leaf node.
- acts as a current high.