# Findings
- root to leaf take individual root values as digits and add them up in a root to leaf path.
**example
4-9-5 = 495
4-9-1 = 491
4-0 = 40**
- return output
​
# Approaches
**Brute Force**
- do a root to leaf path, add it as strings
- concatenate and turn to number for when reach leaf node
- push to an array
- add elements in the array
​
**Top down recursion backtrack**
- Root to leaf path combination
- add to a global sum for each time reach leaf.