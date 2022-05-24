var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    if(typeof(iterable) === 'string' ) {
        iterable = iterable.split("");
    }
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] === iterable[i+1]) {
            iterable.splice(i, 1, '*');
        }
    }
    return (iterable.filter(el => el !== '*'));
}

console.log(uniqueInOrder([1,2,2,3,3]));