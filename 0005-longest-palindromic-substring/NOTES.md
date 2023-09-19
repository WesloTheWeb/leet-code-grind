# Findings
- We need a palindromic substring (same forward and backwards).
- can be  of any length substring
​
**Examples**
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer
​
b a b a d
^-^
Input: s = "cbbd"
Output: "bb"
​
c  b  b  d
^-^
# APPROACHES
- Thinking of sliding window approach. We do two checks, one to see if it is even palindromic and compare the length to any previous found substring. **We want to return the longest substring.**
​
​
The solution submitted is brute force.