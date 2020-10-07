let isOpenBracket = sym => {
    return ['(', '{', '<', '['].includes(sym);
};

let isClosedBracket = sym => {
    return [')', '}', '>', ']'].includes(sym);
};

let getClosedForOpen = sym => {
    return {
        '{': '}',
        '[': ']',
        '(': ')',
        '<': '>',
    }[sym];
};

let getOpenedForClosed = sym => {
    return {
        '}': '{',
        ']': '[',
        ')': '(',
        '>': '<',
    }[sym];
};

module.exports.brackets = expression => {
    let symbols = expression.split('');

    let lastOpenBracket = { bracket: null, state: 'not_closed' };
    let counter = {
        '{': 0,
        '[': 0,
        '(': 0,
        '<': 0,
    };

    for (let sym of symbols) {
        if (isOpenBracket(sym)) {
            lastOpenBracket = { bracket: sym, state: 'not_closed' };
            counter[sym]++;
        }
        if (isClosedBracket(sym)) {
            if (counter[getOpenedForClosed(sym)] === 0) {
                return false;
            }

            if (sym !== getClosedForOpen(lastOpenBracket.bracket)) {
                if (lastOpenBracket.state === 'not_closed') {
                    return false;
                }

                counter[getOpenedForClosed(sym)]--;
            } else {
                counter[lastOpenBracket.bracket]--;
                lastOpenBracket.state = 'closed';
            }
        }
    }

    const counts = Object.values(counter);

    return counts.every(count => count == 0);
};
