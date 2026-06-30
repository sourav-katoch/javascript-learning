# Asynchronous JavaScript

## What is Asynchronous JavaScript?

JavaScript executes **one task at a time** (single-threaded).

Normally, code runs **synchronously**, meaning each line waits for the previous one to finish.

**Asynchronous JavaScript** allows long-running tasks to execute in the background without blocking the rest of the program.

---

# Synchronous Execution

Each line waits for the previous line.

```javascript
console.log("Start");

console.log("Processing...");

console.log("End");
```

Output

```text
Start
Processing...
End
```

Execution order

```text
Start
   ↓
Processing
   ↓
End
```

---

# The Problem

Imagine downloading data from an API.

```javascript
const data = fetchData();

console.log(data);
```

If downloading takes **5 seconds**, JavaScript would freeze the entire webpage while waiting.

This would create a poor user experience.

---

# Asynchronous Execution

Instead of waiting, JavaScript starts the task and continues executing other code.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Task Finished");
}, 2000);

console.log("End");
```

Output

```text
Start
End
Task Finished
```

Execution order

```text
Start
   ↓
Start Timer (2s)
   ↓
Continue
   ↓
End
   ↓
Timer Completes
   ↓
Task Finished
```

---

# Why Do We Need Asynchronous Programming?

Without it:

* The UI freezes.
* Users cannot interact with the page.
* Applications feel slow.

With asynchronous programming:

* The UI remains responsive.
* Multiple tasks appear to happen simultaneously.
* Better user experience.

---

# Common Asynchronous Tasks

* API requests
* Database queries
* File uploads
* File downloads
* Timers
* Animations
* User input
* Reading files

---

# `setTimeout()`

Executes code after a specified delay.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 3000);

console.log("End");
```

Output

```text
Start
End
Hello
```

---

# `setInterval()`

Runs code repeatedly at a fixed interval.

```javascript
const timer = setInterval(() => {
    console.log("Running...");
}, 1000);
```

Stop it using

```javascript
clearInterval(timer);
```

---

# Callback Functions

A callback is a function passed to another function and executed later.

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

function process(callback) {
    callback("Sourav");
}

process(greet);
```

Callbacks are the foundation of asynchronous JavaScript.

---

# Callback Example

```javascript
setTimeout(() => {
    console.log("Executed later");
}, 1000);
```

The arrow function is the callback.

---

# Callback Hell

Nested callbacks become difficult to read.

```javascript
login(() => {

    getUser(() => {

        getOrders(() => {

            getPayment(() => {

                console.log("Done");

            });

        });

    });

});
```

This is known as **Callback Hell** or the **Pyramid of Doom**.

Promises and `async/await` solve this problem.

---

# Browser APIs

Functions like these are provided by the browser, not JavaScript itself.

* `setTimeout()`
* `setInterval()`
* `fetch()`
* DOM Events

JavaScript hands these tasks to the browser and continues executing other code.

---

# Execution Flow

```text
JavaScript Starts
        │
        ▼
Execute Synchronous Code
        │
        ▼
Start Async Task
        │
        ▼
Continue Executing
        │
        ▼
Async Task Completes
        │
        ▼
Execute Callback
```

---

# Real-World Example

Fetching user data

```javascript
console.log("Loading user...");

setTimeout(() => {

    console.log("User Loaded");

}, 2000);

console.log("Continue Rendering Page");
```

Output

```text
Loading user...
Continue Rendering Page
User Loaded
```

---

# Common Browser APIs

| API             | Purpose                |
| --------------- | ---------------------- |
| `setTimeout()`  | Run once after a delay |
| `setInterval()` | Run repeatedly         |
| `fetch()`       | HTTP requests          |
| DOM Events      | User interaction       |

---

# Python vs JavaScript

| Python                                       | JavaScript                       |
| -------------------------------------------- | -------------------------------- |
| Code blocks while waiting (normal execution) | Non-blocking execution           |
| `time.sleep()` blocks execution              | `setTimeout()` does not block    |
| `asyncio` for async programming              | Built-in browser APIs + Promises |

---

# Best Practices

* Keep synchronous code short.
* Use asynchronous operations for network requests.
* Avoid deeply nested callbacks.
* Prefer Promises and `async/await` over callback chains.

---

# Common Mistakes

## Expecting `setTimeout()` to Block Execution

❌

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Middle");
}, 2000);

console.log("End");
```

Output

```text
Start
Middle
End
```

✅ Actual Output

```text
Start
End
Middle
```

---

## Callback Hell

❌

```javascript
a(() => {
    b(() => {
        c(() => {
            d(() => {

            });
        });
    });
});
```

Prefer Promises or `async/await`.

---

## Assuming JavaScript Runs Multiple Lines at Once

JavaScript is **single-threaded**.

It executes **one piece of JavaScript code at a time**.

The browser handles asynchronous operations in the background.

---

# Frequently Used Patterns

## Delay Execution

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

---

## Repeat Every Second

```javascript
const timer = setInterval(() => {
    console.log("Running...");
}, 1000);
```

Stop

```javascript
clearInterval(timer);
```

---

## Button Click

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

## Simulate an API Call

```javascript
console.log("Loading...");

setTimeout(() => {
    console.log("Data Loaded");
}, 2000);
```

---

# Interview Questions

### What is synchronous execution?

Code executes one statement at a time, in order.

---

### What is asynchronous execution?

Long-running tasks execute in the background while JavaScript continues running other code.

---

### Is JavaScript multi-threaded?

No.

JavaScript is **single-threaded**.

The browser provides asynchronous APIs.

---

### What is a callback?

A function passed to another function that executes later.

---

### What is callback hell?

Deeply nested callbacks that make code difficult to read and maintain.

---

### Why do we use asynchronous programming?

To prevent blocking the main thread and keep applications responsive.

---

# Summary

* JavaScript is **single-threaded**.
* Synchronous code executes line by line.
* Asynchronous code prevents blocking.
* Browser APIs handle timers, events, and network requests.
* `setTimeout()` and `setInterval()` are asynchronous.
* Callbacks execute after asynchronous tasks complete.
* Callback hell is solved by Promises and `async/await`.
* Asynchronous programming keeps web applications fast and responsive.

