// PRIMITIVE DATATYPES (Call By Value)

//7 types : string, number, boolean, null, undefined, symbol, bigInt

//SYMBOL
const id = 100
const anotherId = Symbol(100)

console.log(id == anotherId)
//symbol represents uniqueness i.e even if the number is same it will still show false because each number is unique

//BIGINT

const number = 907123980892163021n

console.log(typeof number)
//adding 'n' to the end of the number makes it a bigint


//NON PRIMITIVE (Call By Reference)

// array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"]; //array

let myObj = {
    name: "yash",
    age: 22,
} //object

const myFunction = function(){
    console.log("Hello World")
} //function

console.log(typeof heros) //object
console.log(typeof myObj) //object
console.log(typeof myFunction) //function-object

// Stack(primitive)

let num1 = 100;
let num2 = num1;
num2 = 200;
console.log(num1) //100
console.log(num2) //200

// Heap Memory(non-primitive)

let user1 = {
    name: "Yash",
    phoneNumber: 12345,
}

let user2 = user1;

user2.phoneNumber = 67890

console.log(user1.phoneNumber) //67890
console.log(user2.phoneNumber) //67890