import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.function.Consumer;

   public class al{
     
      public static void main(String[] Args){
	  
	     ArrayList<String> cars = new ArrayList<String>();
		 cars.add("BMW");
		 cars.add("ford");
		 cars.add("Audi");
		 cars.add("volvo");
		 cars.add("porce");
		  Collections.sort(cars);	 
		/*  for(String r : cars){
		  
		     System.out.println(r);
		  }	
           Iterator<String> it = cars.iterator();
		  System.out.println(it.next());
         		  
		  } */
		
         cars.forEach( (n) -> {System.out.println(n); } );	
         Consumer<String> vv = (n) -> {System.out.println(n);};
         cars.forEach(vv);		 
	  }
   
   }