const runLengthEncoding = (str) => {
    let count = 1;
    const res = [];
    str.split("").map((el, i, arr) => {
        if(el === arr[i+1]) {
            count++;
        } else {
            res.push([count, el]);
            count=1;
        }
    });

    return res;
}

