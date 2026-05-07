## Title : 
Generics - Building Reusable Yet Strictly Typed Code

## Introduction : 
Generics are one of TypeScript’s most powerful features. They allow us to create reusable functions, classes, and components that adapt to different data types while preserving strict type safety. Without generics, developers often sacrifice either flexibility or safety.

## Creating Reusable Functions (Methods)

 We can define a generic function using a type parameter, a placeholder inside angle brackets (<T>).
 
```
typescript

// 'T' is a placeholder for any type
function getIdentity<T>(arg: T): T {
  return arg;
}

// T becomes 'string' here
let output1 = getIdentity<string>("Hello"); 

// T becomes 'number' here, strictly enforced
let output2 = getIdentity<number>(100);
```

- The function is written once, but used for strings and numbers securely.

## Building Reusable Data Structures (Classes)

Generics can be applied to classes to create containers that hold specific yet flexible data types.

```
typescript

// A container that can hold anything, but only ONE type at a time
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// This container can ONLY hold strings
let stringContainer = new Container<string>("A temporary string");
// stringContainer.getValue() is guaranteed to return a string

// This container can ONLY hold numbers
let numberContainer = new Container<number>(100);
// numberContainer.getValue() is guaranteed to return a number
```


## Advantages :
 
- Compile-time Type Safety: The compiler catches errors (trying to add a string to an Array<num>) before the code runs.
 
- Code Reusability: One class or function serves multiple types.
 
- No Manual Casting: We don't need to manually tell the code that an object is a string after retrieving it.

## Conclusion : 
Generics are powerful tools that provide "type-safe flexibility." By replacing specific types with type parameters, we build reusable components that stay strictly typed, reducing bugs and improving code clarity. It is the foundation of modern, safe programming languages and collections frameworks.