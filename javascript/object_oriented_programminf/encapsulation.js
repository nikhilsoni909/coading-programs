let baseselary = 3000;
let overtime = 10;
let rate = 20;

function getwage(baseselary, overtime, rate) {//encapsulation
    return baseselary + (overtime * rate);

}

let employee = {
    baseselary: 3000,
    overtime: 10,
    rate: 20,
    getwage: function () {
        return this.baseselary + (this.overtime * this.rate);
    }
};
console.log(employee.getwage());
console.log(getwage(baseselary, overtime, rate));