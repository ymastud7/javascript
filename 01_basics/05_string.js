const name = "yash"
const repoCount = 50

// console.log(name + repoCount +" Value") //we dont use this 

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) //string interpolation technique 

const gameName = new String("contra-polis")

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
const anotherString = gameName.slice(-3, 4) 

console.table([newString, anotherString])
//both slice and substring are similar apart from
//in slice we can use negative values 

const trimString = "    yash    "
console.log(trimString)
console.log(trimString.trim()) //removes the spaces

const url = "https://mastud.com/yash%20mastud" //%20 is when someone leaves a space in the url

console.log(url.replace('%20', '-'))

console.log(url.includes('jatin'))

console.log(gameName.split('-'))




