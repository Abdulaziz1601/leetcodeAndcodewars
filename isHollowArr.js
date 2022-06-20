function isHollow(x) {
    console.log(x.filter(el => el=== 0).length);
    console.log(x)
    if(x.length === 3 && x.filter(el => el=== 0).length === 3) {
      return false
    }
    if (x[0] === 0 && x[x.length - 1] !== 0 || x[0] !== 0 && x[x.length - 1] === 0) return false;
    const mid = Math.ceil(x.length / 2) - 1;
    console.log(x[mid - 1] === 0 && x[mid] === 0 && x[mid + 1] === 0)
    return x[mid - 1] === 0 && x[mid] === 0 && x[mid + 1] === 0;
}

console.log(isHollow([ 0, 0, 0 ]));
  