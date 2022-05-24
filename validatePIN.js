function validatePIN(pin) {
    const arr = pin.split("").map(el => el==='\t' || el==='\n' || el === '\r' ? NaN : +el);
    if (arr.length === 6 || arr.length === 4) {
        return arr.every(el => (typeof (el) === "number" && !isNaN(el)));
    }
    return false;
}

console.log(validatePIN(`123
`));