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
var getMinimumDifference = function(root) {
    const nodeValues = [];
  
  function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    nodeValues.push(node.val);
    inOrderTraversal(node.right);
  }
  
  inOrderTraversal(root);
  
  nodeValues.sort((a, b) => a - b);
  
  let minDiff = Infinity;
  
  for (let i = 1; i < nodeValues.length; i++) {
    const diff = Math.abs(nodeValues[i] - nodeValues[i - 1]);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  
  return minDiff;
};