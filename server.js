// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var path     = require('path');
require("node-jsx").install();
var mongoose = require('mongoose');                     // mongoose for mongodb
var port = process.env.PORT || 8080;                    // set the port
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var react = require('react')

// configuration =================

mongoose.connect('mongodb://subhojit:subhojit@proximus.modulusmongo.net:27017/p2oZaqis');     // connect to mongoDB database on modulus.io

//app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override'));              // override with the X-HTTP-Method-Override header in the request

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs'); // set up ejs for templating

// routes ======================================================================
require('./app/routes/routes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
  res.json({
    "route": "Sorry this page does not exist!"
  });
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
