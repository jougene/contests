let isOpenBracket = sym => {
    return ['(', '{', '<', '['].includes(sym);
};

let getOpenedForClosed = sym => {
    return {
        '}': '{',
        ']': '[',
        ')': '(',
        '>': '<',
    }[sym];
};

module.exports.bracketsOnStack = expression => {
    let symbols = expression.split('');
    let stack = [];

    for (let sym of symbols) {
        if (isOpenBracket(sym)) {
            stack.push(sym);
        } else {
            let last = stack.pop();
            if (last !== getOpenedForClosed(sym)) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
