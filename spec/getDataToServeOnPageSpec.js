
var getDataToServeOnPage = require("../src/getDataToServeOnPage");

describe("getDataToServeOnPage is called", function () {
    it("should return page id", function () {
        var output =getDataToServeOnPage.getJSONData("fakeId");
        expect(output).toBe("fakeId");
    });
});