function modifyMultiply (str,loc,num) { 
    const arr = str.split(' ');
    const word = arr[loc];
    const res = [];
    for (let i = 0; i < num; i++) {
        res.push(word);
    }
    return res.join('-');
} 

console.log(modifyMultiply('asda asd', 1, 3));