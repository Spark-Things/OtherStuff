class forloop{
  public static void main(String args[]){
    for(int i=0;i<10;i++){
         if(i==4){
           continue;
         }
       for(int j=1;j<=i;j++){
         System.out.print("*");
         if(j==3){
           continue; 
         }
       }
     System.out.print("\n");  
    }
  }
}