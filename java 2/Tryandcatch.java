import java.util.Scanner;
class Tryandcatch{
  public static void main(String args[]){
  try{
    Scanner obj = new Scanner(System.in);
    int a = obj.nextInt();
    int b = obj.nextInt();
    int c = a/b;
    if(b<a){
    System.out.println(c);
    }else{
      System.out.println("BSDK B ko A se chota likh");
    }
  }
  catch(ArithmeticException e){
     System.out.println("division By zero not Avilable");
  }
  finally{
    System.out.println("finally block");
  }
  }
}