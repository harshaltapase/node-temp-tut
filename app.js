//npm - global command, comes with node
//npm --version (npm --v)

//local dependency - use it only in this particular objects
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName>  (mac)

//package.json - manifest file (stores important info about projects/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything deafult)

const _ = require('lodash');

const item = [1, [2, [3, [4]]]];
const newitems = _.flattenDeep(item);

console.log(newitems);
