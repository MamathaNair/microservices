var broker = require("./broker.js")

module.exports = {






};


function getJSONData(pageId){
    // var data = getDataFromGateWay(pageId);
    //return processNitroDataAndGenerateValidJSON(pageId,data);
    return pageId;
}



getJSONData(broker.getMessageFromQ());