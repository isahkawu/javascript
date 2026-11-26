
let number = 4;

for (let count = 1; count < 2 * number; count++) {

    let row = count <= number ? count : 2 * number - count;

    
    for (let space = 1; space <= number - row; space++) {
        process.stdout.write(" ");
    }

    
    for (let star = 1; star <= 2 * row - 1; star++) {
        process.stdout.write("*");
    }

    
   console.log("");

}
