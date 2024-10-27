# Optional Parameters:
TypeScript mein, aap functions ke parameters ko optional define kar sakte ho. Matlab, agar wo parameter pass nahi kiya gaya to bhi function sahi se kaam karega.

## Syntax
Optional parameter ko define karne ke liye, parameter ke naam ke baad ? lagaya jata hai.


example
```javascript
function greet(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Nayan")); // Output: Hello, Nayan!
console.log(greet("Nayan", 25)); // Output: Hello, Nayan! You are 25 years old.

```
---

# Default Parameters:
TypeScript mein, aap functions ke parameters ko default value de sakte ho. Matlab agar parameter pass nahi kiya gaya, toh ek default value use hogi.

## Syntax
Parameter ke baad = lagakar default value assign karte hain.

example
```typescript
function greet(name: string, age: number = 30): string {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Nayan")); // Output: Hello, Nayan! You are 30 years old.
console.log(greet("Nayan", 25)); // Output: Hello, Nayan! You are 25 years old.

```

# Rest Parameters:
TypeScript mein rest parameters se aapko allow milta hai ki function multiple arguments ko single array mein collect kar sake. Yeh especially tab useful hota hai jab aapko pata nahi hota ki kitne arguments pass honge.

## Syntax:
Rest parameter ko define karne ke liye ... (spread operator) ka use karte hain.

example 
```typescript
function printNames(...names: string[]): void {
    names.forEach(name => {
        console.log(name);
    });
}

printNames("Nayan", "Rahul", "Priya");

```