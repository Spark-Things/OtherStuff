class interfacee{
  public static void main(String args[]){
    son obj = new son();
    obj.disp();
    obj.add();
  }
}
interface father{
  public static final int mark = 100;
  int roll = 121;
  void disp();
}
interface mother{
   int mark2 = 200;
   void add();
}
class son implements father,mother{
  int mark1 = 110;
  int sum = mark + mark1;
  public void disp(){
    System.out.println("roll no =" +father.roll);
    System.out.println("Marks =" +sum);
  }
  public void add(){
    sum = sum+mark2;
    System.out.println("Marks2 =" +sum);
  }
}