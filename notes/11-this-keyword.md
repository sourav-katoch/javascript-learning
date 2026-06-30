# `this` Keyword

## What is `this`?

`this` is a keyword that refers to the **current execution context**.

Its value is determined by **how a function is called**, not where it is written.

---

# `this` in the Global Scope

```javascript
console.log(this);
```

### Browser

```javascript
window
```

### Node.js

```javascript
{}
```

---

# `this` Inside an Object Method

When a function is called as a method of an object, `this` refers to that object.

```javascript
const user = {
    name: "Sourav",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output

```text
Sourav
```

Equivalent to

```javascript
console.log(user.name);
```

---

# `this` Inside a Regular Function

```javascript
function greet() {
    console.log(this);
}

greet();
```

### Browser (Non-Strict Mode)

```javascript
window
```

### Strict Mode

```javascript
undefined
```

Most modern JavaScript uses **strict mode**, so expect `undefined`.

---

# `this` in an Arrow Function

Arrow functions **do not have their own `this`**.

They inherit `this` from the surrounding scope.

```javascript
const user = {
    name: "Sourav",

    greet() {

        const message = () => {
            console.log(this.name);
        };

        message();

    }
};

user.greet();
```

Output

```text
Sourav
```

The arrow function uses the `this` value from `greet()`.

---

# Regular Function vs Arrow Function

```javascript
const user = {
    name: "Sourav",

    regular() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

user.regular();
user.arrow();
```

Output

```text
Sourav
undefined
```

Arrow functions should **not** be used as object methods.

---

# `this` in Event Listeners

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function () {
    console.log(this);
});
```

Output

```text
<button>...</button>
```

`this` refers to the element that received the event.

---

Using an arrow function

```javascript
button.addEventListener("click", () => {
    console.log(this);
});
```

`this` no longer refers to the button because arrow functions inherit `this` from the outer scope.

If you need the clicked element, use:

```javascript
button.addEventListener("click", (event) => {
    console.log(event.target);
});
```

---

# `call()`

Invoke a function with a specific `this`.

```javascript
function greet() {
    console.log(this.name);
}

const user = {
    name: "Sourav"
};

greet.call(user);
```

Output

```text
Sourav
```

---

# `apply()`

Similar to `call()`, but arguments are passed as an array.

```javascript
function introduce(city) {
    console.log(`${this.name} lives in ${city}`);
}

const user = {
    name: "Sourav"
};

introduce.apply(user, ["Mohali"]);
```

---

# `bind()`

Creates a new function with a fixed `this`.

```javascript
function greet() {
    console.log(this.name);
}

const user = {
    name: "Sourav"
};

const sayHello = greet.bind(user);

sayHello();
```

Output

```text
Sourav
```

---

# Summary of `call()`, `apply()`, and `bind()`

| Method    | Calls Immediately | Arguments              |
| --------- | ----------------- | ---------------------- |
| `call()`  | ✅                 | Comma-separated        |
| `apply()` | ✅                 | Array                  |
| `bind()`  | ❌                 | Returns a new function |

---

# `this` in Classes

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }

}

const user = new User("Sourav");

user.greet();
```

Output

```text
Sourav
```

---

# Common Use Cases

### Object Methods

```javascript
const car = {
    brand: "BMW",

    start() {
        console.log(`${this.brand} started`);
    }
};
```

---

### Updating Object Properties

```javascript
const counter = {

    count: 0,

    increment() {
        this.count++;
    }

};
```

---

### Class Methods

```javascript
class BankAccount {

    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

}
```

---

# Python vs JavaScript

| Python             | JavaScript       |
| ------------------ | ---------------- |
| `self`             | `this`           |
| Explicit parameter | Implicit keyword |
| `self.name`        | `this.name`      |

Python

```python
class User:
    def __init__(self, name):
        self.name = name
```

JavaScript

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

}
```

---

# Best Practices

* Use regular functions for object methods.
* Use arrow functions for callbacks.
* Don't use arrow functions as object methods.
* Use `event.target` inside event handlers when you need the clicked element.
* Use `bind()` when passing methods as callbacks.

---

# Common Mistakes

## Using Arrow Functions as Object Methods

❌

```javascript
const user = {

    name: "Sourav",

    greet: () => {
        console.log(this.name);
    }

};
```

Output

```text
undefined
```

✅

```javascript
const user = {

    name: "Sourav",

    greet() {
        console.log(this.name);
    }

};
```

---

## Losing `this`

```javascript
const user = {

    name: "Sourav",

    greet() {
        console.log(this.name);
    }

};

const fn = user.greet;

fn();
```

Output

```text
undefined
```

Fix

```javascript
const fn = user.greet.bind(user);

fn();
```

---

## Confusing `this` with the Variable Name

```javascript
const person = {
    name: "John"
};

console.log(person.name);
```

Inside methods

```javascript
const person = {

    name: "John",

    greet() {
        console.log(this.name);
    }

};
```

Always use `this` to refer to properties of the current object.

---

# Frequently Used Patterns

## Object Method

```javascript
const user = {

    name: "Sourav",

    greet() {
        console.log(`Hello ${this.name}`);
    }

};
```

---

## Counter

```javascript
const counter = {

    count: 0,

    increment() {
        this.count++;
    }

};
```

---

## Event Listener

```javascript
button.addEventListener("click", (event) => {
    console.log(event.target);
});
```

---

## Class

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

}
```

---

## Preserve `this`

```javascript
const fn = user.greet.bind(user);

fn();
```

---

# Interview Questions

### What determines the value of `this`?

**How the function is called.**

---

### Do arrow functions have their own `this`?

No. They inherit `this` from the surrounding scope.

---

### Should arrow functions be used as object methods?

No.

---

### Difference between `call()`, `apply()`, and `bind()`?

* `call()` invokes immediately with comma-separated arguments.
* `apply()` invokes immediately with an array of arguments.
* `bind()` returns a new function with a fixed `this`.

---

### What is the JavaScript equivalent of Python's `self`?

`this`

---

# Summary

* `this` refers to the current execution context.
* Its value depends on **how the function is called**.
* In object methods, `this` refers to the object.
* In regular functions (strict mode), `this` is `undefined`.
* Arrow functions inherit `this` from the surrounding scope.
* Use regular functions for object methods.
* Use arrow functions for callbacks.
* Use `bind()` to preserve `this` when passing methods around.

