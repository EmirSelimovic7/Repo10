var myPet = {
    species: "labrador",
    name: "Rami",
    legs: 4,
    friends: ["Ajk", "Rex"]
};
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };