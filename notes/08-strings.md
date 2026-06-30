# Strings

## What are Strings?

Strings are sequences of characters used to represent text.

Strings are **immutable**, meaning their contents cannot be changed after creation.

---

## Creating Strings

```javascript
const firstName = "Sourav";
const lastName = 'Singh';
const message = `Hello`;
```

---

## String Concatenation

### Using `+`

```javascript
const firstName = "Sourav";
const lastName = "Singh";

const fullName = firstName + " " + lastName;

console.log(fullName);
```

Output

```text
Sourav Singh
```

---

## Template Literals (Recommended)

Use backticks (`` ` ``) for string interpolation.

```javascript
const firstName = "Sourav";

console.log(`Hello, ${firstName}!`);
```

Output

```text
Hello, Sourav!
```

---

## String Length

```javascript
const language = "JavaScript";

console.log(language.length);
```

Output

```text
10
```

---

## Accessing Characters

```javascript
const language = "JavaScript";

console.log(language[0]);
console.log(language[4]);
```

Output

```text
J
S
```

---

## Common String Methods

### `toUpperCase()`

```javascript
const name = "sourav";

console.log(name.toUpperCase());
```

Output

```text
SOURAV
```

---

### `toLowerCase()`

```javascript
const name = "SOURAV";

console.log(name.toLowerCase());
```

Output

```text
sourav
```

---

### `trim()`

Removes whitespace from both ends.

```javascript
const text = "   Hello World   ";

console.log(text.trim());
```

Output

```text
Hello World
```

---

### `includes()`

Checks whether a string contains another string.

```javascript
const email = "user@gmail.com";

console.log(email.includes("@"));
```

Output

```text
true
```

---

### `startsWith()`

```javascript
const file = "notes.md";

console.log(file.startsWith("notes"));
```

---

### `endsWith()`

```javascript
const file = "notes.md";

console.log(file.endsWith(".md"));
```

---

### `indexOf()`

Returns the index of the first occurrence.

```javascript
const text = "JavaScript";

console.log(text.indexOf("S"));
```

Output

```text
4
```

Returns `-1` if not found.

---

### `slice()`

Extracts part of a string.

```javascript
const text = "JavaScript";

console.log(text.slice(0, 4));
```

Output

```text
Java
```

---

### `replace()`

Replace the first occurrence.

```javascript
const text = "Hello World";

console.log(text.replace("World", "JavaScript"));
```

Output

```text
Hello JavaScript
```

---

### `replaceAll()`

Replace every occurrence.

```javascript
const text = "apple apple apple";

console.log(text.replaceAll("apple", "orange"));
```

Output

```text
orange orange orange
```

---

### `split()`

Convert a string into an array.

```javascript
const sentence = "HTML,CSS,JavaScript";

const skills = sentence.split(",");

console.log(skills);
```

Output

```text
["HTML", "CSS", "JavaScript"]
```

---

### `repeat()`

```javascript
console.log("=".repeat(10));
```

Output

```text
==========
```

---

## String Immutability

Strings cannot be modified directly.

```javascript
let name = "John";

name[0] = "B";

console.log(name);
```

Output

```text
John
```

Instead

```javascript
name = "Bohn";
```

---

## Escape Characters

```javascript
const message = "He said \"Hello\"";

console.log(message);
```

New line

```javascript
console.log("Hello\nWorld");
```

Tab

```javascript
console.log("Hello\tWorld");
```

---

## Python vs JavaScript

| Python      | JavaScript       |
| ----------- | ---------------- |
| `len(str)`  | `str.length`     |
| `upper()`   | `toUpperCase()`  |
| `lower()`   | `toLowerCase()`  |
| `strip()`   | `trim()`         |
| `split()`   | `split()`        |
| `replace()` | `replace()`      |
| f-string    | Template Literal |

---

## Best Practices

* Prefer template literals over string concatenation.
* Use `trim()` when processing user input.
* Use `includes()` instead of manually checking with `indexOf()`.
* Choose meaningful variable names for strings.

---

## Common Mistakes

### Forgetting Strings are Immutable

❌

```javascript
let name = "John";

name[0] = "B";
```

✅

```javascript
name = "Bohn";
```

---

### Using `+` Instead of Template Literals

❌

```javascript
const name = "Sourav";

console.log("Hello " + name);
```

✅

```javascript
console.log(`Hello ${name}`);
```

---

### `replace()` Only Replaces the First Match

```javascript
const text = "cat cat cat";

console.log(text.replace("cat", "dog"));
```

Output

```text
dog cat cat
```

Use

```javascript
text.replaceAll("cat", "dog");
```

---

## Frequently Used Patterns

### Capitalize the First Letter

```javascript
const word = "javascript";

const capitalized =
    word[0].toUpperCase() + word.slice(1);

console.log(capitalized);
```

---

### Check File Extension

```javascript
const file = "resume.pdf";

if (file.endsWith(".pdf")) {
    console.log("Valid PDF");
}
```

---

### Validate an Email

```javascript
const email = "user@gmail.com";

if (email.includes("@")) {
    console.log("Valid");
}
```

---

### Convert CSV to Array

```javascript
const csv = "HTML,CSS,JavaScript";

const skills = csv.split(",");
```

---

### Remove Extra Spaces

```javascript
const username = "   Sourav   ";

console.log(username.trim());
```

---

## Summary

* Strings are **immutable**.
* Use template literals (`` ` ``) for string interpolation.
* `.length` returns the string length.
* `includes()` checks for a substring.
* `slice()` extracts part of a string.
* `split()` converts a string to an array.
* `replace()` replaces the first match.
* `replaceAll()` replaces every match.
* `trim()` removes leading and trailing spaces.

