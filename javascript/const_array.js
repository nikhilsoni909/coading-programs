const arr=[1,2,4];
function change(){
"use strict";
// arr=[2,4,5];this wont work
arr[0]=2;
arr[1]=3;
arr[2]=5;
}
change();
console.log(arr);