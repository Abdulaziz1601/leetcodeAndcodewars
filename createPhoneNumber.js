function createPhoneNumber(numbers) {
    const [a, b, c, ...rest] = numbers;
    rest.splice(3, 0, '-');
    return `(${a}${b}${c}) ${rest.reduce((x, y) => String(x + y), 0)}`
}