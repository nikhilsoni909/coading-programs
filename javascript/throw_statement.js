// by using throw we can creat custom errors
let json =' {"age":30}';//suppose this is a json data we get from server for converting it into object we have to perse it
try{
    let user=JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("incomplete data:no data name");
        console.log(user.name);
    } }
    catch(e){

console.log("JSON error: "+e.message);

    }
   