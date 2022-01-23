import java.util.Scanner;
class char2darray{
  public static void main(String args[]){
    Scanner obj = new Scanner(System.in);
   while(true){ 
    char a;
    System.out.println("Enter A Character: ");
    a = obj.next().charAt(0);
    if(Character.isLetter(a) == false){
      System.out.println("Enter Character");
      break;
    }
    System.out.println("You Entered :" + Character.toUpperCase(a));
   }
  }
}