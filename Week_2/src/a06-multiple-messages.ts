// A function that takes a callback and calls it three times with different messages.

type printMsgFunction = (message : string) => void;

const printThreeMessages = (printMsg : printMsgFunction): void =>{
    const msg1 = "My name is Israt.";
    const msg2 = "I am 27 years old.";
    const msg3 = "I have a daughter";
    
    // calling the callback function with 3 different messages
    printMsg(msg1);
    printMsg(msg2);
    printMsg(msg3);
}

const printMsg = (message : string): void =>{
    console.log(message);
}

printThreeMessages(printMsg);