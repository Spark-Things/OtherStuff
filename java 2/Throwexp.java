class Throwexp{
  public static void main(String args[]){
    try{data();
    data1();}
    catch(NullPointerException e){
      System.out.println("Handle in mian menu");
    }

  }
   static void data(){
    try{
    int i = 100/0;
    System.out.println("A: "+i);
    }
    catch(ArithmeticException e){
      throw new NullPointerException();
    }
  }
  static void data1(){
    try{
    int b = 100/0;}
    catch(ArithmeticException e){
      throw new NullPointerException();
    }
  }
}