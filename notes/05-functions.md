Functions
What are Functions?

Functions are reusable blocks of code that perform a specific task.

Function Declaration

Can be called before its definition due to hoisting.

Syntax
function greet(name) {
    return `Hello, ${name}!`;
}
Example
console.log(greet("Sourav"));

function greet(name) {
    return `Hello, ${name}!`;
}

Output

Hello, Sourav!
Function Expression

A function assigned to a variable.

Syntax
const greet = function(name) {
    return `Hello, ${name}!`;
};
Example
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));

Output

8

Function expressions are not hoisted.

Arrow Functions

Shorter syntax introduced in ES6.

Syntax
const greet = (name) => {
    return `Hello, ${name}!`;
};
Implicit Return
const square = num => num * num;

Equivalent to

const square = (num) => {
    return num * num;
};
Multiple Parameters
const add = (a, b) => a + b;
No Parameters
const greet = () => "Hello";
Parameters vs Arguments

Parameters are variables in the function definition.

function greet(name) {

}

name is a parameter.

Arguments are the actual values passed.

greet("Sourav");

"Sourav" is an argument.

Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}`;
}

greet();

Output

Hello, Guest
Return Statement

return ends function execution and returns a value.

function multiply(a, b) {
    return a * b;
}

Without return

function multiply(a, b) {
    a * b;
}

console.log(multiply(2, 3));

Output

undefined
Rest Parameters

Collect multiple arguments into an array.

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}

sum(1, 2, 3, 4);
Callback Functions

A function passed as an argument to another function.

function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    callback("Sourav");
}

processUser(greet);

Commonly used with:

forEach()
map()
filter()
Event listeners
Promises
Anonymous Functions

Functions without a name.

setTimeout(function() {
    console.log("Done");
}, 1000);
Immediately Invoked Function Expression (IIFE)

Runs immediately after being created.

(function () {
    console.log("Executed");
})();

Mostly seen in older JavaScript code.

Function Scope

Variables declared inside a function are accessible only within that function.

function greet() {
    const message = "Hello";
}

console.log(message);

Output

ReferenceError
Python vs JavaScript
Python	JavaScript
def	function
lambda	Arrow Function
*args	...args
return	return
Default parameters	Default parameters
Function Types Summary
Type	Syntax	Hoisted
Function Declaration	function greet(){}	✅
Function Expression	const greet = function(){}	❌
Arrow Function	const greet = () => {}	❌
When Should I Use Which?
Function Declaration

Use for general reusable functions.

function calculateTax() {}
Arrow Function

Preferred for callbacks and modern JavaScript.

const square = num => num * num;
Function Expression

Useful when assigning functions to variables or passing them around.

const login = function() {};
Best Practices
Prefer arrow functions for callbacks.
Use function declarations for reusable utility functions.
Keep functions focused on one task.
Use meaningful function names.
Return values instead of modifying global variables.
Common Mistakes
Forgetting return

❌

const add = (a, b) => {
    a + b;
};

Output

undefined

✅

const add = (a, b) => {
    return a + b;
};

or

const add = (a, b) => a + b;
Calling instead of passing a callback

❌

button.addEventListener("click", greet());

✅

button.addEventListener("click", greet);
Confusing parameters and arguments
function greet(name) {}

Parameter

greet("Sourav");

Argument

Frequently Used Patterns
Simple Utility Function
function capitalize(word) {
    return word.toUpperCase();
}
Arrow Function
const isEven = num => num % 2 === 0;
Callback
numbers.forEach(num => {
    console.log(num);
});
Return an Object
function createUser(name, age) {
    return {
        name,
        age
    };
}
Rest Parameters
function average(...numbers) {

}
Summary
Functions make code reusable.
Parameters receive values; arguments pass values.
return sends a value back to the caller.
Function declarations are hoisted.
Function expressions and arrow functions are not.
Arrow functions are widely used in modern JavaScript and React.
Use rest parameters (...) to accept multiple arguments.
Callbacks are fundamental to asynchronous JavaScript.
