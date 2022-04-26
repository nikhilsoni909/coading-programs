const array=[4,5.9,-34.3,2,3,54,-23];
const squarelist=(arr)=>{
    const sqint=arr.filter(num=>Number.isInteger(num)&&num>0).map(x=>x*x);
    return sqint;
}
const temp=squarelist(array);
console.log(temp);