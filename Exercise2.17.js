// Exercise 2.17
// Comparing Numbers

const prompt = require("prompt-sync")();

let smallest = 0;
let largest = 0;
let sum = 0;
let average = 0;
let product = 0;

let digit1 = Number(prompt("Enter first Number "));
let digit2 = Number(prompt("Enter Second Number "));
let digit3 = Number(prompt("Enter Third Number "));
sum = digit1 + digit2 + digit3;
average = sum / 3;

largest = digit1;

if (digit2 > largest){

	largest = digit2;
if (digit3 > largest) {
	
	largest = digit3;

}

smallest = digit1;

if (digit2 < smallest) {

	smallest = digit2;
}
 
 if (digit3 < smallest){
 
 	digit3 = smallest
 }

}

console.log("sum of the Numbers is: " + sum);
console.log("Average of the Three Numbers is: " + average);
console.log("largest Number is:" + largest);
console.log("Smallest Number is:" + smallest);


