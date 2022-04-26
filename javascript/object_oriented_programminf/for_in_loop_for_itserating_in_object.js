function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}
const circle = new Circle(1)
for (let key in circle) {
    console.log(key, circle[key]);
}