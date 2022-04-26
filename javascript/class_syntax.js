// var spaces=function(targetplanet){
//     this.targetplanet=targetplanet;
// }
// var a=new spaces("jupiter");
// console.log(a.targetplanet); //old way


// new way by class
class spaces{
constructor (targetplanet){
    this.targetplanet=targetplanet;
}
}
var a=new spaces("jupiter");
console.log(a.targetplanet);

function makeclass(){
    class vegetable {
        constructor(name){
            this.name=name;
        }
      
    }
      return vegetable;
}
const veg=makeclass();
const carrot=new veg("carrot");
console.log(carrot.name);