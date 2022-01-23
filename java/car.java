class Vehicle {
  static void honk(int x) {
    System.out.println("okk done" + x);
  }
}

class Car extends Vehicle {
  public static void main(String[] args) {
    Car myFastCar = new Car();
    myFastCar.honk(20);
	honk(20);
  }
}
