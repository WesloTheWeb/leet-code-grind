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
Similar to diameter, in which may or may not include root can use DFS for path.
Record
*/
var longestUnivaluePath = function (root) {
    // base case
    if (!root) return 0;
    return Math.max(
        longestPassPath(root.left, root.val) + longestPassPath(root.right, root.val), // longest path thru root
        longestUnivaluePath(root.left),
        longestUnivaluePath(root.right)
    );
};

// helper function
const longestPassPath = (root, val) => {
    // base case
    if (!root || root.val !== val) return 0;
    const left = longestPassPath(root.left, val);
    const right = longestPassPath(root.right, val);
    return 1 + Math.max(left, right);
};