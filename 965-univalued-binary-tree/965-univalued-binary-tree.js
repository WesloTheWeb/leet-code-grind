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
 * @return {boolean}
 */
/* 
We want to check each value if its the same, if not its false.
Create a helper recursive function
*/
var isUnivalTree = function(root) {
      return preOrder(root, root.val);
};

function preOrder(node, prevVal) {
    // Null case
    if (node == null) return true;
    
    // Recursive case
    if (node.val != prevVal) return false;
    return preOrder(node.left, node.val) && preOrder(node.right, node.val);
};