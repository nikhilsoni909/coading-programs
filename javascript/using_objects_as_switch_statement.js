function switchs(val){
var result="";
var lookup={
"hosiyar":"nkhil",
"gebla":"sagar",
"chutiya":"ritik",
"cool boy":"anant"

};
result=lookup[val];
return result;
}
console.log(switchs("gebla"));