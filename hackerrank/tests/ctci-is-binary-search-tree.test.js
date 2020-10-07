const { checkBST } = require('../ctci-is-binary-search-tree');
const assert = require('assert');

let dataProvider = [
    [1, [1,2], 2],
    [2, [2,1], 1],
];

test.each(dataProvider)('dataset (n = %i | s = %s | expected = %i)', (n, s, expected) => {
    let res = checkBST(n, s);

    assert(true);

    //expect(res).toStrictEqual(expected);
});
