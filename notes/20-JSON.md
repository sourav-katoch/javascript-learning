# JSON

## What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight text format used to store and exchange data.

Common uses:

* API responses
* Configuration files
* Local Storage
* Data exchange between frontend and backend

Example JSON

```json id="b6x3zd"
{
    "name": "Sourav",
    "age": 25,
    "isStudent": false
}
```

Although it looks like a JavaScript object, **JSON is just text**.

---

# JSON vs JavaScript Object

JavaScript Object

```javascript id="7j7uk4"
const user = {
    name: "Sourav",
    age: 25
};
```

JSON

```json id="mwz3x5"
{
    "name": "Sourav",
    "age": 25
}
```

### Main Differences

| JavaScript Object       | JSON                        |
| ----------------------- | --------------------------- |
| Actual object           | String (text)               |
| Keys may omit quotes    | Keys must use double quotes |
| Can contain functions   | Cannot contain functions    |
| Can contain `undefined` | Cannot contain `undefined`  |
| Executable              | Data only                   |

---

# Valid JSON

```json id="5qzx7d"
{
    "name": "Sourav",
    "age": 25,
    "isStudent": true,
    "skills": ["HTML", "CSS", "JavaScript"]
}
```

---

# Invalid JSON

Single quotes

```json id="bdxk5j"
{
    'name': 'Sourav'
}
```

❌ Invalid

---

Functions

```javascript id="sl0g3l"
{
    "name": "Sourav",
    "greet": function() {}
}
```

❌ Invalid

---

Undefined

```javascript id="bn6ek8"
{
    "age": undefined
}
```

❌ Invalid

---

Trailing comma

```json id="ah58vi"
{
    "name": "Sourav",
}
```

❌ Invalid

---

# `JSON.stringify()`

Converts a JavaScript object into a JSON string.

```javascript id="n44j9u"
const user = {
    name: "Sourav",
    age: 25
};

const json = JSON.stringify(user);

console.log(json);
```

Output

```text id="kj6zfw"
'{"name":"Sourav","age":25}'
```

Type

```javascript id="tt7o0n"
console.log(typeof json);
```

Output

```text id="jltjlwm"
string
```

---

# `JSON.parse()`

Converts a JSON string into a JavaScript object.

```javascript id="pxd4di"
const json = '{"name":"Sourav","age":25}';

const user = JSON.parse(json);

console.log(user);
```

Output

```text id="6ic0cm"
{
    name: "Sourav",
    age: 25
}
```

Now you can access

```javascript id="jlwmqf"
console.log(user.name);
```

Output

```text id="kqg5t9"
Sourav
```

---

# Working with Local Storage

Save

```javascript id="svqpkz"
const user = {
    name: "Sourav",
    age: 25
};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

Retrieve

```javascript id="wtb1fh"
const user = JSON.parse(
    localStorage.getItem("user")
);

console.log(user.name);
```

---

# Working with Fetch

```javascript id="s6ihsn"
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

`response.json()` parses the JSON response into a JavaScript object.

---

# Nested JSON

```json id="n7t29j"
{
    "name": "Sourav",
    "address": {
        "city": "Mohali",
        "country": "India"
    }
}
```

After parsing

```javascript id="gf2k6u"
console.log(user.address.city);
```

Output

```text id="mp6z3y"
Mohali
```

---

# JSON Arrays

```json id="x0d0yq"
[
    {
        "name": "John"
    },
    {
        "name": "Jane"
    }
]
```

After parsing

```javascript id="kdy8iw"
users.forEach(user => {
    console.log(user.name);
});
```

---

# Pretty Printing JSON

Readable formatting

```javascript id="i8o0ek"
const json = JSON.stringify(user, null, 2);

console.log(json);
```

Output

```text id="8nrbhr"
{
  "name": "Sourav",
  "age": 25
}
```

Arguments

```javascript id="v1r0bx"
JSON.stringify(value, replacer, space);
```

Usually

```javascript id="18ewd2"
JSON.stringify(user, null, 2);
```

---

# Common Workflow

```text id="gfm2w4"
JavaScript Object
        │
        ▼
JSON.stringify()
        │
        ▼
JSON String
        │
        ▼
Send / Store
        │
        ▼
Receive
        │
        ▼
JSON.parse()
        │
        ▼
JavaScript Object
```

---

# Real-World Example

Send User Data

```javascript id="99f8k6"
const user = {
    name: "Sourav",
    age: 25
};

fetch(url, {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)

});
```

---

Receive User Data

```javascript id="iqo53l"
fetch(url)
    .then(response => response.json())
    .then(user => {
        console.log(user.name);
    });
```

---

# Python vs JavaScript

| Python         | JavaScript         |
| -------------- | ------------------ |
| `json.dumps()` | `JSON.stringify()` |
| `json.loads()` | `JSON.parse()`     |
| Dictionary     | Object             |
| JSON String    | JSON String        |

Python

```python id="vz85b8"
import json

user = {
    "name": "Sourav"
}

json_data = json.dumps(user)
```

JavaScript

```javascript id="4pwnkv"
const user = {
    name: "Sourav"
};

const json = JSON.stringify(user);
```

---

# Best Practices

* Use `JSON.stringify()` before storing or sending objects.
* Use `JSON.parse()` after receiving JSON.
* Always validate external JSON before using it.
* Use pretty printing (`null, 2`) for debugging.
* Keep JSON as data only.

---

# Common Mistakes

## Forgetting `JSON.stringify()`

❌

```javascript id="q3krbq"
localStorage.setItem("user", user);
```

Stored value

```text id="z4ofwp"
[object Object]
```

✅

```javascript id="pt5vsh"
localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

---

## Forgetting `JSON.parse()`

❌

```javascript id="i7y3l4"
const user = localStorage.getItem("user");

console.log(user.name);
```

`user` is still a string.

✅

```javascript id="hk9z1o"
const user = JSON.parse(
    localStorage.getItem("user")
);
```

---

## Confusing JSON with Objects

❌

```javascript id="6pq1f7"
const json = {
    name: "Sourav"
};
```

This is a JavaScript object, not JSON.

JSON is always text.

---

## Invalid JSON Quotes

❌

```json id="dcdzv8"
{
    'name': 'Sourav'
}
```

JSON requires **double quotes**.

✅

```json id="7mrqmv"
{
    "name": "Sourav"
}
```

---

# Interview Questions

### What is JSON?

A text format used to store and exchange structured data.

---

### Is JSON a JavaScript object?

No.

JSON is a string representation of data.

---

### Why use `JSON.stringify()`?

To convert a JavaScript object into a JSON string.

---

### Why use `JSON.parse()`?

To convert a JSON string into a JavaScript object.

---

### Can JSON contain functions?

No.

---

### Why does `fetch()` use `response.json()`?

To parse the JSON response into a JavaScript object.

---

# Summary

* JSON is a text format for storing and exchanging data.
* JavaScript objects are actual objects; JSON is a string.
* Use `JSON.stringify()` to convert objects into JSON.
* Use `JSON.parse()` to convert JSON into objects.
* JSON keys must use double quotes.
* JSON cannot contain functions or `undefined`.
* JSON is commonly used with APIs and Local Storage.
* `response.json()` parses JSON returned by a server.
