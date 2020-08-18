let assert = require("assert");
let isWeekday = require("../isWeekday");


describe("The isWeekday function ", function(day){
  
    it ("should say that Monday is a weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        // var day = "Monday"; 
        assert.equal(true, isWeekday("day"));
    });
  
    it ("should say that Friday is a weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        //  var day = "Friday";
        assert.equal(true, isWeekday ("day"));
    });
    
    it ("should say that Sunday is not weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        //  var day = "Sunday";
        assert.equal(true, isWeekday ("day"));
    });
  
    it ("should say that Saturday is not weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        // var day = "Saturday";
         assert.equal(true, isWeekday("day"));
    });
    
  
    
});


