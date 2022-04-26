// const source=[1,2,3,4,5,6,7];
// function removeFirsttwo(list){
// const[ , ,...arr]=list;
// return arr;    

// }
// const arr=removeFirsttwo(source);
// console.log(arr);   


const source=[1,2,3,4,5,6,7];
function removeFirsttwo(list){
const[ a, b,...arr]=list;//rest operator
console.log(a);
console.log(b);
return arr;    

}
const arr=removeFirsttwo(source);
console.log(arr);
