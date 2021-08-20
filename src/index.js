const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const splited = expr.split('');

    let countOfLetter = 0;
    let words = '';
    let word = '';

    for (let i = 0; i < splited.length; i = i + 2) {
        countOfLetter += 2;
        if (splited[i] === '*' && splited[i + 1] === '*') {
            word += '*';
        }
        if (splited[i] === '1' && splited[i + 1] === '0') {
            word += '.';
        }
        if (splited[i] === '1' && splited[i + 1] === '1') {
            word += '-';
        }
        if (countOfLetter === 10) {
            if (word === '*****') {
                words += ' ';
            } else {
                words += MORSE_TABLE[word];
            }
        word = '';
        countOfLetter = 0;
        }
    }
    return words;
}

module.exports = {
    decode
}