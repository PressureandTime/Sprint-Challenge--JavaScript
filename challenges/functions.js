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


function add(param1, param2,param3) {
  return param1 + param2+param3;
}

function multiply(param1, param2, param3) {
  const gama = param1 * param2 * param3;
  return gama;
}

function greeting() {
  const delta = 'hello, today is sunny day!';
  return delta;
}



/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,3,add); // 4
consume(10,16,15,multiply); // 160
consume("Mary","Poppins","john", greeting); // Hello Mary Poppins, nice to meet you!
console.log(consume(1,2,3,add));

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
    const internally = "hello"
    function nestt() {
      const intern = 'Hi'
    }
  }
  nestedFunction();
}
myFunction();
