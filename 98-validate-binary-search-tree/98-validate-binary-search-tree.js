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
// var isValidBST = function(root) {
//     if (!root) true;
 
//     return isBST(root);
// };

// const isBST = (node, min = -Infinity, max = Infinity) => {
//     if (!node) return true;
    
//     // base case
//     if (node.value <= min || node.value > max) {
//         return false;
//     };
    
//         if ((node.left && node.value <= min) || (node.right && node.value > max)) {
//         return false;
//     };
    
    
//     return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
    
// };

const isValidBST = (root) => dfs(root, null, null);

const dfs = (node, l, r) => {
    if (!node) return true;
    if (l && l.val >= node.val) return false;
    if (r && r.val <= node.val) return false;
    return dfs(node.left, l, node) && dfs(node.right, node, r);
};
