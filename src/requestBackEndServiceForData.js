module.exports = {

 requestBackEndServiceForData: function (pageId){
    console.log("requesting jsondata for "+pageId);
    getJSONData(pageId);
    return pageId;
}

};