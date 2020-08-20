let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe ("The yearsAgo function", function (year){
    it("Should return the difference between that year and current year ", function(){
        assert.equal(25, yearsAgo(1995));
    });

    it("Should return the difference between that year and current year", function(){
        assert.equal(50, yearsAgo(1970));
    });

    it("Should return the difference between that year and current year", function(){
        assert.equal(130, yearsAgo(1890));
    });

    it("Should return the difference between that year and current year", function(){
        assert.equal(19, yearsAgo(2001));
    });

    it("Should return the difference between that year and current year", function(){
        assert.equal(360, yearsAgo(1660));
    });

    it("Should return the difference between that year and current year", function(){
        assert.equal(21, yearsAgo(1999));
    });

    it("Should return the difference between that year and current year", function(){
        assert.equal(12, yearsAgo(2008));
    });
});