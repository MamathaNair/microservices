var broker = require("./broker.js")

var defaultPage ={
    pageId:"defaultPage",
    pageName: "Intro",
    description: "this is the default intro page",
    timestamp: "16-1-2016 10:10:10"
};

module.exports = {
    getJSONData: function () {
        var pageId = broker.getMessageFromQ("q1");
        var pages = broker.getMessageFromQ("q2");

        console.log("got " + pageId);
        console.log("pages "+pages);
        if (pageId) {
            console.log("Returning json:");
            console.log(pages[0]);
            return pages[0];
        } else {
            console.log("Returning default json");
            return defaultPage;
        }
    }
};






