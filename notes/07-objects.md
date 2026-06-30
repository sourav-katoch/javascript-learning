# Objects

## What are Objects?

Objects store related data as **key-value pairs**.

Unlike arrays, objects use **named properties (keys)** instead of indexes.

---

## Creating an Object

```javascript
const user = {
    name: "Sourav",
    age: 25,
    isStudent: false
};
```

---

## Accessing Properties

### Dot Notation (Recommended)

```javascript
console.log(user.name);
console.log(user.age);
```

### Bracket Notation

Useful when the property name is stored in a variable.

```javascript
console.log(user["name"]);

const key = "age";
console.log(user[key]);
```

---

## Adding Properties

```javascript
user.city = "Mohali";

console.log(user);
```

---

## Updating Properties

```javascript
user.age = 26;
```

---

## Deleting Properties

```javascript
delete user.isStudent;
```

---

## Nested Objects

```javascript
const user = {
    name: "Sourav",
    address: {
        city: "Mohali",
        state: "Punjab"
    }
};

console.log(user.address.city);
```

---

## Object Methods

Objects can contain functions.

```javascript
const user = {
    name: "Sourav",

    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

user.greet();
```

---

## Checking if a Property Exists

### `in` Operator

```javascript
console.log("name" in user);
```

Output

```text
true
```

---

### `hasOwnProperty()`

```javascript
console.log(user.hasOwnProperty("age"));
```

---

## Looping Through an Object

### `for...in`

```javascript
const user = {
    name: "Sourav",
    age: 25
};

for (const key in user) {
    console.log(key, user[key]);
}
```

---

## Object.keys()

Returns an array of keys.

```javascript
const keys = Object.keys(user);

console.log(keys);
```

Output

```text
["name", "age"]
```

---

## Object.values()

Returns an array of values.

```javascript
const values = Object.values(user);

console.log(values);
```

Output

```text
["Sourav", 25]
```

---

## Object.entries()

Returns key-value pairs.

```javascript
const entries = Object.entries(user);

console.log(entries);
```

Output

```text
[
  ["name", "Sourav"],
  ["age", 25]
]
```

---

## Object Destructuring

Extract properties into variables.

```javascript
const user = {
    name: "Sourav",
    age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);
```

Rename variables

```javascript
const { name: username } = user;

console.log(username);
```

Default values

```javascript
const { country = "India" } = user;
```

---

## Spread Operator

Copy an object.

```javascript
const user = {
    name: "Sourav",
    age: 25
};

const copy = {
    ...user
};
```

Merge objects.

```javascript
const address = {
    city: "Mohali"
};

const profile = {
    ...user,
    ...address
};
```

---

## Shorthand Property Names

Instead of

```javascript
const name = "Sourav";
const age = 25;

const user = {
    name: name,
    age: age
};
```

Use

```javascript
const name = "Sourav";
const age = 25;

const user = {
    name,
    age
};
```

---

## Optional Chaining

Avoid errors when accessing nested properties.

```javascript
console.log(user.address?.city);
```

Instead of

```javascript
console.log(user.address.city);
```

---

## Python vs JavaScript

| Python          | JavaScript                |
| --------------- | ------------------------- |
| Dictionary      | Object                    |
| `dict["key"]`   | `obj.key` or `obj["key"]` |
| `dict.keys()`   | `Object.keys()`           |
| `dict.values()` | `Object.values()`         |
| `dict.items()`  | `Object.entries()`        |

---

## Best Practices

* Prefer **dot notation** whenever possible.
* Use **destructuring** to extract properties.
* Use the **spread operator** when copying objects.
* Use **optional chaining (`?.`)** for nested properties.
* Keep object names singular (`user`, `product`, `car`).

---

## Common Mistakes

### Accessing a Missing Property

```javascript
console.log(user.salary);
```

Output

```text
undefined
```

---

### Comparing Objects

```javascript
const a = {
    name: "John"
};

const b = {
    name: "John"
};

console.log(a === b);
```

Output

```text
false
```

Objects are compared by **reference**, not by value.

---

### Copying Objects Incorrectly

```javascript
const copy = user;
```

This does **not** create a new object.

Both variables point to the same object.

Correct

```javascript
const copy = {
    ...user
};
```

---

## Frequently Used Patterns

### Update One Property

```javascript
const updatedUser = {
    ...user,
    age: 26
};
```

---

### Merge Objects

```javascript
const user = {
    name: "Sourav"
};

const address = {
    city: "Mohali"
};

const profile = {
    ...user,
    ...address
};
```

---

### Loop Through Properties

```javascript
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
```

---

### Convert Object to Array

```javascript
const entries = Object.entries(user);
```

---

### Destructure an Object

```javascript
const { name, age } = user;
```

---

## Summary

* Objects store **key-value pairs**.
* Access properties using **dot** or **bracket** notation.
* Use `Object.keys()`, `Object.values()`, and `Object.entries()` to work with objects.
* Use **destructuring** to extract properties.
* Use the **spread operator** to copy or merge objects.
* Objects are compared by **reference**, not by value.
* Use **optional chaining (`?.`)** when accessing nested properties.

