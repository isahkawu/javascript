const climbStairs = function (totalSteps) {

    if (totalSteps <= 2) {
        return totalSteps;
    }

    let first = 1;
    let second = 2;

    for (let i = 3; i <= totalSteps; i++) {

        let next = first + second;

        first = second;
        second = next;
    }

    return second;
}

console.log(climbStairs(5));
