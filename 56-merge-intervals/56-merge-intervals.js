/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/* APPROACH
- we want to merge overlapping subarrays
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
- we know they are or should be sorted`
[1,3], [2,6] we need a way to know that they ARE overlapping. 
a > or < doesnt necessarily always tell but maybe <= or >= ?

best to sort out first, then compare start and end of neighboring to take the end of second subarray.

*/
var merge = function(intervals) {
    let res = [];
    // sort array
    intervals.sort((a, z) => a[0] - z[0]);
    let preEnd;
    for (const [start, end] of intervals) {
      if (preEnd != undefined) { // for the second interval till the end
        if (start > preEnd) { // no intersection, add it
          res.push([start, end]);
          preEnd = end;
        } else { // has intersection, merge
          let pre = res.pop();
          let left = Math.min(pre[0], start);
          let right = Math.max(pre[1], end);
          res.push([left, right]);
          preEnd = right;
        }
      } else { // first element directly add
        res.push([start, end]);
        preEnd = end;
      }
    }
    return res;
};