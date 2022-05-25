/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

function isToeplitzMatrix(matrix) {
  const auxArr = [];
  for (let row = 0; row < matrix.length - 1; row++) {
    for (let col = 0; col < matrix[row].length - 1; col++) {
      // do our checks
      let isEqual = hasEqualValues(matrix, row, col);
      let isItStillEqual = isStillEqual(auxArr, matrix, row);
      if (isEqual && isItStillEqual) {
        auxArr.push(col);
      } else {
        return false;
      }
    };
  };
  return true;
};

const hasEqualValues = (matrix, row, col) => {
  let nextNumberOfCols = matrix[row + 1] ? matrix[row + 1].length : undefined;
  let first = matrix[row][col];
  let next = col + 1 >= nextNumberOfCols ? undefined : matrix[row + 1][col + 1];
  if (first || next) {
    if (first === next) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

const isStillEqual = (auxArray, matrix, row) => {
  let first = matrix[row][auxArray[auxArray.length - 1]];
  let next = matrix[row + 1][auxArray[auxArray.length - 1] + 1];
  if (first === next) {
    return true;
  } else {
    return false;
  }
}

