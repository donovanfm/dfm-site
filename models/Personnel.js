var mongoose = require('mongoose');

var personnelSchema = new mongoose.Schema({
  name : String,
  image : String,
  bio : String
});

module.exports = mongoose.model('Personnel', personnelSchema, 'personnel');

