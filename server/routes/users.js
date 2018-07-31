
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
mongoose.connect("mongodb://chan:chan@ds123490.mlab.com:23490/ctxs");

const router = express.Router();

//creating user
router.post('/register', (req, res, next) => {
  var newUser = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  });

  User.create(newUser, function(err, result) {
    if (err) {
      console.log(err);
      return res.json({
        title: 'error occured',
        error: err
      });
    }
    console.log(result);
    res.json({
      title: 'user successfully created',
      obj: result
    });
  });
});

//logging in user
router.post('/login', (req, res, next) => {
  User.findOne({ username: req.body.username}, function(err, user) {
    if (err) {
      console.log(err);
      return res.json({
        title: 'login error',
        error: err
      });
    }
    //no existing user with same email
    if (!user) {
      return res.json({
        title: 'login failed',
        error: 'invalid login credential'
      });
    }
    //password is incorrect
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.json({
        title: 'login failed',
        error: 'invalid login credential'
      });
    }
    //if all is good, creating a new token for auth
    //sending a json json object called 'user' with USER object from the db
    // and making it expire in 2 hours
    var token = jwt.sign({user: user}, 'secret');
    res.json({
      title: 'login successful',
      token: token,
      userId: user._id
    });
  });
});




module.exports = router;