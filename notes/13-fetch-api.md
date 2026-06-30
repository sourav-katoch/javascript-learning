# Fetch API

## What is the Fetch API?

The **Fetch API** is used to send HTTP requests and receive data from a server.

Common uses:

* Fetch data from an API
* Send form data
* Upload files
* Download files
* Communicate with a backend

---

# Basic Syntax

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

---

# Making a GET Request

Retrieve data from a server.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.log(error);
    });
```

---

# Understanding the Flow

```text
Request
    │
    ▼
fetch()
    │
    ▼
Response
    │
    ▼
response.json()
    │
    ▼
JavaScript Object
    │
    ▼
Use the Data
```

---

# Why `response.json()`?

The server usually returns **JSON**.

```javascript
fetch(url)
    .then(response => response.json())
```

`response.json()` converts JSON into a JavaScript object.

Example

JSON

```json
{
    "name": "Sourav",
    "age": 25
}
```

After conversion

```javascript
{
    name: "Sourav",
    age: 25
}
```

Now you can access

```javascript
console.log(data.name);
```

---

# POST Request

Send data to a server.

```javascript
fetch("https://example.com/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Sourav",
        age: 25
    })

});
```

---

# PUT Request

Replace an existing resource.

```javascript
fetch("https://example.com/users/1", {

    method: "PUT",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "John"
    })

});
```

---

# PATCH Request

Update part of a resource.

```javascript
fetch("https://example.com/users/1", {

    method: "PATCH",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        age: 30
    })

});
```

---

# DELETE Request

Delete a resource.

```javascript
fetch("https://example.com/users/1", {

    method: "DELETE"

});
```

---

# Common HTTP Methods

| Method | Purpose                 |
| ------ | ----------------------- |
| GET    | Retrieve data           |
| POST   | Create data             |
| PUT    | Replace data            |
| PATCH  | Update part of the data |
| DELETE | Remove data             |

---

# Request Headers

Headers provide additional information about the request.

Example

```javascript
headers: {
    "Content-Type": "application/json"
}
```

Common headers

| Header          | Purpose                 |
| --------------- | ----------------------- |
| `Content-Type`  | Type of data being sent |
| `Authorization` | Authentication token    |
| `Accept`        | Expected response type  |

---

# Handling Errors

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

# Real-World Example

Load users from an API.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

        users.forEach(user => {
            console.log(user.name);
        });

    })
    .catch(error => {
        console.log(error);
    });
```

---

# Frequently Used Patterns

## Load Data

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
```

---

## Handle Errors

```javascript
fetch(url)
    .catch(error => {
        console.log(error);
    });
```

---

## Send JSON

```javascript
fetch(url, {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(data)

});
```

---

## Convert JSON

```javascript
response.json();
```

---

## Convert Object to JSON

```javascript
JSON.stringify(user);
```

---

# Python vs JavaScript

| Python            | JavaScript            |
| ----------------- | --------------------- |
| `requests.get()`  | `fetch()`             |
| `requests.post()` | `fetch()` with `POST` |
| `response.json()` | `response.json()`     |
| Dictionary        | JavaScript Object     |

Python

```python
import requests

response = requests.get(url)

data = response.json()
```

JavaScript

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
```

---

# Best Practices

* Always handle errors using `.catch()`.
* Check `response.ok` before using the response.
* Use `JSON.stringify()` when sending JSON.
* Keep API URLs in constants.
* Prefer `async/await` for new projects (covered later).

---

# Common Mistakes

## Forgetting `response.json()`

❌

```javascript
fetch(url)
    .then(response => {
        console.log(response);
    });
```

This logs the **Response object**, not the actual data.

✅

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
```

---

## Forgetting `JSON.stringify()`

❌

```javascript
body: {
    name: "Sourav"
}
```

✅

```javascript
body: JSON.stringify({
    name: "Sourav"
})
```

---

## Not Handling Errors

❌

```javascript
fetch(url)
    .then(response => response.json());
```

Always include

```javascript
.catch(error => {
    console.log(error);
});
```

---

## Assuming Every Request Succeeds

Always check

```javascript
if (!response.ok) {
    throw new Error("Request Failed");
}
```

---

# Interview Questions

### What is the Fetch API?

A browser API used to send HTTP requests.

---

### What does `fetch()` return?

A **Promise**.

---

### Why do we call `response.json()`?

To convert JSON into a JavaScript object.

---

### Difference between `POST` and `PUT`?

* `POST` creates new data.
* `PUT` replaces existing data.

---

### What does `response.ok` do?

Returns `true` if the HTTP status code indicates success (200–299).

---

# Summary

* `fetch()` is used to communicate with servers.
* It returns a **Promise**.
* `response.json()` converts JSON into a JavaScript object.
* Use `GET` to retrieve data.
* Use `POST` to create data.
* Use `PUT` or `PATCH` to update data.
* Use `DELETE` to remove data.
* Always check `response.ok` and handle errors.
* `JSON.stringify()` converts JavaScript objects into JSON before sending them.

