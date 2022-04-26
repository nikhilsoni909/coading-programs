// function Circle(radius) {
//     this.radius = radius;
//     this.defaultlocation = { x: 0, y: 0 };
//     this.comuteOptimumLocation = function () {

//     }
//     this.draw = function () {
//         this.comuteOptimumLocation();
//         console.log("draw");
//     }

// }
// const circle = new Circle(10);
// circle.comuteOptimumLocation();//here we are able to access the member funciton outride the function it is public
// circle.draw();  


function Circle(radius) {
    this.radius = radius;
    let defaultlocation = { x: 0, y: 0 };
    let comuteOptimumLocation = function () {

    }
    this.draw = function () {
        comuteOptimumLocation();
        console.log("draw");
    }

}
const circle = new Circle(10);
//circle.comuteOptimumLocation();//here we are not able to access the member funciton outride the function it is privete
circle.draw();  