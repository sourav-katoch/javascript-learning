# Common Array Methods

## Why Learn Array Methods?

Array methods make code:

* Shorter
* More readable
* Easier to maintain

> **Rule of Thumb**
>
> * Need to transform data → `map()`
> * Need to remove items → `filter()`
> * Need one item → `find()`
> * Need a true/false answer → `some()` / `every()`
> * Need one final value → `reduce()`

---

# `forEach()`

Executes a function for every element.

Returns **`undefined`**.

```javascript
const numbers = [1, 2, 3];

numbers.forEach(num => {
    console.log(num);
});
```

Output

```text
1
2
3
```

Use when:

* Logging
* Updating the DOM
* Side effects

---

# `map()`

Creates a **new array** by transforming each element.

Returns **a new array**.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
```

Output

```text
[2, 4, 6]
```

React Example

```javascript
const names = ["John", "Jane"];

const list = names.map(name => `<li>${name}</li>`);
```

Use when:

* Transforming data
* Rendering lists in React

---

# `filter()`

Returns only elements that satisfy a condition.

```javascript
const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter(num => num % 2 === 0);

console.log(even);
```

Output

```text
[2, 4]
```

Use when:

* Searching
* Removing unwanted items

---

# `find()`

Returns the **first matching element**.

```javascript
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
];

const user = users.find(user => user.id === 2);

console.log(user);
```

Output

```text
{ id: 2, name: "Jane" }
```

Returns `undefined` if not found.

---

# `findIndex()`

Returns the index of the first matching element.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

const index = fruits.findIndex(
    fruit => fruit === "Banana"
);

console.log(index);
```

Output

```text
1
```

Returns `-1` if not found.

---

# `some()`

Returns `true` if **at least one** element matches.

```javascript
const numbers = [1, 3, 5, 8];

const hasEven = numbers.some(
    num => num % 2 === 0
);

console.log(hasEven);
```

Output

```text
true
```

---

# `every()`

Returns `true` only if **all** elements match.

```javascript
const numbers = [2, 4, 6];

const allEven = numbers.every(
    num => num % 2 === 0
);

console.log(allEven);
```

Output

```text
true
```

---

# `reduce()`

Combines an array into a single value.

Syntax

```javascript
array.reduce((accumulator, currentValue) => {

}, initialValue);
```

Example

```javascript
const numbers = [1, 2, 3, 4];

const total = numbers.reduce(
    (sum, num) => sum + num,
    0
);

console.log(total);
```

Output

```text
10
```

Use when:

* Sum
* Count
* Group data
* Build objects

---

# `sort()`

Sorts the original array.

Strings

```javascript
const fruits = ["Orange", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
```

Output

```text
["Apple", "Banana", "Orange"]
```

Numbers

```javascript
const numbers = [10, 5, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output

```text
[5, 10, 20]
```

Descending

```javascript
numbers.sort((a, b) => b - a);
```

---

# `reverse()`

Reverses the original array.

```javascript
const numbers = [1, 2, 3];

numbers.reverse();
```

Output

```text
[3, 2, 1]
```

---

# `slice()`

Returns a portion of an array.

Original array remains unchanged.

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.slice(1, 4);

console.log(result);
```

Output

```text
[2, 3, 4]
```

---

# `splice()`

Adds, removes, or replaces elements.

Modifies the original array.

Remove

```javascript
const numbers = [1, 2, 3, 4];

numbers.splice(1, 2);

console.log(numbers);
```

Output

```text
[1, 4]
```

Insert

```javascript
numbers.splice(1, 0, 10);
```

Replace

```javascript
numbers.splice(1, 1, 10);
```

---

# `concat()`

Merge arrays.

```javascript
const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);
```

Better alternative

```javascript
const result = [...a, ...b];
```

---

# `join()`

Convert an array into a string.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.join(", "));
```

Output

```text
Apple, Banana, Orange
```

---

# `includes()`

Checks whether a value exists.

```javascript
const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.includes("CSS"));
```

Output

```text
true
```

---

# `flat()`

Flattens nested arrays.

```javascript
const arr = [1, [2, 3], [4]];

console.log(arr.flat());
```

Output

```text
[1, 2, 3, 4]
```

---

# `flatMap()`

Runs `map()` and `flat()` together.

```javascript
const words = ["Hello World", "Learn JS"];

const result = words.flatMap(
    word => word.split(" ")
);

console.log(result);
```

Output

```text
["Hello", "World", "Learn", "JS"]
```

---

# Quick Reference

| Method        | Returns       | Changes Original? |
| ------------- | ------------- | ----------------- |
| `forEach()`   | `undefined`   | ❌                 |
| `map()`       | New Array     | ❌                 |
| `filter()`    | New Array     | ❌                 |
| `find()`      | Element       | ❌                 |
| `findIndex()` | Number        | ❌                 |
| `some()`      | Boolean       | ❌                 |
| `every()`     | Boolean       | ❌                 |
| `reduce()`    | Any Value     | ❌                 |
| `sort()`      | Same Array    | ✅                 |
| `reverse()`   | Same Array    | ✅                 |
| `slice()`     | New Array     | ❌                 |
| `splice()`    | Removed Items | ✅                 |
| `concat()`    | New Array     | ❌                 |
| `join()`      | String        | ❌                 |
| `includes()`  | Boolean       | ❌                 |
| `flat()`      | New Array     | ❌                 |
| `flatMap()`   | New Array     | ❌                 |

---

# React Examples

Render a List

```javascript
const users = ["John", "Jane"];

users.map(user => <li>{user}</li>);
```

---

Filter Products

```javascript
const available = products.filter(
    product => product.inStock
);
```

---

Find a User

```javascript
const user = users.find(
    user => user.id === 10
);
```

---

Calculate Total Price

```javascript
const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
);
```

---

# Best Practices

* Use `map()` to transform data.
* Use `filter()` to remove items.
* Use `find()` when expecting one result.
* Use `reduce()` for a single accumulated value.
* Avoid mutating arrays unless necessary.
* Prefer the spread operator over `concat()` for readability.

---

# Common Mistakes

## Using `map()` Without Returning

❌

```javascript
const result = numbers.map(num => {
    num * 2;
});
```

Output

```text
[undefined, undefined, undefined]
```

✅

```javascript
const result = numbers.map(
    num => num * 2
);
```

---

## Using `filter()` Instead of `find()`

If you only need one element:

❌

```javascript
const user = users.filter(
    user => user.id === 1
);
```

Returns

```text
[ { ... } ]
```

Better

```javascript
const user = users.find(
    user => user.id === 1
);
```

Returns

```text
{ ... }
```

---

## Forgetting Numeric Sort

❌

```javascript
[10, 2, 30].sort();
```

Output

```text
[10, 2, 30]
```

✅

```javascript
[10, 2, 30].sort(
    (a, b) => a - b
);
```

---

# Interview Questions

### Difference between `map()` and `forEach()`?

* `map()` returns a new array.
* `forEach()` returns `undefined`.

---

### Difference between `filter()` and `find()`?

* `filter()` returns all matching elements.
* `find()` returns only the first matching element.

---

### Difference between `slice()` and `splice()`?

* `slice()` does not modify the original array.
* `splice()` modifies the original array.

---

### Why use `reduce()`?

To combine an array into a single value.

---

### Which methods mutate the original array?

* `sort()`
* `reverse()`
* `splice()`

---

# Summary

| Goal                | Method             |
| ------------------- | ------------------ |
| Transform           | `map()`            |
| Remove items        | `filter()`         |
| Find one item       | `find()`           |
| Find index          | `findIndex()`      |
| Check any           | `some()`           |
| Check all           | `every()`          |
| Calculate one value | `reduce()`         |
| Sort                | `sort()`           |
| Reverse             | `reverse()`        |
| Copy part           | `slice()`          |
| Modify array        | `splice()`         |
| Merge arrays        | `concat()` / `...` |
| Convert to string   | `join()`           |
| Check existence     | `includes()`       |
| Flatten             | `flat()`           |
| Map + Flatten       | `flatMap()`        |
