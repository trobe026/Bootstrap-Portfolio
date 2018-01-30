// Dependencies
var http = require("http");
var fs = require("fs");
var url = require('url');
var express= require('express');

// Set our port to 8080
var PORT = 8080;

// Create our server
var app = express();

app.use(express.static(__dirname));

app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
