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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
/*APPROACH
-BST is already ordered, and we are given the root.
- a minimum is the low, max is high
- if any are in range or path we add that up and return

root + 
any number higher than low, but less than high + 
any number lower than high, but higher than low
*/
var rangeSumBST = function(root, low, high) {
  let sum = 0;
  
  const dfs = (node) => {
    if (!node) {
      return;
    }
    
    if (node.val < low) {
      dfs(node.right);
      return;
    }
    
    if (node.val > high) {
      dfs(node.left);
      return;
    }

    sum += node.val;
    dfs(node.left);
    dfs(node.right);
  };
    
  dfs(root);
  return sum;
  
};