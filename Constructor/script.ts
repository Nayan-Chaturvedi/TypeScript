// // Contrctor

// // method 1
// class Home{
//     name :string;

//     constructor(name:string)
//     {
//         this.name=name;
//     }

//     getName()
//     {
//         console.log(`Home name is ${this.name}`)
//     }
// }

// new Home("My Home").getName();


// // method 2

// class Home2{

//     constructor(public name2 :string)
//     {
//         this.name2=name2
//     }


//     getName2(){
//         console.log(`Name2 is ${this.name2}`)
//     }
// }

// new Home2("My New Home").getName2();


// Access Specifir Protected

// class A {
// //    public name="vikas";

//     protected name="Vikas"

    
// }

// class B extends A{
//     private isAdmin=false;
    
//     getName()
//     {
//         console.log(`A class name ${this.name}`)
//     }

//     getData()
//     {
//         console.log(`In B class`)
//     }
// }

// let bb =new B();
// // bb.name  // if name is public
// bb.getData();
// bb.getName();


// ReadOnly Properties

class A{
    readonly valueOfPie=3.14
    area:number;

    constructor(area:number)
    {
        this.area=area;
    }

    getAreaOfCircle()
    {
        console.log(`Area of circle ${this.valueOfPie*this.area}`)
    }
}

let aa=new A(21);
console.log(aa.area);
aa.area=10;
console.log(aa.area);

console.log(aa.valueOfPie)
// aa.valueOfPie=2.14;
aa.getAreaOfCircle();




