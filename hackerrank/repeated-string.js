/**
 * @see {@link https://www.hackerrank.com/challenges/repeated-string}
 */
module.exports.repeatedString = (s, n) => {
    let totalInS = 0;
    let len = s.length;

    for (let i = 0; i < len; i++) {
        if (s[i] === 'a') {
            totalInS++;
        }
    }

    let inclusionCount = Math.floor(n / len);
    let lastSubstrLen = n % len;
    let lastSubstring = s.substring(0, lastSubstrLen);
    let totalInLastSubstring = 0;

    for (let i = 0; i < lastSubstrLen; i++) {
        if (lastSubstring[i] === 'a') {
            totalInLastSubstring++;
        }
    }

    return totalInS * inclusionCount + totalInLastSubstring;
};

const repeatedStringBadSolution = (s, n) => {
    let total = 0;
    let foundFor = 'a';
    let iteration = 0;
    let len = s.length;

    for (let i = 0; i < n; i++) {
        if (i !== 0 && i % len === 0) {
            iteration++;
        }

        let index = i - len * iteration;
        let elem = s[index];

        if (elem === foundFor) {
            total++;
        }
    }

    return total;
};
