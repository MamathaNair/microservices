var broker = require("./broker.js")
console.log("Starting a pipeline");
servePage("NavigationPage");
console.log("served navigation page");

function servePage(pageId) {
    console.log("In serve page"+pageId);
    //requestBackEndServiceForData(pageId);
    broker.sendMessageToQ(pageId);
}
