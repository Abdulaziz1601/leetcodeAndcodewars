function maxSum(arr, range) {
    const maxArr = [];
    let maxSum = 0;
    for (let i = range[0][0]; i <= range[0][1]; i++) {
        maxSum += arr[i];
    }

    console.log(maxSum)

    // for (let item of range) {
    //     let sum = 0;
    //     for (let i = item[0]; i <= item[1]; i++) {
    //         sum += arr[i];
    //     }
    //     maxArr.push(sum);
    // }

    // return Math.max(...maxArr);
}

console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]));


const arr = [1, -2, 3, 4, -5, -4, 3, 2, 1];

console.log(arr.at(-1))