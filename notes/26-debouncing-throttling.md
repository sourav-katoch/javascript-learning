# Debouncing & Throttling

## What are Debouncing and Throttling?

Debouncing and throttling are optimization techniques used to limit how often a function executes.

They improve performance for events that fire repeatedly, such as:

* Typing
* Scrolling
* Window resizing
* Mouse movement

---

# Why Do We Need Them?

Some browser events fire **dozens or hundreds of times per second**.

Example

```javascript
window.addEventListener("scroll", () => {
    console.log("Scrolling...");
});
```

Every pixel of scrolling triggers the event.

Without optimization, this can hurt performance.

---

# Debouncing

## Definition

Debouncing delays execution until the event has **stopped occurring** for a specified amount of time.

Example:

* User types continuously.
* Wait 500 ms after they stop typing.
* Execute the function once.

---

## Timeline

```text
Typing

| A | B | C | D | E |

Wait...

----------------500ms----------------

Search Executes
```

---

## Debounce Function

```javascript
function debounce(callback, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);

    };

}
```

---

## Example

```javascript
const search = debounce(() => {
    console.log("Searching...");
}, 500);

input.addEventListener("input", search);
```

The search runs **only after the user stops typing**.

---

# Throttling

## Definition

Throttling limits a function to run **at most once** every specified interval.

Example:

* User scrolls continuously.
* Execute once every 500 ms.

---

## Timeline

```text
Scrolling

||||||||||||||||||||

Execute

-----500ms-----

Execute

-----500ms-----

Execute
```

---

## Throttle Function

```javascript
function throttle(callback, delay) {

    let shouldWait = false;

    return function (...args) {

        if (shouldWait) return;

        callback(...args);

        shouldWait = true;

        setTimeout(() => {
            shouldWait = false;
        }, delay);

    };

}
```

---

## Example

```javascript
const logScroll = throttle(() => {
    console.log("Scrolling...");
}, 500);

window.addEventListener("scroll", logScroll);
```

---

# Debounce vs Throttle

| Debounce                       | Throttle                   |
| ------------------------------ | -------------------------- |
| Wait until activity stops      | Run at fixed intervals     |
| Executes once after inactivity | Executes repeatedly        |
| Best for typing                | Best for scrolling         |
| Delays execution               | Limits execution frequency |

---

# Common Use Cases

## Debouncing

* Search bars
* Form validation
* Auto-save
* API requests while typing

---

## Throttling

* Infinite scrolling
* Window resize
* Mouse movement
* Scroll animations
* Game controls

---

# Real-World Examples

## Search Bar (Debounce)

Without debounce

```text
S
So
Sou
Sour
Soura
Sourav
```

6 API requests.

With debounce

```text
S
So
Sou
Sour
Soura
Sourav

(wait)

1 API request
```

---

## Infinite Scroll (Throttle)

Without throttle

```text
Scroll Event

150
151
152
153
154
155
...
```

Hundreds of executions.

With throttle

```text
Every 300ms

Load More
```

---

# Frequently Used Patterns

## Debounced Search

```javascript
const search = debounce(() => {

    console.log("Searching...");

}, 300);

input.addEventListener("input", search);
```

---

## Auto Save

```javascript
const save = debounce(() => {

    console.log("Saving...");

}, 1000);
```

---

## Scroll Tracking

```javascript
const trackScroll = throttle(() => {

    console.log(window.scrollY);

}, 200);
```

---

## Resize Event

```javascript
window.addEventListener(
    "resize",
    throttle(() => {
        console.log("Resized");
    }, 300)
);
```

---

# Python vs JavaScript

| Python                   | JavaScript                   |
| ------------------------ | ---------------------------- |
| No direct equivalent     | Debounce / Throttle          |
| Usually handled manually | Common frontend optimization |

These techniques are primarily used in browser-based applications.

---

# Best Practices

* Use **debounce** for user input.
* Use **throttle** for scrolling and resizing.
* Keep the delay short (200–500 ms for most UI interactions).
* Avoid expensive operations inside event handlers.

---

# Common Mistakes

## Using Debounce for Scrolling

❌

```javascript
window.addEventListener(
    "scroll",
    debounce(loadMore, 500)
);
```

This can make scrolling feel unresponsive.

Use throttle instead.

---

## Using Throttle for Search

❌

```javascript
input.addEventListener(
    "input",
    throttle(search, 500)
);
```

This may trigger unnecessary API requests.

Use debounce instead.

---

## Forgetting to Clear the Timer

❌

```javascript
setTimeout(callback, delay);
```

Without

```javascript
clearTimeout(timer);
```

multiple timers will execute.

---

# Interview Questions

### What is debouncing?

Delaying a function until a period of inactivity has passed.

---

### What is throttling?

Limiting a function to execute at most once within a specified time interval.

---

### When should you use debounce?

* Search bars
* Form validation
* Auto-save
* API calls during typing

---

### When should you use throttle?

* Scrolling
* Window resize
* Mouse movement
* Infinite scrolling

---

### Which one reduces API requests?

Debouncing.

---

### Which one improves scrolling performance?

Throttling.

---

# Summary

* Debouncing waits until activity stops before executing.
* Throttling limits execution to fixed intervals.
* Debounce is best for typing and search.
* Throttle is best for scrolling and resizing.
* Both techniques improve performance and user experience.
* They are commonly implemented using `setTimeout()` and closures.
