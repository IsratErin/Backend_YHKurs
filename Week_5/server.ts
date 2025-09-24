import express from "express";

//initialization of the app
const app = express();

const PORT = 3000;

//set up a basic route
app.get(`/`, (req, res) => {
  res.send("Welcome to the page!");
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
