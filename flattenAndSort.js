function flattenAndSort(array) {
    const fArr = [];
    array.forEach(arr => fArr.push(...arr));
    fArr.sort((a, b) => a - b);
    return fArr;
}