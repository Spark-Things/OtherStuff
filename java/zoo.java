 abstract class animal{
  
   public void sound(){
   
     System.out.println("this animal have a sound :");
   }
   public void sleep(){
     System.out.println("8 hour");
   }
 
}
class cat extends animal{
     
    public void sound(){
	 System.out.println("cat sounds: meaw..meaw");
	}
}
class dog extends animal{

     public void sound(){
	 System.out.println("dog sounds: bhau..bhau");
	 
	 }
}

 class outerclass{
       int x = 10;
	   class innerclass{
	      public int myim(){
		    
		   return x;
		  } 	   
	   }
	}   
     
class zoo{
     public static void main(String[] args){
	     
		 animal mycat = new cat();
		 animal mydog = new dog();
		 
		 mycat.sound();
		 mydog.sound();
		 mydog.sleep();
		 
		 outerclass myouter = new outerclass();
		 outerclass.innerclass myinner = myouter.new innerclass();
		 System.out.println(myinner.myim());
	 }

 
}