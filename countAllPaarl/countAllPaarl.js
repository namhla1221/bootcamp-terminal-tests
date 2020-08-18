module.exports = function countAllPaarl(reg){
    //console.log(reg)
    var list = reg.split(", ")
    var paarl = []
    for (var i=0;i<list.length;i++){
      if(list[i].startsWith("CJ")){
      paarl.push(list[i])
      }
    }
    return paarl
  }