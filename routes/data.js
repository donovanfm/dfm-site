var Personnel = require('../models/Personnel');
var Project = require('../models/Project');
var Technology = require('../models/Technology');

var _ = require('lodash');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dfm');
var db = mongoose.connection;

var sendCollectionJSON = function(model, res, next) {
  model.find({}, function(err, collection) {
    if (err) return next(err);
    res.json(collection);
  });
};

exports.getPersonnel = function(req, res, next) {
  sendCollectionJSON(Personnel, res, next);
};

exports.getProjects = function(req, res, next) {
  sendCollectionJSON(Project, res, next);
};

exports.getTechnologies = function(req, res, next) {
  sendCollectionJSON(Technology, res, next);
};

