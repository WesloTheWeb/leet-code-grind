/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function (nums) {

    const helper = (leftSide, rightSide) => {
        // base case
        if (leftSide > rightSide) return null;

        const mid = Math.floor((leftSide + rightSide) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = helper(leftSide, mid - 1);
        root.right = helper(mid + 1, rightSide)

        return root;
    };

    return helper(0, nums.length - 1);
};

