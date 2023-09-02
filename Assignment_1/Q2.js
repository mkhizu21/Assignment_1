"use strict";
function addItems(arr, value) {
    arr.push(value);
    return arr;
}
function removeItems(arr, index) {
    arr.splice(index, 1);
    return arr;
}
function updateQuantity(arr, index, value) {
    arr.splice(index, 1, value);
    return arr;
}
var arr = ["khizar", "Adam", "Ali"];
var value = "Ahmed";
addItems(arr, value);
console.log("Add:", arr);
var index = 1;
removeItems(arr, index);
console.log("Delete:", arr);
var value = "Ahmed";
var index = 1;
updateQuantity(arr, index, value);
console.log("Update:", arr);
