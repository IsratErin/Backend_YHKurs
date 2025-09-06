// A function that takes a URL string and a callback. Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'.

type downloadDataFunction = (msg: string) => void;
const downloadUrlData = (
  url: string,
  downloadData: downloadDataFunction,
): void => {
  console.log("Starting to download...");
  setTimeout(() => {
    const msg = `Downloaded data from ${url}`;
    downloadData(msg);
  }, 2000);
};

const downloadData = (msg: string): void => {
  console.log(msg);
};

downloadUrlData("exampleurl.txt", downloadData);
