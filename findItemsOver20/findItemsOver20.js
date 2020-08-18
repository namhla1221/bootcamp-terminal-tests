module.exports = function(itemList){
    var higherQuantity = 0
    var greater20 = []
    for(var i=0;i<itemList.length;i++){
      var priceTag = itemList[i];
      console.log(priceTag)
      higherQuantity = itemList[i].qty
    if(priceTag.qty>20){
       greater20.push(priceTag)
    }
       }
      return greater20
    }
    