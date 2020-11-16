/**
 * @see https://www.hackerrank.com/challenges/new-year-chaos
 */
const minimumBribe = q => {
    let bribes = 0;
    let count = q.length;

    for (let i = 0; i < count; i++) {
        let el = q[i];
        if (el - (i + 1) > 2) {
            return 'Too chaotic';
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > el) bribes++;
        }
    }

    return bribes;
};

module.exports = { minimumBribe };
