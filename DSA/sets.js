function mySet() {
    const collection = [];

    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    this.values = function() {
        return collection;
    };

    // add an element to collection iff doesn't already have an elemnt, i.e duplicate of element that will be pushed
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true
        } 
        return false;
    };

    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }

        return false; // element is not in collection
    };

    this.size = function() {
        return collection.length;
    };

    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(el => {
            unionSet.add(el);
        });
        secondSet.forEach(e => {
            unionSet.add(e);
        });

        return unionSet;
    };

    this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(el => {
            if(otherSet.has(el)) {
                intersectionSet.add(el);
            }
        });

        return intersectionSet;
    };

    this.difference = function (otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(el => {
            if(!otherSet.has(el)) {
                differenceSet.add(e);
            }
        });

        return differenceSet
    };

    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(value => {
            return otherSet.has(value)
        });
    };
};

let setA = new mySet();
let setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());

let setC = new Set();
let setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');

console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));