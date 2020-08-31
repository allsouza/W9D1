// Function.prototype.inherits = function(SuperClass) {
//     function Surrogate() {};
//     Surrogate.prototype = SuperClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.construstor = this;
// }

Function.prototype.inherits = function (SuperClass) {
    this.prototype = Object.create(SuperClass.prototype);
    this.prototype.construstor = this;
}

function MovingObject () {}
MovingObject.prototype.move = function() {
    console.log("I'm flying");
}

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.attack = function() {
    console.log("pewpewpew");
}

function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.crash = function() {
    console.log("destructionnnnnnn");
}

const ship = new Ship();
const asteroid = new Asteroid();

ship.move();
asteroid.move();
ship.attack();
// asteroid.attack(); // TypeError: asteroid.attack is not a function
// ship.crash(); //TypeError: ship.crash is not a function
asteroid.crash();

