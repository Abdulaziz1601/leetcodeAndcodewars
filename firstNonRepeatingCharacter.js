[2~[2~

function firstNonRepeatingLetter(s) {
    const frequencyCounter = {};
    for (const char of s.split("")) {
        frequencyCounter[char.toLowerCase()]
            ? (frequencyCounter[char.toLowerCase()] += 1)
            : (frequencyCounter[char.toLowerCase()] = 1);
    }
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] === 1) {
            if (s.indexOf(key.toUpperCase()) !== -1) return key.toUpperCase();
            else return key;
        }
    }
    return "";
}
console.log(firstNonRepeatingLetter("sTtSSre"));

