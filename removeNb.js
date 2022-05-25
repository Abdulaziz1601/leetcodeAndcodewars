function removeNb (n) {
    const arr = Array.from({length: 1000003}, (_, i) => i + 1);
    const ans = [];
    const sum = arr.reduce((x, y) => x+y);
    
    // for(let i = 0; i < arr.length; i++ ) {
    //     for(let j = i+1; j < arr.length; j++ ) {
    //         if(arr[i] * arr[j]  + arr[i] + arr[j] === sum) {
    //             ans.push([arr[i], arr[j]]);
    //             ans.push([arr[j], arr[i]]);
    //         }
    //     }
    // }
    for(let i = 0; i < arr.length; i++ ) {
        arr.filter((item, j) =>  {
            if( i > j && arr[i] * item  + arr[i] + item === sum) {
                ans.push([arr[i], item]); 
            }
        });
    }
    // return ans.map(item => item.sort((a, b) => a-b));
    return ans;
}

console.log(removeNb());