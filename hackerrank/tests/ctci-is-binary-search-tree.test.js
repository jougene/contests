const { checkBST } = require('../ctci-is-binary-search-tree');

let dataProvider = [
    [1, [1,2], 2],
    [2, [2,1], 1],
];

test.each(dataProvider)('dataset (n = %i | s = %s | expected = %i)', (n, s, expected) => {
    let res = checkBST(n, s);

    expect(res).toStrictEqual(expected);
});
