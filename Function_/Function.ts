//  function ka return type batana hai ki void hai ya string

function adcd():void
{
    console.log("Function resturn void")
}

adcd();

// Function ke parameter ka type batana mandatory hai

function abcde(name:string, age:number) : void
{
    console.log(`${name} is ${age}`)
}

abcde('Vikas', 24 );

// Optional Parameter

function greet(name:String, age?:number) : void
{
    console.log(`${name} is ${age}`)
}

greet('nayan')      // nayan is undefined
greet('nayan', 24)

// Default Parameter

function abcdef( age: number, name:string='Nayan') : string
{
    return `${name} is ${age}`;
}

const output1=abcdef(26,'Vikas');
console.log(output1);

const output2=abcdef(24);
console.log(output2)

// Rest Parameter

function printName(...names:string[]):void{
    names.forEach(name=>{
        console.log(name);
    });
}

printName('Akash', "Vikas", 'Ajay', 'Anoop');

