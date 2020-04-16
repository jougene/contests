const { jumpingOnClouds } = require('../jumping-on-the-clouds');

let dataProvider = [
    [[0, 1, 0], 1],
    [[0, 0, 1, 0, 0, 1, 0], 4],
    [[0, 1, 0, 0, 0, 1, 0], 3],
    [[0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0], 5],
];

test.each(dataProvider)('dataset (c = %i | expected = %i)', (c, expected) => {
    let res = jumpingOnClouds(c);

    expect(res).toStrictEqual(expected);
});
