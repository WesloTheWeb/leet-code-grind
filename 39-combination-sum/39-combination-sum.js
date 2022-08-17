/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/* APPROACH:
- Figure out base case, create variables output array
- write recursive function to check if can be sum to target
- if yes, push to output array
- return output array

*/
let can, n;
const combinationSum = (a, target) => {
    a.sort((x, y) => x - y);
    let res = [];
    can = a, n = a.length;
    dfs(target, 0, res, []);
    return res;
};

const dfs = (sum, start, res, path) => {
    if (sum == 0) return res.push([...path]);
    for (let i = start; i < n; i++) {
        if (can[i] > sum) return;
        path.push(can[i]);
        dfs(sum - can[i], i, res, path); // allow select the same number, change i + 1 to i 
        path.pop();
    }
};

