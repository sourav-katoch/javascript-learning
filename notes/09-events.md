# Events

## What are Events?

Events are actions that occur in the browser, either by the user or the browser itself.

Examples:

* Clicking a button
* Typing in an input field
* Submitting a form
* Moving the mouse
* Pressing a key
* Loading a webpage

JavaScript listens for these events and executes code in response.

---

# Event Listener

The most common way to handle events.

## Syntax

```javascript
element.addEventListener("event", callback);
```

Example

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

---

# Click Event

HTML

```html
<button>Click Me</button>
```

JavaScript

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Hello!");
});
```

---

# Double Click

```javascript
button.addEventListener("dblclick", () => {
    console.log("Double clicked");
});
```

---

# Mouse Events

| Event        | Description               |
| ------------ | ------------------------- |
| `click`      | Mouse click               |
| `dblclick`   | Double click              |
| `mouseenter` | Cursor enters element     |
| `mouseleave` | Cursor leaves element     |
| `mousemove`  | Cursor moves over element |

Example

```javascript
const box = document.querySelector(".box");

box.addEventListener("mouseenter", () => {
    console.log("Mouse entered");
});
```

---

# Keyboard Events

| Event     | Description  |
| --------- | ------------ |
| `keydown` | Key pressed  |
| `keyup`   | Key released |

Example

```javascript
document.addEventListener("keydown", (event) => {
    console.log(event.key);
});
```

Output

```text
a
Enter
Escape
ArrowUp
```

---

# Input Event

Triggered whenever the input value changes.

HTML

```html
<input type="text" id="username">
```

JavaScript

```javascript
const input = document.querySelector("#username");

input.addEventListener("input", (event) => {
    console.log(event.target.value);
});
```

---

# Change Event

Triggered when the user finishes editing.

```javascript
input.addEventListener("change", (event) => {
    console.log(event.target.value);
});
```

Difference:

* `input` → Every keystroke
* `change` → After the user finishes editing

---

# Submit Event

HTML

```html
<form id="loginForm">
    <button>Login</button>
</form>
```

JavaScript

```javascript
const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submitted");
});
```

---

# Event Object

Every event listener receives an **event object**.

```javascript
button.addEventListener("click", (event) => {
    console.log(event);
});
```

Useful properties

| Property        | Description                      |
| --------------- | -------------------------------- |
| `event.target`  | Element that triggered the event |
| `event.type`    | Event name                       |
| `event.key`     | Pressed key                      |
| `event.clientX` | Mouse X position                 |
| `event.clientY` | Mouse Y position                 |

---

# `event.target`

Returns the element that triggered the event.

```javascript
button.addEventListener("click", (event) => {
    console.log(event.target);
});
```

---

# `preventDefault()`

Prevents the browser's default behavior.

Without

```javascript
form.addEventListener("submit", () => {

});
```

The page reloads.

With

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();
});
```

The page stays on the current screen.

---

# Event Bubbling

Events travel upward through parent elements.

Example

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

```javascript
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
    console.log("Parent");
});

child.addEventListener("click", () => {
    console.log("Child");
});
```

Output

```text
Child
Parent
```

The event starts at the child and bubbles upward.

---

# stopPropagation()

Stops event bubbling.

```javascript
child.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log("Child");
});
```

Output

```text
Child
```

---

# Removing Event Listeners

```javascript
function greet() {
    console.log("Hello");
}

button.addEventListener("click", greet);

button.removeEventListener("click", greet);
```

---

# Common Events

| Event        | Use Case           |
| ------------ | ------------------ |
| `click`      | Buttons            |
| `submit`     | Forms              |
| `input`      | Live search        |
| `change`     | Dropdowns          |
| `keydown`    | Keyboard shortcuts |
| `keyup`      | Input validation   |
| `mouseenter` | Hover effects      |
| `mouseleave` | Tooltips           |

---

# Frequently Used Patterns

## Button Click

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

## Toggle Dark Mode

```javascript
const button = document.querySelector("#theme");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
```

---

## Live Character Counter

```javascript
const input = document.querySelector("#username");

input.addEventListener("input", (event) => {
    console.log(event.target.value.length);
});
```

---

## Form Validation

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("Validate form");

});
```

---

## Keyboard Shortcut

```javascript
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        console.log("Close Modal");
    }

});
```

---

## Image Hover

```javascript
const image = document.querySelector("img");

image.addEventListener("mouseenter", () => {
    image.style.opacity = "0.5";
});

image.addEventListener("mouseleave", () => {
    image.style.opacity = "1";
});
```

---

# Python vs JavaScript

| Python                    | JavaScript                            |
| ------------------------- | ------------------------------------- |
| Functions called directly | Functions triggered by browser events |
| `input()`                 | `input` event                         |
| No browser events         | Event-driven programming              |

---

# Best Practices

* Prefer `addEventListener()` over inline HTML events.
* Use arrow functions for simple callbacks.
* Use `preventDefault()` for form handling.
* Keep event handlers small and focused.
* Remove event listeners when they're no longer needed.

---

# Common Mistakes

## Calling the Function Instead of Passing It

❌

```javascript
button.addEventListener("click", greet());
```

✅

```javascript
button.addEventListener("click", greet);
```

---

## Forgetting `preventDefault()`

```javascript
form.addEventListener("submit", (event) => {

    event.preventDefault();

});
```

Otherwise, the page reloads after form submission.

---

## Selecting the Wrong Element

❌

```javascript
document.querySelector("btn");
```

✅

```javascript
document.querySelector(".btn");
```

or

```javascript
document.querySelector("#btn");
```

---

## Using `onclick` Instead of `addEventListener()`

❌

```javascript
button.onclick = greet;
```

✅

```javascript
button.addEventListener("click", greet);
```

`addEventListener()` allows multiple listeners and is the modern approach.

---

# Summary

* Events allow JavaScript to respond to user interactions.
* Use `addEventListener()` to attach event handlers.
* Every event provides an `event` object.
* Use `event.target` to identify the triggering element.
* Use `preventDefault()` to stop default browser behavior.
* Events bubble from child elements to parent elements.
* Use `stopPropagation()` to stop bubbling when necessary.
* Event-driven programming is the foundation of interactive web applications.

