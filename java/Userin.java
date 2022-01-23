import java.util.Scanner;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

 public class Userin{
     
	  public static void main(String[] args){
	   
	     Scanner obj = new Scanner(System.in);
         System.out.println("enter your username");
         
         String Username = obj.nextLine();
		 System.out.println("age:");
		 int age = obj.nextInt();
		 System.out.println("salary:");
		 double salary = obj.nextDouble();
         System.out.println("your Username is:" +Username);	
         System.out.println("your age is:" +age);
         System.out.println("your salary is:" +salary);	
          
		LocalDateTime Rd = LocalDateTime.now();
         
       	System.out.println("Registration date is:" +Rd);
         
         DateTimeFormatter frd = DateTimeFormatter.ofPettern("dd-MM-yyyy HH:mm:ss");
         String frdd = Rd.Format(frd);
         
         System.out.println("your frd" +frdd);		 
	  
	  }
         
   
     
 }