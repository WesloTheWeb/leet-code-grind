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
/*Approach:
- We can solve this problem using depth-first search & recursion.
There are three cases:
1. Check if the current node is either nodeOne or nodeTwo
2. Check if the current node's left sub-tree contains either nodeOne or nodeTwo
3. Check if the current node's right sub-tree contains either nodeOne or nodeTwo

- If two out of the three conditions are true, return the current node as the result. Otherwise, iterate on the path where the child has nodeOne/nodeTwo.

For this particular variation we are returning the node not the node.val. 
*/
var lowestCommonAncestor = function (root, p, q) {
    // base case
    if (!root) return null;

    if (root == p || root == q) {
        return root;
    };

    // recursive case
    const leftSubTree = lowestCommonAncestor(root.left, p, q);
    const rightSubTree = lowestCommonAncestor(root.right, p, q);

    if (leftSubTree && rightSubTree) {
        return root;
    } else {
        return leftSubTree || rightSubTree;
    };
};