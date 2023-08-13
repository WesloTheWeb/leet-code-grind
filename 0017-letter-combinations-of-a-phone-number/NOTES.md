# Findings / Assumptions
- Numbers 2 - 9, (including 2 and 9).
- Include the mapping of characters... old style texting
- Input is a string of number or numbers.
- Input length is between 0 and 4 (inclusive).
- We would need to map the keys, 0 - 9 and values that the key can have.
- It is in one direction:
- Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
​
doesn't have def combination with abc. in regards to order.
​
Dictionary Structure:
​
Changed the dictionary to be a singular object for easier lookups.
Backtracking Function:
​
Added a backtrack function that takes the current string (current) and the digits left to process (remainingDigits).
If no more digits are left, the current string is added to the results.
Otherwise, the function iterates over the letters corresponding to the first of the remainingDigits, adding each letter to current, and recursively calling itself with the rest of the digits.
Base Case:
​
When remainingDigits.length === 0, this means we've made a choice for every digit and we add the current combination to results.
Recursive Calls:
​
We recursively call backtrack for each possible letter of the current digit. With each call, we reduce the size of remainingDigits by slicing off the first digit. This allows us to progress through the digits and eventually reach our base case.
​
# Approach
We can use a top - down approach and go in order left to right and up to 4 length.
Our input tells us what key and letters to push.
​
​