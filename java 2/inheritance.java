class inheritance{
  public static void main(String args[]){
   grandson obj = new grandson();
   daughter obj2 = new daughter();
    obj.getdata(50,40);
    obj.disp();
    obj2.disp();
  }
}
class father{
  int a,b;
  void getdata(int x,int y)
  {
    a = x;
    b = y;
  }
}
class son extends father
{
  int add(){
  int sum = a + b;
  return sum;
  }
}
// multi-level inheritance
class grandson extends son{
  int minus(){
    int substraction = a - b;
    return substraction;
  }
  void disp(){
     System.out.println("A = "+a);
    System.out.println("B = "+b);
    System.out.println("sum = "+add());
    System.out.println("substarction = "+minus());}
}
class daughter extends father{
  int c = 20;
    void disp(){
      int multiplication = a + c;
       System.out.println("Multiplication = "+multiplication);
    }
}