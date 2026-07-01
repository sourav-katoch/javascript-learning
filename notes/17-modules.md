# Modules

## What are Modules?

A **module** is a JavaScript file that exports code so it can be reused in other files.

Modules help:

* Organize code
* Reuse functions
* Avoid global variables
* Improve maintainability

---

# Why Use Modules?

Instead of writing everything in one file:

```
app.js
```

```javascript
// 1000+ lines of code
```

Split your project into smaller files.

```
project/
│
├── app.js
├── math.js
├── user.js
└── utils.js
```

Each file has a specific responsibility.

---

# Exporting

Use `export` to make variables, functions, or classes available to other files.

## Export a Variable

**math.js**

```javascript
export const PI = 3.14159;
```

---

## Export a Function

**math.js**

```javascript
export function add(a, b) {
    return a + b;
}
```

---

## Export Multiple Values

**math.js**

```javascript
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

---

# Importing

Import exported values into another file.

**app.js**

```javascript
import { PI, add } from "./math.js";

console.log(PI);
console.log(add(5, 3));
```

---

# Import Everything

```javascript
import * as MathUtils from "./math.js";

console.log(MathUtils.PI);

console.log(MathUtils.add(2, 3));
```

---

# Renaming Imports

Use `as`.

```javascript
import { add as sum } from "./math.js";

console.log(sum(2, 3));
```

---

# Default Export

Each module can have **one default export**.

**greet.js**

```javascript
export default function greet(name) {
    console.log(`Hello ${name}`);
}
```

Import

```javascript
import greet from "./greet.js";

greet("Sourav");
```

Notice

No braces (`{}`).

---

# Named Export vs Default Export

Named Export

```javascript
export function greet() {}
```

Import

```javascript
import { greet } from "./greet.js";
```

---

Default Export

```javascript
export default function greet() {}
```

Import

```javascript
import greet from "./greet.js";
```

---

# Export at the Bottom

Instead of

```javascript
export function add() {}

export function subtract() {}
```

You can write

```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export {
    add,
    subtract
};
```

---

# Combining Default and Named Exports

**math.js**

```javascript
export const PI = 3.14;

export function add(a, b) {
    return a + b;
}

export default function multiply(a, b) {
    return a * b;
}
```

Import

```javascript
import multiply, { PI, add } from "./math.js";
```

---

# File Extensions

Always include `.js`.

```javascript
import { add } from "./math.js";
```

Some tools (like Vite) may omit the extension, but using `.js` is standard JavaScript.

---

# Module Folder Structure

```
project/
│
├── index.html
├── app.js
│
├── utils/
│   ├── math.js
│   ├── validation.js
│   └── helpers.js
│
├── api/
│   └── fetchUsers.js
│
└── components/
```

---

# Real-World Example

**utils.js**

```javascript
export function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
```

**app.js**

```javascript
import { capitalize } from "./utils.js";

console.log(capitalize("javascript"));
```

Output

```text
Javascript
```

---

# Module Execution

A module executes only **once**.

Even if imported multiple times:

```javascript
import "./config.js";
import "./config.js";
```

`config.js` runs only once.

---

# Browser Support

To use modules in HTML:

```html
<script type="module" src="app.js"></script>
```

Without `type="module"`:

* `import` will not work.
* `export` will not work.

---

# Python vs JavaScript

| Python                  | JavaScript         |
| ----------------------- | ------------------ |
| `import math`           | `import * as math` |
| `from math import sqrt` | `import { sqrt }`  |
| Module                  | Module             |
| Package                 | Folder of modules  |

Python

```python
from math import sqrt

print(sqrt(25))
```

JavaScript

```javascript
import { sqrt } from "./math.js";

console.log(sqrt(25));
```

---

# Best Practices

* Split large projects into multiple modules.
* Prefer **named exports** for utility functions.
* Use **default exports** for the main export of a file.
* Keep one responsibility per module.
* Use meaningful file names.

---

# Common Mistakes

## Forgetting `type="module"`

❌

```html
<script src="app.js"></script>
```

✅

```html
<script type="module" src="app.js"></script>
```

---

## Forgetting Braces

Named export

```javascript
export function greet() {}
```

Must import

```javascript
import { greet } from "./greet.js";
```

---

Default export

```javascript
export default function greet() {}
```

Must import

```javascript
import greet from "./greet.js";
```

---

## Multiple Default Exports

❌

```javascript
export default function a() {}

export default function b() {}
```

Only **one default export** is allowed per module.

---

## Incorrect File Path

❌

```javascript
import { add } from "math.js";
```

✅

```javascript
import { add } from "./math.js";
```

Use `./` for files in the current folder.

---

# Frequently Used Patterns

## Export a Utility Function

```javascript
export function formatPrice(price) {
    return `$${price}`;
}
```

---

## Import Multiple Functions

```javascript
import { add, subtract } from "./math.js";
```

---

## Default Export

```javascript
export default class User {}
```

---

## Import Default Export

```javascript
import User from "./User.js";
```

---

## Import Everything

```javascript
import * as Utils from "./utils.js";

Utils.add(1, 2);
```

---

# Interview Questions

### What is a module?

A JavaScript file that exports reusable code.

---

### Difference between named and default exports?

* Named exports require braces (`{}`).
* Default exports do not.

---

### How many default exports can a module have?

Only one.

---

### Can a module have multiple named exports?

Yes.

---

### Why use modules?

To organize code, improve reusability, and avoid global variables.

---

# Summary

* Modules split code into reusable files.
* Use `export` to expose variables, functions, or classes.
* Use `import` to use exported code.
* Named exports use `{}`.
* Default exports do not use `{}`.
* A module can have many named exports but only one default export.
* Use `<script type="module">` in HTML.
* Modules make JavaScript projects easier to organize and maintain.
