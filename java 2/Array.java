import java.util.Scanner;
class Array{
  public static void main(String args[]){
   Scanner obj = new Scanner(System.in);
   System.out.println("Enter Array Size : ");
   int a = obj.nextInt();
   int num[] = new int[a];
   System.out.println("enter "+num.length +" elements : ");
   for(int i =0;i<num.length;i++){
     num[i] = obj.nextInt();
   }
   System.out.println("You entered: ");
   for (int i=0;i<num.length;i++){
     System.out.println(num[i]);
   } 
  }
}