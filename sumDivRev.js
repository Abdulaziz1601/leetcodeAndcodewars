function sumDifRev(n) {
    const res = [];
    for (let i = 0; res[n - 1] === undefined; i++) {
        const dif = Math.abs(i - parseInt(String(i).split('').reverse().join('')));
        const sum = i + parseInt(String(i).split('').reverse().join(''));
        if (String(i).split('').reverse()[0] !== '0' && sum % dif === 0) {
            res.push(i);
        }
    }

    return res[n-1]
}

console.log(sumDifRev(64));
