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
 * @return {number[][]}
 */
/*
- Two queues, where one queue is our normal to currLevel and our other is nextLvl.
- Inside of the current queue we want to push all elements and push their children to the the other queue, nextLvl.
- queue will now be equal to next Lvl and we continue the loop.
*/
var levelOrder = function(root) {
    let queue = root ? [root] : [];
    let results = [];
    
    while (queue.length > 0) {
        let currentLevel = [];
        let nextLevel = [];
        
        queue.forEach((node) => {
           currentLevel.push(node.val);
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        });
        
        queue = nextLevel;
        results.push(currentLevel);
    };
    
    return results;
};