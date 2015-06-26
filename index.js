/*jshint node:true*/

var open = require('open');
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

var ip = process.env.IP || 'localhost';
var port = process.env.PORT || '3000';

app.use(serveStatic(__dirname + '/www/'));
app.listen(port, ip);

// Automatically open browser on start
open('http://' + ip + ':' + port);
console.log('Server running at http://' + ip + ':' + port);
