function persistence(num) {
    let arr = num.toString().split("").map(el => parseInt(el));
    if (arr.length === 1) {
        return 0;
    }
    let count = 0, mult=0;
    while ( arr.length !== 1 ) {
        mult = arr.reduce( (a, b) => a * b);
        arr = mult.toString().split("").map(el => parseInt(el));
        count++;
        console.log(count, mult);
    }
    
    return count-1;
}

persistence(27);