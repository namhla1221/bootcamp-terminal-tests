let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];


describe('The findItemsOver20 function', function(){

    it('should return items over 20', function(){
  
            assert.deepEqual(results, findItemsOver20(itemList))
    });
});
