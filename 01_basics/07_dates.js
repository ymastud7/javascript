let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())

let myCreateDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreateDate.toDateString())
console.log(myCreateDate.toLocaleString())

let myIndianDate = new Date("02-07-2001")
console.log(myIndianDate.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

