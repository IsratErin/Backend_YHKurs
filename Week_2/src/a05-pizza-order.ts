// Simulate ordering pizza. The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'.

type pizzaReadyFunction = (message: string) => void;

//waits 3 seconds and then calls pizzaReady callback function
const orderPizza = (pizzaReady: pizzaReadyFunction): void => {
  console.log("Ordering pizza!!!");
  setTimeout(() => {
    const msg = "Your pizza is ready!";
    pizzaReady(msg);
  }, 3000);
};

//callback function
const pizzaReady = (message: string): void => {
  console.log(message);
};

orderPizza(pizzaReady);
