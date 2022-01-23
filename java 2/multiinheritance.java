class multiinheritance{
  public static void main(String args[]){
   son obj = new son();
   obj.disp();
  }
}
class father{
   int a = 10;
}
interface mother{
   int b = 20;
}
class son extends father implements mother{
  int sum = a + b;
 public void disp(){
  System.out.println("Sum ="+sum); 
  }
}