console.log("Hello from nodejs");

function add(a, b){
    return a + b
};

const result = add(10, 3);
console.log(result);

console.log(add(100, 30));

console.log('Hello G7');

/**
 * node --watch index.js => runs the index.js file in node environment in WATCH MODE, meaning on each save the execution is restarted.
 * 
 * CTRL + C => terminates the current node process
 */