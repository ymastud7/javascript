console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// we get the ans as false,false,true
// reason is equality check == and comparison >,<, >=, <= work differently
// that is why null >= 0(converts null to 0) is true and null > 0 is false

// for undefined every comparison is false

// '==' only checks the value
// '===' checks the value as well as data type