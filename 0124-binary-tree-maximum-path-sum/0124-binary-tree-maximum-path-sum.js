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

let maxSum = Number.MIN_SAFE_INTEGER;

var maxPathSum = function(root) {

    maxSum = Number.MIN_SAFE_INTEGER;
    helper(root);
    return maxSum;
};

function helper(node) {
    if (!node) return 0;

    // Calculate the maximum path sum for left and right children
    // We ignore negative sums, since they'll decrease our path value
    let left = Math.max(helper(node.left), 0);
    let right = Math.max(helper(node.right), 0);
    
    // New possible max path including this node's value
    let newPathSum = node.val + left + right;

    // Update global max
    maxSum = Math.max(maxSum, newPathSum);
    
    // Return the max path that can be extended from current node (either go left or right)
    return node.val + Math.max(left, right);
}