// A function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'. 

type sayLateFunction = (message: string) => void;

const sayHelloLater = ( sayLateFunction : sayLateFunction): void =>{
    setTimeout(()=>{
        const message = "Hi, I am late!";
        sayLateFunction(message);
    }, 2000);
}

//callback function that prints the message
const sayLate = ( message: string) : void =>{
    console.log(message);
}

sayHelloLater(sayLate);