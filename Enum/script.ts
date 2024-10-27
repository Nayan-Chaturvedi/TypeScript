enum DATS {
  Sunday = 1,
  Mondays = 2,
  Tuesday = 3,
  Wednesday = 9,
}

console.log(DATS.Mondays);
console.log(DATS.Wednesday);

// // Union And Intersection

// // Union- Means 2 value me se koi ek value aa sakti hai

// let variable: string | number;
// variable = "Nayan Kumar Chaturvedi";
// variable = 121;

// if (typeof variable === 'string') {
//    let stringVariable= variable as String
//    console.log(stringVariable.toUpperCase)
// }

// else if(typeof variable==='number')
// {
//     variable.toFixed(2);
// }

// function abcd(variab:string|number|boolean)
// {
//     if(typeof variab==='number')
//     {
//         variab.toFixed
//     }
//     else if(typeof variab==='string')
//     {
//         variab.toUpperCase();
//     }

// }

// abcd("Nayan");
// abcd(false);

// // Interaction means dono hi value aaegi

// // type se hum apne kud ke type bna sakte hai

// type classmates={
//     section : string
// }

// type student={
//     name : string
// }

// type classmatesInStudent= classmates & student;

// let aa :classmatesInStudent={
//     section:"Nayan",
//     name:"Nayan"
// }

// // type city={
// //     Name:string,
// //     population : number
// // }

// // type Planet={
// //     name :string,
// //     cities:number
// // }

// // type citiesAndPlanert= city&Planet;

// // let bb:citiesAndPlanert={
// //     cityName:"Gwalior",
// //     population:1212,
// //     name:"Mars",
// //     cities:212121
// // }

// // console.log(bb);

// type city={
//     name:string,
//     population:number;
// }

// type Planet={
//     PlanetName:String,
//     numberOfCities:number
// }

// type citiesInSidePlanet=city&Planet;

// let bb:citiesInSidePlanet={
//     name:"Gwalior",
//     population:24,
//     PlanetName:"MadhyaPradesh",
//     numberOfCities:54
// }

// console.log(bb)

// let Variable3=12;

// console.log(Variable3)
// console.log("hey");
// let bbb;

// // Union

// let value : string | number;
// value =1212;

// if(typeof value==='string')
// {
//     let valueOfvalues=value as String;
//     console.log(valueOfvalues.toUpperCase)
// }
// else if(typeof value ==='number')
// {
//     value.toFixed
// }

type cityDetails = {
  nameOfCity: string;
  populationOfCity: number;
};

type car = {
  nameOfCar: string;
  milaze: number;
};

type totalEvalution = car & cityDetails;

let b: totalEvalution;

b = {
  nameOfCar: "Maruti",
  milaze: 21,
  nameOfCity: "bangalore",
  populationOfCity: 34,
};

console.log(b);
