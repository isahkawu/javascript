const prompt = require("prompt-sync")();

let digit = Number(prompt("Enter an Integer Number: "));

	if (digit % 3 === 0) {
	
	console.log(digit +" is divisible by 3");
	
	}
	
	else {
	
	console.log(digit + " is not divisible by 3");
	}
