const [z,x, ,y]=[1,2,3,4,5];
console.log(z,x,y);




let a=8,b=6;
(()=>{
    "use strict";
    [a,b]=[b,a];

})();
console.log(a);
console.log(b);