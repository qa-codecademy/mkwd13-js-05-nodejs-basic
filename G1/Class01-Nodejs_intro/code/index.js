const myName = "Aneta";
console.log(`Hello, my name is ${myName}. This is my first nodejs app.`);

// The Node.js Global Object is a built-in object that provides global variables and functions accessible throughout the Node.js runtime environment.
// It is analogous to the window object in browsers but tailored for server-side JavaScript.
// These are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module.
// console.log("GLOBAL", global);

// Window object does not exist in nodejs
// console.log('WINDOW', window); // will throw an error

// The “process” object use to get current Node.js process details & also give control over that process.
// console.log("PROCESS", process);

const sayHello = (name) => {
  console.log(`Hello ${name}!`);
};

// setTimeout(() => {
//   console.log("Delayed for 1 second");
// }, 1000);

sayHello("John");
sayHello("Bob");

// Exits (cancels) the server
// process.exit();

process.stdout.write("Enter someting: ");
process.stdin.on("data", (input) => {
  const userInput = input.toString().trim();
  console.log(`You entered: ${userInput}`);
});
