let group = arr => {
    let res = {};
    for (let el of arr) {
        if (!res[el]) {
            res[el] = 1;
        } else {
            res[el]++;
        }
    }
    return res;
};

const isValid = s => {
    let symbols = s.split('');
    let grouped = group(symbols);
    grouped = group(Object.values(grouped));

    let len = Object.keys(grouped).length;

    if (len > 2) {
        return 'NO';
    }
    if (len === 1) {
        return 'YES';
    }
    if (len === 2) {
        //console.log({ grouped });
        let [k1, k2] = Object.keys(grouped);
        let [v1, v2] = Object.values(grouped);

        if ((k1 == 1 && v1 == 1) || (k2 == 1 && v2 == 1)) {
            return 'YES';
        }

        let [max, min] = [Math.max(k1, k2), Math.min(k1, k2)];
        //console.log({ max, min });
        if (max - min == 1 && grouped[max] == 1) {
            return 'YES';
        }

        //if (Math.min(k1, k2) == 1) {
        //return 'YES';
        //}

        //if (Math.abs(k1 - k2) > 1) {
        //return 'NO';
        //}
        return 'NO';
    }
    return 'YES';
};

module.exports = { isValid };
