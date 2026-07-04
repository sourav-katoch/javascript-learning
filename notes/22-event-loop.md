# Event Loop

## What is the Event Loop?

The **Event Loop** is the mechanism that allows JavaScript to perform asynchronous operations without blocking the main thread.

It coordinates between:

* Call Stack
* Browser APIs
* Callback Queue
* Microtask Queue

---

# JavaScript is Single-Threaded

JavaScript executes **one task at a time**.

Only one function can run at any given moment.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output

```text
A
B
C
```

---

# The Call Stack

The **Call Stack** keeps track of which function is currently executing.

Example

```javascript
function first() {
    console.log("First");
}

function second() {
    first();
    console.log("Second");
}

second();
```

Execution

```text
Call Stack

second()
   │
   ▼
first()
   │
   ▼
console.log()
```

Output

```text
First
Second
```

Functions are removed from the stack after they finish.

---

# The Problem

Consider this code.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");
```

Output

```text
Start
End
Timer
```

Why didn't JavaScript wait for two seconds?

Because `setTimeout()` is handled by the browser, not the Call Stack.

---

# Browser APIs

When JavaScript encounters:

* `setTimeout()`
* `setInterval()`
* `fetch()`
* DOM Events

it hands them to the browser.

The browser manages these operations while JavaScript continues executing.

```text
JavaScript
     │
     ▼
Browser API
     │
     ▼
Callback Queue
```

---

# Callback Queue

When an asynchronous task finishes, its callback is placed in the **Callback Queue**.

Example

```javascript
setTimeout(() => {
    console.log("Done");
}, 1000);
```

After one second

```text
Callback Queue

┌────────────┐
│ Callback   │
└────────────┘
```

The callback **does not execute immediately**.

---

# What Does the Event Loop Do?

The Event Loop continuously checks:

1. Is the Call Stack empty?
2. If yes, move the next callback into the Call Stack.

```text
Call Stack Empty?
        │
        ▼
      Yes
        │
        ▼
Move Callback
        │
        ▼
Execute
```

---

# Complete Execution Flow

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");
```

Execution

```text
1. Start
2. setTimeout() → Browser
3. End
4. Call Stack Empty
5. Event Loop
6. Callback Executes
```

Output

```text
Start
End
Timer
```

> Even `setTimeout(..., 0)` does **not** execute immediately.

---

# Microtask Queue

Some asynchronous tasks have **higher priority** than the Callback Queue.

Examples:

* Promise `.then()`
* `catch()`
* `finally()`
* `queueMicrotask()`

These are placed in the **Microtask Queue**.

---

# Callback Queue vs Microtask Queue

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Output

```text
Start
End
Promise
Timeout
```

Why?

Because the **Microtask Queue** is processed **before** the Callback Queue.

---

# Execution Order

```text
Call Stack
      │
      ▼
Microtask Queue
      │
      ▼
Callback Queue
```

Priority

```text
1. Call Stack
2. Microtask Queue
3. Callback Queue
```

---

# Visual Diagram

```text
                JavaScript Engine
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
  Call Stack                  Browser APIs
        │                             │
        ▼                             ▼
   Event Loop                  Async Task
        │                             │
        ▼                             ▼
 Microtask Queue             Callback Queue
        │                             │
        └──────────────┬──────────────┘
                       ▼
                  Call Stack
```

---

# Common Browser APIs

| API               | Queue                     |
| ----------------- | ------------------------- |
| `setTimeout()`    | Callback Queue            |
| `setInterval()`   | Callback Queue            |
| DOM Events        | Callback Queue            |
| `fetch()`         | Promise → Microtask Queue |
| Promise `.then()` | Microtask Queue           |

---

# Frequently Used Patterns

## Timer

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

---

## Promise

```javascript
Promise.resolve()
    .then(() => {
        console.log("Done");
    });
```

---

## Fetch

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

---

# Python vs JavaScript

| Python                | JavaScript                    |
| --------------------- | ----------------------------- |
| Sequential execution  | Event Loop handles async work |
| `time.sleep()` blocks | `setTimeout()` does not block |
| `asyncio` event loop  | Browser/Node.js Event Loop    |

---

# Best Practices

* Avoid blocking the Call Stack with long-running synchronous code.
* Prefer asynchronous APIs for network and file operations.
* Remember that Promises execute before timer callbacks.
* Keep callback functions short and efficient.

---

# Common Mistakes

## Assuming `setTimeout(..., 0)` Runs Immediately

❌

```javascript
setTimeout(() => {
    console.log("A");
}, 0);

console.log("B");
```

Expected

```text
A
B
```

Actual

```text
B
A
```

---

## Forgetting Promise Priority

```javascript
setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});
```

Output

```text
Promise
Timeout
```

---

## Thinking JavaScript Runs Multiple Functions at Once

JavaScript executes **one function at a time**.

The browser handles asynchronous operations separately.

---

# Interview Questions

### What is the Event Loop?

A mechanism that moves completed asynchronous tasks into the Call Stack when it becomes empty.

---

### Is JavaScript multi-threaded?

No.

JavaScript execution is single-threaded.

---

### What is the Call Stack?

A data structure that keeps track of the currently executing functions.

---

### What is the Callback Queue?

A queue containing completed callback functions waiting to execute.

---

### What is the Microtask Queue?

A high-priority queue containing Promise callbacks and other microtasks.

---

### Which executes first?

```javascript
setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B"));
```

Output

```text
B
A
```

Because the Microtask Queue has higher priority.

---

# Summary

* JavaScript is single-threaded.
* The Call Stack executes one function at a time.
* Browser APIs handle asynchronous operations.
* Completed callbacks enter the Callback Queue.
* Promise callbacks enter the Microtask Queue.
* The Event Loop moves tasks to the Call Stack when it becomes empty.
* Microtasks execute before callback queue tasks.
* `setTimeout(..., 0)` never executes immediately.
