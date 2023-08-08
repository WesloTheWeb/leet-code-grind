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
 * @return {TreeNode}
 */
/*
1. bottom up approach recursion.
2. define base case of node.
3. swap left and right.
4. bubble up to the top.
*/
var invertTree = function(root) {
    
    const helper = node => {
        // base case
        if (!node) return null;
        
        // swap
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        helper(node.left);
        helper(node.right);
    };
    
    helper(root);
    
    return root;
};