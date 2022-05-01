/**
 * @param {string} s
 * @return {string}
 */
/* APPROACH
- an array list of vowels in a variable
- check against that variable if it contains any in array
- change the index of vowels
- use of two pointer approach
*/
var reverseVowels = function(s) {
  const regExp = /[aeiou]/i;
    const letters = s.split("");
    const n = letters.length;
    let i = 0;
    let j = n - 1;

    while (i < j) {
        const leftChar = letters[i];
        const rightChar = letters[j];

        if (!regExp.test(leftChar)) {
            i++;
        }
        else if (!regExp.test(rightChar)) {
            j--;
        }
        else {
            letters[i++] = rightChar;
            letters[j--] = leftChar;
        }
    }

    return letters.join("");
};