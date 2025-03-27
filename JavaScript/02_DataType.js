"use strict"; // treats all Js code as newer version of JavaScript.

// alert(3+3); this will give error here as we are not using Browser here, we are using NodeJs.


// Primitive Types
// number => 2 to power 53
//binint
//string => ""
//boolean => true/false
//null => standalone value *[NULL is an object]
//undefined => value is not assigned just it is defined.
//symbol => unique


// Object
// console.log(typeof "Shivank") // returns the type of datatype.
// console.log(typeof null) // Output => [Object]
// console.log(typeof undefined) //Output => [undefined]


// #Primitive // Values goes to Stack Memory
// 7 Types : String, Number, Boolean, null, undefined, Symbol,
//           BigInt

// #Reference Type (Non Primitive) // Value goes to Heap Memory
// Array, Objects, Functions 







// ********************************* Memory Sumarry *************************

// When you take reference from Heap then Original value is returned not the referenced value.
 

let userOne = {
    name: "Shivank"
}

let userTwo = userOne

console.log(userTwo)
console.log(userOne == userTwo)


// Backtick's is used to get multiline feature, proper format and handling dynamic value.
// In backtics we use ${} to provide direct value and perform action on these values directly.

console.log("My name is: " + "Shivank" + 12)
const poem = `Roses are red
Violets are blue,
JavaScript is fun,
And so are you!`;

console.log(poem);