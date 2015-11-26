function toOrdinalNumber(value){
  var result;
  if(value %10 == 1){
    return value + "st";
  }if(value %10 == 2 ){
    return value + "nd";
  }if(value %10 == 3 ){
    return value + "rd";
  }if(4<= value <= 20){
    return value + "th";
  }
}
