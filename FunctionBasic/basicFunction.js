function sum(a, b)
{
    const sum=a+b;
    console.log(`The sum of a and b ${sum}`)
}

sum(12, 15);

function sumOfThreeNumber(a, b, c)
{
    const sum=a+b+c;
    return sum;
}

const res=sumOfThreeNumber(12, 4, 6);
console.log(`The sum of three number is ${res}`);

// Function Expression

const mul=function(a, b)
{
    const res=a*b;
    return res;
}

console.log(`The result of a * b is ${mul(5, 6)}`)

const square=function(a)
{
    const res=a*a;
    return res;
}

console.log("Square root of 5 is ", square(5))


// Nested Function

// Example 1

function outerFunction()
{
    let outerVariable="I'm a outer variable"
    console.log("Outer function")

    function innerFunction()
    {
        let innerVariable= "I'm a inner Variable";
        console.log("Inner function")
        console.log("Outer variable", outerVariable);
    }

    innerFunction();
}

outerFunction();

// Example 2

function addSquare(a, b)
{
    const squareOfA = square(a);
    const squareOfB =square(b);

    function square(num)
    {
        return num*num;
    }

    return squareOfA+squareOfB;

}
console.log(addSquare(5, 6))



