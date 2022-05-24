function nbYear(p0, percent, aug, p) {
    let year=0;
    while(p > p0) {
      p0 = p0 + p0 * percent/100 + aug;
      console.log(p0);
      year++;
    }  
    return year;
  }

console.log(nbYear(1500000, 0, 10000, 2000000));