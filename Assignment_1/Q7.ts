
function sumOfArray(arr: number[]): number {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
        sum = sum + arr[i];
        i++;
    }
    return sum;
}

var arr2 = [1, 2, 3, 4, 5];

console.log(sumOfArray(arr2));
