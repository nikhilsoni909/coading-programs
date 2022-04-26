// const arr1=["jan","feb","mar","apr","may","jun","jul","aug"];
// let arr2;
// (
//     function(){
//         arr2=arr1;
//         arr1[0]="patato";//patato will added to arr1 as well as added to arr2 also beacause arr2 has the original arr 1
//     }
// )
// ();
// console.log(arr2);//here patato is priented 

// spread operator
const arr1=["jan","feb","mar","apr","may","jun","jul","aug"];
let arr2;
(
    function(){
        arr2=[...arr1];
        arr1[0]="patato";//here patoto is added to arr1 but not added to arr2 beacuse arr2 has the copy of arr 1
    }
)
();
console.log(arr2);