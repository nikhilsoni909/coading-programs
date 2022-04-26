var global=8;
// this is a global variable
function f1(){
     var local; //this is a local variable because it is in the function
    global1=5;//this is a global variable beacause it dont have "var"
}


function f2(){
var output="";
if(typeof global!="undefined"){
output+="global:"+global;

}
if(typeof global1!="undefined"){
output+="global1:"+global1;

}
console.log(output);
}
f1();
f2();