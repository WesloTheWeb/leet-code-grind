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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
/*APPROACH:
- We can use a DFS

// This pseudo-code recursively traverses the tree and
// records the depth and parent for each node.
function dfs(node, parentNode = None) {
    if (node != null) {
        depth[node.val] = 1 + depth[parentNode.val]
        parent[node.val] = parentNode
        dfs(node.left, node)
        dfs(node.right, node)
    }
}

PSEUDO-CODE:
1. Start traversing the tree from the root node. Look for Node x and Node y.
2. Record the depth when the first node i.e. either of x or y is found and return true.
3. Once one of the nodes is discovered, for every other recursive call after this discovery, we return false    if the current depth is more than the recorded depth. This basically means we didn't find the other node      at the same depth and there is no point going beyond. This step of pruning helps to speed up the recursion    by reducing the number of recursive calls.
4.Return true when the other node is discovered and has the same depth as the recorded depth.

Recurse the left and the right subtree of the current node. If both left and right recursions return true and the current node is not their immediate parent, then Node x and Node y are cousins. Thus, isCousin is set to value true.
*/
var isCousins = function(root, x, y) {
    
 const callDFS = (val, myRoot=root, parent=null, depth=0) => {
        if(!myRoot) return false;
        if(myRoot.val === val) return [depth, parent];
        depth++;
        return callDFS(val, myRoot.right, myRoot.val, depth) || callDFS(val, myRoot.left, myRoot.val, depth);
    }
    
    const [depthX, parentX] = callDFS(x);
    const [depthY, parentY] = callDFS(y);

    return (parentX !== parentY) && (depthX === depthY)
};