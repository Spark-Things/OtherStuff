import java.util.HashMap;

public class hashh{

    public static void main(String[] args){
	
	 HashMap<String ,String> capital = new HashMap<String,String>();
	 capital.put("Billimora","vankal");
	 capital.put("Chikhli","dgdg");
	 capital.put("england","london");
	 
	     System.out.println(capital);
	  System.out.println(capital.get("Billimora"));
	  capital.remove("Chikhli");
	  System.out.println(capital);
	  
	  for( String i : capital.keySet()){
	     System.out.println(i);
	  }
	}
  
}