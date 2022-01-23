import java.io.FileWriter;
import java.io.IOException;

public class fw{
     public static void main(String[] args){
	 
	 try{    FileWriter obj = new FileWriter("javaPractice.txt");
		 obj.write("this is written bu java codes");
	     obj.close();
	     System.out.println("data Stored");
	 }
	 catch(IOException e){
	     System.out.println("Error Occurs while writing in file");
	     e.printStackTrace();
	 }
 
}
}