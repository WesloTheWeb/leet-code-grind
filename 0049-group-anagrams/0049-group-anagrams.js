/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*
PSEUDOCODE:
- Iterate through the array
- add each character to a hashmap where the **key is the sequence**, and t**he value is the string (aka the element).**
- As we are iterating and adding, we should have the words that contains the key of characters in an array value.
- We can iterate our hashmap with a now grouped anagram which contains words of our characters.
*/
var groupAnagrams = function(strs) {
    const groupedWords = new Map(); // was: groupedWords
    const results = []; // was: results
    
    for(let str of strs) { // was: let i = 0; i < strs.length; i++
        const charCounts = new Array(26).fill(0);
        for(let char of str) { // iterate over the characters of the string
            charCounts[char.charCodeAt() - 'a'.charCodeAt()]++;
        }
        
        const key = charCounts.join('-');
        // create a unique key from the frequency map
        
        if (!groupedWords.has(key)) groupedWords.set(key, []); 
        // if the key is not in the map, add it
        
        groupedWords.get(key).push(str); 
        // add the string to the array corresponding to the key
    }
    
    // Iterate over the values of the map and push them into the results array
    for (let group of groupedWords.values()) {
        results.push(group);
    }
    
    return results; // return the results array
};
