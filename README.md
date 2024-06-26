# JavaScript

### What is the difference between OOP (Object Oriented Programming) and Functual Programming?
**Object Oriented Programming (OOP)** is a programming paradigm that is based on the concept of “objects”, which are instances of a class. These objects contain both data (attributes) and behavior (methods) that describe their characteristics and actions.

**Function Programming (FP)** is a programming paradigm that is based on the concept of “functions” that take inputs and produce outputs. These functions are pure, meaning they don’t have side-effects, and are first-class citizens, meaning they can be passed around as arguments or returned as results.

### JS-Basic
**Variables:** We use a variable to store data temporarily in computer memory

**Dynamic Language:** The type of a variable can change at runtime.

**Primitive Types:**
 - Strings
 - Number
 - Boolean
 - undefined
 - null

 **Reference Types:**
 - Objects
 - Array
 - Function

  **Object:**
For example: A person object may include a name and age, so instead of declaring
 two variable as below, you can create an object
 ```js
 let fname ='Himat';
 let age = 30;
 ```

 Keys = Properties of this object - i.e. person
 values = values within this object - i.e. name and age

Dot Notation**<br>
```js
person.fNames = 'John';
console.log(person.fNames);
```
Bracket Notation**<br> 
better if the user is selecting a name - drop down
```js
person['fNames'] = 'Mary';
console.log(person.fNames);
```
**Arrays:** 
- Store a list of Objects 
- typeof - "object"
```js
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);

selectedColors[2] = 'green';
console.log(selectedColors);
```

**Functions:** <br>
It is one of the fundermental building blocks in JavaScript. A function is a set of statements that performs a task or calculates a value<br>
```js
function greet() {
    console.log('Hello World');
}

greet();
```
Parameter - at the time of declaration: name is a parameter of the greet function
```js
function greet (name)
```

Argument - Actual value supplied to the parameter: John is an argument to the greet function
```js
greet ('John');
```

### JS-Operators
Different type of Operators:
- Arithmetic
- Assignment
- Comparison
- Logical
- Bitwise

### JS-Control Flows
Conditional Statements:
- If...else
- Switch...case

#### If...else condition
This is called a 'Block Statement'
```js
if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition) {
    statement
}
else {
    statement
}
```

#### Switch...case
each case will need a break;
```js
switch (variable) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}
```

Loops
The difference between a for loop and a while loop is that the 'For' loop variable is declared within the condition, whereas the 'While' loop the variable is declared exeternal.
- For
- While
- Do...while
- For...in
- For...of

#### For Loops
```js
for (initialExpression; condition; incrementExpression)
for(let i = 0; i < 5; i++){
    statement
}
```

#### While Loops
```js
let i = 0;
while (condition) {
    statement
}
```

#### Do...While Loops
```js
let i = 0;
do {
    statement
} while (condition)
```
#### For...in Loops
To iterate over the property of an object

#### For...of Loops 
Iterate over the elements or items in an Arrays
Ideal way when using **Arrays**
```js
const colors = ['red', 'green', 'blue'];
for (let color of colors)
    console.log(color);
```