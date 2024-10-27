# Modules
## Modules
Modules se aap apne code ko alag-alag files mein divide kar sakte ho.

## Export:
 Dusre modules ko access dena.

## Import: 
Dusre modules ke code ko apne code mein use karna.

example
```javascript
// math.ts (Module)
export function add(x: number, y: number): number {
    return x + y;
}

```

```javascript
// main.ts (Importing Module)
import { add } from './math';

console.log(add(2, 3)); // Output: 5

```

