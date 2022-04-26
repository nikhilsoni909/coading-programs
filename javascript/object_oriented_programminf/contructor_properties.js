function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}
const another = new Circle(1)
console.log(another);

const Circle1 = new Function('radius', ` this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }`
);//uppercase of F for making it as an obeject
const circle = new Circle1(1);
console.log(circle);
