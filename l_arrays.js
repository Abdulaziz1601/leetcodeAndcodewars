// // Inseting an element at the first index
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 8; i >= 0; i--) {
// 	arr[i + 1] = arr[i]
// }

// arr[0] = 1231231;

// console.log(arr);

// // Inserting Anywhere in the Array

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const indexToPushElem = 0;
// const elem = 8;

// for (let i = arr.length - 1; i >= indexToPushElem; i--) {
// 	arr[i + 1] = arr[i]
// }

// arr[indexToPushElem] = elem
// console.log(arr);

// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
const arr = [1,0,2,3,0,4,5,0];
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if(arr[i] === 0) {
            for (let k = length-1; k >= i; k--) {
                arr[k + 1] = arr[k];			
            }
            i++;
        }
    }
	arr.length = length;
	console.log(arr);
	return arr;
};

// Runtime: 116 ms
// Memory Usage: 40.2 MB

var duplicateZeros = function(arr) {

	const l = arr.length;
   for (let i = 0; i < arr.length; i++) {
		if(arr[i] === 0) {
			arr.splice(i+1, 0, 0)
			i++;
		}	   
   }
   arr.length = l;
   console.log(arr);
   return arr;
};

duplicateZeros(arr);

// Runtime: 80 ms
// Memory Usage: 40.5 MB