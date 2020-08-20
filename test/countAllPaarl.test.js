let assert = require('assert');
let countAllPaarl = require('../countAllPaarl');

describe('The countAllPaarl function', function(){
    it('Should return first registraion number for CJ 678 543', function(){
        assert.equal("CJ 678 543", countAllPaarl("CJ 678 543"));
    });

    it('Should return second registration number for CJ 67890', function(){
        assert.equal("CJ 67890", countAllPaarl("CJ 67890"));
    });

    it('Should return false for CY 456', function(){
        assert.equal(false, countAllPaarl("CY 456"));
    });

    it('Should return false for CL 456', function(){
        assert.equal(false, countAllPaarl("CL 456"));
    });

    it('Should return false for CA 123', function(){
        assert.equal(false, countAllPaarl("CA 123"));
    });

    
});