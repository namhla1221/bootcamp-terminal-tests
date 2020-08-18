let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe ("The yearsAgo function", function (year){
    it("Should return how many years ago that was", function(){
        assert.equal(25, yearsAgo(1995));
    });

});