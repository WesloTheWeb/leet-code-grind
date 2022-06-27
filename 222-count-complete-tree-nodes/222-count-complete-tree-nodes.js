/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/*
APPROACH:
- We need a counter to count nodes as we pass
       1
   2       3
 4   5    6
- can do this iteratively or recursive DFS go far down, backtrack, count then do other side?

*/
var countNodes = function(root) {
    let numNodes = 0;
    // base case
    if (!root) return 0;
    
    // recursive case
    return 1 + countNodes(root.left) + countNodes(root.right);
};