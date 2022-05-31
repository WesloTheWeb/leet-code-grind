/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

/*
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

APPROACH:
- Need two for loops. Horizontal / Vertical
- Transforming one array to another:
            
indices:   0 1 2   0 1 2
matrix = [[1,2,3],[4,5,6]]


transposedMatrix = [[1,4], [2,5], [3,6]]

- We want to iterate through the array, while creating a new one that is transposed values.
- Matching indices of the two subarrays
*/
var transpose = function (matrix) {
    let result = [];
    let row = matrix.length;
    let col = matrix[0].length;
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (!result[j]) {
                result[j] = [];
            }
            result[j][i] = matrix[i][j];
        }
    }
    return result;
};

/*########
REFLECTION 
###########
- Did not know what to do exactly with the two for loops, well how exactly to put my words into code
row and columns.
- I haven't done 2D matrices much.
*/
