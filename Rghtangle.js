



for (let row = 1; row <= 5; row++) {
    let shape = "";

    for (let column = 1; column <= 10; column++) {
        shape += "*";
    }

    console.log(shape);
}




/*for (let row = 1; row <= 5; row++) {
    let shape = "";

    for (let column = 1; column <= 9; column++) {

        if (row === 1 || row === 5) {
            if (column >= 3 && column <= 7) {
                shape += "*";
            } else {
                shape += " ";
            }
        } else {
            if (column === 2 || column === 8) {
                shape += "*";
            } else {
                shape += " ";
            }
        }
    }

    console.log(shape);
}




for (let row = 1; row <= 5; row++) {
    let shape = "";

    for (let column = 1; column <= 9; column++) {

        if (row === 1 && column === 5) {
            shape += "*";
        } else if (row === 2 && (column === 4 || column === 5 || column === 6)) {
            shape += "*";
        } else if (row === 3 && column >= 3 && column <= 7) {
            shape += "*";
        } else if (row === 4 && column === 5) {
            shape += "*";
        } else if (row === 5 && column === 5) {
            shape += "*";
        } else {
            shape += " ";
        }
    }

    console.log(shape);
}






for (let row = 1; row <= 5; row++) {
    let shape = "";

    for (let column = 1; column <= 9; column++) {

        if (row === 1 && column === 5) {
            shape += "*";
        } else if (row === 2 && (column === 4 || column === 6)) {
            shape += "*";
        } else if (row === 3 && (column === 3 || column === 7)) {
            shape += "*";
        } else if (row === 4 && (column === 2 || column === 8)) {
            shape += "*";
        } else if (row === 5 && (column === 1 || column === 9)) {
            shape += "*";
        } else {
            shape += " ";
        }
    }

    console.log(shape);
}
*/
