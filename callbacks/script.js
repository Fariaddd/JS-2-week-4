// function exampleFunction(){
//     console.log("example function called");
// }

// function exampleFunctionTwo(){
//     console.log("example function two called");
// }

// function doSomethingWithCalback(callbackFunction){
//     callbackFunction();
// }

// doSomethingWithCalback(exampleFunction);
// doSomethingWithCalback(exampleFunctionTwo);

// create callback Function which takes a function
// as an argument
// this cakk back function is whoisEatingCream(callbackFunction)

// showName() // console.log // I am is eating ice cream

function whoIsEatingIceCream(callbackFunction){
    callbackFunction;
}
function showName(){
    console.log("hi i am eating ice cream");
}
whoIsEatingIceCream(showName);
//________-

const values = [5, 10, 15, 20];

function isBiggerThan10(value){
    if(value > 10){
        return true;
    }
}
const newValues = values.filter(isBiggerThan10);

console.log(newValues);