function Circle(radius) {
    this.radius = radius;
    let defaultlocation = { x: 0, y: 0 };
    this.show = function () {
        return defaultlocation;
    }
    this.draw = function () {
        comuteOptimumLocation();
        console.log("draw");
    }

}
const circle = new Circle(10);
console.log(circle.show());                          