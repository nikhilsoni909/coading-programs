const credits = 0;
// if (credits) {
//     console.log("you can paly");
// }//will not run


// if ("hello world") {//this will run beacuse it is a truthy value if contion is fill with any thing like  string array then it is a truthy value
//     console.log("you can paly");
// }

// butif
if ("") {//this is a falsy value it wont run

    console.log("you can play");
}

else {
    console.log("you cant play");

}

// falsy values:
// false
// 0
// ""
// null->how you as a developer signifies emptyness
// undefined->how javascript signifies emptiness
// NaN-----not a number

// exaples null
// let currentviewers = null;
// currentviewers = ["jane", "nick"];
// currentviewers = null;

// if (currentviewers) {
//     console.log("we have wievers");
// }


// example undefined

let currentviewers = ["jane", "nick"];


if (currentviewers) {
    console.log(currentviewers[3]);//will give undefined
}



