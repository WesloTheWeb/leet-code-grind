Examples:
Input: strs = ['bad', 'baddies', 'baddest']
Output:'bad'
longest common prefix.
​
What if it was a tie?
Input: strs = ['fun', 'funky', 'cat', 'catheter', 'dog']
Output: 'fu' or 'ca'
lets just assume first come first serve
​
questions:
Are we considering capitalized words case sensitivity?
If there is no input, no output (null case)
​
**Approaches**
We'll need to find our "chain" prefix.
- Since we know this is a prefix we can for sure start with the 0th-1st index of our string for a comparison as we iterate through.
- Common prefix suggest has to be on all elements in the array.
Example 1:
Input: strs = ["flower","flow","flight", "float"]
Output: ""
Would be empty string because we need a common prefix for all elements in the array
​
function that checks the first few characters [0] and [1] indices, and if run across a string that doesn't have it, then we can discard and return empty because that wouldn't be a common prefix.
​
# Pseudocode
1. initiate an empty string called "result". This will hold the longest common prefix.
2. Check if the array "strs" is empty. If it is, return the empty string "result" immediately.
3. Use the map function on "strs" to generate a new array that contains the lengths of each string in "strs".
4. Use the spread operator (...) with Math.min to determine the shortest length among all the strings in the array. Store this value in a variable called "minLen".
5. Start a loop from 0 to "minLen - 1". This loop represents the position of the character in each string you are currently checking.
6. Inside this loop, get the character at the current position from the first string. Store this character in a variable called "char".
​
Check if any string in "strs" has a different character at the current position. Use the some function on "strs" to accomplish this.
​
If the character at the current position is different in any of the strings, break the loop immediately.
​
If the character at the current position is the same in all the strings, append this character to "result".
​
Once the loop ends, return the string "result". This string is the longest common prefix among all the strings in the array.