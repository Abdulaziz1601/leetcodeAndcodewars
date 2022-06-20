const binaryArrayToNumber = arr => {
    let sum = 0;
    arr.reverse();
    for(let i =0; i < arr.length; i++) {
      sum += arr[i] * 2**i;
    }
    return sum;
};