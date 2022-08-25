// write the function isAnagram
const isAnagram = function (test, original) {
    if (test.length !== original.length) {
        return false;
    }

    const lookup = {};
    test = test.toLowerCase();
    original = original.toLowerCase();    

    for (let i = 0; i < original.length; i++) {
        const letter = original[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < test.length; i++) {
        const letter = test[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
};

console.log(isAnagram("foefet", "toffee"));