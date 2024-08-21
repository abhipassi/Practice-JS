const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); //absolute values
// console.log(Math.round(34.8)); //round off value
// console.log(Math.ceil(4.2)); //it give output 5 because it take top value
// console.log(Math.floor(4.9)); //it give output 4 because it take lower value

// console.log(Math.min(1 ,3, 34, 23)); //give minimum value from Array
// console.log(Math.max(1 ,3, 34, 23)); //give maximum value from Array

// random
// console.log(Math.random()); 
// this Math.random() method give you random number between 0 and 1

// console.log(Math.random() * 10 +1);

// console.log(Math.floor(Math.random()*10) + 1);
const a = Math.random()*10;
const b = Math.floor(a)+1;
// console.log(b);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// by using above method or formula we can set the range for the Math.random and the +1 is used to eliminate 0 and the +min is used to obtain atleast min vale 






