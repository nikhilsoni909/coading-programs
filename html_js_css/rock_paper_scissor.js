let hands = ["rock", "paper", "scissor"];

function gethand() {
    let randomindex = Math.floor(Math.random() * 3);
    return hands[randomindex];
}
console.log(gethand());