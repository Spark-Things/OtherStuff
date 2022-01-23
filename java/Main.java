public class Main {
  public static void main(String[] args) {
    System.out.println("Hello\tWorld");
  
// commment in java
/*-----------------------------
    thi is the way to comment multiline in java */
	
	String User = "Spark";
	System.out.println(User + " " + User.length());
	 String name = " helllofbfhdhibdfsihoi jilefhuihefsvhpiui \"anu\" dfbujidfbujiuj";
 	 int myNum = 19;
	 double mydou = 18.25;
	 int myint = (int) mydou;
	 int sar = myNum + myint; 
      System.out.println(myNum);
	  System.out.println(mydou);
	  System.out.println(myint);
	  System.out.println(sar);
	  System.out.println(name.indexOf("anu"));
	  System.out.println(name);
	  
	   String fn = "smit";
	   String ln = "patel";
	   System.out.println(fn.toUpperCase() + " " + ln);
	   
// highest value of x and y 
      System.out.println(Math.min (5 ,10));
	  System.out.println(Math.sqrt(64));
      System.out.println(Math.abs(-4.7));
      System.out.println( (int)(Math.random() * 10001));	


      int time = 22;
    if (time < 10) {
      System.out.println("Good morning.");
    } else if (time < 20) {
      System.out.println("Good day.");
    }  else {
      System.out.println("neel is chutiyo");
    }
	
	int day = 8;
	switch (day) {
	 case 1:
	   System.out.println("monday");
	   break;
	 case 2:
	   System.out.println("tueday");
	   break;
	 case 3:
	   System.out.println("wednusday");
	   break;
	 case 4:
	   System.out.println("thursday");
	   break;
	 case 5:
	   System.out.println("friay");
	   break;
	  case 6:
	   System.out.println("saturday");
	   break; 
	 case 7:
	   System.out.println("sunday");
	   break;  
	 default :
        System.out.println(" You are an alian ");	 
  }
  
     int z = 0;
	 while (z<=5){
          System.out.println("neel chutiyo");
          z++;		  
	 }
	 
	 int t = 0;
	 do {
        System.out.println("bhosdiwala");
         t++;		
	 }while(t<10);
	 
	 int s;
	 for(s=0;s<9;s++)
	 { 
         if(s==5){
		     continue;
		 }	 
	 System.out.println("lodu lalit");
	 }
	 
	 String[] cars = {"sfhufvbhu","vbhdfvbhi","vjkvdfjkbnb","sfvbhsfvbhib"};
	 int i;
	  for (i=0;i<cars.length;i++){
	     System.out.println(cars[i]);
	  }
}

}
