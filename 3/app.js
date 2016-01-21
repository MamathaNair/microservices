var path = require('path');
var express = require('express');
app = express();

app.use(express.directory(path.join(__dirname, '/'))); //optional, directory browsing
app.use(express.static(path.join(__dirname, '/')));
app.use(express.errorHandler());

app.listen(process.env.PORT || 3003);