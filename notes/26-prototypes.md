# Closures

## What is a Closure?

A **closure** is created when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

In simple terms:

> **A function "closes over" (remembers) the variables in the scope where it was created.**

---

# Basic Example

```javascript
function outer() {

    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;

}

const greet = outer();

greet();
```

Output

```text
Hello
```

Even though `outer()` has finished, `inner()` still remembers `message`.

---

# How It Works

```text
outer()
│
├── message = "Hello"
│
└── inner()
        │
        ▼
 remembers message
```

When `outer()` returns, JavaScript keeps `message` alive because `inner()` still needs it.

---

# Another Example

```javascript
function createGreeting(name) {

    return function () {
        console.log(`Hello ${name}`);
    };

}

const greetJohn = createGreeting("John");

greetJohn();
```

Output

```text
Hello John
```

The returned function remembers `name`.

---

# Closures with Counters

One of the most common interview examples.

```javascript
function createCounter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

const counter = createCounter();

counter();
counter();
counter();
```

Output

```text
1
2
3
```

The variable `count` persists between function calls.

---

# Why Doesn't `count` Reset?

Every time you call

```javascript
counter();
```

you're calling the **same inner function**, which remembers the same `count` variable.

Memory

```text
counter
     │
     ▼
count = 3
```

---

# Multiple Closures

Each closure gets its own private variables.

```javascript
const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();

counter2();
```

Output

```text
1
2
1
```

Each counter has its own `count`.

---

# Private Variables

Closures can hide data from outside code.

```javascript
function bankAccount() {

    let balance = 1000;

    return {

        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }

    };

}

const account = bankAccount();

account.deposit(500);

console.log(account.getBalance());
```

Output

```text
1500
```

Outside code **cannot** directly access `balance`.

---

# Closures in Event Listeners

```javascript
const button = document.querySelector("button");

let clicks = 0;

button.addEventListener("click", () => {

    clicks++;

    console.log(clicks);

});
```

The event listener remembers `clicks`.

---

# Closures with `setTimeout()`

```javascript
function delayedGreeting(name) {

    setTimeout(() => {

        console.log(`Hello ${name}`);

    }, 1000);

}

delayedGreeting("Sourav");
```

The callback remembers `name`.

---

# Common Use Cases

* Private variables
* Counters
* Event listeners
* Callbacks
* Timers
* React Hooks
* Memoization
* Function factories

---

# Lexical Scope vs Closure

## Lexical Scope

Variables are accessible based on where they are written.

```javascript
function outer() {

    const name = "John";

    function inner() {
        console.log(name);
    }

}
```

---

## Closure

The inner function remembers those variables **after** the outer function finishes.

---

# Frequently Used Patterns

## Counter

```javascript
function counter() {

    let count = 0;

    return () => ++count;

}
```

---

## Greeting Factory

```javascript
function greet(language) {

    return (name) => {
        console.log(`${language}: ${name}`);
    };

}

const english = greet("Hello");

english("Sourav");
```

---

## Private State

```javascript
function createUser(name) {

    return {

        getName() {
            return name;
        }

    };

}
```

---

## Store Configuration

```javascript
function createLogger(prefix) {

    return (message) => {
        console.log(`${prefix}: ${message}`);
    };

}

const error = createLogger("ERROR");

error("Database Failed");
```

---

# Python vs JavaScript

| Python                            | JavaScript                        |
| --------------------------------- | --------------------------------- |
| Nested functions                  | Nested functions                  |
| `nonlocal`                        | Closure remembers variables       |
| Functions are first-class objects | Functions are first-class objects |

Python

```python
def outer():

    count = 0

    def inner():
        print(count)

    return inner
```

JavaScript

```javascript
function outer() {

    let count = 0;

    return function () {
        console.log(count);
    };

}
```

---

# Best Practices

* Use closures to encapsulate private data.
* Keep closures small and focused.
* Avoid capturing unnecessary variables.
* Prefer classes when managing complex state.

---

# Common Mistakes

## Expecting Variables to Disappear

```javascript
function outer() {

    const message = "Hello";

    return function () {
        console.log(message);
    };

}
```

`message` stays in memory because the inner function still references it.

---

## Creating Unnecessary Closures

Closures consume memory.

Don't create them unless you need persistent state.

---

## Confusing Scope with Closure

Scope determines **where** variables are accessible.

Closures determine **how long** those variables remain available.

---

# Interview Questions

### What is a closure?

A function that remembers variables from its outer scope even after that outer function has finished executing.

---

### Why are closures useful?

They allow private variables, persistent state, callbacks, and function factories.

---

### Do closures keep variables in memory?

Yes.

Variables referenced by a closure remain in memory until the closure is no longer reachable.

---

### Name some real-world uses of closures.

* Event listeners
* `setTimeout()`
* `setInterval()`
* React Hooks
* Memoization
* Counters

---

### What's the difference between lexical scope and a closure?

* **Lexical scope** determines where variables can be accessed.
* **A closure** preserves those variables after the outer function has finished.

---

# Summary

* A closure is created when a function remembers variables from its outer scope.
* Closures preserve variables even after the outer function returns.
* Each closure has its own private state.
* Common uses include counters, private variables, callbacks, and event listeners.
* Closures are built on lexical scope.
* They are fundamental to modern JavaScript and React.
