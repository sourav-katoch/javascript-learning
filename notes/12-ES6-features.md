# ES6 Features

## What is ES6?

**ES6 (ECMAScript 2015)** introduced modern JavaScript syntax that makes code shorter, cleaner, and easier to maintain.

---

# `let` and `const`

Replace `var`.

```javascript
let age = 25;
age = 26;

const country = "India";
```

| Keyword | Reassign | Scope    |
| ------- | -------- | -------- |
| `let`   | ✅        | Block    |
| `const` | ❌        | Block    |
| `var`   | ✅        | Function |

> Prefer `const` by default. Use `let` only when reassignment is needed.

---

# Arrow Functions

Shorter syntax for writing functions.

```javascript
const greet = (name) => {
    return `Hello ${name}`;
};
```

Implicit return

```javascript
const square = num => num * num;
```

No parameters

```javascript
const greet = () => "Hello";
```

---

# Template Literals

Use backticks (`` ` ``) instead of quotes.

```javascript
const name = "Sourav";

console.log(`Hello ${name}`);
```

Multiline strings

```javascript
const message = `
Hello
World
`;
```

---

# Default Parameters

```javascript
function greet(name = "Guest") {
    return `Hello ${name}`;
}

greet();
```

Output

```text
Hello Guest
```

---

# Destructuring

## Arrays

```javascript
const colors = ["Red", "Blue", "Green"];

const [first, second] = colors;
```

Skip values

```javascript
const [first, , third] = colors;
```

---

## Objects

```javascript
const user = {
    name: "Sourav",
    age: 25
};

const { name, age } = user;
```

Rename variables

```javascript
const { name: username } = user;
```

Default values

```javascript
const { country = "India" } = user;
```

---

# Spread Operator (`...`)

Copy arrays

```javascript
const numbers = [1, 2, 3];

const copy = [...numbers];
```

Merge arrays

```javascript
const merged = [...arr1, ...arr2];
```

Copy objects

```javascript
const userCopy = {
    ...user
};
```

Merge objects

```javascript
const profile = {
    ...user,
    ...address
};
```

---

# Rest Parameters (`...`)

Collect multiple arguments.

```javascript
function sum(...numbers) {
    return numbers;
}

sum(1, 2, 3);
```

Output

```text
[1, 2, 3]
```

---

# Enhanced Object Literals

Instead of

```javascript
const name = "Sourav";
const age = 25;

const user = {
    name: name,
    age: age
};
```

Use

```javascript
const name = "Sourav";
const age = 25;

const user = {
    name,
    age
};
```

Method shorthand

```javascript
const user = {

    greet() {
        console.log("Hello");
    }

};
```

---

# Optional Chaining (`?.`)

Safely access nested properties.

```javascript
const user = {};

console.log(user.address?.city);
```

Instead of

```javascript
console.log(user.address.city);
```

which throws an error.

---

# Nullish Coalescing (`??`)

Returns the right value only if the left value is `null` or `undefined`.

```javascript
const username = null;

console.log(username ?? "Guest");
```

Output

```text
Guest
```

Difference from `||`

```javascript
0 || 100;
```

Output

```text
100
```

```javascript
0 ?? 100;
```

Output

```text
0
```

---

# Object Property Shorthand

```javascript
const firstName = "Sourav";
const age = 25;

const user = {
    firstName,
    age
};
```

---

# Computed Property Names

```javascript
const key = "city";

const user = {
    [key]: "Mohali"
};

console.log(user.city);
```

---

# `for...of`

Loop over iterables.

```javascript
const fruits = ["Apple", "Banana"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

---

# Modules (`import` / `export`)

Export

```javascript
export function greet() {
    console.log("Hello");
}
```

Import

```javascript
import { greet } from "./greet.js";
```

Default export

```javascript
export default greet;
```

Default import

```javascript
import greet from "./greet.js";
```

---

# Promise Syntax

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

We'll cover Promises in detail later.

---

# Frequently Used ES6 Features

| Feature            | Daily Use |
| ------------------ | --------- |
| `let` / `const`    | ⭐⭐⭐⭐⭐     |
| Arrow Functions    | ⭐⭐⭐⭐⭐     |
| Template Literals  | ⭐⭐⭐⭐⭐     |
| Destructuring      | ⭐⭐⭐⭐⭐     |
| Spread Operator    | ⭐⭐⭐⭐⭐     |
| Rest Parameters    | ⭐⭐⭐⭐☆     |
| Optional Chaining  | ⭐⭐⭐⭐⭐     |
| Nullish Coalescing | ⭐⭐⭐⭐☆     |
| Modules            | ⭐⭐⭐⭐⭐     |

---

# Python vs JavaScript

| Python             | JavaScript               |
| ------------------ | ------------------------ |
| f-string           | Template Literal         |
| `*args`            | Rest Parameters          |
| `**kwargs`         | Spread (similar concept) |
| Tuple unpacking    | Destructuring            |
| `from file import` | `import`                 |

---

# Best Practices

* Prefer `const` over `let`.
* Use arrow functions for callbacks.
* Use template literals instead of string concatenation.
* Use destructuring when extracting values.
* Use spread instead of manually copying arrays or objects.
* Use optional chaining when accessing nested properties.

---

# Common Mistakes

## Confusing Spread and Rest

Spread

```javascript
const copy = [...numbers];
```

Rest

```javascript
function sum(...numbers) {}
```

---

## Using `||` Instead of `??`

❌

```javascript
const score = 0;

console.log(score || 100);
```

Output

```text
100
```

✅

```javascript
console.log(score ?? 100);
```

Output

```text
0
```

---

## Forgetting Braces in Object Destructuring

❌

```javascript
const name = user;
```

✅

```javascript
const { name } = user;
```

---

# Frequently Used Patterns

## Copy an Object

```javascript
const updatedUser = {
    ...user
};
```

---

## Update One Property

```javascript
const updatedUser = {
    ...user,
    age: 26
};
```

---

## Merge Arrays

```javascript
const skills = [...frontend, ...backend];
```

---

## Destructure Function Parameters

```javascript
function greet({ name }) {
    console.log(name);
}
```

---

## Default Value

```javascript
const username = user.name ?? "Guest";
```

---

# Interview Questions

### What does ES6 stand for?

ECMAScript 2015.

---

### Difference between Spread and Rest?

* Spread expands values.
* Rest collects values.

---

### Why use Arrow Functions?

Shorter syntax and lexical `this`.

---

### Why use Template Literals?

Cleaner string interpolation and multiline strings.

---

### Difference between `||` and `??`?

* `||` treats all falsy values as missing.
* `??` only treats `null` and `undefined` as missing.

---

### Why use Destructuring?

Cleaner, shorter code when extracting values from arrays or objects.

---

# Summary

* ES6 modernized JavaScript with cleaner syntax.
* Use `let` and `const` instead of `var`.
* Use arrow functions for concise callbacks.
* Use template literals for strings.
* Use destructuring to extract values.
* Use spread (`...`) to copy or merge arrays and objects.
* Use rest (`...`) to collect arguments.
* Use optional chaining (`?.`) to safely access nested properties.
* Use nullish coalescing (`??`) for default values.
* Use modules (`import` / `export`) to organize code.

