let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe ("The findItemsOver function", function(){
    var item = [
        {name: 'pears', qty: 37},
        {name: 'bananas', qty: 27},
        {name: 'apples', qty: 10},
    ];

    var threshold = 25;
    it ("should return findItemsOver ", function(){
        assert.deepEqual([
            {name: 'pears', qty: 37},
            {name:'bananas', qty:27},
        ], findItemsOver(item,25))
    });
});