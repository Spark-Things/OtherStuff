class instancemethod{
  public static void main(String args[]){
    instancemethod obj = new instancemethod();
    prac calc = new prac();
    System.out.println("Addition =" +calc.add(8,4)); 
    System.out.println("Minus =" +calc.minus(8,4));
    System.out.println("Multi =" +calc.Multi(8,4));
    System.out.println("Divide =" +calc.divide(8,4));
    obj.disp();
    obj.add(6,8,10);
  }
  void disp(){
    int a = 50;
    System.out.println(a);
  }
  void add(int b,int c,int a){
    int x = b;
    int y = c;
    if(a>x && a>y){
      System.out.println(+a +" is biggest");
    }else if(x>a && x>c){
      System.out.println(+x +" is biggest");
    }else{
      System.out.println(+y +" is biggest");
    }
  }
 }
  class prac
  {
    int add(int s, int m){
      return(s + m);
    }
    int minus(int s,int m){
       return(s - m);
    }
    int Multi(int s,int m){
      return(s * m);
    }
    int divide(int s,int m){
      return(s / m);
    }
}