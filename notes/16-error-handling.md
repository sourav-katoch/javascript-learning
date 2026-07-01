# Error Handling

## What is Error Handling?

Error handling allows your program to detect and respond to runtime errors instead of crashing.

Common examples:

* Invalid user input
* API request failures
* Missing files
* Network errors
* Unexpected values

---

# Types of Errors

| Error            | Description                  |
| ---------------- | ---------------------------- |
| `SyntaxError`    | Invalid JavaScript syntax    |
| `ReferenceError` | Variable does not exist      |
| `TypeError`      | Invalid operation on a value |
| `RangeError`     | Value outside allowed range  |
| `Error`          | Generic error                |

---

# `try...catch`

Used to handle errors gracefully.

## Syntax

```javascript
try {
    // Code that may throw an error
} catch (error) {
    // Handle the error
}
```

Example

```javascript
try {
    console.log(user.name);
} catch (error) {
    console.log("Something went wrong.");
}
```

---

# The `error` Object

The `catch` block receives an error object.

```javascript
try {
    console.log(user.name);
} catch (error) {
    console.log(error);
}
```

Useful properties

```javascript
error.name
error.message
error.stack
```

Example

```javascript
try {
    console.log(user.name);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
```

Output

```text
ReferenceError
user is not defined
```

---

# `finally`

Runs **whether an error occurs or not**.

```javascript
try {

    console.log("Running...");

} catch (error) {

    console.log(error);

} finally {

    console.log("Finished");

}
```

Output

```text
Running...
Finished
```

---

# Throwing Your Own Errors

Use `throw` to create custom errors.

```javascript
const age = 15;

if (age < 18) {
    throw new Error("Must be at least 18 years old.");
}
```

---

# Throw Inside `try`

```javascript
try {

    const age = 15;

    if (age < 18) {
        throw new Error("Access Denied");
    }

} catch (error) {

    console.log(error.message);

}
```

Output

```text
Access Denied
```

---

# Error Handling with Fetch

```javascript
fetch(url)
    .then(response => {

        if (!response.ok) {
            throw new Error("Request Failed");
        }

        return response.json();

    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error.message);
    });
```

---

# Common Error Types

## ReferenceError

Using a variable that doesn't exist.

```javascript
console.log(username);
```

Output

```text
ReferenceError
```

---

## TypeError

Using an invalid method or property.

```javascript
const user = null;

console.log(user.name);
```

Output

```text
TypeError
```

---

## SyntaxError

Invalid JavaScript syntax.

```javascript
const age = ;
```

Output

```text
SyntaxError
```

---

## RangeError

Value outside the allowed range.

```javascript
const numbers = new Array(-1);
```

Output

```text
RangeError
```

---

# Nested `try...catch`

```javascript
try {

    try {

        throw new Error("Inner Error");

    } catch (error) {

        console.log(error.message);

    }

} catch (error) {

    console.log("Outer Error");

}
```

Usually unnecessary for simple applications.

---

# Frequently Used Patterns

## Validate Input

```javascript
try {

    const age = -5;

    if (age < 0) {
        throw new Error("Age cannot be negative.");
    }

} catch (error) {

    console.log(error.message);

}
```

---

## Handle Missing Object

```javascript
try {

    console.log(user.name);

} catch (error) {

    console.log("User not found.");

}
```

---

## Safe API Request

```javascript
fetch(url)
    .then(response => {

        if (!response.ok) {
            throw new Error("Network Error");
        }

        return response.json();

    })
    .catch(error => {
        console.log(error.message);
    });
```

---

## Always Run Cleanup

```javascript
try {

    console.log("Processing");

} finally {

    console.log("Close Database Connection");

}
```

---

# Python vs JavaScript

| Python    | JavaScript |
| --------- | ---------- |
| `try`     | `try`      |
| `except`  | `catch`    |
| `finally` | `finally`  |
| `raise`   | `throw`    |

Python

```python
try:
    print(user.name)
except Exception as e:
    print(e)
finally:
    print("Done")
```

JavaScript

```javascript
try {

    console.log(user.name);

} catch (error) {

    console.log(error);

} finally {

    console.log("Done");

}
```

---

# Best Practices

* Handle only errors you can recover from.
* Write meaningful error messages.
* Always validate user input.
* Check API responses before using them.
* Use `finally` for cleanup tasks.

---

# Common Mistakes

## Empty `catch`

❌

```javascript
try {

} catch (error) {

}
```

Always log or handle the error.

---

## Throwing Strings

❌

```javascript
throw "Something went wrong";
```

✅

```javascript
throw new Error("Something went wrong");
```

---

## Ignoring `response.ok`

❌

```javascript
fetch(url)
    .then(response => response.json());
```

Always check

```javascript
if (!response.ok) {
    throw new Error("Request Failed");
}
```

---

## Using `try...catch` for Everything

`try...catch` is intended for **exceptional situations**, not normal program flow.

---

# Interview Questions

### Why use `try...catch`?

To prevent the application from crashing when runtime errors occur.

---

### What does `finally` do?

It always executes, whether an error occurs or not.

---

### What does `throw` do?

It creates and throws a custom error.

---

### Difference between `throw` and `catch`?

* `throw` creates an error.
* `catch` handles an error.

---

### What is the purpose of `error.message`?

It returns a human-readable description of the error.

---

# Summary

* Use `try...catch` to handle runtime errors.
* Use `finally` for cleanup code.
* Use `throw new Error()` to create custom errors.
* Common errors include `ReferenceError`, `TypeError`, `SyntaxError`, and `RangeError`.
* Always check `response.ok` when using `fetch()`.
* Validate user input before processing it.
* Handle errors gracefully instead of letting the application crash.
