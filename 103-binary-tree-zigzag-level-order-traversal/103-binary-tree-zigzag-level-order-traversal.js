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
 * @return {number[][]}
 */
/* APPROACH:
- DFS approach since we can go Left and right and down toa leaf node.

*/
var zigzagLevelOrder = function (root) {
    const results = []

    const traverse = (node, level) => {
        if (!node) {
            return []
        }

        if (level >= results.length) {
            results.push([node.val])
        } else if (level % 2 === 0) {
            results[level].push(node.val)
        } else {
            results[level].unshift(node.val)
        };

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    };

    traverse(root, 0);

    return results;
};