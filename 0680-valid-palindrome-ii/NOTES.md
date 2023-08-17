# Findings
- Palindrome equal on each side as we go outside to inside
- Return true or false
- If we have **1 mismatch** we can proceed, but if encounter another mismatch we can return false.
​
# Approach
- 2 pointer approach iterate over the string 's'
- If left and right pointer are the same move left to the right,
and move the right to the left.
- if left !== right, add to counter and move pointers again.
- if they cross and everything match return true
- if another mismatch add to counter and return false.