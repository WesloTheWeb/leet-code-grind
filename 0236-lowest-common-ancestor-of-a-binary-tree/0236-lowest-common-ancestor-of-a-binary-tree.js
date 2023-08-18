/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
      // base case
  if (!root || root === p || root === q) {
      return root;
  }

  // Recursively look for p and q in the left subtree
  let left = lowestCommonAncestor(root.left, p, q);

  // Recursively look for p and q in the right subtree
  let right = lowestCommonAncestor(root.right, p, q);

  // If p and q are found on different sides of root, return root
  if (left && right) {
      return root;
  }

  // If p and q are found on the same side, return that side's result
  return left ? left : right;
};