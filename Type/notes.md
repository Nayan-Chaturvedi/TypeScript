 # Type
 TypeScript mein type ek aisa concept hai jo variables, functions, ya expressions ke liye specific data types define karta hai.
  Matlab, TypeScript aapko bata sakta hai ki kisi variable mein kis type ka data store hoga, jaise number, string, boolean, etc.


# Primitives and Refrence

## Primitives:
Primitives woh basic data types hain jo directly values hold karte hain. Yeh sabse simple aur fundamental types hain. Jaise:

```typescript
Number: let age = 25;

String: let name = "Nayan";

Boolean: let isStudent = true;

Null: let nothing = null;

Undefined: let notDefined;

Symbol: let sym = Symbol('symbol');
```

Inhe directly value milti hai aur yeh immutable hote hain (inki value change nahi hoti).

## Reference Types:
Reference types complex data structures ko represent karte hain, jaise objects aur arrays.


# Tuples
tuples ek special type hoti hai jo fixed number of elements ko specific types ke sath store karne ke liye use hoti hai.
 Matlab, tuples aapko ek array jaisa structure provide karti hai, lekin usme har element ka type aur order predefined hota hai.

```typescript
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
```

 ---

# any, unknown datatype in typescript

## any:
 any type ka matlab hai ki aap kisi bhi type ka data store kar sakte ho. Matlab, no type checking. 
 example-

```typescript
 let variable: any;
variable = 25;        // Number
variable = "Hello";   // String
variable = true;      // Boolean
```

## unknown
unknown type bhi kisi bhi type ka data store kar sakta hai,
lekin isme aap directly operations perform nahi kar sakte bina type checking ke
example-

```typescript
let variable: unknown;
variable = 25;        // Number
variable = "Hello";   // String

// Type checking before using 
if (typeof variable === "string") {
    console.log(variable.toUpperCase()); // Safe
}
```

 ---

# Enum

Enums TypeScript mein ek special type hota hai jo constants ka set define karta hai.

example

```typescript
enum Status {
    New = 1,
    InProgress,
    Completed = 5,
    Cancelled
}

console.log(Status.New);       // 1
console.log(Status.InProgress); // 2
console.log(Status.Completed);  // 5
console.log(Status.Cancelled);  // 6
```
---

# Type inference

Type inference ek smart feature hai TypeScript ka jo automatically variables, 
return types, aur expressions ke types ko guess karta hai bina explicitly define kiye.
 Matlab, TypeScript khud se hi pata laga leta hai ki kis variable ka type kya hoga.


```typescript
let name = "Nayan"; // TypeScript samajh gaya yeh string hai
let age = 25;      // TypeScript samajh gaya yeh number hai

let message = "Hello, World!"; // TypeScript ne samajh liya yeh string hai
message = "Another string";    // yeh sahi hai

let count = 10; // TypeScript ne samajh liya yeh number hai
count = "Twenty"; // Error, kyunki count ko pehle number assign hua tha
```

---

# Union And Intersection

## Union Types:
Union types se aap ek variable ko multiple types assign kar sakte ho. Matlab, variable ek se zyada types ko accept kar sakta hai.

```typescript
let value: string | number;
value = "Hello"; // Yeh sahi hai
value = 42;      // Yeh bhi sahi hai
```

## Intersection Types:
Intersection types se aap do ya zyada types ko merge karte ho, 
taki ek naya type ban sake jo sabhi properties aur methods ko include kare.

```typescript
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type EmployeePerson = Person & Employee;

let newEmployee: EmployeePerson = {
    name: "Nayan",
    age: 25,
    employeeId: 12345,
    department: "IT"
};

console.log(newEmployee);

```

---

# tsconfig.json File:
tsconfig.json ek configuration file hai jo TypeScript compiler ko 
instructions deta hai ki project ko kaise compile karna hai.
## How to create tsconfig.json
- tsc --init:
Command: Jab aap terminal mein tsc --init command run karte ho, to yeh command ek default tsconfig.json
 file create karti hai aapke TypeScript project ke liye.

# "outDir": "./New"

aapne ek new Folder banaya hai(New naam ka) aur aap chahte hai ki aapki file sript.js New folder me save ho.
abhi aapka project structure hai


## Directory Layout


### Description
- **`New/`**: Directory where compiled JavaScript files are saved.
- **`script.ts`**: TypeScript file containing your source code.
- **`tsconfig.json`**: Configuration file for TypeScript compiler options.
- **`index.html`**: HTML file for your project.

### How to Compile
1. **Navigate to your Project Directory**:
   ```bash
   cd /path/to/your/project/tsc
    ```

Jab aap tsc command run karte ho bina koi specific file ka naam diye, tab compiler tsconfig.json file ko read karta hai aur jo settings di gayi hain unko follow karta hai.
    



# Primitive and Object type alias

## Primitive type alias

Primitive type alias se aap primitive data types ka alias bana sakte ho taaki aapko repeatedly same types likhne ki zaroorat na pade.

```typescript
type ID = number;
type Username = string;

let userId: ID = 123;
let userName: Username = "Nayan";

```
## Object type alias

Object type alias se aap complex data structures ke liye alias bana sakte ho. 

```typescript
type User = {
    id: number;
    name: string;
    age: number;
};

let newUser: User = {
    id: 1,
    name: "Nayan",
    age: 25
};

```


