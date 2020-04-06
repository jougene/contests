const { countingValleys } = require('../counting-valleys');

let dataProvider = [
    [4, 'DUUD', 1],
    [8, 'UDDDUDUU', 1],
    [14, 'DUUDDUUDDUUDDU', 4],
];

test.each(dataProvider)('dataset (n = %i | s = %s | expected = %i)', (n, s, expected) => {
    let res = countingValleys(n, s);

    expect(res).toBe(expected);
});
