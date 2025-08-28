function sayHello() {
  console.log("Hello from Node.js!");
}
sayHello();

function welcomeUser(name) {
  console.log(`Welcome ${name}!`);
}

welcomeUser("Israt");
welcomeUser("Erin");

function subtract(a, b) {
  console.log(a - b);
}

subtract(10, 3);

function square(number) {
  return number * number;
}

const result = square(10);
console.log(result);

function profile(name, age, likesCoding) {
  return `Hi, I’m ${name}, I am ${age} years old, and it is ${likesCoding} that I like coding.`;
}

console.log(profile("Israt", 27, true));

function greetWithTime(name, timeOfDay = "morning") {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log(greetWithTime("Israt", "morning"));

console.log(greetWithTime("Israt"));

function calculator(a, b, operator) {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else if (operator === "divide") {
    if (b === 0) {
      return "Error: Can not be divided by zero!";
    }
    return a / b;
  }
}

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "subtract"));
console.log(calculator(10, 5, "multiply"));
console.log(calculator(10, 0, "divide"));

const new_square = (number) => number * number;

const new_result = square(60);
console.log(new_result);
