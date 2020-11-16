const { minimumBribe } = require('../new-year-chaos');

let dataProvider = [
    [[1, 2, 3], 0],
    [[1, 2, 3, 5, 4], 1],
    [[2, 1, 5, 3, 4], 3],
    [[2, 5, 1, 3, 4], 'Too chaotic'],
    [[1, 2, 5, 3, 7, 8, 6, 4], 7],
    [[2, 5, 1, 3, 4], 'Too chaotic'],
];

test.each(dataProvider)('dataset (q = %O | expected = %s)', (q, expected) => {
    let res = minimumBribe(q);

    expect(res).toStrictEqual(expected);
});
