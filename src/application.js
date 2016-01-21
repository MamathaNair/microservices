var micro1 = require("./servePage.js");
var micro2 = require("./getDataToServeOnPage.js");
var micro3 = require("./getDataFromGateWay.js");

micro3.getDataFromGateWay();

setTimeout(function() {
    console.log('Blah blah blah blah');
    micro1.servePage("Id1");
}, 5000);


setTimeout(function() {
    console.log('Blah blah blah blah extra-blah');
    var page = micro2.getJSONData();
    console.log("Completed pipeline");
    console.log(page);
    console.log("**************");
}, 10000);




