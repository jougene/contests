/**
 * @see {@link https://www.hackerrank.com/challenges/ctci-array-left-rotation}
 */
module.exports.rotLeft = (n, d, arr) => {
    let first = arr.slice(d);
    let second = arr.slice(0, d);

    return first.concat(second);
};
