// Returns number of complete beeramid levels
const beeramid = (bonus, price) => {
    const purchasedBeers = Math.floor(bonus / price);
    const squaredTermsSum = (n) => (n*(n+1)*(2*n + 1)) / 6;
    let n = 1;
    while(squaredTermsSum(n) <= purchasedBeers) {
        console.log(squaredTermsSum(n));
        n++;
    }    
    return n - 1;
}