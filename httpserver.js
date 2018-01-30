// Dependencies
var http = require("http");
var fs = require("fs");
var url = require('url');

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  // var path = req.url;
  var request = url.parse(req.url, true);
  var action = request.pathname;

  switch (action) {

    case "/portfolio.html":
    case "/contact.html":
      return renderHTML(action, res);

    case "/assets/css/style.css":
      return renderCSS(action, res);

    case "/assets/images/IMG_1121.jpeg":
    case "/assets/images/github.jpeg":
    case "/assets/images/linkedin.jpeg":
    case "/assets/images/portimg1.jpeg":
    case "/assets/images/portimg2.jpeg":
    case "/assets/images/portimg3.jpeg":
    case "/assets/images/portimg4.jpeg":
    case "/assets/images/portimg5.jpeg":
    case "/assets/images/stackover.jpeg":
    case "/assets/images/swirl_pattern.jpeg":
      return renderIMG(action, res);

    default:
      return renderHTML("/index.html", res);
  }
}


function renderHTML(filePath, res) {
    return fs.readFile(__dirname + filePath, function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  function renderCSS(filePath, res) {
      return fs.readFile(__dirname + filePath, function(err, data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      });
    }

  function renderIMG(filePath, res) {
    var img = fs.readFileSync(__dirname + filePath);
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(img, 'binary');
  }

server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);

});
