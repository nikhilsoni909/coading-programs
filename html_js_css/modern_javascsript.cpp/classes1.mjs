export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.leg = legs;

    }
    makenoise(sound = "loud") {
        console.log(sound);
    }
    static return10() {
        return 10;
    }
}