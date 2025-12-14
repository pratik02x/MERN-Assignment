// Q1. Identify Data Types
// Create variables of the following data types and print their values and types using typeof:
// Number
// String
// Boolean
// Undefined
// Null
// Object
// Array

let a=4;
console.log(`value of a is:${a}`);
console.log(`type  of a is:${typeof(a)}`);

a="pratik";
console.log(`value of a is:${a}`);
console.log(`type  of a is:${typeof(a)}`);

a=true;
console.log(`value of a is:${a}`);
console.log(`type  of a is:${typeof(a)}`);

a=null;
console.log(`value of a is:${a}`);
console.log(`type  of a is:${typeof(a)}`);

a=[1,2,3,4];
console.log(`value of a is:${a}`);
console.log(`type  of a is:${typeof(a)}`);

// Q2. Basic Operations
// 1. Declare two number variables.
// 2. Perform and display the following operations:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus

let n1=3;
let n2=5;

let Addition=function (n1,n2){
    return n1+n2;
}

let substraction=function (n1,n2){
    return n1-n2;
}

let Multiplication=function (n1,n2){
    return n1*n2;
}

let Division=function (n1,n2){
    return n1/n2;
}

let Modulus=function (n1,n2){
    return n1%n2;
}

console.log(Addition(n1,n2));
console.log(substraction(n1,n2));
console.log(Multiplication(n1,n2));
console.log(Division(n1,n2));
console.log(Modulus(n1,n2));

// Q3. String Operations
// 1. Create a string variable with your full name.
// 2. Print:
// Length of the string
// Uppercase version
// Lowercase version
// First character of the string

const str="pratik kumar patil";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str[0]);

// Q4. Simple Function
// Write a function greet() that prints the following message: Hello, Welcome to JavaScript!

function greet(){
    console.log("Hello, Welcome to JavaScript!");
}

greet();

// Q5. Function with Parameters
// Write a function add(a, b) that:
// 1. Accepts two numbers as parameters.
// 2. Returns their sum.
// 3. Prints the result
4
function add(a,b){
  return a+b;
}

let num1=parseInt(prompt("Enter 1st number"));
let num2=parseInt(prompt("Enter 2st number"));
console.log(add(num1,num2));

// Q6. Function with Return Value
// Write a function isEven(num) that:
// Returns true if the number is even.
// Returns false otherwise.
console.log(((num)=>num%2===0)(2));

// Q7. Arrow Function
// Convert the following function into an arrow function:
// function square(num) {
// return num * num;
// }

// let square=(num)=> num*num;

// console.log(square(2));

//OR using IIFE -imidiatly invoked function expression

console.log(((num)=>num*num)(4));

// Q8. Default Parameters
// Write a function calculateArea(radius = 1) that calculates and returns the area of a circle.

function calculateArea(radius=1){
    return 3.14*radius*radius;
}
console.log(calculateArea());