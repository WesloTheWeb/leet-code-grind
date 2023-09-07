# Findings
- We would need to take advantage of the charactermap ASCII code of capital letters to compare.
- **key: What determines an uppercase letter to map to their lowercase letter**
**ASCII values, capital letters are 65(A) - 90(Z). Difference is by 32.**
​
Brute Force:
- Using JS built in toLowerCase() method?
​
# Approach
1. Loop through each character of the string.
2. Check if a character is an uppercase letter by comparing its ASCII value. Uppercase letters have ASCII values ranging from 65 (A) to 90 (Z).
3. If it's an uppercase letter, convert it to lowercase by adding 32 to its ASCII value. 4. The difference between the ASCII values of an uppercase letter and its corresponding lowercase letter is 32.
5. If the character is not an uppercase letter, leave it as it is.
6. Construct the result string using the transformed characters.
​
​