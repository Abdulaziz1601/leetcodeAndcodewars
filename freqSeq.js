function freqSeq(str, sep) {
    const frequencyCounter = {};
    let sum = '';
    str = str.split('');
    for (let char of str) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
    for (const el of str) {
        sum += frequencyCounter[el] + sep;
    }
    return sum.slice(0, sum.length - 1);
}

console.log(freqSeq('hello world', '-'));