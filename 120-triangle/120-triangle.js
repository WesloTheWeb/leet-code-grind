/**
 * @param {number[][]} triangle
 * @return {number}
 */
/*
   2
  3 4
 6 5 7
4 1 8 3

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
kinda picking the least number in each row to go from top to bottom

*/
var minimumTotal = function(triangle) {
  const len = triangle.length;
    
  if (!triangle || !len) {
    return 0;
  };

  const minArr = triangle[len - 1];
    
  for (let i = len - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      minArr[j] = Math.min(minArr[j], minArr[j + 1]) + triangle[i][j];
    };
  };
    
  return minArr[0];
};