console.log(null > 0)
console.log( null == 0)
console.log(null >= 0)

// The reason is that an equality check == and 
// comparisions > < >= <= work differently.
// comparisions convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

 