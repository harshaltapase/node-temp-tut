const names = require('./4-names'); //john, peter
const sayHi = require('./5-utils'); //sayHi function
const data = require('./6-alternate-flavor'); //multiple data

require('./7-mind-grenade');

console.log(data);

sayHi(names.john);
sayHi(names.peter);
sayHi('susy');
