// Exercise 2.16

const prompt = require("prompt-sync") ();

let number = prompt("Enter an Integer  Number ");

  let square = number * number;
  
    if (square > 100) {
    
      console.log(square + " is greater than 100");
    }
    
    else if (square < 100){
    
      console.log(square + " is less than 100");
    }
    
    
    else if (square == 100){
    
      console.log(square + " is equals to 100");
    }
    
    else {
    
    console.log(square + " is not equals to 100");
    
    }


