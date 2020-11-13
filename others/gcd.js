const gcdNaive = (a, b) => {
    let gcd = 1;
    for (let i = 2; i < Math.max(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }

    return gcd;
};

let times = 0;
const gcdEuqlid = (a, b) => {
    //console.log(++times);
    console.log(a, b);
    let [min, max] = [Math.min(a, b), Math.max(a, b)];

    let rem = max % min;
    if (rem === 0) return min;

    return gcdEuqlid(min, rem);
};

module.exports = { gcdNaive, gcdEuqlid };
