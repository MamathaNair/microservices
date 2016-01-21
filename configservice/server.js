var express = require('express');
var app = express();

var map = {
    services: [
        {
            serviceId: "micro1",
            serviceDescription: "servePage",
            alternate: "micro2"
        },
        {
            serviceId: "micro2",
            serviceDescription: "getDataToServeOnPage"
        },
        {
            serviceId: "micro3",
            serviceDescription: "getDataFromGateWay"
        }
    ]
};

var okHTML = "<!DOCTYPE html><html><body><img src=\"service-ok.jpeg\" alt=\"We are good\" style=\"width:304px;height:228px;\"></body></html>";
app.get('/status', function (req, res) {
    res.send(okHTML);
});

app.get('/serviceMap', function (req, res) {
    var responseJSON = map;
    res.json(responseJSON);
});


app.get('/servicedetails', function (req, res) {

    var id = req.query.id;
    console.log("Received request for "+id);

    var responseJSON = {};
    map.services.forEach(function (service) {
        if (service.serviceId == id) {
            responseJSON = service;
        }
    });

   res.json(responseJSON);
});

app.get('/servicealternate', function (req, res) {

    var id = req.query.id;
    console.log("Received request for "+id);

    var responseJSON = {};
    var alternateId = null;
    map.services.forEach(function (service) {
        if (service.serviceId == id) {
            alternateId = service.alternate;
        }
    });
    if(alternateId !== null) {
        map.services.forEach(function (alternate) {
            if (alternate.serviceId == alternateId) {
                responseJSON = alternate;
            }
        });
    }
    res.json(responseJSON);
});

var port = 3000;
app.listen(port, function () {
    console.log('Server is running on port : ' + port)
});