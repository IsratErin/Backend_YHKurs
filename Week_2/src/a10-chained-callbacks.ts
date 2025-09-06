// Three functions that each wait 1 second and then call the next callback,
//  printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order.

type nxtFunctionType = () => void;

const firstFunction = (nxtFunction: nxtFunctionType): void => {
  setTimeout(() => {
    console.log("Step 1 done");
    nxtFunction();
  }, 1000);
};

const secondFunction = (nxtFunction: nxtFunctionType): void => {
  setTimeout(() => {
    console.log("Step 2 done");
    nxtFunction();
  }, 1000);
};

const thirdFunction = (nxtFunction: nxtFunctionType): void => {
  setTimeout(() => {
    console.log("Step 3 done");
    nxtFunction();
  }, 1000);
};

firstFunction(() => {
  secondFunction(() => {
    thirdFunction(() => {});
  });
});
