// Callback function

//      Example 1

function greet(name, callback)
{
    console.log("Hi "+ name)
    callback();
}

// callback function

function callMe()
{
    console.log("Call me Function");
}

// passing function as an argument

greet('nayan', callMe);

//      Example 2

// Method 1
const calculate = (a, b, operation)=>
{
    return operation(a,b);
}

const addition=calculate(3, 4, function(num1, num2){
    return num1+num2;
})

console.log(addition);

// Method 2

const subtraction = calculate(4, 2, function(num1, num2)
{
    return num1-num2;
});

console.log(subtraction)

// method 3

const mul=(a, b)=>a*b;

const multiple=calculate(4, 2, mul)
console.log(multiple)










