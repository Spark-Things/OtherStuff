import java.util.Scanner;
class Example{

   int a,b,total;
   void add(){
      total = a + b;
   }
}
 class practice2{

     public static void main(String args[]){
        Example obj = new Example();
        Scanner inn = new Scanner(System.in);
        obj.a = inn.nextInt();
        obj.b = inn.nextInt();
        obj.add();
        System.out.println("Addtion = " +obj.total);
     }
 }