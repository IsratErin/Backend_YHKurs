const flipCoin = () => {
  return new Promise((resolve, reject) => {
    let value = Math.random();
    if (value > 0.5) {
      resolve("You win!");
    } else {
      reject("You lose!");
    }
  });
};

const flipCoinResult = async () => {
  try {
    const result = await flipCoin();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

flipCoinResult();

const fecthAdvice = async (id) => {
  try {
    const url = `https://api.adviceslip.com/advice/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.slip) {
      console.log(`Advice ${id}: ` + data.slip.advice);
    } else {
      console.log("No data exist for id: " + id);
    }
  } catch (error) {
    console.log("Error: " + error.message);
  }
};

fecthAdvice(5);
//fecthAdvice(500);

const getAdviceAfterCoinFlip = async (id) => {
  try {
    const coinResult = await flipCoin();
    if (coinResult) {
      console.log("Coin Flip Result: " + coinResult);
      const fetchResponse = await fetch(
        `https://api.adviceslip.com/advice/${id}`,
      );
      const data = await fetchResponse.json();
      console.log("Advice after coin flip: " + data.slip.advice);
    }
  } catch (error) {
    console.log("Could not fetch advice due to Error: " + error);
  }
};

getAdviceAfterCoinFlip(6);
