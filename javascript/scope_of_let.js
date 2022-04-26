function scope(){
    "use strict";
    let i="function block";
if(true){
    let i="block scope";
    console.log("block scope i is:",i);
}
console.log("function scope i is ",i);
return i ;
}
scope();
    // let datatype scope limit is block