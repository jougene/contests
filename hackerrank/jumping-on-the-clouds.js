/**
 * @see {@link https://www.hackerrank.com/challenges/jumping-on-the-clouds}
 */
module.exports.jumpingOnClouds = c => {
    let len = c.length;
    let currentIndex = 0;
    let lastIndex = len - 1;

    let count = 0;

    while (currentIndex !== lastIndex) {
        let el = c[currentIndex];
        let nextEl = c[currentIndex + 1];
        let nextNextEl = c[currentIndex + 2];

        if (nextNextEl === 0) {
            currentIndex += 2;
        } else {
            currentIndex++;
        }
        count++;
    }

    return count;
};
