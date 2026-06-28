Arrays
What are Arrays?

Arrays are ordered collections used to store multiple values in a single variable.

Creating Arrays
const fruits = ["Apple", "Banana", "Orange"];

const numbers = [1, 2, 3, 4, 5];

const mixed = ["John", 25, true];
Accessing Elements

Arrays use zero-based indexing.

const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]); // Apple
console.log(fruits[2]); // Orange
Updating Elements
const fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";

console.log(fruits);

Output

["Apple", "Mango", "Orange"]
Array Length
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.length);

Output

3
Adding Elements
push()

Adds to the end.

const fruits = ["Apple", "Banana"];

fruits.push("Orange");

Output

["Apple", "Banana", "Orange"]
unshift()

Adds to the beginning.

fruits.unshift("Mango");
Removing Elements
pop()

Removes the last element.

fruits.pop();
shift()

Removes the first element.

fruits.shift();
Checking if a Value Exists
includes()
const fruits = ["Apple", "Banana"];

console.log(fruits.includes("Banana"));

Output

true
Finding an Index
indexOf()
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Orange"));

Output

2

Returns -1 if not found.

Looping Through Arrays
for
const fruits = ["Apple", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for...of
for (const fruit of fruits) {
    console.log(fruit);
}
forEach()
fruits.forEach(fruit => {
    console.log(fruit);
});
Nested Arrays
const matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[1][0]);

Output

3
Array Destructuring

Extract values into variables.

const colors = ["Red", "Blue", "Green"];

const [first, second] = colors;

console.log(first);

Output

Red

Skip values

const [first, , third] = colors;
Spread Operator

Copy an array.

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

Merge arrays.

const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];

Output

[1, 2, 3, 4]
Array vs Object
Array	Object
Ordered	Unordered
Uses indexes	Uses keys
arr[0]	obj.name
Multiple similar values	Related properties
Python vs JavaScript
Python	JavaScript
List	Array
append()	push()
pop()	pop()
len()	.length
in	includes()
Slicing	slice()
Best Practices
Use const for arrays unless reassigning.
Prefer for...of or forEach() over traditional for loops.
Use the spread operator instead of manually copying arrays.
Store similar data types together whenever possible.
Common Mistakes
Using const
const numbers = [1, 2, 3];

numbers.push(4);

✅ Works.

const prevents reassignment, not mutation.

Reassigning a const
const numbers = [1, 2];

numbers = [3, 4];

❌ Error

Comparing Arrays
[1, 2] === [1, 2];

Output

false

Arrays are compared by reference, not by value.

Accessing an Invalid Index
const fruits = ["Apple"];

console.log(fruits[5]);

Output

undefined
Frequently Used Patterns
Loop Through an Array
const users = ["John", "Jane", "Bob"];

for (const user of users) {
    console.log(user);
}
Sum Numbers
const numbers = [10, 20, 30];

let total = 0;

for (const num of numbers) {
    total += num;
}

console.log(total);
Find an Item
const fruits = ["Apple", "Banana", "Orange"];

if (fruits.includes("Banana")) {
    console.log("Found");
}
Copy an Array
const original = [1, 2, 3];

const copy = [...original];
Merge Arrays
const frontend = ["HTML", "CSS"];
const backend = ["Node.js"];

const skills = [...frontend, ...backend];
Summary
Arrays store ordered collections.
Indexing starts at 0.
Use push() and pop() for the end.
Use unshift() and shift() for the beginning.
Use includes() to check for values.
Use for...of or forEach() for iteration.
Use destructuring to extract values.
Use the spread operator (...) to copy or merge arrays.
Arrays are reference types.
