const reverseInteger = function(number) {

    let reverse = 0;

    while (number !== 0) {

        let digit = number % 10;

        reverse = reverse * 10 + digit;

        number = Math.floor(number / 10);
    }

    return reverse;
}

console.log(reverseInteger(-123));
