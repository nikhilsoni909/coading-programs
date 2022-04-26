// const bycycle={
// gear:2,
// setgear:function(newgear){
//     "use strict";
//     this.geard=newgear
// }

// };
// or
const bycycle={
gear:2,
setgear(newgear){
    "use strict";
    this.gear=newgear
}

};
bycycle.setgear(3);
console.log(bycycle.gear);