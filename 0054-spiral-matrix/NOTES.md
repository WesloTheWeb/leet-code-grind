Use Four Pointers for Boundary Management: By keeping track of the left, right, top, and bottom boundaries, we can manage our traversal. As we process a row or column, we update the relevant boundary.
​
Order Matters: Ensure you're consistent in the order you traverse. In this example, you're moving in a right -> down -> left -> up order. This consistent movement allows the spiral to be formed.
​
Check Your Boundaries: Especially when dealing with non-square matrices, you must ensure that you don't double-count a row or column. After processing one direction, check the boundaries again before processing the next.
​
Time complexity is Object(n * m) where n is the number of rows and m is the number of columns. This is because every element
is visited exactly oncuechange. The space complexity is also Object(n * m) because all elements are stored in the results
array once.