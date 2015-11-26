function isLeapYear (value){
  if(value % 4 == 0 && value % 100 != 0){
  return true;
}if(value % 4 == 0 && value % 100 == 0 && value % 400 != 0){
  return false;
}if(value % 400 == 0){
  return true;
}else{
  return false;
}

}
