const prevMultOfThree = n => {
    while (n % 3 !== 0 && n > 3) {
        n = Math.floor(n / 10);
    }
    return n < 3 ? null : n % 3 === 0 ? n : null;
}