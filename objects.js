'use strict';

function VehicleConstructor(name, numWheels, numPass, speed) {
  this.name = name;
  this.numWheels = numWheels;
  this.numPass = numPass;
  this.speed = speed;
  var distance_travelled = 0;
  var self = this;
  var updateDistanceTravelled = function(){
    distance_travelled += self.speed;
  };
  this.checkMiles = function() {
    console.log(distance_travelled);
  };
  this.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
  };
};

VehicleConstructor.prototype.makeNoise = function() {
  console.log('Noise!');
};

VehicleConstructor.prototype.makeVin = function() {
  this.vin = Math.floor(Math.random() * (99999999999999999 - 11111111111111111 + 1)) + 11111111111111111;
};

var Bike = new VehicleConstructor('Bike', 24, 3);
Bike.makeNoise();

Bike.makeNoise = function() {
  console.log('ring, ring!!!');
};
Bike.makeNoise();

var Sedan = new VehicleConstructor('Sedan', 4, 4);
Sedan.makeNoise();

Sedan.makeNoise = function() {
  console.log('honk, honk!!!');
};
Sedan.makeNoise();

var Bus = new VehicleConstructor('Bus', 40, 30);
Bus.addPass = function(pass) {
  this.numPass += pass;
};

Bus.addPass(4);
console.log(Bus.numPass);

Bus.speed = 7;
Bus.move();
Bus.checkMiles();

Bus.makeVin();
console.log(Bus.vin);
