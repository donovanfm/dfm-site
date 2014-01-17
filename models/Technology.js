var mongoose = require('mongoose');

var technologySchema = new mongoose.Schema({
  name : String,
  image : String,
  url : String
});

module.exports = mongoose.model('Technology', technologySchema, 'technologies');

