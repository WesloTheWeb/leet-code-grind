/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
    let currentLine = [];
    let currentLineLength = 0;

    for (let word of words) {
        // Check if adding the next word exceeds the maxWidth or not
        if (currentLineLength + word.length + currentLine.length > maxWidth) {
            // Process current line
            result.push(processLine(currentLine, currentLineLength, maxWidth));
            currentLine = [];
            currentLineLength = 0;
        }

        currentLine.push(word);
        currentLineLength += word.length;
    }

    // Process any remaining words
    if (currentLine.length) {
        result.push(processLastLine(currentLine, maxWidth));
    }

    return result;
};

// Helper functions:
function processLine(words, wordLength, maxWidth) {
    let spaces = maxWidth - wordLength;
    let spaceSlots = words.length - 1;

    // If there's only one word in the line, left-justify it
    if (spaceSlots === 0) return words[0] + ' '.repeat(spaces);

    let evenSpaces = Math.floor(spaces / spaceSlots);
    let extraSpaces = spaces % spaceSlots;

    let result = words[0];

    for (let i = 1; i < words.length; i++) {
        let currentSpace = evenSpaces + (i <= extraSpaces ? 1 : 0);
        result += ' '.repeat(currentSpace) + words[i];
    }

    return result;
}

function processLastLine(words, maxWidth) {
    let result = words.join(' ');
    return result + ' '.repeat(maxWidth - result.length);
}
