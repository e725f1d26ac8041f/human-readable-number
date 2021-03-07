module.exports = function toReadable(number) {
    const ones = number % 10;
    const tens = Math.floor((number % 100) / 10);
    const hundreds = Math.floor((number % 1000) / 100);

    const onesNames = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    const tensNames = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    if (number === 0) return 'zero';

    const result = new Array();
    if (hundreds) result.push(onesNames[hundreds], 'hundred');
    if (tens < 2) {
        if ((tens * 10) + ones) {
            result.push(onesNames[(tens * 10) + ones]);
        }
    } else {
        if (ones) {
            result.push(tensNames[tens], onesNames[ones]);
        } else {
            result.push(tensNames[tens]);
        }
    }

    return result.join(' ');
}
