# Prototypes

## What is a Prototype?

Every JavaScript object has a hidden link to another object called its **prototype**.

When a property or method is not found on the object itself, JavaScript looks for it in its prototype.

This process is called the **Prototype Chain**.

---

# Example

```javascript
const user = {
    name: "Sourav"
};

console.log(user.toString());
```

Output

```text
[object Object]
```

Why does this work?

Because `toString()` is inherited from the object's prototype.

---

# Prototype Chain

```text
user
 │
 ▼
Object.prototype
 │
 ▼
null
```

If JavaScript cannot find a property:

1. Look in the object.
2. Look in its prototype.
3. Continue up the chain.
4. Stop at `null`.

---

# Accessing the Prototype

```javascript
const user = {
    name: "Sourav"
};

console.log(Object.getPrototypeOf(user));
```

---

# Constructor Functions

Before ES6 classes, objects were commonly created using constructor functions.

```javascript
function User(name) {
    this.name = name;
}

const user1 = new User("Sourav");
const user2 = new User("John");
```

The `new` keyword:

* Creates a new object.
* Sets its prototype.
* Binds `this` to the new object.
* Returns the object.

---

# The `prototype` Property

Every function has a `prototype` object.

```javascript
function User(name) {
    this.name = name;
}

console.log(User.prototype);
```

You can add methods to it.

```javascript
User.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};

const user = new User("Sourav");

user.greet();
```

Output

```text
Hello Sourav
```

---

# Why Use Prototypes?

Without prototypes

```javascript
function User(name) {

    this.name = name;

    this.greet = function () {
        console.log(`Hello ${this.name}`);
    };

}
```

Every object gets its own copy of `greet()`.

---

Using prototypes

```javascript
function User(name) {
    this.name = name;
}

User.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};
```

Now every object shares the same method.

This is more memory-efficient.

---

# Prototype Inheritance

```javascript
const animal = {

    eats: true

};

const dog = Object.create(animal);

dog.name = "Rio";

console.log(dog.name);
console.log(dog.eats);
```

Output

```text
Rio
true
```

`dog` inherits from `animal`.

---

# The Prototype Chain

```text
dog
 │
 ▼
animal
 │
 ▼
Object.prototype
 │
 ▼
null
```

JavaScript searches upward until it finds the property.

---

# `Object.create()`

Creates a new object with a specified prototype.

```javascript
const person = {

    greet() {
        console.log("Hello");
    }

};

const student = Object.create(person);

student.greet();
```

Output

```text
Hello
```

---

# `hasOwnProperty()`

Check whether a property belongs directly to the object.

```javascript
const user = {
    name: "Sourav"
};

console.log(user.hasOwnProperty("name"));
```

Output

```text
true
```

---

Inherited property

```javascript
console.log(user.hasOwnProperty("toString"));
```

Output

```text
false
```

Because `toString()` comes from the prototype.

---

# `prototype` vs `__proto__`

These are often confused.

### `prototype`

Belongs to constructor functions.

```javascript
function User() {}

console.log(User.prototype);
```

---

### `__proto__`

Belongs to objects.

```javascript
const user = new User();

console.log(user.__proto__);
```

Modern JavaScript prefers

```javascript
Object.getPrototypeOf(user);
```

---

# ES6 Classes

Classes are built on prototypes.

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

}
```

Internally, JavaScript stores `greet()` on `User.prototype`.

Equivalent to

```javascript
function User(name) {
    this.name = name;
}

User.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};
```

---

# Common Use Cases

* Object inheritance
* Sharing methods
* Memory optimization
* Building reusable objects

---

# Frequently Used Patterns

## Constructor Function

```javascript
function Car(brand) {
    this.brand = brand;
}

const car = new Car("BMW");
```

---

## Shared Method

```javascript
Car.prototype.start = function () {
    console.log(`${this.brand} started`);
};
```

---

## Inheritance

```javascript
const animal = {
    eats: true
};

const cat = Object.create(animal);

console.log(cat.eats);
```

---

## Get Prototype

```javascript
Object.getPrototypeOf(car);
```

---

## Check Property

```javascript
car.hasOwnProperty("brand");
```

---

# Python vs JavaScript

| Python            | JavaScript                    |
| ----------------- | ----------------------------- |
| Class inheritance | Prototype inheritance         |
| `class`           | `class` (built on prototypes) |
| Instance methods  | Prototype methods             |
| `super()`         | `super()`                     |

Although JavaScript has classes, they are implemented using prototypes.

---

# Best Practices

* Prefer ES6 `class` syntax for new projects.
* Add shared methods to the prototype.
* Use `Object.create()` for simple inheritance.
* Use `Object.getPrototypeOf()` instead of `__proto__`.

---

# Common Mistakes

## Defining Methods Inside the Constructor

❌

```javascript
function User(name) {

    this.name = name;

    this.greet = function () {};

}
```

Every object gets its own copy.

✅

```javascript
User.prototype.greet = function () {};
```

---

## Confusing `prototype` and `__proto__`

* `prototype` belongs to functions.
* `__proto__` belongs to objects.

---

## Thinking Classes Replace Prototypes

They don't.

Classes are syntax built on top of prototypes.

---

# Interview Questions

### What is a prototype?

An object from which another object inherits properties and methods.

---

### What is the prototype chain?

The process JavaScript uses to search for properties through linked prototypes.

---

### Why use prototypes?

To share methods between objects and reduce memory usage.

---

### Difference between `prototype` and `__proto__`?

* `prototype` belongs to constructor functions.
* `__proto__` (or `Object.getPrototypeOf()`) refers to an object's prototype.

---

### Are ES6 classes different from prototypes?

No.

Classes are syntactic sugar built on JavaScript's prototype system.

---

# Summary

* Every object has a prototype.
* JavaScript searches the prototype chain when looking up properties.
* Constructor functions use the `prototype` property to share methods.
* `Object.create()` creates objects with a specified prototype.
* Use `hasOwnProperty()` to distinguish own properties from inherited ones.
* Modern JavaScript uses `class`, but classes are implemented using prototypes.
* Understanding prototypes explains how inheritance works in JavaScript.
