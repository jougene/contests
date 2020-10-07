const { brackets } = require('../brackets');

let dataProvider = [
    ['()', true],
    ['{}', true],
    ['[]', true],
    ['<>', true],
    ['(){}<>[]', true],
    ['([{<>}])', true],
    ['({[]}{{}})', true],
    ['((){})', true],

    ['(', false],
    ['(((', false],
    ['(({}', false],
    [')', false],
    ['(()', false],
    ['(({)})', false],
];

test.each(dataProvider)('dataset "%O" | expected = %s', (expr, expected) => {
    let res = brackets(expr);

    expect(res).toStrictEqual(expected);
});
