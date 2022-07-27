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
/*Approach
- DFS for path finding
Pseudo Code:
1. Initalize an integer variable diameter to keep track of the longest path we find from the DFS.
2. Implement a recursive function longestPath which takes a TreeNode as input. It should recursively explore the entire tree rooted at the given node. Once it's finished, it should return the longest path out of its left and right branches:
3. if node is None, we have reached the end of the tree, hence we should return 0;
we want to recursively explore node's children, so we call longestPath again with node's left and right children. In return, we get the longest path of its left and right children leftPath and rightPath;
4. if leftPath plus rightPath is longer than the current longest diameter found, then we need to update diameter;
5. finally, we return the longer one of leftPath and rightPath. Remember to add 11 as the edge connecting it with its parent.
*/

var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    const longestPath = (treeNode) => {
        if (!treeNode) return 0;

        const leftPath = longestPath(treeNode.left);
        const rightPath = longestPath(treeNode.right);

        // choose the highest between either the left and right subtree or the current diameter.
        diameter = Math.max(leftPath + rightPath, diameter);

        return Math.max(leftPath, rightPath) + 1;
    };

    longestPath(root);

    return diameter;
};