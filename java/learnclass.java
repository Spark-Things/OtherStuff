import java.util.Scanner;

        class vehicle {
          static void honk(int x) {
           System.out.println("okk done" + x);
          }
         }

public class learnclass extends vehicle{
   int x;
   int modelyear;
   String carname;
   final int y = 25;
   String fname = "spark";
   String lname = "0565";
   static void mymethod(){
   
       for(int i=0; i <= 10; i++){
	      System.out.println("Spark" + " ");
	   }
   }
   
   public void mymethods(int z){
   
        if(z > 5){
		  System.out.println(" you are getting JAVA");
		}else{
		  System.out.println("you are fucked");
		}   
   
   }
     //constructer in java
	    
          public learnclass( int year, String car){
		      modelyear = year;
			  carname = car;
		  }
     
   public static void main(String[] args){
   
     learnclass myobj = new learnclass(1999,"mustang");
	 myobj.x = 1000;
	 System.out.println(myobj.x);
	 System.out.println(myobj.y);
	 System.out.println(myobj.fname + "#" + myobj.lname);
	 mymethod();
	 myobj.mymethods(8);
	 System.out.println(myobj.carname + " " + myobj.modelyear);
     
     person obj3 = new person();
	 obj3.name = "spark from person";
	 System.out.println(obj3.name);
	 
	 Scanner uname = new Scanner(System.in);
	 System.out.println("enter your uname:");
	 
	 String username = uname.nextLine();
     System.out.println("your username is:" +username);
	 
	 
	 honk(7);
}
}