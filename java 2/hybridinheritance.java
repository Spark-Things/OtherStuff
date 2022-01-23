class hybridinheritance{
  public static void main(String arg[]){
    result obj = new result();
    obj.disp();
  }
}
class student {
  int practical = 100;

}
class exam extends student{
  int theory = 100;
  int pm = theory + practical;
}
interface project{
  int pmark = 200;
  void disp();
}
class result extends exam implements project{
    int sum = pm + pmark;
   public void disp(){
      System.out.println("practical marks =" +pmark);
      System.out.println("Theory marks =" +theory);
      System.out.println("Total marks =" +pm);
      System.out.println("Total marks + practical =" +sum);
    }
}