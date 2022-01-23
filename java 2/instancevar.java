class instancevar{
  public static void main(String args[]){
    test obj = new test();
    obj.mark = 25;
    test.Age = 19;
    System.out.println("roll = "+obj.roll +"\nmark =" +obj.mark +"\n name ="+test.name +"\nAge =" +test.Age );
  }
}
class test {
  int roll = 10;
  int mark;
  static String name = "Smit";
  static int Age ;
}