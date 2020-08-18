let assert = require('assert');
let countAllPaarl = require('../countAllPaarl');

describe('The countAllPaarl function', function(){
    it('Should return first registraion number for CJ 678 543', function(){
        assert.equal("CJ 678 543", countAllPaarl("CJ 678 543"));
    });

    it('Should return second registration number for CJ 67890', function(){
        assert.equal("CJ 67890", countAllPaarl("CJ 67890"));
    });

    it('Should return false for CN 7864', function(){
        assert.equal(false, countAllPaarl("CN 7864"));
    });

    it('Should return false for CL 900', function(){
        assert.equal(false, countAllPaarl("CL 900"));
    });

    it('Should return false for CA 34567', function(){
        assert.equal(false, countAllPaarl("CA 34567"));
    });

    
});