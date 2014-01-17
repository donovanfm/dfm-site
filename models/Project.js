var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  name : String,
  image : String,
  url : String
});

module.exports = mongoose.model('Project', projectSchema, 'projects');

