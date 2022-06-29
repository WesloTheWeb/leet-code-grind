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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let result = [];
    inOrder(root, result);
    let low = 0;
    let high = result.length - 1;
    
    while (low < high) {
          if (result[low] + result[high] === k) {
              return true;
          }
           else if (result[low] + result[high] > k) {
            high--;
          }
           else { 
            low++;
          };
        };
    
    return false;
};

function inOrder(root, result) {
    if (root !== null) {
        inOrder(root.left, result);
        result.push(root.val);
        inOrder(root.right, result);
    };
};