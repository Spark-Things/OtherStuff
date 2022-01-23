import java.util.LinkedList;

 public class ll{
 
     public static void main(String[] args){
	 
	     LinkedList<String> vehi = new LinkedList<String>();
		 vehi.add("BMW");
		 vehi.add("volvo");
		 vehi.add("porche");
		 vehi.add("kia");
		 vehi.addFirst("Lemborgini");
		 vehi.addLast("Audi");
         for(String i : vehi){
		     System.out.println(i);
		 }
		 
		 vehi.removeLast();
		 System.out.println("after removlast :" + " " + vehi.getLast());
	 }
    
 }