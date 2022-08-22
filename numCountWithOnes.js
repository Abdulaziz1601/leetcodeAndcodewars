function oneTwoThree(n) {
    let num = '';
    const ones = n > 0 ? '1'.repeat(n) : 0;
    while (n > 9) {
        n -= 9
        num += '9'
    }
    num += n;
    return [num, ones];
}

oneTwoThree(22);