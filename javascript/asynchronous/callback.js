function one(call_two) {
    console.log("step one complete please call step 2   ");
    call_two();
}
function two() {
    console.log("step two");
}
one(two);