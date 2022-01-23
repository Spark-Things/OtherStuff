import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

    public class rf{
	   public static void main(String[] args){
	    try{ File obj = new File("javalearn.txt");
		 Scanner fr = new Scanner(obj);
	     while(fr.hasNextLine()){
		    String data = fr.nextLine();
			System.out.println(data);
		 }
		 fr.close();
	   
	   }catch(FileNotFoundException e){
	   
	    System.out.println("an error occurs");
	   }
	
	
	}
	}