const { brackets } = require('../brackets');
const { bracketsOnStack } = require('../bracketsOnStack');

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
    let resStack = bracketsOnStack(expr);

    expect(res).toStrictEqual(expected);
    expect(resStack).toStrictEqual(expected);
});
