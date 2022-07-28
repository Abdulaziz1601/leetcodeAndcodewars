const snail = function (arr) {

    const middle = arr.slice(1, arr.length - 1).map(row =>
        row.slice(1, row.length - 1)
    );

    return [
        arr[0],
        arr.slice(1, arr.length - 1).map(row => row[row.length - 1]),
        arr.length > 1 ? arr[arr.length - 1].reverse() : [],
        arr.slice(1, arr.length - 1).reverse().map(row => row[0]),
        middle.length > 0 ? snail(middle) : []
    ].flat();
}


console.log(
    snail([ [ 365, 902 ], [ 602, 517 ] ])
)

