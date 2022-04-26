let fruit = ["🍎", "🍊", "🍊", "🍊", "🍎"];
let appleshelf = document.querySelector("#apple-shelf");
let orangeshelf = document.querySelector("#orange-shelf");
console.log(appleshelf);
function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleshelf.textContent += "🍎";
        }
        else {
            orangeshelf.textContent += "🍊";
        }
    }
}
sortFruit();