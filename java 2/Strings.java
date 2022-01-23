class Strings{
  public static void main(String args[]){
    byte ch[] = new byte[26];
    for(int b=0;b<1;b++){
      for(byte i =65;i<=90;i++){
       String st = new String(ch);
       ch[b] = i;
       System.out.println(st);
       System.out.println(st.length());
    }
    }
  }
}