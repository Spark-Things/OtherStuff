import java.io.File;
import java.io.IOException;


 public class cf{
      
     public static void main(String[] args){
	      
	    try{  File myobj = new File("javaPractice.txt");

		  if(myobj.createNewFile()){
		  
		     System.out.println("System file created " + myobj.getName());
		  }else{
		  
		    System.out.println("file already exist");
		  }
		 }
		 catch(IOException e){
		     System.out.println("File name already used");
			 e.printStackTrace();
		 }
	 }
    
 }