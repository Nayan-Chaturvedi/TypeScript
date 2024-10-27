// method 1

```typescript
class Home{
    name :string;

    constructor(name:string)
    {
        this.name=name;
    }

    getName()
    {
        console.log(`Home name is ${this.name}`)
    }
}

new Home("My Home").getName();
```

// method 2 we also write above method in this way

```typescript
class Home2{

    constructor(public name2 :string)
    {
        this.name2=name2
    }


    getName2(){
        console.log(`Name2 is ${this.name2}`)
    }
}

new Home2("My New Home").getName2();
```


# Access Specifier

## Public
Public mtlb poori class me kahi bhi use/access kar sakte ho aur class ke bahar bhi access kar/use kar sakte ho.

## private 
sirf class me use kar sakte ho class ke bahar aap use/access nahi kar sakte ho.

## protected
ishe aap jish class me likhe hai us class me toh use kar sakte ho aur jo class protected variable/method wali class ko extends kar rahi
hai wo bhi method/variable ko access/ modified kar sakti hai

```typescript
class A {
//    public name="vikas";

    protected name="Vikas"

    
}

class B extends A{
    private isAdmin=false;
    
    getName()
    {
        console.log(`A class name ${this.name}`)
    }

    getData()
    {
        console.log(`In B class`)
    }
}

let bb =new B();
// bb.name  // if name is public
bb.getData();
bb.getName();
```
# Readonly Properties:
ek baar value assign hone ke baad aap usse change nahi kar sakte.
example
```typescript
class Circle {
    readonly PI: number = 3.14;
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return this.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle(10);
console.log(myCircle.getArea()); // 314

// Error hoga agar aap isse change karne ki koshish karte ho
// myCircle.PI = 3.1415; // Error: Cannot assign to 'PI' because it is a read-only property.

```