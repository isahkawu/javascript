const isPowerOfTwo = function (number) {

   if (number < 1){
   
   return false;
   }

    while (number % 2 === 0) {

      number = number / 2;
    }

    return number === 1;

}

console.log(isPowerOfTwo(16));
