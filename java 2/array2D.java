import java.util.Scanner;

class array2D{
  public static void main(String args[]){
    System.out.println("Enter Rows : ");
    Scanner obj = new Scanner(System.in);
    int a = obj.nextInt();
     System.out.println("Enter colums : ");
    int b = obj.nextInt();
    int arr[][] = new int[a][b]; 
     System.out.println("Enter value : ");
     for(int i=0;i<a;i++){
       for(int j=0;j<b;j++){
         System.out.println("Enter value for " +i+j);
         arr[i][j] = obj.nextInt();
       }
     }
    System.out.println("You have Entered :");
       for(int i=0;i<a;i++){

       for(int j=0;j<b;j++){
         System.out.print(arr[i][j] + " ");
       }
       System.out.print("\n");
     }  
  }
}