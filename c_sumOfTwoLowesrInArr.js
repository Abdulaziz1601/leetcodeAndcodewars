
function sumTwoSmallestNumbers(numbers) { 
    let low_1 = Math.min(...numbers);
    numbers.splice(numbers.indexOf(low_1), 1);
    return low_1 + Math.min(...numbers);
}

  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));