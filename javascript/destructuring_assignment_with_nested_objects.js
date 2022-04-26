"using strict";
const weather={
    
    today:{min:72,max:83},
    tomorrow:{min:23,max:35}
};
function getmaxoftomorrow(weather){

    const{tomorrow:{max:maximum}}=weather;
    return maximum;

}
console.log(getmaxoftomorrow(weather));