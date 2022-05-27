const sumDigNthTerm = (initval, patternl, nthterm) =>  {
    const termArr = [];
    const term1 = initval;
    let count = 0;
    termArr.push(term1);
    const sumDigit = (num) => num.toString().split('').map(Number).reduce((x, y) => x + y);

    for( let i = 0; i < nthterm - 1; i++ ) {
        if(count === patternl.length) count = 0;
        termArr.push(termArr[i] + patternl[count++]);
    }

    return sumDigit(termArr[nthterm-1]);
}