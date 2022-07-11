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
 * @return {number[]}
 */
/* APPROACH:
- Since we want to return an array of the largest value in each row, BFS would be appropriate.

PSEUDO CODE:
- Create a BFS 
- Create variable array to track the largest at each level
- On each level, record the max value

*/
var largestValues = function (root) {
    if (root === null) return [];
    let queue = [root];
    let largestVal = [];
    while (queue.length) {
        let nodeList = queue;
        let newList = [];

        let curMax = -Infinity;
        for (let node of nodeList) {
            curMax = Math.max(node.val, curMax);

            if (node.left) {
                newList.push(node.left);
            }

            if (node.right) {
                newList.push(node.right);
            }
        }

        largestVal.push(curMax);
        queue = newList;
    }

    return largestVal;
};