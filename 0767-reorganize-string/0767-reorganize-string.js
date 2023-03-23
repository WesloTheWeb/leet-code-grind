/**
 * @param {string} s
 * @return {string}
 */

var reorganizeString = function(s) {
 const charCount = new Array(26).fill(0); // array to count character frequency
  
    // Count frequency of each character
    for (let i = 0; i < s.length; i++) {
      charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
  
    // Create an array of tuples to hold character frequency and character
    const charFreq = [];
    for (let i = 0; i < charCount.length; i++) {
      if (charCount[i] > 0) {
        charFreq.push([charCount[i], String.fromCharCode(i + 'a'.charCodeAt(0))]);
      }
    }
  
    // Sort the array of tuples in descending order of character frequency
    charFreq.sort((a, b) => b[0] - a[0]);
  
    // Create a new string by interleaving the most frequent character with the other characters
    const result = [];
    while (charFreq.length > 0) {
      const first = charFreq.shift();
      if (result.length === 0 || first[1] !== result[result.length - 1]) {
        result.push(first[1]);
        if (--first[0] > 0) {
          charFreq.push(first);
        }
      } else {
        const second = charFreq.shift();
        if (second == null) {
          return "";
        }
          
        result.push(second[1]);
        if (--second[0] > 0) {
          charFreq.push(second);
        }
        charFreq.push(first);
      }
      charFreq.sort((a, b) => b[0] - a[0]);
    }
  
    return result.join("");
}