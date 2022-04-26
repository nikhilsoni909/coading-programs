var ourdog={
"name":"camper",
"legs":4,
"tails":1,
"friends":["everything!"],
"malik insaan":"nikhiil"//if we have gap in properties the we access the the properties by using brackets
};
function check(pro){
if(ourdog.hasOwnProperty(pro))
{
    return ourdog[pro];
}
else{
    return "not found";
}
}
console.log(check("legs"));