function createcircle(radius) {//factory function
    return {
        // radius:radius,
        // or
        radius,
        draw: function () {
            console.log("draw");
        }
    };
}

const circle = createcircle(1);
console.log(circle);

//constructor 
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}
const another = new Circle(1);//new will create an empty object for this keword to point
console.log(another);
