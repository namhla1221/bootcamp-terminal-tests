let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe("The totalPhoneBill function ", function(item){

it("Should return anything that startsWith 'c' ", function(){
    assert.equal('R2.75', totalPhoneBill('call'))

});

it("Should return anything that startsWith 's' ", function(){
    assert.equal('R0.65',totalPhoneBill('sms'))
});

});