module.exports.zerosToEnd = numbers => {
    let size = numbers.length;
    let firstZeroIndex;
    let zeroMet = false;

    for (let i = 0; i < size; i++) {
        let elem = numbers[i];
        if (elem === 0) {
            if (!zeroMet) {
                firstZeroIndex = i;
            }
            zeroMet = true;
        } else {
            if (zeroMet) {
                // swap
                let buf = elem;
                numbers[i] = numbers[firstZeroIndex];
                numbers[firstZeroIndex] = buf;
                firstZeroIndex++;
            }
        }
    }

    return numbers;
};
