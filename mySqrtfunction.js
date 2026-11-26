const mySqrt = function (number) {

    let root = 0;

    //while ((root + 1) * (root + 1) <= number) {
for (let count = 1; count * count <= number; count++){
        root = count;
    }

    return root;
}

console.log(mySqrt(30));
