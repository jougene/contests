const { minimumSwaps } = require('../minimum-swaps');

let dataProvider = [
    [[4, 3, 1, 2], 3],
    [[7, 1, 3, 2, 4, 5, 6], 5],
    [[2, 3, 4, 1, 5], 3],
    [[1, 3, 5, 2, 4, 6, 7], 3],
];

test.each(dataProvider)('dataset (arr = %O) | expected - %s', (arr, expected) => {
    let res = minimumSwaps(arr);

    expect(res).toStrictEqual(expected);
});
