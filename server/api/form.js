var express = require('express');

const router = express.Router()
var Form = require('../Model/form');

router.post('/addform', function(req, res) {
    let userForm= new Form({
      uname: req.body.uname,
      lname: req.body.lname,
      email: req.body.email,
      gender: req.body.gender,
      
     
    });
  
    
    userForm.save((err, user) => {
      if (err) {
        return res.json({success: false, err: err});
      }
  
      res.json({success: true, data: user});
    });
  });
  module.exports= router;