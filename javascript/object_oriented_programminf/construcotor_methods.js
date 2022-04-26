function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}
// const another = new Circle(1);
// console.log(another);
// or


Circle.call({}, 1);
Circle.apply({}, [1, 3, 2]);

