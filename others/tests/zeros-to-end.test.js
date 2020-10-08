const { zerosToEnd } = require('../zeros-to-end');

let dataProvider = [
    [
        [1, 0],
        [1, 0],
    ],
    [
        [1, 0, 1],
        [1, 1, 0],
    ],
    [
        [5, 4, 0, 0, 0, 2, 0, 4, 5, 0, 9],
        [5, 4, 2, 4, 5, 9, 0, 0, 0, 0, 0],
    ],
];

test.each(dataProvider)('dataset "%p" | expected = %p', (numbers, expected) => {
    let res = zerosToEnd(numbers);

    expect(res).toStrictEqual(expected);
});
