function inline(arr,item){
    arr.push(item);
    return arr.shift();
}

var testarray=[1,2,3,4,5];
console.log("before:"+JSON.stringify(testarray));//jeson.strinify will convert array into string
console.log(nextline(testarray,6));
console.log("after:"+JSON.stringify(testarray));