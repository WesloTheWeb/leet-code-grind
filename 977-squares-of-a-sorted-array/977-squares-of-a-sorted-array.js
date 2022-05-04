/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*APPROACH:
- Take in an array, we want to sort to get it in non-decreasing order.
- once sorted, iterate through each element squaring them, pushing it to a new array.
- return new array that containst the squares.

*/
var sortedSquares = function(nums) {
    let res = [];
    
    for (num of nums) {
      res.push(num * num);  
    };
    
    return res.sort((a,z) => a - z);
};