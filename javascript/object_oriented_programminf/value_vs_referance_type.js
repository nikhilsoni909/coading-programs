let a = 4;//value5
let b = a;

a = 6;
console.log(a);
console.log(b);


let x = { value: 10 };
// refernce
let y = x;
x.value = 20;
console.log(x);
console.log(y); //here value of y is dependent on x becaue its referce