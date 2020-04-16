/**
 * @see {@link https://www.hackerrank.com/challenges/2d-array}
 */
module.exports.hourglassSum = arr => {
    let rows = arr.length;
    let cols = arr[0].length;

    let sum = arr => arr.reduce((acc, cur) => acc + cur);

    let sums = [];

    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            let elems = [
                arr[i - 1][j - 1],
                arr[i - 1][j],
                arr[i - 1][j + 1],
                arr[i][j], // center
                arr[i + 1][j - 1],
                arr[i + 1][j],
                arr[i + 1][j + 1],
            ];

            sums.push(sum(elems));
        }
    }

    return Math.max(...sums);
};
