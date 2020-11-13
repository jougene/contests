const { gcdNaive, gcdEuqlid } = require('../gcd');

let dataProvider = [
    //[1, 1, 1],
    //[5, 10, 5],
    //[120, 44, 4],
    [12000000, 4444, 4],
];

test.each(dataProvider)('a = %s, b = %s | expected = %s', (a, b, expected) => {
    console.time('gcd naive');
    let res = gcdNaive(a, b);
    console.timeEnd('gcd naive');

    console.time('gcd euqlid');
    let resEuclid = gcdEuqlid(a, b);
    console.timeEnd('gcd euqlid');

    expect(res).toStrictEqual(expected);
    expect(resEuclid).toStrictEqual(expected);
});
