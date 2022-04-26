// const sum=(function(){
//     return  function sum(x,y,z){
//         const args=[x,y,z];
//         return args.reduce((a,b)=>a+b,0);
//     };
// })();
// console.log(sum(1,2,3));
// or

const sum=(function(){
    return  function sum(...args){//rest operator ...meas creat an array of  items named args
        //const args=[x,y,z];
        return args.reduce((a,b)=>a+b,0);
    };
})();
console.log(sum(1,2,3,4));