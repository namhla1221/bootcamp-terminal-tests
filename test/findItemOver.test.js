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

    describe ("The findItemsOver function", function(){
        var item = [
            {name: 'oranges', qty: 40},
            {name: 'grapes', qty: 2},
            {name: 'peaches', qty: 10},
            {name: 'lemons', qty: 26}
        ];
    
        var threshold = 25;
        it ("should return findItemsOver ", function(){
            assert.deepEqual([
                {name: 'oranges', qty: 40},
                {name:'lemons', qty:26},
            ], findItemsOver(item,25))
        });
    
    });

    describe ("The findItemsOver function", function(){
        var item = [
            {name: 'tomatoes', qty: 15},
            {name: 'potatoes', qty: 50},
            {name: 'strawberry', qty: 30},
            {name: 'berries', qty: 45}
        ];
    
        var threshold = 25;
        it ("should return findItemsOver ", function(){
            assert.deepEqual([
                {name: 'potatoes', qty: 50},
                {name:'strawberry', qty:30},
                {name:'berries', qty:45},
            ], findItemsOver(item,25))
        });
    
    });

});