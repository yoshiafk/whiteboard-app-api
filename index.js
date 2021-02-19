const express = require("express");
const bodyParser = require("body-parser");

const app = require("./src/server");
const server = require("./src/server");


require("dotenv").config();

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT} and use ${NODE_ENV} ENV`);
});

