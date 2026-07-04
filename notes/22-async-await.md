# Async / Await

## What is `async/await`?

`async/await` is modern syntax for working with **Promises**.

It makes asynchronous code look and read like synchronous code.

Instead of writing:

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

You can write:

```javascript
const response = await fetch(url);

const data = await response.json();

console.log(data);
```

---

# `async`

The `async` keyword makes a function asynchronous.

```javascript
async function greet() {

}
```

Arrow function

```javascript
const greet = async () => {

};
```

---

# `await`

`await` pauses execution **inside an async function** until a Promise is resolved.

```javascript
const response = await fetch(url);
```

> `await` can only be used inside an `async` function.

---

# Basic Example

```javascript
async function greet() {

    return "Hello";

}

greet().then(message => {
    console.log(message);
});
```

Even though `"Hello"` is returned directly, an `async` function always returns a **Promise**.

---

# Using `await`

```javascript
async function getData() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);

}

getData();
```

---

# Execution Flow

```text
Call async function
        │
        ▼
Run until await
        │
        ▼
Pause function
        │
        ▼
Promise resolves
        │
        ▼
Continue execution
```

---

# Multiple `await`s

```javascript
async function loadData() {

    const userResponse = await fetch("/users");
    const users = await userResponse.json();

    const postResponse = await fetch("/posts");
    const posts = await postResponse.json();

    console.log(users);
    console.log(posts);

}
```

Each `await` waits for the previous operation to finish.

---

# Error Handling

Use `try...catch`.

```javascript
async function getUsers() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request Failed");
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error.message);

    }

}
```

---

# Returning Data

```javascript
async function getUser() {

    const response = await fetch(url);

    return response.json();

}
```

Using it

```javascript
const user = await getUser();
```

or

```javascript
getUser().then(user => {
    console.log(user);
});
```

---

# `.then()` vs `async/await`

### Promise Style

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

---

### Async/Await Style

```javascript
try {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

} catch (error) {

    console.log(error);

}
```

---

# Using Multiple Requests

Sequential

```javascript
const user = await fetch("/user");
const posts = await fetch("/posts");
```

Runs one after another.

---

Parallel

```javascript
const [user, posts] = await Promise.all([
    fetch("/user"),
    fetch("/posts")
]);
```

Runs both simultaneously.

---

# Common Use Cases

* Fetching API data
* Loading user profiles
* Authentication
* Uploading files
* Downloading files

---

# Frequently Used Patterns

## GET Request

```javascript
async function loadUsers() {

    const response = await fetch(url);

    const users = await response.json();

    console.log(users);

}
```

---

## POST Request

```javascript
async function createUser(user) {

    const response = await fetch(url, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)

    });

    return response.json();

}
```

---

## Error Handling

```javascript
async function loadData() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error.message);

    }

}
```

---

## Wait for Two Tasks

```javascript
const data1 = await fetch(url1);

const data2 = await fetch(url2);
```

---

## Parallel Requests

```javascript
const [users, posts] = await Promise.all([
    fetch("/users"),
    fetch("/posts")
]);
```

---

# Python vs JavaScript

| Python      | JavaScript               |
| ----------- | ------------------------ |
| `async def` | `async function`         |
| `await`     | `await`                  |
| `asyncio`   | Promises + `async/await` |

Python

```python
async def fetch_data():
    data = await api()
```

JavaScript

```javascript
async function fetchData() {

    const data = await fetch(url);

}
```

---

# Best Practices

* Prefer `async/await` over long `.then()` chains.
* Always use `try...catch` with `await`.
* Use `Promise.all()` for independent requests.
* Keep async functions small and focused.

---

# Common Mistakes

## Using `await` Outside an Async Function

❌

```javascript
const response = await fetch(url);
```

✅

```javascript
async function getData() {

    const response = await fetch(url);

}
```

---

## Forgetting `await`

❌

```javascript
const response = fetch(url);

console.log(response);
```

Output

```text
Promise { ... }
```

✅

```javascript
const response = await fetch(url);
```

---

## Forgetting `try...catch`

```javascript
try {

    const response = await fetch(url);

} catch (error) {

    console.log(error);

}
```

---

## Running Independent Requests Sequentially

❌

```javascript
const users = await fetch("/users");
const posts = await fetch("/posts");
```

Better

```javascript
const [users, posts] = await Promise.all([
    fetch("/users"),
    fetch("/posts")
]);
```

---

# Interview Questions

### What does `async` do?

It makes a function return a Promise.

---

### What does `await` do?

It pauses execution until a Promise resolves.

---

### Can `await` be used outside an async function?

No.

---

### Why use `async/await`?

It makes asynchronous code easier to read and maintain.

---

### When should you use `Promise.all()`?

When multiple asynchronous tasks can run independently.

---

# Summary

* `async` makes a function asynchronous.
* `await` pauses execution until a Promise resolves.
* `await` only works inside an `async` function.
* `async/await` is cleaner than `.then()`.
* Use `try...catch` for error handling.
* Use `Promise.all()` for parallel asynchronous operations.
* Modern JavaScript projects prefer `async/await` over chained `.then()` calls.
