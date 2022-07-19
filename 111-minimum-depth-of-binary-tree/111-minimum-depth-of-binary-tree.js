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
var minDepth = function(root) {
    const queue = root ? [root] : [];  // at least one element in the queue to kick start bfs
    let depth = 0;  // we start from 0 because popping root will add 1 depth
    while (queue.length > 0) {  // as long as there is element in the queue
        depth++;
        const n = queue.length;  // number of nodes in current level
        for (let i = 0; i < n; i++) {  // dequeue each node in the current level
            const node = queue.shift();
            if (!node.left && !node.right) {
                return depth; // found leaf node, early return
            };

            for (const child of [node.left, node.right]) {
                if (child) queue.push(child);
            };
        };
    };

    return depth;
};