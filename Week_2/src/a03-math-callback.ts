// A  function that takes two numbers and a callback. The function should add the numbers and send the result to the callback.

type printResultFunction = (result: number) => void;

//add numbers and sends to the callback function printResult
const addNumber = (a1 : number, b1 : number, printResult : printResultFunction): void =>{
    const result = a1 + b1;
    printResult(result);
}

// prints the result
const printResult = (result: number): void =>{
    console.log(result);
}

addNumber(5,50,printResult);