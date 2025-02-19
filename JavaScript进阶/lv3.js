function Car(brand,year){
    this.brand=brand;
    this.year=year;
}
let Car1=new Car("benz",1900);
console.log(Car1.brand);
console.log(Car1.year);
Car.prototype.displayInfo = function() {
    console.log("品牌: " + this.brand + ", 年份: " + this.year);
}

let myCar = new Car("Toyota", 2020);
myCar.displayInfo();  