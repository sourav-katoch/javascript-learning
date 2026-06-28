# Operators

## What are Operators?

Operators are symbols used to perform operations on values and variables.

---

## Arithmetic Operators

```javascript
let a = 10;
let b = 3;

a + b;   // 13
a - b;   // 7
a * b;   // 30
a / b;   // 3.333...
a % b;   // 1
a ** b;  // 1000 (Exponentiation)
```

---

## Assignment Operators

```javascript
let x = 10;

x += 5;   // 15
x -= 5;   // 10
x *= 2;   // 20
x /= 4;   // 5
x %= 2;   // 1
```

Equivalent to:

```javascript
x = x + 5;
```

---

## Comparison Operators

```javascript
5 > 3;     // true
5 < 3;     // false
5 >= 5;    // true
5 <= 4;    // false

5 == "5";   // true
5 === "5";  // false

5 != "5";   // false
5 !== "5";  // true
```

> **Always prefer `===` and `!==` over `==` and `!=`.**

---

## Difference Between `==` and `===`

### Loose Equality (`==`)

Performs **type coercion** before comparing.

```javascript
5 == "5";      // true
true == 1;     // true
false == 0;    // true
null == undefined; // true
```

---

### Strict Equality (`===`)

Compares **value and type**.

```javascript
5 === "5";     // false
5 === 5;       // true
```

---

## Logical Operators

```javascript
true && false;   // false
true || false;   // true
!true;           // false
```

### AND (`&&`)

Returns true only if **both** operands are true.

```javascript
age >= 18 && hasLicense
```

---

### OR (`||`)

Returns true if **at least one** operand is true.

```javascript
isAdmin || isModerator
```

---

### NOT (`!`)

Reverses a boolean value.

```javascript
!isLoggedIn
```

---

## Increment & Decrement

```javascript
let count = 5;

count++;
count--;

++count;
--count;
```

### Prefix

```javascript
let x = 5;

console.log(++x); // 6
```

Increment first, then return.

---

### Postfix

```javascript
let x = 5;

console.log(x++); // 5

console.log(x);   // 6
```

Return first, then increment.

---

## Ternary Operator

Short-hand for `if...else`.

```javascript
const status = age >= 18 ? "Adult" : "Minor";
```

Equivalent:

```javascript
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}
```

---

## Nullish Coalescing (`??`)

Returns the right value only if the left value is `null` or `undefined`.

```javascript
const username = null;

console.log(username ?? "Guest");

// Guest
```

Difference from `||`:

```javascript
0 || 100;    // 100

0 ?? 100;    // 0
```

Use `??` when `0`, `false`, or `""` are valid values.

---

## Optional Chaining (`?.`)

Safely access nested properties.

```javascript
const user = {};

console.log(user.address?.city);
```

Instead of:

```javascript
user.address.city;
```

which throws an error if `address` doesn't exist.

---

## Spread Operator (`...`)

```javascript
const arr1 = [1,2];
const arr2 = [...arr1,3,4];

console.log(arr2);

// [1,2,3,4]
```

Objects:

```javascript
const user = {
    name: "Sourav"
};

const updated = {
    ...user,
    age: 25
};
```

---

## Rest Operator (`...`)

Collect remaining values.

```javascript
function sum(...numbers) {
    console.log(numbers);
}

sum(1,2,3);
```

Output:

```text
[1,2,3]
```

---

## Operator Precedence

```javascript
2 + 3 * 4;
```

Output:

```text
14
```

Because multiplication happens before addition.

Use parentheses when in doubt.

```javascript
(2 + 3) * 4;
```

Output:

```text
20
```

---

## Python vs JavaScript

| Python                      | JavaScript     |   |   |
| --------------------------- | -------------- | - | - |
| `==`                        | `==` / `===`   |   |   |
| `!=`                        | `!=` / `!==`   |   |   |
| `and`                       | `&&`           |   |   |
| `or`                        | `              |   | ` |
| `not`                       | `!`            |   |   |
| `**`                        | `**`           |   |   |
| Ternary: `x if cond else y` | `cond ? x : y` |   |   |

---

## Best Practices

* Prefer `===` and `!==`.
* Use `??` instead of `||` for default values when `0`, `false`, or `""` are valid.
* Use optional chaining (`?.`) to avoid runtime errors.
* Use parentheses to improve readability.

---

## Common Mistakes

```javascript
5 == "5";     // Avoid
```

```javascript
const value = 0;

value || 10;    // 10 ❌

value ?? 10;    // 0 ✅
```

```javascript
user.address.city;
// TypeError if address is undefined
```

Use:

```javascript
user.address?.city;
```

---

## Summary

* Arithmetic: `+ - * / % **`
* Comparison: `> < >= <= === !==`
* Logical: `&& || !`
* Assignment: `= += -= *= /=`
* Ternary: `condition ? a : b`
* Nullish: `??`
* Optional Chaining: `?.`
* Spread & Rest: `...`
* Prefer `===` over `==`

