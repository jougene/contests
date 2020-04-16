const { sockMerchant } = require('../sock-merchant');

let dataProvider = [
    [0, [], 0],
    [3, [1, 2, 1], 1],
    [7, [1, 2, 3, 4, 5, 6, 7], 0],
    [9, [10, 20, 20, 10, 10, 30, 50, 10, 20], 3],
    [7, [1, 2, 1, 2, 1, 3, 2], 2],
];

test.each(dataProvider)('dataset (n = %i | ar = %p | expected = %i)', (n, ar, expected) => {
    let res = sockMerchant(n, ar);

    expect(res).toStrictEqual(expected);
});
