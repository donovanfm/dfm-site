
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var data = require('./routes/data');
var contact = require('./routes/contact');
var http = require('http');
var path = require('path');
var exphbs = require('express3-handlebars');

var app = express();

//var isDevMode = 'development' == app.get('env');
var isDevMode = process.env.NODE_ENV == 'development';
var clientDir = isDevMode ? 'client' : 'client/dist';

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, clientDir));
app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, clientDir)));

// development only
if (isDevMode) {
  console.log('dev mode!');
  app.use(express.errorHandler());
}

//HTTP Routes
app.get('/', routes.index);

//REST Routes
app.get('/data/personnel', data.getPersonnel);
app.get('/data/projects', data.getProjects);
app.get('/data/technologies', data.getTechnologies);
app.post('/contact', contact.sendEmail)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
