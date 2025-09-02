// A function that takes two callbacks: one for success and one for error. Use Math.random() to decide which to call. 

type successFunction = (msg : string) => void;
type errorFunction = (msg : string) => void;

const succeessOrError = (printSuccess : successFunction, printError : errorFunction): void=>{
        const num = Math.random();
        console.log(num);
        if(num > 0.5 ){
            const successMsg = "It's a success!";
            printSuccess(successMsg);
        }else{
            const errorMsg = "It's an error!";
            printError(errorMsg);
        }
}
const printSuccess = (msg : string): void =>{
    console.log(msg);
}
const printError = (msg : string): void =>{
    console.log(msg)
}

succeessOrError(printSuccess,printError);