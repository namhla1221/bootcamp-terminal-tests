module.exports = function(whichDay){
    var departments = ''
    var sales = 0
    for(var i=0;i<whichDay.length;i++){
      var list = whichDay[i];
      //departments = whichDay[i]
      //console.log(list.sales)
      if (list.sales > sales) {
        sales = list.sales   
        departments = list.department
      } 
    }
     console.log(sales, departments)
     return departments
    }
   
   function mostProfitableDay(salesData){
    var dayMap = {}
    var sales = 0
     
     
     for(var i=0;i<salesData.length;i++){
       var list = salesData[i]
       var day = list.day
       var most = list.sales
       if(dayMap[day] === undefined) {
         dayMap[day] = 0;
       }
       dayMap[day] += list.sales
     }
    //  console.log(dayMap);
     var mostDay = ''
     var mostSales = 0
     for( let props in dayMap){
      if(dayMap[props] > mostSales){
        mostSales = dayMap[props]
        mostDay = props
      }
   
     }
     return mostDay
   }