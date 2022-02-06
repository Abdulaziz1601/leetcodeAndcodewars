// "use strict";
// // implementing STACK using simple JS Array

// let letters = []; // this is our STACK

// let word = "racecar";

// let rword = "";

// for(let i=0; i<word.length; i++) {
//     letters.push(word[i]);
// }

// for (let i = 0; i<word.length; i++) {
//     rword += letters.pop();
// }

// if(word === rword) {
//     console.log(word, rword);
// }

// Stack Class-based implementation

let Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    };

    this.pop = function() {
        if(this.count === 0) return undefined;

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    };

    this.peek = function() {
        return this.storage[this.count - 1];
    }

};

const myStack = new Stack();

myStack.push(1)
myStack.push(2)
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Abdulaziz");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());

