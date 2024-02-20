require("dotenv").config();
const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.send(`.env Test : ${process.env.DATABASE_NAME}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
