function incrementString(string) {
    if(!/\d/.test(string)) return string+1;
  
    const nums = string.split("").filter(el => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(el)).map(Number);
    let i = 0;
    while(nums.length > i && nums[i] === 0) {
        i++;
    }
    const num = parseInt(nums.join("")) + 1;
    let numzero = "0".repeat(i) + num;
    if((numzero).length > nums.length && numzero[0] === '0' ) {
        numzero = numzero.slice(1);
    }
    console.log(string.replace(/\d+/, '') + numzero);
    return string.replace(/\d+/, '') + numzero;
}