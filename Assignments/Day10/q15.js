//a)Template Literals Example
const username = "Lakshmi";
const course = "JavaScript";

console.log(`Hello ${username}, welcome to the ${course} course!`);

//b)Convert to Shorthand Syntax
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};


//c)
const getFullName = (first, last) => `${first} ${last}`;