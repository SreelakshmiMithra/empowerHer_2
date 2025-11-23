//1)

//a)
console.log(`5 + 7 = ${5 + 7}`);
//b)
const multiLine = `
This is line 1
This is line 2
This is line 3
`;

console.log(multiLine);
//c)
const firstName = "John";
const lastName = "Doe";

console.log(`Full Name: ${firstName} ${lastName}`);


//2.
//a) Convert function to arrow function
//Arrow function:
const square = (n) => n * n;
console.log(square(3));

//b) Why does this log undefined?
//It logs undefined because arrow functions do not bind their own this, so this.value does not refer to obj.value.
//Correct sol:
const obj = {
  value: 50,
  test: function () {
    console.log(this.value);
  }
};
obj.test();


//c) Rewrite using a normal function so printing works
const obj1 = {
  value: 50,
  test() {
    console.log(this.value);  
  }
};

obj1.test(); 

//3
//a) Shallow copy using spread
const product = { name: "Pen", price: 10 };

const copyProduct = { ...product };

console.log(copyProduct);  

//b) Merge two objects using spread
const a = { x: 1 };
const b = { y: 2 };

const merged = { ...a, ...b };

console.log(merged); // { x: 1, y: 2 }

//c) Function maxValue(...nums) returning the largest number
const maxValue = (...nums) => Math.max(...nums);

console.log(maxValue(3, 9, 1, 14)); // 14

// 4. Destructuring & Optional Chaining
// a) Destructure to extract a and b
const arr = [10, 20, 30];

const [a, b] = arr;

console.log(a); // 10
console.log(b); // 20

// b) Destructure object to extract brand
const laptop = { brand: "Dell", ram: "8GB" };

const { brand } = laptop;

console.log(brand); // Dell


//c) Safely access using optional chaining
const info = {};
console.log(info.details?.name); // undefined

//5. Scoping (let / var / const)
//a) What will this print?
for (var i = 0; i < 3; i++) {}

console.log(i);

//b) What will this print?
for (let j = 0; j < 3; j++) {}

console.log(j);

//6. Ternary Operator
//a) Convert to a ternary
let speed;
if (kmph > 60) {
  speed = "Fast";
} else {
  speed = "Normal";
}

//Ternary version:
let speed = kmph > 60 ? "Fast" : "Normal";
//b) Print "Adult" if age ≥ 18 else "Minor"
const result = age >= 18 ? "Adult" : "Minor";
console.log(result);
//c) Nested ternary for Positive / Zero / Negative
const msg =
  num > 0
    ? "Positive"
    : num === 0
    ? "Zero"
    : "Negative";

console.log(msg);

//7. Spread & Rest
//a) Add elements 4, 5 to this array using spread
const nums = [1, 2, 3];

const newNums = [...nums, 4, 5];

console.log(newNums); // [1, 2, 3, 4, 5]

//b) Combine arrays using spread
const a = ["x", "y"];
const b = ["z"];

const combined = [...a, ...b];

console.log(combined); // ["x", "y", "z"]

//c) Rest function printNames("A", "B", "C") → ["A", "B", "C"]
const printNames = (...names) => names;

console.log(printNames("A", "B", "C"));  
// ["A", "B", "C"]

//8. Object Destructuring & Shorthand

// a) Destructure:
const user = { id: 101, status: "active" };

const { id, status } = user;

console.log(id);     // 101
console.log(status); // active


//b) Convert to shorthand
const id = 101;
const role = "admin";

const user = { id, role };

//c) Create an object using shorthand + add method shorthand

const name = "Lakshmi";
const age = 22;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, I am ${name}`);
  }
};

person.greet(); // Hello, I am Lakshmi



