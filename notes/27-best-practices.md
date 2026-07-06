# Best Practices

## General Principles

* Write code for humans first, computers second.
* Prefer readability over clever code.
* Keep functions small and focused.
* Avoid repeating yourself (DRY).
* Use meaningful variable and function names.

---

# Variables

## Prefer `const`

Use `const` unless the value needs to change.

```javascript
const API_URL = "https://api.example.com";

let count = 0;
```

Avoid

```javascript
var count = 0;
```

---

## Use Descriptive Names

✅

```javascript
const totalPrice = 500;
const userName = "Sourav";
```

❌

```javascript
const x = 500;
const a = "Sourav";
```

---

# Functions

## Keep Functions Small

Each function should do one thing.

✅

```javascript
function calculateTax(price) {
    return price * 0.18;
}
```

❌

```javascript
function processOrder() {
    // Calculate tax
    // Send email
    // Update database
    // Print invoice
}
```

---

## Use Arrow Functions for Simple Callbacks

```javascript
users.forEach(user => {
    console.log(user.name);
});
```

Use regular functions for object methods.

---

## Return Early

Avoid deeply nested `if` statements.

❌

```javascript
function login(user) {

    if (user) {

        if (user.isActive) {
            console.log("Login");
        }

    }

}
```

✅

```javascript
function login(user) {

    if (!user) return;

    if (!user.isActive) return;

    console.log("Login");

}
```

---

# Objects & Arrays

## Use Destructuring

```javascript
const { name, age } = user;
```

---

## Use Spread Instead of Manual Copying

```javascript
const copy = {
    ...user
};
```

```javascript
const numbers = [...arr];
```

---

## Prefer Array Methods

Instead of

```javascript
for (let i = 0; i < users.length; i++) {

}
```

Prefer

```javascript
users.forEach(user => {

});
```

Or

```javascript
const names = users.map(user => user.name);
```

---

# Strings

Prefer template literals.

❌

```javascript
console.log("Hello " + name);
```

✅

```javascript
console.log(`Hello ${name}`);
```

---

# DOM Manipulation

Prefer

```javascript
document.querySelector();
```

instead of

```javascript
document.getElementById();
```

unless selecting by ID is the only requirement.

Use `classList` instead of modifying inline styles whenever possible.

---

# Events

Use

```javascript
addEventListener()
```

instead of

```javascript
onclick
```

Example

```javascript
button.addEventListener("click", handleClick);
```

---

# Async Code

Prefer

```javascript
async/await
```

over long `.then()` chains.

Always use

```javascript
try...catch
```

when using `await`.

---

# Error Handling

Validate inputs before using them.

```javascript
if (!username) {
    throw new Error("Username required");
}
```

Handle API failures.

```javascript
if (!response.ok) {
    throw new Error("Request Failed");
}
```

---

# Performance

Use **debounce** for

* Search
* Input fields
* Auto-save

Use **throttle** for

* Scroll
* Resize
* Mouse movement

Avoid unnecessary DOM updates.

Cache frequently used DOM elements.

```javascript
const button = document.querySelector("button");
```

instead of repeatedly querying the DOM.

---

# Code Organization

Split large files into modules.

```
utils.js
api.js
auth.js
main.js
```

Keep related functions together.

---

# Naming Conventions

## Variables

```javascript
const firstName = "Sourav";
const totalPrice = 100;
```

---

## Functions

Use verbs.

```javascript
calculateTotal();
fetchUsers();
saveData();
```

---

## Constants

```javascript
const API_URL = "...";
const MAX_USERS = 50;
```

---

## Classes

Use PascalCase.

```javascript
class User {

}
```

---

# Comments

Explain **why**, not **what**.

❌

```javascript
// Increment count
count++;
```

✅

```javascript
// Prevent duplicate submissions
count++;
```

If the code is self-explanatory, comments are often unnecessary.

---

# Security

Never trust user input.

```javascript
const username = input.value.trim();
```

Avoid using

```javascript
innerHTML
```

with untrusted data.

Prefer

```javascript
textContent
```

---

# Common Mistakes

## Using `var`

❌

```javascript
var age = 20;
```

✅

```javascript
const age = 20;
```

---

## Deep Nesting

❌

```javascript
if (...) {

    if (...) {

        if (...) {

        }

    }

}
```

Prefer early returns.

---

## Long Functions

If a function exceeds roughly **20–30 lines**, consider breaking it into smaller functions.

---

## Duplicate Code

Instead of

```javascript
calculateTax();
calculateTax();
calculateTax();
```

Create reusable functions.

---

## Global Variables

❌

```javascript
let count = 0;
```

Keep variables inside the smallest scope possible.

---

# Folder Structure

Example

```
project/
│
├── index.html
├── style.css
├── script.js
│
├── js/
│   ├── api.js
│   ├── auth.js
│   ├── utils.js
│   └── main.js
│
└── assets/
```

---

# Professional Checklist

Before finishing a project, ask:

* Are variable names meaningful?
* Are functions small and focused?
* Am I using `const` where possible?
* Is duplicate code removed?
* Are errors handled?
* Are API calls validated?
* Is the code modular?
* Is user input validated?
* Is the code easy to read?
* Would another developer understand it quickly?

---

# Interview Tips

Interviewers often look for:

* Readable code
* Good naming
* Proper use of `const`
* Error handling
* Modular structure
* Avoiding duplicate code
* Understanding of asynchronous code
* Performance awareness

---

# Summary

* Prefer `const` over `let`, and avoid `var`.
* Keep functions short and focused.
* Use meaningful names.
* Prefer template literals.
* Use destructuring and the spread operator.
* Prefer `async/await` with `try...catch`.
* Cache DOM elements and minimize DOM updates.
* Use debounce for typing and throttle for scrolling.
* Validate input and handle errors.
* Write code that is easy to read, maintain, and reuse.
