var broker = require("./broker.js")

module.exports = {
    getJSONData:function (pageId){
        console.log("getting "+pageId);
    // var data = getDataFromGateWay(pageId);
    //return processNitroDataAndGenerateValidJSON(pageId,data);
    return pageId;
    }
};

module.exports.getJSONData(broker.getMessageFromQ());





