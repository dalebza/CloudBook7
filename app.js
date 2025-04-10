var express = require('express');
var path =  require('path');
var serveStatic = require('serveStatic');

var app = express();

app.use(serveStatic(path.join(__dirname,'public')));


app.listen(3000);