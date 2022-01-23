enum level{
    LOW,
	MEDIUM,
	HIGH
}
public class nume{
      
     public static void main(String[] args){
	    level vs = level.LOW;
	    
		switch(vs){
		 
		  case LOW:
		    System.out.println("LOW LEVEL");
			break;
		  case MEDIUM:
		     System.out.println("MEDIUM LEVEL");
			 break;
		  case HIGH:
             System.out.println("HIGH LEVEL");
             break;
        }			 
	 }
}  