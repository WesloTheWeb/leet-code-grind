/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
     // Step 1
  if (!matrix.length) {
    return matrix;
  }

  // Step 2
  let m = matrix.length;
  let n = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          firstRowHasZero = true;
        }
        if (j === 0) {
          firstColHasZero = true;
        }
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // Step 3
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 4
  if (firstRowHasZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  // Step 5
  return matrix;
};