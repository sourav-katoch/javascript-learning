# Scope & Hoisting

## What is Scope?

**Scope** determines where a variable can be accessed in your code.

There are three main types:

* Global Scope
* Function Scope
* Block Scope

---

# Global Scope

Variables declared outside any function or block are globally accessible.

```javascript
const appName = "My App";

function greet() {
    console.log(appName);
}

console.log(appName);
```

> Avoid creating unnecessary global variables.

---

# Function Scope

Variables declared inside a function are only accessible within that function.

```javascript
function greet() {
    const message = "Hello";
    console.log(message);
}

greet();

// console.log(message); ❌ ReferenceError
```

---

# Block Scope

Variables declared with `let` and `const` exist only inside the block (`{}`).

```javascript
if (true) {
    const age = 25;
    let city = "Mohali";

    console.log(age);
    console.log(city);
}

// console.log(age); ❌
// console.log(city); ❌
```

---

# `var` vs `let` vs `const`

| Keyword | Scope    | Reassign | Redeclare |
| ------- | -------- | -------- | --------- |
| `var`   | Function | ✅        | ✅         |
| `let`   | Block    | ✅        | ❌         |
| `const` | Block    | ❌        | ❌         |

Prefer:

* `const` by default
* `let` when reassignment is required
* Avoid `var`

---

# Scope Chain

A function can access variables from its outer scope.

```javascript
const country = "India";

function outer() {

    const city = "Mohali";

    function inner() {
        console.log(country);
        console.log(city);
    }

    inner();

}

outer();
```

JavaScript searches for variables from the current scope outward.

---

# Shadowing

An inner variable with the same name hides the outer variable.

```javascript
const name = "Sourav";

function greet() {

    const name = "John";

    console.log(name);

}

greet();

console.log(name);
```

Output

```text
John
Sourav
```

---

# What is Hoisting?

Hoisting is JavaScript's behavior of moving **declarations** to the top of their scope before execution.

Only declarations are hoisted—not initializations.

---

# Hoisting with `var`

```javascript
console.log(name);

var name = "Sourav";
```

JavaScript treats it like:

```javascript
var name;

console.log(name);

name = "Sourav";
```

Output

```text
undefined
```

---

# Hoisting with `let`

```javascript
console.log(age);

let age = 25;
```

Output

```text
ReferenceError
```

---

# Hoisting with `const`

```javascript
console.log(country);

const country = "India";
```

Output

```text
ReferenceError
```

---

# Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period between entering a scope and declaring a `let` or `const` variable.

During this period, the variable exists but cannot be accessed.

```javascript
console.log(score);

let score = 100;
```

Output

```text
ReferenceError
```

---

# Function Hoisting

## Function Declaration

Function declarations are fully hoisted.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```text
Hello
```

---

## Function Expression

```javascript
greet();

const greet = function () {
    console.log("Hello");
};
```

Output

```text
ReferenceError
```

---

## Arrow Function

```javascript
greet();

const greet = () => {
    console.log("Hello");
};
```

Output

```text
ReferenceError
```

---

# Lexical Scope

Functions remember the scope where they were created.

```javascript
const language = "JavaScript";

function learn() {

    console.log(language);

}

learn();
```

This concept becomes important when learning **closures**.

---

# Scope Comparison

```text
Global Scope
│
├── Function Scope
│      │
│      └── Block Scope
│
└── Function Scope
```

Variables are searched **from inside to outside**.

---

# Python vs JavaScript

| Python                | JavaScript                  |
| --------------------- | --------------------------- |
| Local Scope           | Function Scope              |
| Global Scope          | Global Scope                |
| Block scope (limited) | `let` / `const` block scope |
| No hoisting           | Hoisting exists             |

---

# Best Practices

* Prefer `const`.
* Use `let` only when reassignment is required.
* Avoid `var`.
* Keep variables in the smallest possible scope.
* Avoid unnecessary global variables.

---

# Common Mistakes

## Using a Variable Before Declaration

❌

```javascript
console.log(age);

let age = 25;
```

---

## Expecting `var` to Behave Like `let`

```javascript
if (true) {

    var name = "John";

}

console.log(name);
```

Output

```text
John
```

Because `var` is **function-scoped**, not block-scoped.

---

## Redeclaring Variables

❌

```javascript
let age = 20;

let age = 30;
```

Output

```text
SyntaxError
```

---

## Modifying a `const`

```javascript
const age = 20;

age = 25;
```

Output

```text
TypeError
```

---

# Frequently Used Patterns

## Block Scope

```javascript
for (let i = 0; i < 5; i++) {

    console.log(i);

}
```

`i` only exists inside the loop.

---

## Global Constant

```javascript
const API_URL = "https://example.com";
```

---

## Function Scope

```javascript
function calculateTax(price) {

    const tax = price * 0.18;

    return tax;

}
```

---

## Prefer `const`

```javascript
const username = "Sourav";
const skills = ["HTML", "CSS"];
```

---

## Use `let` for Counters

```javascript
let total = 0;

for (let i = 0; i < 10; i++) {
    total += i;
}
```

---

# Interview Questions

### What is hoisting?

JavaScript moves declarations to the top of their scope before execution.

---

### Why is `var` discouraged?

* Function-scoped
* Can be redeclared
* Can cause unexpected bugs due to hoisting

---

### Difference between `let` and `const`?

* `let` can be reassigned.
* `const` cannot be reassigned.

---

### Why does `let` throw an error before declaration?

Because of the **Temporal Dead Zone (TDZ)**.

---

### Which functions are hoisted?

* ✅ Function declarations
* ❌ Function expressions
* ❌ Arrow functions

---

# Summary

* Scope controls where variables are accessible.
* JavaScript has **Global**, **Function**, and **Block** scope.
* `let` and `const` are block-scoped.
* `var` is function-scoped and should generally be avoided.
* Hoisting moves declarations before execution.
* `let` and `const` are hoisted but remain inaccessible inside the **Temporal Dead Zone**.
* Function declarations are hoisted; function expressions and arrow functions are not.
* Prefer `const`, use `let` when needed, and avoid `var`.

