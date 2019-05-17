// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(param1, param2, param3, callback) {
  return callback(param1, param2, param3);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns
 * "Hello first-name last-name, nice to meet you!"
 */


function add(param1, param2, param3) {
  const beta = param1 + param2 + param3;
  return beta;
}

function multiply(param1, param2, param3) {
  const gama = param1 * param2 * param3;
  return gama;
}

function greeting(param1, param2, param3) {
  const delta = `Hello ${param1} ${param2}, nice to meet you! And you ${param3} of course, not forgetting you :)`;
  return delta;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */

consume(2, 2, 1, add); 
consume(10, 16, 15, multiply); 
console.log(consume('Mary', 'Poppins', 'John', greeting)); 

// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:
/*  Well I look at it like this: nestedfunction() is like prisoner and he has access out of the function, i.e.
out of his scope, it can access const external, internal and internally but it can't access const intern,
while function myfunction is outside of prison, an outsider, and he can't see or access nested function, its variables
just like nestedFuncion() can't access nestedAnotherOne and const intern, because in a way he/she is an outsider also */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
    const internally = 'hello';

    function nestedAnotherOne() {
      const intern = 'Hi';
    }
  }
  nestedFunction();
}
myFunction();
