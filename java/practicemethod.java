public class practicemethod{
    static void sum(){
	
	 System.out.println("method is called");
	}
	
	static void prnt(){
	
	 System.out.println("wahh bete wahh");
	}
	
	static void bte(){
     System.out.println("bsdk bete tum to bade heavy coder ho");	
	}
	
	 static void great(int x){
	    if ( x < 18 )
		{  System.out.println(" access denied ");
	     } else
		 { System.out.println ("access successful");}	

	 }
	 
	static void para( String fname){
	
	   System.out.println( fname + " " + "chutiyo");
	} 
	
	static void mpara( String fname , int gf){
	 
	   System.out.println( fname +" "+ gf);
	}
	 static int paisa(int f){
	    
		 return 50 / f;
	 }
	 
	static void compunding(int x, int y){
	     for(x=0 ;x<31;x++)
		 {
		   System.out.println("chal bsdk" + x);
	     }
     }
	static int meover(int x, int y)
	{
	  return x + y ;
	}
	
	static double meeover( double p , double q )
	{
	    return p + q ;
	}
	
	static int add( int d){
	   if(d>0){
	     return d + add(d-1); 
	   }else
	   { return 0 ;
	   }
	}
	
	static int multi( int m , int n){
	   if (n > m){
	      return m + multi(m,n-1); 
	   }else{
	     return 0;
	   }
	}
	public static void main(String[] args)
	{
	  sum();
	  prnt();
	  bte();
	  great(20);
	  para("dilu");
	  para("neel");
	  mpara("deep", 3);
	  System.out.println(paisa(5));
	  compunding(1 , 1);
	  
	  int pusss = meover(5 , 10);
	  double puss = meeover (5.26, 7.53);
	  System.out.println("int:" + pusss);
	  System.out.println("double:" +puss);
	  
	  System.out.println(add(10));
	  
	  System.out.println(multi(5 , 10));
	}
}