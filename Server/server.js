var express = require('express');
var helmet = require('helmet');
var app = express();
const passport = require('passport');
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(passport.initialize());

// passport config
require('./config/passport');
app.use(helmet.referrerPolicy());

var users = require('./routes/api/users');
const port = process.env.PORT || 5000;
app.set('view engine','ejs');
app.use('/Client',express.static('Client'));
app.use('/api/users',users);
app.listen(port, () => console.log(`Listening on port ${port}`));
console.log('server started ');