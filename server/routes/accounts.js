
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
mongoose.connect("mongodb://chan:chan@ds123490.mlab.com:23490/ctxs");

const router = express.Router();

// checking for authorization to pass
router.use('/', (req, res, next) => {
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
    if (err) {
      return res.json({
        title: 'not authorized',
        error: err
      });
    }
    //if token is valid
    next(); //lets the request continue the journey
  }); 
});

//getting user info ONLY FOR AUTHORIZED
router.get('/info', (req, res, next) => {
  var decodedToken = jwt.decode(req.query.token);
  User.findById(decodedToken.user._id, function(err, user) {
    if (err) {
      return res.json({
        title: 'user info error',
        error: err
      });
    }
    if (!user) {
      return res.json({
        title:'no user info',
        error: err
      });
    }
    res.json({
      title: 'info fetch successful',
      obj: user
    });

  });
});



module.exports = router;