
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost:27017/todoApp', function(err) {
  if(err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

var app = express();

// Configuration
  app.set('views', __dirname + '/app/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(__dirname + '/app'));


// Routes

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API

app.get('/api/posts', api.posts);

app.get('/api/post/:id', api.post);
app.post('/api/post', api.addPost);
app.put('/api/post/:id', api.editPost);
app.delete('/api/post/:id', api.deletePost);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start server

var server = app.listen(9000, function(){
  console.log("Express server listening on port %d in %s mode", server.address().port);
});

module.exports = app;
