function freezeobj(){
   
    const math_constant={
        PI:3.14
    };
     object.freeze(math_constant);//if we dont use it then const obj PI value can be changed 
    try{
    math_constant.PI=00;

}catch(e){
    console.log(ex);
}
return math_constant.PI;
}
const pi=freezeobj();
console.log(pi);