module.exports = function(items,objectsList){
    var itemsOver = 0
    var x = []
    for(var i=0;i<items.length;i++){
      var listItem2 = items[i];
      itemsOver = items[i].qty
      if(listItem2.qty > objectsList){
          x.push(listItem2)
      }
    }
      return x
    }