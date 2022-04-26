// function addressMaker(address) {
//   
//     const newaddress = {
//         city: address.city,
//         state: address.state,
//         country: "INDia"
//     }
// }
// addressMaker({ city: 'Austin', state: 'texes' })
function addressMaker(address) {
    const { city, state } = address;
    const newaddress = {
        city,
        state,
        country: "INDia"
    }
    console.log(`${newaddress.city},${newaddress.state}`);
}
addressMaker({ city: 'gadawara', state: 'jabalpur' })
