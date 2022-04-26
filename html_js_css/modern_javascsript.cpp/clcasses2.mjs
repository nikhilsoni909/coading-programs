import { Animal } from "./classes1.mjs"
let cat = new Animal("hello", "hi");
cat.leg = 3;
console.log(cat);
cat.makenoise();
console.log(Animal.return10())