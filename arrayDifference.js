function arrayDiff(a, b) {
    b.forEach(item => {
        a = a.map(el => el === item ? '*' : el);
    });
    return a.filter(el => el!=='*');
}

console.log(arrayDiff([1,2,2], [1]));