var voxal={x:23,y:34};
// old way of assigning value
var x=voxal.x;//x=23
var y=voxal.y;//y=34

// new way
const{x:a,y:b}=voxal;//a=23,y=34;



const avgtemp={today:23.4,tomorrow:23.43};

function gettemptmr(avg__temp){
    "use strict";
    const {tomorrow:temptomorrow}=avg__temp;
    return (temptomorrow);
}
console.log(gettemptmr(avgtemp));
