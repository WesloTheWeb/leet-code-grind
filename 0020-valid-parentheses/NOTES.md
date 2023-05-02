An input string is valid if:
​
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.
**Examples**
Example 1:
Input: s = "()"
Output: true, match
​
Example 2:
Input: s = "()[]{}"
Output: true, match
​
Example 3:
Input: s = "(]"
Output: false, mismatchj
​
We got three types of ( ) [ ] or { }, we might can use a **stack**.
- because to be a valid we all need an opening & closing match, we can assume odd number length is false because there is an odd one out.
- Might can do this recursively, and with specific base case.
- The subsequent string need to match we cannot have
`[(])`
​
​