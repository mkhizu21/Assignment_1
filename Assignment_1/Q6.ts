
var arr1 = [1, 2, 3, -4, 5, -6, 7, 8, 9, -10];
var i = 0;
while (i < arr1.length) {
    if (arr1[i] < 0) {
        arr1.splice(i, 1);
    }
    i++;
}
console.log(arr1);
