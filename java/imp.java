  interface animal{
     public void sound(); 
   }
   
   class dog implements animal{
   
     public void sound(){
	     System.out.println("baww.. baww");
	 }
   }
   class cat implements animal{
   
     public void sound(){
	    System.out.println("meow.. meow");
	 }
   }
   class imp{
     public static void main(String[] args){
	  
	     animal mydog = new dog();
         animal mycat = new cat();
         mydog.sound();
		 mycat.sound();
         		 
	 }
      
    
   }