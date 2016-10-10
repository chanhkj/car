function Car(speed, color, convertible) {
  this.speed = 0
  this.color = color
  this.convertible = convertible
  // this.accelerate = accelerate
  // this.decelerate = decelerate
  this.speedUp = function(currentSpeed) {
    var newSpeed = currentSpeed + accelerate;
    return ('greenCar was ' + currentSpeed + 'now it is ' + newSpeed)
  }
  this.setColor = function(newColor) {
    this.color = newColor
  }
}
Car.prototype.accelerate = function (num) {
  this.speed += num
}


module.exports = Car
