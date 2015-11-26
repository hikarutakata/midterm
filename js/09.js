function xor(valueA,valueB){
  if(valueA == true && valueB == true){
    return false;
  }if(valueA == true && valueB == false){
    return true;
  }if(valueA == false && valueB == true){
    return true;
  }if(valueA == false && valueB == false){
    return false;
  }
}
