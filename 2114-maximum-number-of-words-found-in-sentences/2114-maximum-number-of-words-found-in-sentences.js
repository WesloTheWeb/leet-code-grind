/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0; 
    
    for (let sentence of sentences) {
        let currentWords = sentence.split(' ').length;
        
        // update the maxWords if current sentence has more words than previous max
        maxWords = Math.max(maxWords, currentWords);
    };
    
    return maxWords;
};