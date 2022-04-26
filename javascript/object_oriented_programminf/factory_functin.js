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