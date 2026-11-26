const isPalindromeNumber = function(number) {

    if (number < 0) {
        return false;
    }

    let original = number;
    let reverse = 0;

    while (number > 0) {

        let digit = number % 10;

        reverse = reverse * 10 + digit;

        number = Math.floor(number / 10);
    }

    return original === reverse;
}

console.log(isPalindromeNumber(121));
