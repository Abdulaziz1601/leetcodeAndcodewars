var reverse = function (x) {
    const reversedStr = x.toString().split("").reverse().join("");
    const min = -Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;
    if (reversedStr[reversedStr.length - 1] === "-") {
        const num = -parseInt(
            reversedStr
                .split("")
                .slice(0, reversedStr.length - 1)
                .join("")
        );
        return num >= min && num <= max ? num : 0;
    } else {
        return +reversedStr > min && +reversedStr < max ? +reversedStr : 0;
    }
};

console.log(reverse(1563847412));
