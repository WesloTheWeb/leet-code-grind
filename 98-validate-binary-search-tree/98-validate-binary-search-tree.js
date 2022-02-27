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

const isValidBST = (root) => dfs(root, null, null);

const dfs = (node, l, r) => {
    if (!node) return true;
    if (l && l.val >= node.val) return false;
    if (r && r.val <= node.val) return false;
    return dfs(node.left, l, node) && dfs(node.right, node, r);
};
