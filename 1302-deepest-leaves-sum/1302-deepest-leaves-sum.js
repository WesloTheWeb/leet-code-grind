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
- DFS recursive approach to go to the deepest leaves.
- Need to check if they are a leaf node
NOTE: May be worth in future knowing in code how to identify a leaf node at each level
- Would we need a depth counter to determine if its the deepest?
- I really dont know how to do this... 

*/

var deepestLeavesSum = function (root, current = 0, deep = getDeepest(root)) {
  if (root == null) return 0;
  if (root.left == null && root.right == null)
    return current + 1 == deep ? root.val : 0;

  return deepestLeavesSum(root.left, current + 1, deep) + deepestLeavesSum(root.right, current + 1, deep);
};

const getDeepest = (root, deep = 0) => {
  if (root == null) return deep;
  return Math.max(getDeepest(root.left, deep + 1), getDeepest(root.right, deep + 1));
};