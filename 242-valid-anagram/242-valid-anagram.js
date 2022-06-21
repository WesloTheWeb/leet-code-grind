/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
      // string mismatch
  if (s.length !== t.length) return false;

  // object count, create objects
  const sCount = {};
  const tCount = {};
  // const n = s.length;

  for (let i = 0; i < s.length; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0; // if not there intialize zero
    if (!tCount[t[i]]) tCount[t[i]] = 0; // if not there intialize zero
    /* the s[i] and t[i] denotes value in the array which is a string thats a charcter */
    sCount[s[i]]++
    tCount[t[i]]++
  };
  // to see mapping
  console.log(s, ":", sCount);
  console.log(t, ":", tCount);

  // This is to see if they got the same count
  for (let ch in sCount) {
    if (tCount[ch] !== sCount[ch]) return false;
  };

  return true
};