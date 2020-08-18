let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe("The totalPhoneBill function ", function(item){

it("Should whatever that starts with letter 'c' must return R2.75", function(){
    assert.equal('R0.00', totalPhoneBill('car'))

});

it("Should whatever that starts with letter 's' must return R0.65", function(){
    assert.equal('R0.00',totalPhoneBill('sweet'))
});

});