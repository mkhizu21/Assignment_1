"use strict";
function factorial(num) {
    var result = 1;
    var i = 1;
    while (i <= num) {
        result = result * i;
        i++;
    }
    return result;
}
console.log(factorial(5));
