/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const results = [];
    
    // boundaries
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    while (left <= right && top <= bottom) {
        // process the top row
        for (let i = left; i <= right; i++) {
            results.push(matrix[top][i]);
        }; 
        top++;
        
        for (let i = top; i <= bottom; i++) {
            results.push(matrix[i][right]);  
        };
        right--;
        
        // check our boundaries before proceeding
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                results.push(matrix[bottom][i]);
            };
            bottom--;
        };
        
        if (left <= right) {
          // process the leftmost column.
            for( let i = bottom; i >= top; i--) {
                results.push(matrix[i][left]);
            };
            left++;
        };  
    };
    
    return results;
};