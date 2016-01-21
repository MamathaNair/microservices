var express = require('express');
var app = express();
var broker = require("./broker.js")


app.get('/status', function (req, res) {
    res.send("I am Running!!!!");
});

app.post('/addToQueue', function (req, res) {
    var qId = req.query.qId;
    var data = req.data;
    broker.sendMessageToQ(qId, data);
    res.send("Added to queue");
});

app.get('/getFromQueue', function (req, res) {
   //read data from the queue and send it back
    var qId = req.query.qId;
    var data = broker.getMessageFromQ(qId);
    res.send(data);
    res.send("got from queue");
});


var port = 4000;
app.listen(port, function () {
    console.log('Broker is running on port : ' + port)
});