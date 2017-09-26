var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

//var routes = require('./routes/routes.js');

//mongoose.connect('mongodb://rituraj4:mlabdb@ds011963.mlab.com:11963/mychat_rr');
/*mongoose.connect('mongodb://172.17.0.3:27017/contactlist');
mongoose.connection.on('connected', function() {
	console.log('connected');
});
mongoose.connection.on('err', function(err){
	if (err)
		console.log('err in connecting: ', err);
})*/

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/api', routes);

//port
var port = 3000;

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(port, function() {
	console.log('app started on port: ', port);
});

