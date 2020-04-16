const { rotLeft } = require('../ctci-array-left-rotation');
const util = require('util');

let dataProvider = [
    [2, 1, [1, 2], [2, 1]],
    [5, 1, [1, 2, 3, 4, 5], [2, 3, 4, 5, 1]],
    [5, 2, [1, 2, 3, 4, 5], [3, 4, 5, 1, 2]],
    [5, 4, [1, 2, 3, 4, 5], [5, 1, 2, 3, 4]],
    [7, 3, [1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3]],
    [6, 3, [1, 2, 3, 4, 5, 6], [4, 5, 6, 1, 2, 3]],

    [10, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]],
];

test.each(dataProvider)('dataset (n = %i | d = %i | arr = %O | expected = %O)', (n, d, arr, expected) => {
    let res = rotLeft(n, d, arr);

    expect(res).toStrictEqual(expected);
});
