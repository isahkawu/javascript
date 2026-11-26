// Exercise 2.15

const prompt = require("prompt-sync")();
let sum = 0;
let difference = 0;
let square1 = 0;
let square2 = 0;

let number1 = prompt("Enter First Integer: ");
let number2 = prompt("Enter Second Integer: ");

square1 = number1 * number1;
square2 = number2 * number2;

sum = square1 + square2;
difference = square1 - square2;

console.log("Sum of Square is: " + sum);
console.log("Difference of Square is: " + difference);
