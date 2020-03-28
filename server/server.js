var express = require('express');
var dbconfiq = require('../server/db/dbconfig');
var bodyParser = require('body-parser');
let formupUser = require('../server/api/form');

var Form = require('../server/Model/form');


 let middleware  = require('../server/db/middleware')
 const  passport = require('passport');

var app = express();
var cors = require('cors')

var PORT = 5000;
app.use(cors())
app.use(bodyParser.json());

app.use('/api/registeruser',  formupUser);




app.get('/showdata', function(req, res) {
   Form .find({}).then((user)=>{
    if (user) {

       console.log(user)
      res.json({success: true, data: user});
    }

    else{
    res.json({success: true, data: user});
    }

   })
  
 
});


app.listen(PORT, function() {
  console.log('Server is running on PORT:', PORT);
});
