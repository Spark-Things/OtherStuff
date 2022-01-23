import java.util.Scanner;
class whileloop{
  public static void main(String args[]){
    Scanner obj = new Scanner(System.in);
     System.out.println("Enter 0 to Exit");
    while(true){
      System.out.println("Enter Any number");
      int a = obj.nextInt();
      if(a==0){
        System.out.println("Thank you");
        break;
      }
      System.out.println("you have entered  " +a);
      if(a%2 == 0){
        System.out.println("Even Number");
      }else{
        System.out.println("odd Number");
      }
    }
  }
}