Element Sum: This is just the sum of all elements in the array. We can achieve this by simply iterating through the array and adding up the numbers.
​
Digit Sum:
a. For each element in the array, convert the number to a string.
b. For each character (which is a digit) in the string, convert it back to a number and add to the digit sum.
​
Return the absolute difference between the element sum and the digit sum.
​
​
# Big O
Time Complexity:
For the element sum, the time complexity is O(n) where n is the number of elements in the array.
For the digit sum, in the worst case, we are iterating through each digit of every number. Let's say the average number of digits in a number is m. Therefore, the time complexity for digit sum is O(m * n).
Overall, the time complexity is O(n + m * n) = O(m * n).
​
Space Complexity:
Since we are using a constant amount of extra space (for storing the sums), the space complexity is O(1).