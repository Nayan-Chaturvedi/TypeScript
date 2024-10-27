// Arrow Function

// function greet()
// {
//     console.log("Hello world")
// }

// greet();

// Convert to Arrow function

 ()=>
{
    console.log("Hello world")
}

// Agar ishe call karna hai to ishe kisis variable me assisn karna hoga

const greet=()=>
    {
        console.log("Hello world")
    }

    greet();

const greet1=(count)=>
{
    count =0;
    for(let i=0; i<5; i++)
    {
        console.log(i);
        count++;
    }
   console.log(`Count is ${count}`)
   

}

greet1(9);

const square1=(num)=>num*num;

console.log(square1(3))
