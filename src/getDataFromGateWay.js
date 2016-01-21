var fs = require('fs')
var broker = require("./broker.js")


var data = {
    pages: [
        {
            pageId: "id1",
            pageName: "name1",
            description: "this is a new data page",
            timestamp: "16-1-2016 10:10:10"
        },
        {
            pageId: "id2",
            pageName: "name2",
            description: "this is a new data page 2",
            timestamp: "17-1-2016 10:10:11"
        },
        {
            pageId: "id3",
            pageName: "name3",
            description: "this is a new data page",
            timestamp: "18-1-2016 10:10:12"
        }
    ]
};

module.exports = {



    getDataFromGateWay: function (){;
        console.log("getting data from gateway");
        broker.sendMessageToQ("q2",data.pages);
        console.log("sent data from gateway to queue");
        return data.pages;
    }

};

