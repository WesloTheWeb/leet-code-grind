/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */

var findLongestWord = function (s, dictionary) {
    if (s.length < 1 || dictionary.length < 1) {
        return '';
    };

    dictionary.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        };

        return b.length - a.length;
    });


    for (let i = 0; i < dictionary.length; i++) {
        const word = dictionary[i];

        if (word.length > s.length) {
            continue;
        };

        let wordIndex = 0;

        for (let j = 0; j < s.length; j++) {

            if (s[j] === word[wordIndex]) {

                if (wordIndex === word.length - 1) {
                    return word;
                };

                wordIndex += 1;
            };
        };
    };

    return '';
};