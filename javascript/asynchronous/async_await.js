
let stocks = {
    Fruits: ["strawberry", "graphes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "sticks"],
    toopings: ["choclate", "peanuts"]
}
let is_shop_open = true;
// let is_shop_open = false;
// let order = () => {
//     return new Promise((resolve, reject) => {
//         if () {
//             resolve()

//         }
//         else {
//             reject()
//         }
//     })


// }

async function order() {
    try {
        await abc;
    }
    catch (error) {
        console.log("abc doesnt exitst", error);
    }

    finally {
        console.log("runs code anyways");
    }
}
order().then(() => {
    console.log("hello world  q");
})
order();