const moveZeros = arr => [...arr.filter(el => el !== 0), ...arr.filter(el => el === 0)];    


console.log(
moveZeros([
    true, null, {},    [],    [],
    '0',  null, false, false, null,
    9,    {},   {},    '2',   '6',
    1,    [],   0,     0,     2
  ])
);