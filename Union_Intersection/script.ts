// Union and Intersection

// Union

let a: string|number;
a=1213;
if(typeof a==='string')
{
   let strinngVariable = a as String;
   console.log(strinngVariable.charAt(2))
}

function abcde(variable : number | string)
{
    if(variable === 'string')
    {
        console.log(variable.toLowerCase);
    }
    else if(variable === 'number')
    {
        console.log(variable.charCodeAt)
    }
}

type car={
    name : String;
    price : number;
}

type city={
    numberOfRoad : number;
    isSafeRoad : boolean;
}

type carAndCity= car & city;
 let nayan : carAndCity;

 nayan={
    name : "Nayan Kumar Chaturvedi",
    price: 2122,
    numberOfRoad:909,
    isSafeRoad:true
 };

 console.log(nayan)

// Primitive type alias

type userName=string;
type userId=number;

let name11:userName;
name11="Nayan Kumar Chaturvedi";

let user:userId;
user=21212;
console.log(user, '', name11);

//Object Type Alias

type vechile={
    name:string;
    priceOfVechile:number
}

let userVechile:vechile={
    name:"Hero Honda",
    priceOfVechile:9039
}

console.log(`User Vechile is `, userVechile)

type Mul = number | string;

let multiple: Mul;
multiple = 'Nayan';
console.log("Multiple value is: ", multiple);

multiple = 2121;
console.log("Multiple value is: ", multiple);

// multiple=false


type dabba={
    weight:number,
    color:string
}
let box:dabba ={
    // name : "dabba", // In Here throw error
    weight:2,
    color: "#ffffff"

}


 