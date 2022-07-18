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
var levelOrder = function (root) {
    // instantiate and create our variables
    let queue = root ? [root] : [];
    let result = [];

    // standard while loop of queue
    while (queue.length > 0) {
        // create two arrays for current level and next level
        let currLvl = [];
        let nextLvl = [];

        // This is the inner for loop we need to use to differentiate between current level and next level
        queue.forEach((node) => {
            currLvl.push(node.val);
            // enque the children of current node value
            if (node.left) nextLvl.push(node.left);
            if (node.right) nextLvl.push(node.right);
        });

        // queue is the nextlvl and we push our current levels into result array.
        queue = nextLvl;
        result.push(currLvl);
    };

    return result;
};
