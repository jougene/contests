/**
 * @see {@link https://www.hackerrank.com/challenges/counting-valleys}
 */
module.exports.countingValleys = (n, s) => {
    // states = sea_level | on_mountain | in_valley
    // count transitions from sea_level to in_valley state
    let state = 'sea_level';
    let count = 0;

    let height_diff = 0;
    for (let i = 0; i < n; i++) {
        let elem = s[i];

        switch (state) {
            case 'sea_level':
                //ws.write(elem + '')
                if (elem === 'D') {
                    state = 'in_valley';
                    count++;
                } else {
                    state = 'on_mountain';
                }
                height_diff++;
                break;
            case 'in_valley':
                if (elem === 'D') {
                    height_diff++;
                } else {
                    height_diff--;
                }
                if (height_diff === 0) {
                    state = 'sea_level';
                }
                break;
            case 'on_mountain':
                if (elem === 'D') {
                    height_diff--;
                } else {
                    height_diff++;
                }
                if (height_diff === 0) {
                    state = 'sea_level';
                }
                break;
        }
    }

    return count;
};
