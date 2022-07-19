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
/*Approach
- Set up queue and right side variable
- Within while loop, create variable that refers to queue.length
- We also want to push to our rightSide variable array. 
VERY IMPORTANT: We hardcode the first index
- For the first for loop, we are dequeing each node in the current level.
- inner for loop, put the right child first followed by left, because we
are hard coding the 0th (first) index, it will always be the rightmost one since its first.
- return rightSide array outside of loop.
*/ 

var rightSideView = function (root) {
    const queue = root ? [root] : [];
    const rightSide = [];

    while (queue.length) { // as long as there is element in the queue
        const n = queue.length; // number of nodes in current level
        rightSide.push(queue[0].val) // only append the first node we encounter since it's the rightmost

        for (let i = 0; i < n; i++) {  // dequeue each node in the current level
            const node = queue.shift();
            // we add right children first so it'll pop out of the queue first
            for (child of [node.right, node.left]) {
                if (child) queue.push(child);
            };
        };
    };

    return rightSide;
};