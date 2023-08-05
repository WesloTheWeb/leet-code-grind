Approach hashmap:
- We can have a frequency map of characters
- as we iterate over the string, if we find it uses same characters we can assume it is an anagram.
​
Pseudo Code:
- Initialize an empty hashmap and a results array.
- Create a frequency array filled with 26 zeros (one for each English lowercase letter).
- Iterate over the input array of strings.
- For each string, reset the frequency array to zeros.
- Iterate over each character in the current string.
- Increment the frequency of the corresponding letter in the frequency array.
- Convert the frequency array into a unique key by joining with a "-" hyphen as a delimiter.
- Check if the key exists in the hashmap:
- If it doesn't, add the key with a new array containing the current string.
- If it does, append the current string to the array associated with that key.
- After processing all strings, iterate over the hashmap's values and append each group (value) to the results array.
- Return the results array.
​