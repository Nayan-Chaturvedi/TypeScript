// Difference between type and interface

// 1. Type me hame equal sign lagana padta hai
type sankhya = number;

interface user {
  // Yaha hum directly object ki tarah likte hai
}

//2. App 2 type same name ke mahi bna sakte hai

// type name =string;
// type name=number;

interface Human {
  name: string;
}

interface Human {
  age: number;
}

// behind the scene interface Human  dono merege ho gaye hai

function abcd(human: Human) {
  human.age; // Yaha dono field aa rahi hai
  human.name;
}

interface food {
  nameOfFood: string;
}

interface foodPrice extends food {
  price: number;
}

function getFood(gFood: foodPrice) {
  gFood.nameOfFood; // here me extends both property
  gFood.price;
}
