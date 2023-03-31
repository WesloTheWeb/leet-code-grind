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
function goodNodes(root) {
  let count = 0;
  
  const traverse = (node, maxSoFar) => {
    if (!node) return;
    
    if (node.val >= maxSoFar) {
      count++;
      maxSoFar = node.val;
    }
    
    traverse(node.left, maxSoFar);
    traverse(node.right, maxSoFar);
  };
  
  traverse(root, -Infinity);
  
  return count;
}