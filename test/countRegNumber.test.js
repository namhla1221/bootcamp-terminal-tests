let assert = require("assert");
let countRegNumber = require("../countRegNumber");



describe("The countRegNumber function ", function(regstr) {
  
    // don't change code above this line
    
    it("should return 1 for 'CY 123-223'", function() {
      
      // change anything in here to make the test pass
      assert.equal(2, countRegNumber("CY 123-223, CA 123-123"));
    });
    
    it("should return 2 - but the parameter needs work'", function() {
      var EXPECTED_COUNT = 2;
      
      // only change code below this line in this function to make this test pass
      
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CY 123-123"));
    });
    
    it("should return 5 - but the parameter needs work'", function() {
      var EXPECTED_COUNT = 6;
      
      // only change code below this line in this function to make this test pass
      
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123, CY 123-123, CJ 123-123, CY 123-123, CJ 123-123"));
    });
    
    it("should return 3 - but there is a curveball'", function() {
      var EXPECTED_COUNT = 6;
      
      // only change code below this line in this function to make this test pass
      
      // change one of the reg numbers in the string below to fix this test 
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123, CY 123-123, CA 123-123, CY 123-123, CA 123-123"));
    });
    
  });
  
  