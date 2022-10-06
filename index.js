const process = require('node:process');

const [,,...args] = process.argv;
const mergedStr = args.join(" ");
let vcount = 0;

for(const letters of mergedStr) {
    if('aeiou'.includes(letters.toLowerCase())) vcount++;
}

console.log('Number of arguments: ' + args.length);
console.log('Counted vowels: ' + vcount);