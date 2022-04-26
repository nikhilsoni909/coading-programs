try{//this statement let you top test the block of code for errror 
    console.log("start of try runs");
    unicycle;//error it is not decelared
    console.log("end of try run :never reached is error is found");

}catch(err){//let you handle the error
// console.log("error has occured:"+err.stack)
//or 
console.log("error has occured:"+err);


}
finally{//let you execute the code after try and catch
console.log("this is always run");


}
console.log("....then the execution continues");
// throw statement let you creat the custom error