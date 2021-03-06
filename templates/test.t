const { ::name:: } = require('../::challenge::');

let dataProvider = [
    [1, [1,2], 2],
    [2, [2,1], 1],
];

test.each(dataProvider)('dataset (n = %i | s = %s | expected = %i)', (n, s, expected) => {
    let res = ::name::(n, s);

    expect(res).toStrictEqual(expected);
});
