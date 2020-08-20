let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe("The countAllFromTown", function(reg){

    it ('Should return 1', function(){
        var town = countAllFromTown("CL 356, CJ 4675, CJ 47567, CA 4656", "CL")
        assert.equal(town,2)
    });

    it ('Should return 2', function(){
        var town = countAllFromTown(" CJ 4675, CA 4656, CA 4656", "CA")
        assert.equal(town,1)
    });

    it ('Should return 2', function(){
        var town = countAllFromTown("CL 356, CL 356,  CJ 4675, CJ 47567, CA 4656", "CL")
        assert.equal(town,2)
    });

    it ('Should return 1', function(){
        var town = countAllFromTown("CL 356, CJ 47567,", "CL")
        assert.equal(town,1)
    });


});