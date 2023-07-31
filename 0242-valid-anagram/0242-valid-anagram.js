/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sOccurrences = countChars(s);
    const tOccurrences = countChars(t);

    for (let [key, value] of sOccurrences.entries()) {
        if (tOccurrences.get(key) !== value) {
            return false;
        }
    };

    // Return true only after checking all characters
    return true;
};

const countChars = (arr) => {
    const hashMap = new Map();

    for (let char of arr) {
        if (hashMap.has(char)) {
            hashMap.set(char, hashMap.get(char) + 1);
        } else {
            hashMap.set(char, 1);
        }
    };

    return hashMap;
};
