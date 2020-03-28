var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  uname: { type: String, required: [true, 'Email must be provieded'] },
  lname: { type: String, required: [true, 'Email must be provieded'] },
  

  email: { type: String, required: [true, 'password must be given '] },
  gender: { type: String, required: [true, 'password must be given '] },
  



})





const User = mongoose.model('Form', userSchema);

module.exports = User;
