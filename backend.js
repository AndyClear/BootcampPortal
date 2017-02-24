var express = require('express');
var app = express();

//app.get('/', function(req, res) {
//	res.end('hello kworld');
//});

var page_hdlr = require('./pages.js');
var schedules_hdlr = require('./schedules.js');
var users_hdlr = require('./users.js');

app.get('/bootcamp/:page_name', page_hdlr);

app.get('/bootcamp/schedules/:eventID', schedules_hdlr);

app.get('/bootcamp/users/:eventID', users_hdlr);

app.listen(8080);