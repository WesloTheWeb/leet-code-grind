/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*
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

*/
var groupAnagrams = function(strs) {
    const groupedWords = new Map();
    const results = [];
  
    for (let str of strs) {
      // creates 26 empty array cells to represent a - z
      const charCounts = new Array(26).fill(0);

      // inner for loop to iterate over current element's characters.
      for (let char of str) { 
        // iterate over the characters of the string, using ascii values for index.
          charCounts[char.charCodeAt() - 'a'.charCodeAt()]++;
      };
      
      // create a unique key from the frequency map
      const key = charCounts.join('-');
      
      // if the key is not in the map, add it
      if (!groupedWords.has(key)) groupedWords.set(key, []); 

      // add the string to the array corresponding to the key
      groupedWords.get(key).push(str); 
      };
  
      // Iterate over the values of the map and push them into the results array
      for (let group of groupedWords.values()) {
          results.push(group);
      };
  
    return results; // return the results array
};