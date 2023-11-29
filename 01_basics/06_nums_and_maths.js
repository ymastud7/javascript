const score = 400
console.log(score) //400

const balance = new Number(100) //TO EXPICITLY DEFINE IT AS NUMBER
console.log(balance) // [Number: 100]
//available properties through prototypes are also available

console.log(balance.toFixed(2)) //100.00
//to decrease the precision value i.e if the number after the decimal point is very long

const otherNumber = 23.9802
console.log(otherNumber.toPrecision(3)) //24.0
//takes precision value and rounds of the number after the decimal upto the number passed in the function
// remember it also takes in count the number before the decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 //adds commas

// +++++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // - values becomes positive
console.log(Math.round(4.6)); //roundoff

console.log(Math.random()) //value will be from 0 to 1