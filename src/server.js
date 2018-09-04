var createError = require('http-errors');
var express    = require('express');        
var morgan = require("morgan");  
var helmet = require("helmet");  
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var config  = require('./config.json');
var cors = require('cors');
const boom = require('boom'); //HTTP-friendly error object)
var logger = require('./lib/logger');
// configure app to use bodyParser()
// this will let us get the data from a POST


var speech2txtRouter = require('./routes/speech2txt');

const PORT = config.port;

const app = express();


app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
app.use(favicon(__dirname + '/images/favicon.ico'));
app.use(helmet());
app.use(morgan("common"));  
app.use('*',cors());


//Routes
app.use('/speech2txt', speech2txtRouter);



//Catch 404 and send error
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  if (err.isServer) {
    // log the error...
    // probably you don't want to log unauthorized access
    console.log("[ERROR]: "+err);
  }
  return res.status(err.output.statusCode).json(err.output.payload);

});

app.listen(PORT, () => {
  console.log(`Running API server at localhost:${PORT}`);
});