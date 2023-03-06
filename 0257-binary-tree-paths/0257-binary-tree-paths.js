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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];

    const findTreePaths = (node, path) => {
        // base cases
        if (!node) return;
        // if there is a node, push value to path.
        path.push(node.val);
        
        // leaf node
        if (!node.left && !node.right) {
            paths.push(path.join("->"))
        } else {
            findTreePaths(node.left, [...path]);
            findTreePaths(node.right, [...path])
        };
    };

    findTreePaths(root, []);

    return paths;
};