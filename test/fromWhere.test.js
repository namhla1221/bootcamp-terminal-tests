let assert = require("assert");
let fromWhere = require("../fromWhere");

describe("The fromWhere function", function(){

    it ("Should return 'Bellville' for CY", function(){
        assert.equal("Bellville", fromWhere("CY"));
    });

    it ("Should return 'Paarl' for CJ", function(){
        assert.equal("Paarl", fromWhere("CJ"));
    });

    it ("Should return 'Cape Town' for CA", function(){
        assert.equal("Cape Town", fromWhere("CA"));
    });

    it ("Should return Some other place if it those not belong to the mentioned places!", function(){
        assert.equal("Some other place!", fromWhere("CL"));
    });

});