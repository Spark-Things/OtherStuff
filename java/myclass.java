import java.util.Scanner;

 public class myclass{
 
     public static void main(String[] args){
	    
	     int x,y,sum;
		 Scanner obj = new Scanner(System.in);
		 System.out.println("enter value");
		 
		 x = obj.nextInt();
		 System.out.println("enetr second value");
		 y= obj.nextInt();
		 sum = x + y;
		 System.out.println("Sum:" + sum);
	 
	 }
   
 }