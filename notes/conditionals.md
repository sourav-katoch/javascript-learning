Conditionals
What are Conditionals?

Conditionals allow your program to execute different blocks of code based on whether a condition is true or false.

if Statement

Execute a block only if the condition is true.

const age = 20;

if (age >= 18) {
    console.log("Adult");
}
if...else

Choose between two possible outcomes.

const age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
if...else if...else

Handle multiple conditions.

const score = 82;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("Fail");
}
Nested if

An if statement inside another if statement.

const age = 25;
const hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("Can drive");
    }
}

Avoid deep nesting when possible.

Ternary Operator (? :)

Short-hand for simple if...else.

const age = 20;

const status = age >= 18 ? "Adult" : "Minor";

Equivalent:

let status;

if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}

Use only for simple conditions.

switch Statement

Useful when comparing the same value against multiple cases.

const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
Why break?

Without break, execution continues into the next case.

const day = 1;

switch (day) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");
}

Output:

Monday
Tuesday
Logical Operators in Conditions
AND (&&)

Both conditions must be true.

if (age >= 18 && hasLicense) {
    console.log("Can drive");
}
OR (||)

At least one condition must be true.

if (isAdmin || isModerator) {
    console.log("Access granted");
}
NOT (!)

Negates a boolean value.

if (!isLoggedIn) {
    console.log("Please log in");
}
Truthy & Falsy

Falsy values:

false
0
-0
0n
""
null
undefined
NaN

Everything else is truthy.

Example:

const username = "";

if (username) {
    console.log("Welcome");
} else {
    console.log("Username required");
}
Short-Circuit Evaluation
&&

Stops when the first false value is found.

isLoggedIn && console.log("Welcome");
||

Returns the first truthy value.

const username = input || "Guest";
??

Returns the right value only if the left value is null or undefined.

const username = input ?? "Guest";
Python vs JavaScript
Python	JavaScript
if	if
elif	else if
else	else
match	switch
and	&&
or	`	
	`
not	!
x if cond else y	cond ? x : y
Best Practices
Use switch when checking one variable against many values.
Use the ternary operator only for simple expressions.
Prefer early returns in functions to reduce nested if statements.
Keep conditions readable.
Common Mistakes
Assignment instead of comparison

❌

if (age = 18) {
    console.log("Adult");
}

✅

if (age === 18) {
    console.log("Adult");
}
Using ==

❌

if (age == "18") { }

✅

if (age === 18) { }
Forgetting break in switch
switch (day) {
    case 1:
        console.log("Monday");
        break;
}
Summary
if → Single condition
if...else → Two outcomes
else if → Multiple conditions
switch → Multiple fixed values
? : → Short-hand for simple if...else
Use === for comparisons
Remember break in switch
Avoid deeply nested if statements
