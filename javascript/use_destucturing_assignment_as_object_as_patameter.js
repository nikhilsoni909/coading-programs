const stats={
    max:23.23,min:2,
    avg:10
};

// const half=(function(){
//     return function half(states){
//         return (states.max+states.min)/2;
//     };

// }
//     )();
// or
const half=(function(){
    return function half({max,min}){
        return (max+min)/2;
    };

}
    )();
    console.log(stats);
    console.log(half(stats));


