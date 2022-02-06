let Stack = function() {
    this.storage = '';
};

Stack.prototype.push = function(val) {
    // this.storage += ' - '+ val;
    // console.log(this.storage);
    this.storage = this.storage.concat('***', val);
}

Stack.prototype.pop = function() {
    // let arr = this.storage.split(' - ');
    // const deletedEl = arr.pop();
    // this.storage = arr.join(' - ');
    // return deletedEl;
    // console.log(this.storage);

    let str = this.storage.slice(this.storage )
}

Stack.prototype.size = function() {
    
}

let myWeeklyMenu = new Stack();

console.log('a - b - c'.concat(" - ", 'd'));