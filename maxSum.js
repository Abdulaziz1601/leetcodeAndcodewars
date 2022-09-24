function maxSum(arr, range) {
    const maxArr = [];

    for (let item of range) {
        let sum = 0;
        for (let i = item[0]; i <= item[1]; i++) {
            sum += arr[i];
        }
        maxArr.push(sum);
    }

    return Math.max(...maxArr);
}

console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]));
