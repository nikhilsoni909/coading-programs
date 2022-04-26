
let stocks = {
    Fruits: ["strawberry", "graphes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "sticks"],
    toopings: ["choclate", "peanuts"]
}
let is_shop_open = true;

let toppings_choice = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(

                console.log("which tooping do you like")
            )
        }, 3000)

    })
}

async function kitchen() {
    console.log("a ");
    console.log("b ");
    console.log("c ");
    await toppings_choice()
    console.log("d ");
    console.log("e ");



}
kitchen();
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders");