// A function that takes a callback and calls it with 'Hello from callback!'

type sayHelloFunction = (message: string) => void; 

//callback function that prints the message
const sayHello = (message: string): void =>{
    console.log(message);
}

const helloCallback = ( sayHello : sayHelloFunction ):void => {
    const message = "Hello from callback!";
    sayHello(message);
}

helloCallback(sayHello);