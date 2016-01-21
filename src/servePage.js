var broker = require("./broker.js")

module.exports = {

    servePage: function (pageId) {
        console.log("Sending page id to queue q1 " + pageId);
        //requestBackEndServiceForData(pageId);
        broker.sendMessageToQ("q1", pageId);
        console.log("Sent page id to queue q1");

    }
};