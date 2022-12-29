/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function(mat, r, c) {
  // Check if the reshape operation is possible and legal
  if (mat.length * mat[0].length !== r * c) {
    // Return the original matrix if the reshape operation is not possible and legal
    return mat;
  };

  // Initialize the reshaped matrix
  let reshapedMat = [];
  for (let i = 0; i < r; i++) {
    reshapedMat.push([]);
  };

  // Fill the reshaped matrix with the elements of the original matrix
  let row = 0;
  let col = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      reshapedMat[row][col] = mat[i][j];
      col++;
      if (col === c) {
        col = 0;
        row++;
      };
    };
  };

  // Return the reshaped matrix
  return reshapedMat;
};