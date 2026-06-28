Loops
What are Loops?

Loops execute a block of code repeatedly until a specified condition is met.

for Loop

Used when the number of iterations is known.

Syntax
for (initialization; condition; increment) {
    // code
}
Example
for (let i = 0; i < 5; i++) {
    console.log(i);
}

Output

0
1
2
3
4
while Loop

Runs as long as the condition is true.

Syntax
while (condition) {
    // code
}
Example
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
do...while Loop

Executes the block at least once, even if the condition is false.

Syntax
do {
    // code
} while (condition);
Example
let i = 5;

do {
    console.log(i);
    i++;
} while (i < 5);

Output

5
for...of

Used to iterate over iterables such as arrays, strings, maps, and sets.

Arrays
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

Output

Apple
Banana
Orange
Strings
const name = "Sourav";

for (const letter of name) {
    console.log(letter);
}
for...in

Used to iterate over object keys.

const user = {
    name: "Sourav",
    age: 25
};

for (const key in user) {
    console.log(key, user[key]);
}

Output

name Sourav
age 25

Use for...in for objects, not arrays.

Array.forEach()

Executes a callback function for every array element.

const numbers = [1, 2, 3];

numbers.forEach((num) => {
    console.log(num);
});
break

Stops the loop immediately.

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

Output

1
2
3
4
continue

Skips the current iteration.

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

Output

1
2
4
5
Nested Loops
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }

}

Output

1 1
1 2
2 1
2 2
3 1
3 2
Infinite Loops
while (true) {

}

Only use when there is a clear exit condition.

Python vs JavaScript
Python	JavaScript
for i in range(5)	for (let i = 0; i < 5; i++)
while	while
break	break
continue	continue
for item in list	for...of
for key in dict	for...in
Which Loop Should I Use?
Situation	Recommended
Fixed number of iterations	for
Unknown number of iterations	while
Run at least once	do...while
Iterate over arrays	for...of
Iterate over object properties	for...in
Functional array iteration	forEach()
Best Practices
Use for...of for arrays.
Use for...in only for objects.
Prefer const inside for...of loops.
Avoid infinite loops.
Use break and continue sparingly for readability.
Common Mistakes
Using for...in on arrays

❌

const arr = ["a", "b", "c"];

for (const i in arr) {
    console.log(i);
}

Output

0
1
2

It returns indexes, not values.

✅

for (const value of arr) {
    console.log(value);
}

Output

a
b
c
Forgetting to update the loop variable

❌

let i = 0;

while (i < 5) {
    console.log(i);
}

Infinite loop.

✅

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
Frequently Used Patterns
Loop through an array
const users = ["John", "Jane", "Bob"];

for (const user of users) {
    console.log(user);
}
Find an item
const numbers = [4, 7, 10];

for (const num of numbers) {
    if (num === 7) {
        console.log("Found");
        break;
    }
}
Sum an array
const numbers = [2, 4, 6];
let sum = 0;

for (const num of numbers) {
    sum += num;
}

console.log(sum);
Count occurrences
const word = "banana";
let count = 0;

for (const letter of word) {
    if (letter === "a") {
        count++;
    }
}
Summary
for → Fixed iterations
while → Condition-based
do...while → Executes at least once
for...of → Arrays, strings, sets, maps
for...in → Object keys
forEach() → Functional array iteration
break → Exit loop
continue → Skip current iteration
