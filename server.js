var express = require("express");
var bodyParser = require("body-parser");
var mysql      = require('mysql');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Pirahn437'
});

// DataBase
// =============================================================
// 

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
