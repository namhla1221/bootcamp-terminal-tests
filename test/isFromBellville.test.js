let assert = require('assert');
let isFromBellville = require('../isFromBellville');

describe('The isFromBellville function', function(){

    it('should isFromBellville return CY ', function(){
        assert.equal(true, isFromBellville('CY'));
    });

    it('should isFromBellville return CA ', function(){
        assert.equal(false, isFromBellville('CA'));
    });
});