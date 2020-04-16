const { hourglassSum } = require('../2d-array');

let arr1 = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 1, 1],
];

let arr2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];

let arr3 = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];

let dataProvider = [
    [arr1, 6],
    [arr2, 19],
    [arr3, 28],
];

test.each(dataProvider)('dataset (arr = \n%O)', (arr, expected) => {
    //console.table(arr);
    let res = hourglassSum(arr);

    expect(res).toStrictEqual(expected);
});
