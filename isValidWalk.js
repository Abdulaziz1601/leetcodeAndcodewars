function isValidWalk(walk) {
    console.log(walk)
    walk = walk.map(item => item === 'n' ? item = -1 : item === 's' ? item = 1 : item === 'w' ? item = -2 : item === 'e' ? item = 2 : null);
    console.log(walk)
    return walk.reduce((x, y) => x + y) === 0 && walk[0]===walk[walk.length-1];
}

console.log(isValidWalk([ 'n', 'n', 'n', 's', 's', 's', 'e', 'w', 'n', 's' ]));