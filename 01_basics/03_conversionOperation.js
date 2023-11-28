let score = "33"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = "yash"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "yash" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " yash"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3)
console.log(1 + 2 + "3")

// ECMA script concepts
// for the first 2 the type will be string
// for 3rd the ans will be 123 as the first one is string
// for 4th the ans will be 33 as it adds first and then adds the string
