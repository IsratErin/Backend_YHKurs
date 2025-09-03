// Challenge 1
/*  Create a function addTwo that accepts one input and adds 2 to it. */

// To check if you've completed it, uncomment these console.logs!

const addTwo = (num : number): number =>{
    return num + 2;
}

 console.log(addTwo(3));
 console.log(addTwo(10));

// ________________________________________________________________________________________________
// Challenge 2
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/
// uncomment these to check your work

const addS = (input : string): string =>{
    return input + "s";
}
console.log(addS("pizza"));
console.log(addS("bagel"));

// ________________________________________________________________________________________________
// Challenge 3
/* 
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/

type callbackFunctionType = (num : number) => number;

const map = (input : number[], callback : callbackFunctionType): number[] =>{
    const newArray : number[] = [];
    input.forEach(element => {
        newArray.push(callback(element));
    });
    return newArray;
}

console.log(map([1, 2, 3], addTwo));

// ________________________________________________________________________________________________
// Challenge 4
/* 
The function forEach takes an array and a callback, and runs the callback on each element of the array. 
forEach does not return anything.
*/

type forEachCallbackFunctionType = (char: any) => void;
const forEach = (input : any, callback : forEachCallbackFunctionType): void =>{
    for(let i = 0; i < input.length; i++){
        callback(input[i]);
    }    
}
let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet);

// should output abcd


// ________________________________________________________________________________________________
// Challenge 5
/* 
Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined. 
Call this new function mapWith.//console.log(mapWith([1, 2, 3], addTwo));
*/

type mapWithCallbackFunctionType = (number : number) => number;
const mapWith = (input : number[], addTwoCallback : mapWithCallbackFunctionType): number[] =>{
    const newArray : number[] = [];
    forEach(input, (item : number)=>{
        newArray.push(addTwoCallback(item));
    });
    return newArray;

}
console.log(mapWith([1, 2, 3], addTwo));
// should output [ 3, 4, 5 ]

