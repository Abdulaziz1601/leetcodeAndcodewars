const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const res = [];
    arr.sort();
    
    for( let i=0; i < arr.length; i+=3) {
        if(arr[i] && arr[i + 1] && arr[i + 2]) {
            res.push([arr[i], arr[i + 1], arr[i + 2]]);
        }
    }
    
    if(arr.length % 3 > 0) {
        let sum = [];
        for(let i = arr.length - arr.length % 3; i < arr.length; i++) {
            sum.push(arr[i]);
        }
        res.push('Оставшиеся студенты: '+sum.join(', '));
    } else {
        res.push('Оставшиеся студенты: -');
    }

    return res;
}


console.log(sortStudentsByGroups(students));