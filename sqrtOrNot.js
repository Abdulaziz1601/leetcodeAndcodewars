const squareOrSquareRoot = (array) => array.map(num => Math.sqrt(num).toString().includes('.') ? num ** 2 : Math.sqrt(num))
