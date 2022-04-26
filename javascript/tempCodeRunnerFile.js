function freezeobj(){
    // "use strict";
    const math_constant={
        PI:3.14
    };
    object.freeze(math_constant);
    try{
    math_constant.PI=00;

}catch(e){
    console.log(ex);
}
return math_constant.PI;
}
const pi=freezeobj();
console.log(pi);