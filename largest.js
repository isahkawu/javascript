 const prompt = require("prompt-sync")();
 
let digit1 = Number(prompt("Enter first Number: "));
let digit2 = Number(prompt("Enter second Number: "));
let digit3 = Number(prompt("Enter Third Number: "));
let digit4 = Number(prompt("Enter Fouth NUmber: "));
let digit5 = Number(prompt("Enter fifth Number: "));

	largest = digit1;
		
		if (digit2 > largest){
		
			largset = digit2;
		}
		
		if (digit3 > largest){
		
			largest = digit3;
		}
		
		if (digit4 > largest){
		
			largest = digit4;
		}
		
		if (digit5 > largest){
		
			largest = digit5;
			
		}
		console.log("Largest Number is: " + largest);
		
		
		smallest = digit1;
		if (digit2 < smallest){
		
			largset = digit2;
		}
		
		if (digit3 < smallest){
		
			largest = digit3;
		}
		
		if (digit4 < smallest){
		
			largest = digit4;
		}
		
		if (digit5 < smallest){
		
			largest = digit5;
		
		}
		
		console.log("Smallest Number is :" + smallest);
	
	
