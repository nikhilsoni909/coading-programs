const personalinfo = {
    firstname: 'nikhil',
    lastname: 'soni',
    city: "gadarwara",
    age: 19
}
// const { firstname, lastname } = personalinfo;
// console.log(`${firstname} ${lastname}`);

const { firstname: fn, lastname: ln } = personalinfo;
console.log(`${fn} ${ln}`);   
