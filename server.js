const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/dist')));


//paths
const usersRoute = require('./server/routes/users');
const accountsRoute = require('./server/routes/accounts');
const transactionsRoute = require('./server/routes/transactions');

app.use('/users', usersRoute);
app.use('/accounts', accountsRoute);
app.use('/transactions', transactionsRoute);

app.listen(process.env.PORT || 3030);

//CATCHING ALL ELSE UNSPECIFIED REQUEST AND SENDING BACK TO INDEX.HTML
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});



