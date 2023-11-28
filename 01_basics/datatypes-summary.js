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