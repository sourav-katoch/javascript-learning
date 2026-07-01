# Object-Oriented Programming (OOP)

## What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code into **objects**.

An object contains:

* **Properties** (Data)
* **Methods** (Functions)

Example:

```javascript
const user = {
    name: "Sourav",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};
```

---

# Why Use OOP?

Without OOP

```javascript
const user1 = {
    name: "John",
    age: 25
};

const user2 = {
    name: "Jane",
    age: 30
};
```

This quickly becomes repetitive.

With OOP

```javascript
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}
```

Now you can create unlimited users.

---

# Classes

A **class** is a blueprint for creating objects.

```javascript
class User {

}
```

Create an object

```javascript
const user = new User();
```

---

# Constructor

The `constructor()` initializes object properties.

```javascript
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

const user = new User("Sourav", 25);

console.log(user);
```

Output

```text
User {
    name: "Sourav",
    age: 25
}
```

---

# Instance Properties

Each object has its own data.

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

}

const user1 = new User("John");
const user2 = new User("Jane");
```

Objects

```text
user1 → { name: "John" }

user2 → { name: "Jane" }
```

---

# Methods

Methods are functions inside a class.

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

}

const user = new User("Sourav");

user.greet();
```

Output

```text
Hello Sourav
```

---

# `this`

Inside a class,

`this` refers to the current object.

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

}
```

`this.name`

means

```text
Current object's name
```

---

# Creating Multiple Objects

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

}

const user1 = new User("John");
const user2 = new User("Jane");
const user3 = new User("Sourav");
```

Each object has independent data.

---

# Getters

Used like properties but execute code.

```javascript
class User {

    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return `${this.first} ${this.last}`;
    }

}

const user = new User("Sourav", "Singh");

console.log(user.fullName);
```

Notice

No parentheses.

---

# Setters

Allow controlled updates.

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

    set username(value) {
        this.name = value;
    }

}

const user = new User("John");

user.username = "Sourav";
```

---

# Static Methods

Belong to the class, not the object.

```javascript
class MathUtils {

    static add(a, b) {
        return a + b;
    }

}

console.log(MathUtils.add(2, 3));
```

Output

```text
5
```

Cannot do

```javascript
const math = new MathUtils();

math.add();
```

---

# Inheritance

One class can inherit another.

```javascript
class Animal {

    speak() {
        console.log("Animal speaks");
    }

}

class Dog extends Animal {

}

const dog = new Dog();

dog.speak();
```

Output

```text
Animal speaks
```

---

# `super`

Call the parent constructor.

```javascript
class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Dog extends Animal {

    constructor(name, breed) {

        super(name);

        this.breed = breed;

    }

}

const dog = new Dog("Rocky", "Labrador");
```

---

# Method Overriding

Replace a parent method.

```javascript
class Animal {

    speak() {
        console.log("Animal");
    }

}

class Dog extends Animal {

    speak() {
        console.log("Bark");
    }

}

const dog = new Dog();

dog.speak();
```

Output

```text
Bark
```

---

# OOP Pillars

## 1. Encapsulation

Keep related data and methods together.

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

}
```

---

## 2. Abstraction

Hide unnecessary implementation details.

Example

```javascript
user.login();
```

Instead of exposing every internal step.

---

## 3. Inheritance

Reuse code from another class.

```javascript
class Dog extends Animal {

}
```

---

## 4. Polymorphism

Different classes can implement the same method differently.

```javascript
animal.speak();

dog.speak();
```

---

# Real-World Example

```javascript
class BankAccount {

    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

}

const account = new BankAccount("Sourav", 1000);

account.deposit(500);

console.log(account.balance);
```

Output

```text
1500
```

---

# Class vs Object

| Class             | Object            |
| ----------------- | ----------------- |
| Blueprint         | Instance          |
| Defines structure | Holds actual data |
| `class User {}`   | `new User()`      |

---

# Python vs JavaScript

| Python     | JavaScript      |
| ---------- | --------------- |
| `class`    | `class`         |
| `__init__` | `constructor()` |
| `self`     | `this`          |
| `super()`  | `super()`       |
| Methods    | Methods         |

Python

```python
class User:

    def __init__(self, name):
        self.name = name
```

JavaScript

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

}
```

---

# Best Practices

* Use classes for reusable blueprints.
* Keep each class focused on one responsibility.
* Prefer composition over deep inheritance.
* Use getters for computed values.
* Use static methods for utility functions.

---

# Common Mistakes

## Forgetting `new`

❌

```javascript
const user = User("Sourav");
```

✅

```javascript
const user = new User("Sourav");
```

---

## Forgetting `this`

❌

```javascript
constructor(name) {
    name = name;
}
```

✅

```javascript
constructor(name) {
    this.name = name;
}
```

---

## Calling Static Methods Incorrectly

❌

```javascript
const math = new MathUtils();

math.add();
```

✅

```javascript
MathUtils.add();
```

---

## Forgetting `super()`

❌

```javascript
class Dog extends Animal {

    constructor(name) {

        this.name = name;

    }

}
```

Always call

```javascript
super(name);
```

before using `this`.

---

# Frequently Used Patterns

## Create an Object

```javascript
const user = new User("Sourav", 25);
```

---

## Add a Method

```javascript
greet() {
    console.log(`Hello ${this.name}`);
}
```

---

## Extend a Class

```javascript
class Admin extends User {

}
```

---

## Static Utility

```javascript
class MathUtils {

    static square(x) {
        return x * x;
    }

}
```

---

## Getter

```javascript
get fullName() {
    return `${this.first} ${this.last}`;
}
```

---

# Interview Questions

### What is a class?

A blueprint for creating objects.

---

### What is an object?

An instance of a class containing properties and methods.

---

### What is a constructor?

A special method used to initialize objects.

---

### What does `this` refer to?

The current object.

---

### Difference between static and instance methods?

* Instance methods belong to objects.
* Static methods belong to the class.

---

### Why use inheritance?

To reuse code and create specialized classes from existing ones.

---

### What are the four pillars of OOP?

* Encapsulation
* Abstraction
* Inheritance
* Polymorphism

---

# Summary

* OOP organizes code into objects and classes.
* A class is a blueprint; an object is an instance.
* `constructor()` initializes object properties.
* `this` refers to the current object.
* Methods define object behavior.
* `extends` enables inheritance.
* `super()` calls the parent constructor.
* `static` methods belong to the class itself.
* Getters and setters provide controlled access to data.
* OOP improves code organization, reusability, and maintainability.
