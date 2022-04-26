let incomes = [5232, 234, 4234];
let total = 0;
for (const income of incomes) {
    console.log(income);
    total += income;
}
console.log(total);

let full_name = "hello wolrd";
for (const i of full_name) {
    console.log(i);
}
for (let income of incomes) {
    income += 200;//this will not we cant update value in for in loop
    console.log(income);

}