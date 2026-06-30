# DOM Manipulation

## What is the DOM?

**DOM (Document Object Model)** is a tree-like representation of an HTML document.

JavaScript uses the DOM to:

* Read HTML elements
* Modify content
* Change styles
* Create new elements
* Remove elements
* Respond to user interactions

---

## DOM Tree

Given this HTML:

```html
<body>
    <h1>Hello</h1>
    <p>Welcome!</p>
</body>
```

The DOM looks like:

```text
Document
│
└── html
    │
    ├── head
    │
    └── body
        │
        ├── h1
        │
        └── p
```

---

# Selecting Elements

## `getElementById()`

Selects an element by its `id`.

HTML

```html
<h1 id="title">Hello</h1>
```

JavaScript

```javascript
const title = document.getElementById("title");

console.log(title);
```

---

## `querySelector()`

Returns the **first** matching element.

HTML

```html
<p class="text">Hello</p>
<p class="text">World</p>
```

JavaScript

```javascript
const text = document.querySelector(".text");
```

Selectors supported:

```javascript
document.querySelector("#id");
document.querySelector(".class");
document.querySelector("p");
document.querySelector("div p");
```

---

## `querySelectorAll()`

Returns **all** matching elements.

```javascript
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
```

Returns a **NodeList**.

Loop through it:

```javascript
paragraphs.forEach(paragraph => {
    console.log(paragraph);
});
```

---

# Reading Content

## `textContent`

Returns only the text.

HTML

```html
<h1>Hello</h1>
```

```javascript
const heading = document.querySelector("h1");

console.log(heading.textContent);
```

Output

```text
Hello
```

---

## `innerHTML`

Returns the HTML inside an element.

HTML

```html
<div>
    <strong>Hello</strong>
</div>
```

```javascript
const div = document.querySelector("div");

console.log(div.innerHTML);
```

Output

```html
<strong>Hello</strong>
```

---

# Updating Content

## Change Text

```javascript
const heading = document.querySelector("h1");

heading.textContent = "Welcome!";
```

---

## Change HTML

```javascript
const div = document.querySelector("div");

div.innerHTML = "<strong>JavaScript</strong>";
```

---

# Changing Styles

```javascript
const heading = document.querySelector("h1");

heading.style.color = "blue";
heading.style.fontSize = "40px";
heading.style.backgroundColor = "yellow";
```

Remember:

CSS

```css
background-color
```

becomes

```javascript
backgroundColor
```

---

# Working with Classes

## Add a Class

```javascript
element.classList.add("active");
```

---

## Remove a Class

```javascript
element.classList.remove("active");
```

---

## Toggle a Class

Adds if missing, removes if present.

```javascript
element.classList.toggle("active");
```

---

## Check for a Class

```javascript
element.classList.contains("active");
```

Returns

```text
true
```

or

```text
false
```

---

# Working with Attributes

HTML

```html
<img id="logo" src="logo.png">
```

## Get an Attribute

```javascript
const logo = document.getElementById("logo");

console.log(logo.getAttribute("src"));
```

---

## Set an Attribute

```javascript
logo.setAttribute("src", "new-logo.png");
```

---

## Remove an Attribute

```javascript
logo.removeAttribute("src");
```

---

# Creating Elements

```javascript
const heading = document.createElement("h2");

heading.textContent = "New Heading";
```

---

# Adding Elements

Append to the end.

```javascript
document.body.appendChild(heading);
```

---

# Removing Elements

```javascript
const paragraph = document.querySelector("p");

paragraph.remove();
```

---

# Traversing the DOM

## Parent

```javascript
element.parentElement;
```

---

## Children

```javascript
element.children;
```

---

## First Child

```javascript
element.firstElementChild;
```

---

## Last Child

```javascript
element.lastElementChild;
```

---

## Next Sibling

```javascript
element.nextElementSibling;
```

---

## Previous Sibling

```javascript
element.previousElementSibling;
```

---

# Common DOM Methods

| Method               | Purpose                |
| -------------------- | ---------------------- |
| `getElementById()`   | Select by ID           |
| `querySelector()`    | First matching element |
| `querySelectorAll()` | All matching elements  |
| `createElement()`    | Create a new element   |
| `appendChild()`      | Add an element         |
| `remove()`           | Remove an element      |

---

# Frequently Used Patterns

## Change Heading Text

```javascript
const heading = document.querySelector("h1");

heading.textContent = "Welcome!";
```

---

## Change Button Color

```javascript
const button = document.querySelector("button");

button.style.backgroundColor = "green";
```

---

## Add a CSS Class

```javascript
button.classList.add("active");
```

---

## Remove a CSS Class

```javascript
button.classList.remove("active");
```

---

## Toggle Dark Mode

```javascript
document.body.classList.toggle("dark-mode");
```

---

## Create a Paragraph

```javascript
const paragraph = document.createElement("p");

paragraph.textContent = "Hello World";

document.body.appendChild(paragraph);
```

---

## Remove an Element

```javascript
const box = document.querySelector(".box");

box.remove();
```

---

## Change an Image

```javascript
const image = document.querySelector("img");

image.src = "cat.jpg";
```

---

## Update a Link

```javascript
const link = document.querySelector("a");

link.href = "https://google.com";
```

---

# Python vs JavaScript

| Python            | JavaScript                |
| ----------------- | ------------------------- |
| No browser DOM    | DOM available in browsers |
| Modify variables  | Modify HTML elements      |
| Print to terminal | Update the webpage        |

---

# Best Practices

* Prefer `querySelector()` and `querySelectorAll()` for most element selection.
* Use `textContent` for plain text.
* Use `innerHTML` only when inserting trusted HTML.
* Prefer `classList` over modifying inline styles.
* Store selected elements in variables if reused.

---

# Common Mistakes

## Forgetting `.` for Classes

❌

```javascript
document.querySelector("button");
```

Selects a `<button>` element.

To select

```html
<button class="btn">
```

Use

```javascript
document.querySelector(".btn");
```

---

## Forgetting `#` for IDs

HTML

```html
<h1 id="title">
```

Correct

```javascript
document.querySelector("#title");
```

---

## Using `innerHTML` for Plain Text

❌

```javascript
heading.innerHTML = "Hello";
```

✅

```javascript
heading.textContent = "Hello";
```

---

## Accessing an Element Before It Exists

❌

```javascript
const button = document.querySelector("button");

button.textContent = "Click";
```

Returns `null` if the script runs before the HTML has loaded.

Place your script just before the closing `</body>` tag or use the `defer` attribute.

---

# Summary

* The **DOM** represents the HTML document as a tree.
* Use `querySelector()` to select one element.
* Use `querySelectorAll()` to select multiple elements.
* Use `textContent` to change text.
* Use `innerHTML` to insert HTML.
* Use `classList` to manage CSS classes.
* Use `style` for inline styles.
* Use `createElement()` and `appendChild()` to create new elements.
* Use `remove()` to delete elements.
* DOM manipulation allows JavaScript to dynamically update webpages.

