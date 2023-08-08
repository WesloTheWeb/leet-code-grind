# Question / Findings
- We know that we are flipping the left and right child respectively.
- If we are on a leaf node we stop.
- Recursive from the ground up.
- Probably best to do it that way and pass it up and switch until we reach the root.
​
# Approach
1. create our base case.
2. check our left and right.
2a. if null on left and right, leaf node we return our parent.
3. We do it on both sides and when we reach it then our left becomes right, and right becomes left.