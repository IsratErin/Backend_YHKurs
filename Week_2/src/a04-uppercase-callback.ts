// A function that takes a string and a callback. The callback should return the string in uppercase. 

type uppercaseConvertionFunction = (data : string)=> void ;

const stringToUppercase = ( text : string, uppercaseConvertion : uppercaseConvertionFunction ): void => {
    console.log(uppercaseConvertion(text));
}

// Callback function that returns the input string in uppercase
const uppercaseConvertion = (data : string): string =>{
    return data.toUpperCase();
}

stringToUppercase("israt", uppercaseConvertion);