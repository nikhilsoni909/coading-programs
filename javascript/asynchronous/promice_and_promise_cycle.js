
let stocks = {
    Fruits: ["strawberry", "graphes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "sticks"],
    toopings: ["choclate", "peanuts"]
}
// let is_shop_open = true;
let is_shop_open = false;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        }
        else {

            reject(console.log("our shop is close"))
        }
    })
}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    .then(() => {
        return order(0, () => console.log("production has started"));
    })

    .then(() => {
        return order(2000, () => {
            console.log("the fruit was chopped");
        })
    })
    .then(() => {
        return order(1000, () => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`);
        })
    })


    .then(() => {
        return order(1000, () => {
            console.log("start the machine");
        })
    })

    .then(() => {
        return order(2000, () => console.log(`${stocks.holder[0]} was selected`))

    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.toopings[0]}was selected`));

    })

    .then(() => {
        return order(2000, () => console.log(`serve the icecream`));

    })
    .catch(() => {

        console.log("costumer left ");
    })

    .finally(() => {
        console.log("day ended ,shop is closed");
    })