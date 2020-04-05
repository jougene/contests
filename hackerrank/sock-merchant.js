function sockMerchant(n, ar) {
    let acc = {}
    for (let i = 0; i < n; i++) {
        let el = ar[i]
        if (acc[el] === undefined) {
            acc[el] = 1
        } else {
            acc[el] += 1
        }
    }

    return Object.values(acc).map(a => Math.floor(a / 2)).reduce((a, c) => a + c)
}
