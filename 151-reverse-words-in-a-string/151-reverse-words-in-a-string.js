/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const results = []
    const values = s.split(' ')
    
    for (let i = 0; i < Math.floor(values.length / 2); i++) {
        const idx = (values.length - i) - 1;
        [values[i], values[idx]] = [values[idx], values[i]]
    }
    
    for (let i = 0; i < values.length; i++) {
        const char = values[i]
        if (char.trim().length > 0) results.push(char)
    }
    
    return results.join(' ')
}