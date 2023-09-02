"use strict";
function insert(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
var arr = ["khizar", "Adam", "Ali"];
var index = 1;
var value = "Ahmed";
insert(arr, index, value);
console.log(arr);
