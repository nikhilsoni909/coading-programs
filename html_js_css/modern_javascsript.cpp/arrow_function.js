// function add(...nums) {
//     let total = nums.reduce(function (x, y) {
//         return x + y;
//     });
//     console.log(total);
// // }


// function add(...nums) {
//     let total = nums.reduce((x, y) => {
//         return x + y;
//     });
//     console.log(total);
// }

// }
function add(...nums) {
    let total = nums.reduce((x, y) => x + y)

    console.log(total);
}
add(1, 2, 3, 7, 8, 9);