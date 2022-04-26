export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    mekenoise(sound = "loud Noise") {
        console.log(sound);

    }
    get metadata() {
        return ` Type:${this.type},legs:${this.legs}`;

    }
}
// export class Cat extends Animal() {
//     constructor(type, legs, tail) {
//         super(type, legs);
//         this.tail = tail;

//     }
// }

export class Cat extends Animal {
    makenoise(sound = "meao") {
        console.log(sound);
    }
}