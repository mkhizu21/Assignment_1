
function insert(arr: any[], index: number, value: any) {
  arr.splice(index, 0, value);
  return arr;
}

var arr=["khizar","Adam","Ali"]
var index=1
var value="Ahmed"
insert(arr,index,value)
console.log(arr)