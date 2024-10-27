# Function
A funntion is a block of code that perform specific task. Dividing complex problem into smaller chunks makes your program easy to understand and reusable.

syntax
```javascript
function(para1, para2, para3....)
{
    // code to be executed
    return something
}
```


# Function Expression
JavaScript mein jab aap function ko variable mein assign karte ho, usse function expression kehte hain. Isme function ka naam nahi hota, isliye ise anonymous function bhi kehte hain.

```javascript
const sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 7)); // Output: 12
```

# Nested Function:
Nested function ka matlab hota hai ki ek function ke andar dusra function define karna.

```javascript
function outerFunction() {
    let outerVariable = "I'm the outer function!";

    function innerFunction() {
        let innerVariable = "I'm the inner function!";
        console.log(outerVariable); // Accessing outer function's variable
        console.log(innerVariable); // Accessing inner function's variable
    }

    innerFunction(); // Calling inner function from outer function
}

outerFunction(); // Calling the outer function
```
---

# Advanced Function

# Arrow Function

syntax
```javascript
(param1, param2, ..., paramN) => {
    // function body
}

```

# CallBackFunction
 A callBack function passed as an argument to another function.

 ```javascript
 function doSomething(callback) {
    // Perform some operation
    callback();
}

function callbackFunction() {
    // Callback function logic
}

// Usage
doSomething(callbackFunction);

```