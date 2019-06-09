const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbmodel = require(path.join(__dirname,'..','/model','DBModel.js'));
const router = express.Router();
const fs = require('fs');
const logger = require('morgan');
const bodyparserjson = bodyParser.json();
const accessLogStream = fs.createWriteStream(path.join(__dirname,'..','/Log','server.log'),{flags:'a+'});
router.use(logger('combined',{stream:accessLogStream}));
const urlencodedparser = bodyParser.urlencoded({ extended: false })

router.get('/api/hello',(req, res) => {
    res.send({ express: 'Hello From Express' });
});

router.post('/api/world', bodyparserjson, (req, res) => {
    console.log(req.body);
    res.send( `I received your POST request. This is what you sent me: ${req.body.postfromuser.post}`);
});




module.exports = router;