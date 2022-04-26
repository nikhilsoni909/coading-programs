function Circle(radius) {
    this.radius = radius;
    let defaultlocation = { x: 0, y: 0 };
    let comuteOptimumLocation = function () {
    }
    this.draw = function () {
        comuteOptimumLocation();
        console.log("draw");
    }
    Object.defineProperty(this, 'defaultlocation', {
        get: function () {
            return defaultlocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error("INvalid Location");
            defaultlocation = value;
        }



    });

}

const circle = new Circle(10);
circle.defaultLoacation = 1;
circle.draw();
