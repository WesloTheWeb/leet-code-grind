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
/*
- DFS (Iterative) 
allows us to use stack and can do one of the 3 traversals
Preorder --> node, left, right
*/
var preorderTraversal = function(root) {
    const stack = root ? [root] : [];
    const resArr = [];
    
    while (stack.length) {
        const current = stack.pop();
        
        resArr.push(current.val);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    };
    
    return resArr;
};