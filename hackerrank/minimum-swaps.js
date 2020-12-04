const minimumSwaps = arr => {
    let swaps = 0;
    let known = {};
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let shouldBe = i + 1;
        let onOwnPlace = el === shouldBe;
        if (!onOwnPlace) {
            let shouldBeIdx;
            if (known[shouldBe]) {
                shouldBeIdx = known[shouldBe];
            } else {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] === shouldBe) shouldBeIdx = j;
                }
                known[el] = shouldBeIdx;
            }
            swap(arr, i, shouldBeIdx);
            swaps++;
        }
    }

    return swaps;
};

const swap = (arr, idx1, idx2) => {
    let buf = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = buf;
};

module.exports = { minimumSwaps };
