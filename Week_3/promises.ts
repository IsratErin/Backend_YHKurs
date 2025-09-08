const flipCoin = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    let result: number = Math.random();
    if (result > 0.5) {
      resolve("You win!");
    } else {
      reject("You lose!");
    }
  });
};

flipCoin()
  .then((message: string) => {
    console.log(message);
    if (message === "You win!") {
      console.log("Fetching advice as you have won!");
      fecthAdvice(5);
      fecthAdvice(500);
    }
  })
  .catch((error: string) => {
    console.log(error);
  });

interface AdviceSlip {
  slip: {
    id: number;
    advice: string;
  };
}

const fecthAdvice = (id: number): void => {
  const url: string = `https://api.adviceslip.com/advice/${id}`;
  fetch(url)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(`Response status ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data: AdviceSlip) => {
      if (data.slip) {
        console.log(`Advice ${id}: ` + data.slip.advice);
      } else {
        console.log("No data exist for id: " + id);
      }
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
};
