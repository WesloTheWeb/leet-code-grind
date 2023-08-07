Transpose the matrix: This means you swap matrix[i][j] with matrix[j][i] for all i, j. After this step, the rows of the matrix become the columns.
Reverse each row: This will give the desired rotation. This means for each row, you swap the first element with the last, the second element with the second-to-last, and so on.
​
Approach:
**Transposing the Matrix:**
Loop over the matrix using a variable i from 0 to n-1.
For each i, loop over the matrix using another variable j from i to n-1 (Note: We start from i here to avoid swapping elements back to their original position).
Swap matrix[i][j] and matrix[j][i].
​
**Reversing each row:**
Loop over the matrix using a variable i from 0 to n-1.
For each i, loop over the matrix using another variable j from 0 to n/2 - 1.
Swap matrix[i][j] and matrix[i][n-1-j].