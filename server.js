"use strict";

var express = require("express");
var app = express();

var cors = require("cors");

const FizzBuzzDecorator = require('./FizzBuzzDecorator');
const myFizzBuzz = new FizzBuzzDecorator();


app.use(cors());

app.use("/public", express.static(process.cwd() + "/public"));

app.route("/").get(function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.route("/batch/:fromTo?").get(function(req, res) {
   
  if (req.params.fromTo !== undefined) {
    const fromTo = req.params.fromTo.toString().split(' ');
    const batch = myFizzBuzz.run(parseInt(fromTo[0]), parseInt(fromTo[1]));
  
    res.send(batch);
  }
  
  res.send('Please, be nice and give me a range');
});

// 404 Not Found Middleware
app.use(function(req, res, next) {
  res
    .status(404)
    .type("text")
    .send("Not Found");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Node.js listening ...");
});

