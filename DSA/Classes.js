function Building(floors) {
    // new keywords assigns this = {}
    this.what = "building";
    this.floors = floors;
    // returns this;
}

let myHouse = new Building(3);
console.log(myHouse);
// adding Method to an object
Building.prototype.countFloors = function() {
    console.log('I have', this.floors, 'floors');
};

myHouse.countFloors();

function Car(type) {
    this.type = type;
    this.what = "electric";
}

let myTesla = new Car("Model S");
console.log(myTesla);

Car.prototype.getType = function() {
    console.log("Type:", this.type);
}
myTesla.getType();
