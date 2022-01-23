import java.util.Scanner;
class practice5switch{
  public static void main(String args[]){
    Scanner obj = new Scanner(System.in);
    int a = obj.nextInt();
    switch (a)
    {
      case 1 :
      {
         System.out.println("Monday");
         break;
      }
      case 2 :
      {
         System.out.println("Tuesday");
         break;
      }
      case 3 :
      {
         System.out.println("Wed");
         break;
      }
      case 4 :
      {
         System.out.println("thurs");
         break;
      }
      case 5 :
      {
         System.out.println("Friday");
         break;
      }
      case 6 :
      {
         System.out.println("Saturday");
         break;
      }
      case 7 :
      {
         System.out.println("sunday");
         break;
      }
      default :
      {
         System.out.println("No day");
         break;
      }
    }
  }
}