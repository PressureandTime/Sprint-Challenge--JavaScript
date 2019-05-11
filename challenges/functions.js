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

function greeting() {
  const delta = 'hello, today is sunny day!';
  return delta;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, 3, add); // 4
consume(10, 16, 15, multiply); // 160
consume('Mary', 'Poppins', 'john', greeting); // Hello Mary Poppins, nice to meet you!
console.log(consume(1, 2, 3, add));


// ANOTHER CALL BACK FUNCTIOM EXAMPLE FOR PRACTISE

function glavna(param1, param2, callback) {
  return callback(param1, param2);
}

function sluga1(param1, param2) {
  const alfa = param1 * param2;
  return alfa;
}

function sluga2(param1, param2) {
  const beta = param1 + param2;
  return beta;
}

// glavna(100,100,sluga1);
console.log(glavna(251, 250, sluga2));


// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

/*  well I look at it like this: nestedfunction() is like prisoner and he has access out of the function, ie.
out of his scope, it can access const external, internal and internally but it cant access const intern
while function myfunction is outside of prison, outsider and he can't see or access nested function, its variables
just like nestedFuncion() can't access nestedAnotherOne and its variable intern because in a way its a outsider also */


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
