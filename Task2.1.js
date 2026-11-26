const prompt = require("prompt-sync")();

let sum = 0;
let count = 0;

let number = Number(prompt("Enter a number (-1 to stop): "));

while (number !== -1) {

    sum = sum + number;

    count = count + 1;

    let average = sum / count;

    console.log("Running average: " + average);

    number = Number(prompt("Enter another number (-1 to stop): "));
}

