/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // Set of base cases
    if (!p && !q) {
    // both trees are empty, so they are the same
        return true;
    } else if (!p || !q) {
    // one tree is empty and the other is not, so they are not the same
        return false;
    } else if (p.val !== q.val) {
        // the values of the current nodes are different, so they are not the same
        return false;
    } else {
        
    // recursively compare the left and right subtrees
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
};