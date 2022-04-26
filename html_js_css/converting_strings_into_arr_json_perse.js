let hello = `["www.google.com"]`;
hello = JSON.parse(hello);
hello.push("hllo worlld");
console.log(hello);
// opposite 
hello = JSON.stringify(hello);//converting array into string
console.log(hello);
console.log(typeof hello);