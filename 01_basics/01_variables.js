const accountId = 144553
let accountEmail = "mastud@google.com"
var accountPassword = "12345"
accountCity = "Thane"
let accountState
// accountId = 2 // not allowed

accountEmail = "ym@ym.com"
accountPassword = "1231"
accountCity = "Gurgaon"

console.log(accountId)
/*
prefer not to use var because of problems in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])