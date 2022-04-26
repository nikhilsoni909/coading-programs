let stocks = {
    Fruits: ["strawberry", "graphes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "sticks"],
    toopings: ["choclate", "peanuts"]
}

let order = (Fruit_name, call_production) => {
    // console.log("order placed,please call production");
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} WAS SELECTED`);
        call_production();

    }, 2000);
};
let production = () => {
    // console.log("order received,starting production");
    //   use strict;Sḥ
    setTimeout(() => {
        console.log(`production has startted`);
        setTimeout(() => {
            console.log("the fruit has been choped");

            setTimeout(() => {
                console.log(`added ${stocks.liquid[0]} and ${stocks.liquid[1]}`)
                setTimeout(() => {
                    console.log('the machine was     started');
                    setTimeout(() => {

                        console.log(`${stocks.holder[1]} was seleted`);
                        setTimeout(() => {
                            console.log(`${stocks.toopings[1]} was added as topings`)
                            setTimeout(() => {
                                console.log("serve the icecream");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0);

};
order(0, production);