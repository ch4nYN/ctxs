
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

//btc to usd
router.post('/btcusd', (req, res, next) => {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.json({
        title: 'error update',
        error: err
      });
    }
    if (user.wallet.btcBalance < req.body.amount) {
      return res.json({
        title: 'transaction error',
        error: 'exceeds balance'
      });
    }
    user.wallet.balance += req.body.total;
    user.wallet.btcBalance -= req.body.amount;
    user.save(function(err, result) {
      if (err) {
        return res.json({
          title: 'error updating',
          error: err
        });
      }
    });
  });
});
//usd to btc
router.post('/usdbtc', (req, res, next) => {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.json({
        title: 'error update',
        error: err
      });
    }
    if (user.wallet.balance < req.body.amount) {
      return res.json({
        title: 'transaction error',
        error: 'exceeds balance'
      });
    }
    user.wallet.balance -= req.body.amount;
    user.wallet.btcBalance += req.body.total;
    user.save(function(err, result) {
      if (err) {
        return res.json({
          title: 'error updating',
          error: err
        });
      }
    });
  });
});
//eth to usd
router.post('/ethusd', (req, res, next) => {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.json({
        title: 'error update',
        error: err
      });
    }
    if (user.wallet.ethBalance < req.body.amount) {
      return res.json({
        title: 'transaction error',
        error: 'exceeds balance'
      });
    }
    user.wallet.balance += req.body.total;
    user.wallet.ethBalance -= req.body.amount;
    user.save(function(err, result) {
      if (err) {
        return res.json({
          title: 'error updating',
          error: err
        });
      }
    });
  });
});
//usd to eth
router.post('/usdeth', (req, res, next) => {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.json({
        title: 'error update',
        error: err
      });
    }
    if (user.wallet.balance < req.body.amount) {
      return res.json({
        title: 'transaction error',
        error: 'exceeds balance'
      });
    }
    user.wallet.balance -= req.body.amount;
    user.wallet.ethBalance += req.body.total;
    user.save(function(err, result) {
      if (err) {
        return res.json({
          title: 'error updating',
          error: err
        });
      }
    });
  });
});
//ltc to usd
router.post('/ltcusd', (req, res, next) => {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.json({
        title: 'error update',
        error: err
      });
    }
    if (user.wallet.ltcBalance < req.body.amount) {
      return res.json({
        title: 'transaction error',
        error: 'exceeds balance'
      });
    }
    user.wallet.balance += req.body.total;
    user.wallet.ltcBalance -= req.body.amount;
    user.save(function(err, result) {
      if (err) {
        return res.json({
          title: 'error updating',
          error: err
        });
      }
    });
  });
});
//usd to ltc
router.post('/usdltc', (req, res, next) => {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.json({
        title: 'error update',
        error: err
      });
    }
    if (user.wallet.balance < req.body.amount) {
      return res.json({
        title: 'transaction error',
        error: 'exceeds balance'
      });
    }
    user.wallet.balance -= req.body.amount;
    user.wallet.ltcBalance += req.body.total;
    user.save(function(err, result) {
      if (err) {
        return res.json({
          title: 'error updating',
          error: err
        });
      }
    });
  });
});
//bch to usd
router.post('/bchusd', (req, res, next) => {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.json({
        title: 'error update',
        error: err
      });
    }
    if (user.wallet.bchBalance < req.body.amount) {
      return res.json({
        title: 'transaction error',
        error: 'exceeds balance'
      });
    }
    user.wallet.balance += req.body.total;
    user.wallet.bchBalance -= req.body.amount;
    user.save(function(err, result) {
      if (err) {
        return res.json({
          title: 'error updating',
          error: err
        });
      }
    });
  });
});
//usd to bch
router.post('/usdbch', (req, res, next) => {
  var decoded = jwt.decode(req.query.token);
  console.log(req.body);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.json({
        title: 'error update',
        error: err
      });
    }
    if (user.wallet.balance < req.body.amount) {
      return res.json({
        title: 'transaction error',
        error: 'exceeds balance'
      });
    }
    user.wallet.balance -= req.body.amount;
    user.wallet.bchBalance += req.body.total;
    user.save(function(err, result) {
      if (err) {
        return res.json({
          title: 'error updating',
          error: err
        });
      }
    });
  });
});


module.exports  = router;