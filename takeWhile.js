const takeWhile = (arr, pred) => {
    const finalArr = [];
    for (const num of arr) {
        if(!pred(num)) {
            break;
        }
        finalArr.push(num);
    }
    return finalArr;
};

console.log(takeWhile([2,100,1000,10000,5,3,4,6], (num) => num % 2 === 0));