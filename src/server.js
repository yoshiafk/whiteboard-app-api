//app.js
require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const {PORT, DATABASE_URL} = process.env

//body parser to get data from body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//using routes specified externally
const router = require('./routes');
app.use(router.apiRouter);
app.use(router.listRouter);

//mongodb connection
mongoose.connect(DATABASE_URL, { useNewUrlParser: true }, { useUnifiedTopology: true }).
  catch(error => handleError(error));

  module.exports=
  app;