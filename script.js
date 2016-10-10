var carType = require('./car')

// console.log(typeof carType)
// var toyotaCar = new carType(70, 'red', 5, 9)
// console.log(toyotaCar)

var greenCar = new carType(60, 'green', true)
var blueCar = new carType(40, 'blue', true)

// console.log('greenCar speed is ' + greenCar.speed);

// console.log(greenCar.speedUp(40))
// console.log(blueCar.speedUp(70))
greenCar.accelerate(10)
console.log(greenCar.speed)
greenCar.setColor('red')
console.log(greenCar.color)
