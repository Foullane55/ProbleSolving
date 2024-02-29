function numberToSpeech(number) {
    const data = [
        [0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'],
        [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine'],
        [10, 'ten'], [11, 'eleven'], [12, 'twelve'], [13, 'thirteen'], [14, 'fourteen'], [15, 'fifteen'],
        [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'], [19, 'nineteen'],
        [20, 'twenty'], [30, 'thirty'], [40, 'forty'], [50, 'fifty'], [60, 'sixty'],
        [70, 'seventy'], [80, 'eighty'], [90, 'ninety'],
        [100, 'hundred'], [1000, 'thousand'], [1000000, 'million'],
        [1000000000, 'billion'], [1000000000000, 'trillion']
    ];

    if (number < 0) {
        return "minus " + numberToSpeech(-number);
    }
    if (number === 0) {
        return "zero";
    }

    let result = '';
    for (let i = data.length - 1; i >= 0 && number > 0; i--) {
        const [num, word] = data[i];
        if (number >= num) {
            const rest = Math.floor(number / num);
            if (num >= 100) {
                result += `${numberToSpeech(rest)} ${word} `;
            } else {
                result += `${word} `;
            }
            number %= num;
        }
    }
    return result.trim();
}
