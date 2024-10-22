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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        
        // Visit root first
        result.push(node.val);
        // Then traverse left subtree
        traverse(node.left);
        // Finally traverse right subtree
        traverse(node.right);
    }
    
    traverse(root);
    return result;
};