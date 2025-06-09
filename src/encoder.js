const encodeHexToWords = (hex, wordList) =>
  hex.split('').map(char => wordList[parseInt(char, 16)]).join(' ');

const decodeWordsToHex = (guedesText, wordList) =>
  guedesText.trim().split(/\s+/).map(word => {
    const index = wordList.indexOf(word);
    if (index === -1) throw new Error(`Invalid word in ciphertext: ${word}`);
    return index.toString(16);
  }).join('');

module.exports = {
  encodeHexToWords,
  decodeWordsToHex
};

