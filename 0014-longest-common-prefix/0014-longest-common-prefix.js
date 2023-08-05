/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let results = '';
    let minLength = Math.min(...strs.map(str => str.length));
    
    // Null Check
    if (!strs.length) return results;
    
    for (let i = 0; i < minLength; i++) {
        let char = strs[0][i] // begins our check
        
        if (strs.some(str => str[i] !== char)) {
            break;
        };
        
        results += char;
    };
                                         
    return results;
};