/**
 * @param {string} s
 * @return {number}
 */
/*
APPROACH
- If find character convert to value, use the 7 character rule have
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

Goal: Convert s (string) into int.
- If statements for each character
- Make rule for exception on the subtraction IV = 4, VI = 6

Pseudo code
- Break string down into each character.
- Convert character to number, for special cases have right value.
- Iterate through since we want each value.
- Add number for sum
- Return sum

*/

var romanToInt = function(s) {
    const dictionary = { 
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    let res = 0;
    s.split('').forEach((num, i) => {
        if (dictionary[num] < dictionary[s[i + 1]]) {
            res -= dictionary[num];
        } else {
            res += dictionary[num];
        }
    });
    
    return res;
};
