'use strict';

const express = require('express');

// Constants
const PORT = 8080;


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

// App
const app = express();
app.get('/', function (req, res) {
    res.send('Hello world\n');
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


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);