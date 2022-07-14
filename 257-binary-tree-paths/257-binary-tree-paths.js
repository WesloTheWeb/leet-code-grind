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
 * @return {string[]}
 */
/*
APPROACH:
-dfs to leaf node, return the path

Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

PSEUDO CODE
(Iterative)
- Create stack and path array
- while loop, remove from stack
- each visited node in sequence path record i.e 1 - 2- 5 to a leaf
- dp not include null
? record to leaf node only
*/
var binaryTreePaths = function(root) {
    if (!root) return [];
    const result = [];
    function path(root, str){
        if (!root.left && !root.right) result.push(str + root.val);
        if (root.left) path(root.left, str + root.val + "->");
        if (root.right) path(root.right, str + root.val + "->");
    };
    
    path(root, "");
    
    return result;
};