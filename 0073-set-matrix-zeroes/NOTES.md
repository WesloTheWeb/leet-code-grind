In place, do not create a new array.
- I think if we iterate and find a 0, then keep track of that index and change all of it to 0
- but what throws me off is the row
​
To solve this problem in JavaScript, we can follow the below steps:
​
First, we need to check if the matrix is empty or not. If it is empty, then we can return the same matrix.
​
Then, we can traverse through each element of the matrix and check if any element is zero.
​
If we found any zero element, then we can mark the corresponding row and column as zero. We can do this by marking the first element of the corresponding row and column as zero. We cannot mark the elements in the same iteration because it will lead to incorrect results.
​
In the second iteration, we can set all the elements of the marked rows and columns to zero.
​
Finally, we can return the updated matrix.