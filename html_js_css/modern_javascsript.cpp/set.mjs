const exapleset = new Set([1, 1, 1, 1, 2, 2, 2, 2]);
exapleset.add(5);
exapleset.add(6).add(910);
exapleset.delete(5);
console.log(exapleset);
exapleset.clear();
console.log(exapleset);