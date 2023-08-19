function divide(num,x,arr){
  
  if(num <= 0 || x > num){
    return;
  }
  
  if(num % x == 0){
     arr.push(x);
  }

  return divide(num,++x,arr)
}

function dilu(){
  var arr = [];
  var x = 1;
  var num = 10;
  divide(num,x,arr);

  console.log(arr);
}
dilu();