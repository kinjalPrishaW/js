/to create object using object literals key:value pairs
let car = {
    make: "BMW",
    model: "BMW21",
    year: 2021
  };
console.log(car)  
//creating object using new object() method

 let cars = new Object();
    cars.make = "Toyota",
    cars.model = "Corolla",
    cars.year = 2020;
console.log(cars)


//accessing object using dot net notation
console.log(cars.make)
console.log(cars.model)
console.log(cars.year)

//acessing object using bracket notation
console.log(car["model"])
console.log(car["make"])
console.log(car["year"])

//adding properties on object
car.color="yellow";
console.log(car)
//deleting properties on object
delete car.model;
console.log(car)
//printing single key value pairs using dot net operation
console.log("make: " + car.make)
//printing single key value pairs using bracket  operation
console.log("model: " + cars["model"]); 

  


const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
