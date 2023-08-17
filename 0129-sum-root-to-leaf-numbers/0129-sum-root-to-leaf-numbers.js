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
var sumNumbers = function(root) {
    let globalSum = 0;
    
    const helper = (node, currentNumber) => {
        // base case
        if (!node) return;
        
        // action
        currentNumber = currentNumber * 10 + node.val;
        
         // If it's a leaf node, add the currentNumber to globalSum
        if (!node.left && !node.right) {
            globalSum += currentNumber;
            return;
        };
        
        // recursion
        helper(node.left, currentNumber);
        helper(node.right, currentNumber);
    };
    
    helper(root, 0);
    return globalSum;
};