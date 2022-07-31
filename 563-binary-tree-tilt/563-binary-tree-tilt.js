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
/* APPROACH:
- DFS, on left and right. current value is the difference between the left and right children. 
Absolute so always positive.
- for new tree, construct new array which will be the sum of left and right children. 
- Go on until reach leaf.



*/
var findTilt = function (root) {
    let tot = 0;

    findSum(root);

    return tot;

    function findSum(node) {
        // base case
        if (node == null) return 0;

        const left = findSum(node.left);
        const right = findSum(node.right);

        const sum = left + right;

        tot += Math.abs(left - right);

        return sum + node.val;
    };
};