
function addItems(arr: any[], value: any) {
    arr.push(value);
    return arr;
}
function removeItems(arr: any[], index: number) {
    arr.splice(index, 1);
    return arr;
}
function updateQuantity(arr: any[], index: number, value: any) {
    arr.splice(index, 1, value);
    return arr;
}
var arr = ["khizar", "Adam", "Ali"]
var value = "Ahmed"
addItems(arr, value)
console.log("Add:",arr)
var index = 1
removeItems(arr, index)
console.log("Delete:",arr)
var value = "Ahmed"
var index = 1
updateQuantity(arr, index, value)
console.log("Update:",arr)

