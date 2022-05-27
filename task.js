const arr = [1, 2, 3, 4];

const result = [];

result[0] = arr[0];
result[1] = arr[1];

function firstTask() {
    for (let i = 5; i <= 10; i++) {
        if(i === 7) {
            break;
        }
        console.log(i);
    }    
    
}

function showArray() {
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.length); // 5

    for(let i=0; i < arr.length; i++ ) {
        console.log(arr[i]);
    }
}

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// let num = 2;
// while(num <= 16) {
//     if (num % 2 === 0) {
//         num++;
//         continue;
//     } else {
//         console.log(num);
//     }
//     num++;
// }


function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if(typeof(data[i]) === 'string') {
            data[i] = data[i] + ' - done';
        } else {
            data[i] = data[i] * 2;
        }
    }
    
    // Не трогаем
    return data;
}

console.log(secondTask());
