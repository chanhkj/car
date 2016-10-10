var carType = require('./car')

// console.log(typeof carType)
// var toyotaCar = new carType(70, 'red', 5, 9)
// console.log(toyotaCar)

var greenCar = new carType(60, 'green', 10, 0)
var blueCar = new carType(40, 'blue', 5, 10)

// console.log('greenCar speed is ' + greenCar.speed);

console.log(greenCar.speedUp(40))
console.log(blueCar.speedUp(70))

console.log(greenCar.accelerate(10))
greenCar.setColor('red')
console.log(greenCar.color)
