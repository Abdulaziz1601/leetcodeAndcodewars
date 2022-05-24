function accum(s) {
    let newArr = "",
        arr = s.split("");
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (j === 0) newArr += arr[i].toUpperCase();
            else newArr += arr[i].toLowerCase();
        }
        if (i != s.length - 1) newArr += "-";
    }
    return newArr
}


// console.log(accum("aBcd"));
const accum= (s) => {
    return s.split("").map((el, index) => {
        let str = el.toUpperCase();
        let count = 0;
        while (count !== index) {
            str += el.toLowerCase();
            count++;
        }
        return index === s.length - 1 ? str : str += '-';
    }).join("");
}

console.log(accum('abcd'));