function towerBuilder(nFloors) {
    function* oddGen() {
        let num = 0;
        while (true) {
            num = 2 * num + 1
            yield num;
        }
    }
    const g = oddGen();

    const length = (nFloors * 2) - 1;
    const mid = Math.floor(length / 2);
    const arr = Array.from({ length: nFloors }, (item) => " ".repeat(length).split(" "));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < g.next().value; j++) {
            arr[i][mid - 1 - i]='*';
        }        
    }
    console.log(arr);

}

towerBuilder(3);

function* oddGen() {
    let num = 0;
    while (true) {
        num = 2 * num + 1
        yield num;
    }
}
const g = oddGen();
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)