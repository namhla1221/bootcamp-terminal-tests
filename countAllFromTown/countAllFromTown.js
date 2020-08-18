module.exports = function(reg){
    var place = reg.split(",");
    var town = []
    for (var i=0;i<place.length;i++){
      var namhla = place[i].trim()
      if (namhla.startsWith("CJ")){
        town.push(namhla)
      }
    }
    console.log(town.length);
    return town.length
  }