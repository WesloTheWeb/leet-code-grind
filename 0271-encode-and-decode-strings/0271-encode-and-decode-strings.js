/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let newString = '';

    for (let str of strs) {
        newString += `${str.length}#${str}`;
    };

    return newString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let results = [];
    let i = 0;

    while (i < s.length) {
        let j = i;

        while (s[j] !== '#') {
            j++;
        };

        let wordLength = parseInt(s.substring(i,j), 10);

        i = j + 1;
        j = i + wordLength;

        results.push(s.substring(i, j));
        i = j;
    };
    return results;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */