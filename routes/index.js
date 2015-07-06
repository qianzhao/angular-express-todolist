
/*
 * GET home page.
 */

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

exports.index = function(req, res){
    Todo.find(function (err, todos) {
      if (err) return next(err);
      res.render('index', {posts: todos});
    });

};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};