const { repeatedString } = require('../repeated-string');

let dataProvider = [
    ['abc', 4, 2],
    ['abc', 10, 4],
    ['aba', 10, 7],
    ['abcac', 10, 4],
];

test.each(dataProvider)('dataset (s = %s | n = %i | expected = %i)', (n, s, expected) => {
    let res = repeatedString(n, s);

    expect(res).toBe(expected);
});
