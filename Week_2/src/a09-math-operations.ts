// A function that can do addition, subtraction, multiplication, and division. 
// It should take two numbers, an operation string, and a callback. 

type taskFunction = (num1: number, num2: number, operation: string) => void;

const doMath = (num1 : number, num2 : number, operation : string, doTask : taskFunction): void =>{
    doTask(num1,num2,operation);
}

const doTask = (num1 : number, num2 : number, operation : string ): void =>{
    if(operation === "+"){
        const result = num1 + num2;
        console.log(`Addition result is : ${result}`);
    }else if(operation === "-"){
        const result = num1 - num2;
        console.log(`Substraction result is : ${result}`);
    }else if(operation === "*"){
        const result = num1 * num2;
        console.log(`Multiplication result is : ${result}`);
    }else if(operation === "/"){
        const result = num1 / num2;
        console.log(`Division result is : ${result}`);
    }
}

doMath(10,5,"+", doTask);
doMath(10,5,"-", doTask);
doMath(10,5,"*", doTask);
doMath(10,5,"/", doTask);