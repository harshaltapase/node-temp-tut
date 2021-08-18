//
// FS MODULE - sync version
//
const { readFileSync, writeFileSync } = require('fs');

console.log('start');
//read inside file using readFileSync
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//console.log(first, second);

//write data to file using writeFileSync

writeFileSync(
	'./content/result-sync.txt',
	`\nHere is the result: ${first}, ${second}`,
	{ flag: 'a' }
);

console.log('done with this task');
console.log('starting the next one');
