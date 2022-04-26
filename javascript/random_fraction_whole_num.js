function randowfunc(){

    return Math.random();
}
console.log(randowfunc());
function randamwhole(){

    return Math.floor(Math.random()*20)//this will give randow number between 0 to 19
}
console.log(randamwhole()); //
//calculating random number between two number
function randombetween(min,max){
    return Math.floor(Math.random()*(max-min))+min;

}
console.log(randombetween(10,13));