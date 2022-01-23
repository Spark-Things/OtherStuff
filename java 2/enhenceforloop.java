class enhenceforloop{
  public static void main(String args[]){
    int num[] = {11,22,33,44,55,66};
    int total = 0;
    for(int i : num){
      total = total + i;
      System.out.println(i);
    }
    System.out.print("total =" +total);
  }
}