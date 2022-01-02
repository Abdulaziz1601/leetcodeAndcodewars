// // // // // // Inseting an element at the first index
// // // // // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // // // // for (let i = 8; i >= 0; i--) {
// // // // // 	arr[i + 1] = arr[i]
// // // // // }

// // // // // arr[0] = 1231231;

// // // // // console.log(arr);

// // // // // // Inserting Anywhere in the Array

// // // // // const arr = [1, 2, 3, 4, 5, 6, 7];

// // // // // const indexToPushElem = 0;
// // // // // const elem = 8;

// // // // // for (let i = arr.length - 1; i >= indexToPushElem; i--) {
// // // // // 	arr[i + 1] = arr[i]
// // // // // }

// // // // // arr[indexToPushElem] = elem
// // // // // console.log(arr);

// // // // // Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// // // // // Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
// // // // const arr = [1,0,2,3,0,4,5,0];
// // // // /**
// // // //  * @param {number[]} arr
// // // //  * @return {void} Do not return anything, modify arr in-place instead.
// // // //  */
// // // //  var duplicateZeros = function(arr) {
// // // //     const length = arr.length;
// // // //     for (let i = 0; i < length; i++) {
// // // //         if(arr[i] === 0) {
// // // //             for (let k = length-1; k >= i; k--) {
// // // //                 arr[k + 1] = arr[k];			
// // // //             }
// // // //             i++;
// // // //         }
// // // //     }
// // // // 	arr.length = length;
// // // // 	console.log(arr);
// // // // 	return arr;
// // // // };

// // // // // Runtime: 116 ms
// // // // // Memory Usage: 40.2 MB

// // // // var duplicateZeros = function(arr) {

// // // // 	const l = arr.length;
// // // //    for (let i = 0; i < arr.length; i++) {
// // // // 		if(arr[i] === 0) {
// // // // 			arr.splice(i+1, 0, 0)
// // // // 			i++;
// // // // 		}	   
// // // //    }
// // // //    arr.length = l;
// // // //    console.log(arr);
// // // //    return arr;
// // // // };

// // // // duplicateZeros(arr);

// // // // // Runtime: 80 ms
// // // // // Memory Usage: 40.5 MB


// // // /**
// // //  * @param {number[]} nums1
// // //  * @param {number} m
// // //  * @param {number[]} nums2
// // //  * @param {number} n
// // //  * @return {void} Do not return anything, modify nums1 in-place instead.
// // //  */
// // //  var merge = function(nums1, m, nums2, n) {
// // //     let k = 0;
// // //     for(let i = m; i<nums1.length; i++) {
// // //         nums1[i] = nums2[k];
// // //         k++;
// // //     }
    
// // //     nums1.sort((a, b) => a-b);
// // // 	return nums1;
// // // };

// // // // Runtime: 68 ms
// // // // Memory Usage: 38.8 MB

// // //  var merge = function(nums1, m, nums2, n) {
// // //     for(let i = 0; i< n ; i++) {
// // //         nums1[i + m] = nums2[i];
// // //     }
// // //     nums1.sort((a, b) => a-b);
// // // 	console.log(nums1);
// // // 	return nums1;
// // // };
// // // merge(
// // // 	[1,2,3,0,0,0],
// // // 	3,
// // // 	[2,5,6],
// // // 	3
// // // )

// // // // Runtime: 72 ms
// // // // Memory Usage: 38.9 MB

// // /**
// //  * @param {number[]} nums
// //  * @return {boolean}
// //  */
// // // var containsDuplicate = function(nums) {
// // //     for(let i = 0; i<nums.length; i++) {
// // //         for(let k = i+1; k<nums.length; k++) {
// // //             if(nums[i] === nums[k]) {
// // //                 console.log(nums[k])
// // //                 nums.splice(k, 1); // deleting duplicate number
// // //             }
// // //         }
// // //     }
// // //     console.log(nums);
// // // };

// // var containsDuplicate = function(nums) {
// //         console.log(new Set(nums.sort((a, b) => a-b)));
        
// // //     nums.sort((a, b) => a-b);
// // //     const arr = [...nums];
// // //     let k = 0;
// // //     // console.log(arr);
// // //     for(let i = 0; i<arr.length; i++) {
// // //         // console.log(arr[i],' === ' , arr[k+1]);
// // //         while(arr[i] === arr[k+1]) {
// // //             // console.log(arr[i],' === ' , arr[k+1]);
// // //             arr.splice(k+1, 1); // deleting duplicate number
// // //             // console.log(arr);
// // //             k++;
// // //         }
// // //     }
// // //     console.log(arr);
// // };

// // containsDuplicate([1, 2, 3, 3, 4, 1, 2, 2, 5, 4, 6, 7, 4, 5, 6, 3, 2, 4, 34, 56, 67, 32, 45 , 56, 67, 32, 3, 4, 5, 6, 2, 1, 3, 4, 3, 2, 1, 2, 56]);

// // // 1 1 2 2 3 4 4
// const words = "nit picking";
// let wordArr = words.split(' ');
// let t = wordArr[0].split('')[0];
// wordArr[0].split('')[0] = wordArr[1].split('')[1];
// console.log(wordArr[0].split('')[0]);
// console.log(wordArr);


// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
//  var containsDuplicate = function(nums) {
//     for(let i = 0; i<nums.length; i++) {
//         for(let k = i+1; k<nums.length; k++) {
//             if(nums[i] === nums[k]) return true;
//         }
//     }
//     return false;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max_current, max_global;
    max_current = max_global = nums[0];
    for(let i=1;i<nums.length; i++) {
        max_current= Math.max(nums[i], max_current + nums[i]);
        
        if( max_current > max_global)   max_global=max_current;
    }
    return max_global;
    
};
