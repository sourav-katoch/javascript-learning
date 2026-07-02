# Promises

## What is a Promise?

A **Promise** is an object that represents the eventual result of an asynchronous operation.

Think of it like ordering food:

* Order placed → **Pending**
* Food delivered → **Fulfilled**
* Restaurant cancels → **Rejected**

---

# Promise States

A Promise has **three states**.

```text id="xfq0mw"
           Promise
              │
     ┌────────┴────────┐
     │                 │
 Pending          Settled
                     │
          ┌──────────┴──────────┐
          │                     │
     Fulfilled             Rejected
```

| State     | Meaning                          |
| --------- | -------------------------------- |
| Pending   | Operation still running          |
| Fulfilled | Operation completed successfully |
| Rejected  | Operation failed                 |

Once a Promise is **fulfilled** or **rejected**, it **cannot change again**.

---

# Why Do We Need Promises?

Without Promises

```javascript id="rwgph9"
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

This is **Callback Hell**.

Promises make the same code much cleaner.

```javascript id="ksgddz"
login()
    .then(getUser)
    .then(getOrders)
    .then(getPayment)
    .catch(console.error);
```

---

# Creating a Promise

Syntax

```javascript id="tqykce"
const promise = new Promise((resolve, reject) => {

});
```

Example

```javascript id="8blkwt"
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }

});
```

---

# Consuming a Promise

Use `.then()`.

```javascript id="w1xrfv"
promise.then(result => {
    console.log(result);
});
```

Output

```text id="35eezn"
Success
```

---

# Handling Errors

Use `.catch()`.

```javascript id="8mrtmw"
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```

---

# `.finally()`

Runs whether the Promise succeeds or fails.

```javascript id="c3jlwm"
promise
    .finally(() => {
        console.log("Finished");
    });
```

---

# Promise Chaining

Each `.then()` returns a new Promise.

```javascript id="78gz7q"
fetchUser()
    .then(user => getOrders(user.id))
    .then(orders => processOrders(orders))
    .then(result => {
        console.log(result);
    })
    .catch(console.error);
```

---

# Returning Values

```javascript id="qwmjqo"
Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 10)
    .then(console.log);
```

Output

```text id="vmmu4l"
20
```

---

# `Promise.resolve()`

Creates an immediately fulfilled Promise.

```javascript id="m97vpd"
Promise.resolve("Hello")
    .then(console.log);
```

Output

```text id="ss6oqn"
Hello
```

---

# `Promise.reject()`

Creates an immediately rejected Promise.

```javascript id="llgk9w"
Promise.reject("Error")
    .catch(console.log);
```

Output

```text id="fjlwmf"
Error
```

---

# `Promise.all()`

Waits for **all** Promises to complete.

```javascript id="lcclu0"
Promise.all([

    fetchUsers(),
    fetchPosts(),
    fetchComments()

]).then(results => {

    console.log(results);

});
```

If **one Promise fails**, the entire `Promise.all()` rejects.

---

# `Promise.race()`

Returns the first Promise to settle.

```javascript id="trg6o3"
Promise.race([

    fetchUsers(),
    fetchPosts()

]).then(result => {

    console.log(result);

});
```

Useful for:

* Timeouts
* Competing requests

---

# `Promise.allSettled()`

Waits for every Promise, even if some fail.

```javascript id="3r0ozg"
Promise.allSettled([

    promise1,
    promise2,
    promise3

]).then(results => {

    console.log(results);

});
```

---

# `Promise.any()`

Returns the **first fulfilled Promise**.

Ignores rejected Promises.

```javascript id="yik3h6"
Promise.any([

    promise1,
    promise2

]);
```

---

# Fetch Uses Promises

```javascript id="gpq0nf"
fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data);

    })
    .catch(error => {

        console.log(error);

    });
```

Every `fetch()` call returns a Promise.

---

# Execution Flow

```text id="w2mry4"
Start
   │
   ▼
Create Promise
   │
   ▼
Pending
   │
   ├──────────────┐
   ▼              ▼
Resolved      Rejected
   │              │
   ▼              ▼
 then()       catch()
      └──────────┘
           ▼
       finally()
```

---

# Real-World Example

```javascript id="gjvj7u"
fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())

    .then(users => {

        console.log(users);

    })

    .catch(error => {

        console.log(error);

    })

    .finally(() => {

        console.log("Request Finished");

    });
```

---

# Promise Methods

| Method                 | Purpose                |
| ---------------------- | ---------------------- |
| `.then()`              | Success handler        |
| `.catch()`             | Error handler          |
| `.finally()`           | Always runs            |
| `Promise.resolve()`    | Fulfilled Promise      |
| `Promise.reject()`     | Rejected Promise       |
| `Promise.all()`        | Wait for all           |
| `Promise.race()`       | First settled          |
| `Promise.allSettled()` | Wait for every Promise |
| `Promise.any()`        | First fulfilled        |

---

# Python vs JavaScript

| Python             | JavaScript                  |
| ------------------ | --------------------------- |
| `asyncio.Future`   | Promise                     |
| `await`            | `await`                     |
| `try/except`       | `.catch()` or `try...catch` |
| `asyncio.gather()` | `Promise.all()`             |

---

# Best Practices

* Always handle rejected Promises.
* Chain `.then()` instead of nesting callbacks.
* Use `Promise.all()` for parallel independent tasks.
* Prefer `async/await` for new projects.
* Use `.finally()` for cleanup tasks.

---

# Common Mistakes

## Forgetting `return`

❌

```javascript id="pkd2lr"
fetchUser()

.then(user => {

    getOrders(user.id);

})

.then(console.log);
```

The second `.then()` receives `undefined`.

✅

```javascript id="jmkjlwm"
fetchUser()

.then(user => {

    return getOrders(user.id);

})

.then(console.log);
```

---

## Missing `.catch()`

❌

```javascript id="jx0e5z"
fetch(url)

.then(response => response.json());
```

Always include

```javascript id="7r8qgw"
.catch(error => {

    console.log(error);

});
```

---

## Nested `.then()`

❌

```javascript id="n5sk3n"
fetchUser()

.then(user => {

    fetchOrders(user.id)

        .then(console.log);

});
```

Better

```javascript id="lwdun9"
fetchUser()

.then(user => fetchOrders(user.id))

.then(console.log);
```

---

# Interview Questions

### What is a Promise?

An object representing the future result of an asynchronous operation.

---

### What are the three Promise states?

* Pending
* Fulfilled
* Rejected

---

### Which method handles successful results?

`.then()`

---

### Which method handles errors?

`.catch()`

---

### What does `.finally()` do?

Runs regardless of success or failure.

---

### Difference between `Promise.all()` and `Promise.race()`?

* `Promise.all()` waits for every Promise.
* `Promise.race()` returns the first settled Promise.

---

### Does `fetch()` return data immediately?

No.

It returns a **Promise**.

---

# Summary

* A Promise represents the future result of an asynchronous operation.
* Promises have three states: **Pending**, **Fulfilled**, and **Rejected**.
* Use `.then()` for successful results.
* Use `.catch()` for errors.
* Use `.finally()` for cleanup.
* `fetch()` returns a Promise.
* `Promise.all()` waits for all Promises.
* `Promise.race()` returns the first settled Promise.
* Promise chaining is cleaner than nested callbacks.
* Modern JavaScript typically uses `async/await` to work with Promises.
