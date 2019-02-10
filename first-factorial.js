/*
Have the
function FirstFactorial(num) take the num parameter being passed and
return the factorial of it.
*/

function firstFactorial(num) {

    let numArr = [];

    do {
        numArr.push(num);
        num = num - 1;
    } while (num > 0);

    var product = numArr.reduce(multiply, 1);

    function multiply(a, b) {
        return a * b;
    }

    return product;

};

// Should return 24
console.log(firstFactorial(4));