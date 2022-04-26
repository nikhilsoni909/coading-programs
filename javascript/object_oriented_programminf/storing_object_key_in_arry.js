function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}
const circle = new Circle(1)

const keys = Object.keys(circle);
console.log(keys);


if ('radius' in circle) {
    console.log("circle has radius")
}