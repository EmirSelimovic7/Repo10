function myFunction(myObj, checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else
    return "Not found";
    
}
console.log(myFunction({"title": "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title"));
console.log(myFunction({"title": "Titanic", song: "My Heart Will Go On", genre: "drama"}, "song"));
console.log(myFunction({"title": "Titanic", song: "My Heart Will Go On", genre: "drama"}, "genre"));
console.log(myFunction({"title": "Titanic", song: "My Heart Will Go On", genre: "drama"}, "actor"));
module.exports = myFunction;