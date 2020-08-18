let assert = require("assert");
let transportFee = require("../transportFee");

describe("The transportFee function ", function(shift){
  
    it ("should be properly tested by you!", function() {
        // todo fix this assert to call isWeekday correctly. 
var shift = "morning";

assert.equal (transportFee(shift), "R20");
});


it ("should be properly tested by you!", function() {
        // todo fix this assert to call isWeekday correctly. 
var shift = "afternoon";

assert.equal (transportFee(shift), "R10");
});

it ("should be properly tested by you!", function() {
        // todo fix this assert to call isWeekday correctly. 
var shift = "night";

assert.equal(transportFee(shift), "free");
  }); 
});

